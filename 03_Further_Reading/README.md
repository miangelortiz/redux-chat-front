# Introduction

Hope you enjoyed this Redux initial dive in, guess what? There's a very interesting ecosystem of third party open source libraries that can add super powers to our redux 
based applications, in this readme we will enumerate some of them.

Remember... with great power comes great responsability.

# Further learning

## Redux Actions

Redux actions let us reduce action boiler plate code, introduce simplified error handling
for actions creators, and let us build atomic reducers.

https://github.com/redux-utilities/redux-actions

## Recompose

Let us add steroids to functional components (e.g. adding state to an existing functional
components), optimize rendering, helpers to work with HoC components...

https://github.com/acdlite/recompose

## Normalizr

Normalizr is a small, but powerful utility for taking JSON with a schema definition and returning nested entities with their IDs, gathered in dictionaries.

We use it to normalize our reducers (converted nested entities into plain reducers), making
easier to manage our application state.

https://github.com/paularmstrong/normalizr

## Redux Observable

Sagas are quite cool, but if you like RxJS flavour, this library integrated 
observables with redux.

https://github.com/redux-observable/redux-observable

## Redux multiple stores

Redux works with a single store, in some  cases you may need multiple stores:
https://redux.js.org/faq/storesetup#store-setup-multiple-stores

Looking for some sample code about how to work with this?

https://github.com/Lemoncode/redux-multiple-stores

## Redux-forms

It is a great way of managing forms that are powered by Redux. It is a Higher-Order-Component (HOC) that uses react-redux to make sure HTML forms in React use Redux to store all of its state.

https://github.com/erikras/redux-form

## Connected-router-redux

Synchronizes router state with redux store through uni-directional flow

https://github.com/supasate/connected-react-router

## Redux-persist

Persists and rehydrate store from localStorage (or AsyncStorage for React Native)

https://github.com/rt2zz/redux-persist

# Thumb Rule

Do not start adding libraries into your projects just because they are cool.

First take your time, understand well what's the purpose of the library, how it 
works, and if it really covers a need in your project, go for it.