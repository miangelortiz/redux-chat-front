import React from 'react';
import PropTypes from 'prop-types';
import { messageFactory } from '../../api/chat'
import { connect } from 'react-redux';
import { ChatComponent } from './chat.component';
import {
  establishRoomSocketConnection,
  mapApiSingleMessageToViewmodel,
  mapApiMessagesToViewmodel
} from './chat.container.business'

export class ChatContainerInner extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      currentMessage: '',
      chatLog: [],
    };    
    this.socket = null;
    this.messageFactory = null;
  }
  
  enrollRoom = () => {
    this.socket = establishRoomSocketConnection(this.props.sessionInfo.nickname, this.props.sessionInfo.room);
    this.messageFactory = messageFactory(this.props.sessionInfo.room, this.props.sessionInfo.nickname);
    this.setupSocketListeners(this.socket);
  }

  disconnectfromRoom = () => {
    this.socket.disconnect();
  }

  setupSocketListeners(socket) {
    socket.on('connect', () => {
      console.log(socket.id);
      socket.emit('messages');
    });
    socket.on('error', (err) => console.log(err));
    socket.on('disconnect', () => console.log('disconnected'))

    socket.on('message', (msg) => {
      console.log(msg);
      this.setState({
        chatLog: [...this.state.chatLog, mapApiSingleMessageToViewmodel(msg)],
      });
    });
    socket.on('messages', (msgs) => {
      const mappedMessages = mapApiMessagesToViewmodel(msgs);
      this.setState({
        chatLog: this.state.chatLog.concat(mappedMessages),
      });
    });
  }

  onFieldChange = (id) => (value) => {
    this.setState({ [id]: value })
  }

  onSendMessage = () => {    
    if(this.state.currentMessage && this.messageFactory) {
      const message = this.messageFactory(this.state.currentMessage)
      this.socket.emit('message', message); 
      this.setState({currentMessage: ''});
    }
  }

  render() {
    const { sessionInfo } = this.props;
    return (
      <React.Fragment>
        <ChatComponent 
          sessionInfo={sessionInfo} 
          enrollRoom={this.enrollRoom}
          disconnectFromRoom={this.disconnectfromRoom}
          currentMessage={this.state.currentMessage}
          onFieldChange={this.onFieldChange}
          onSendMessage={this.onSendMessage}
          chatLog={this.state.chatLog}
        />
      </React.Fragment>
    );
  }
}

ChatContainerInner.propTypes = {
  sessionInfo: PropTypes.object,
};

const ChatContainerReact = ChatContainerInner;

const mapStateToProps = (state) => ({
  sessionInfo: state.sessionInfoReducer,
})

const mapDispatchToProps = (dispatch) => ({
});

export const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatContainerReact);

