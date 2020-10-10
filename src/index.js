import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './Store/mainReducer';
import {getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import firebase from './Firebase/Config';
import {getFirestore, reduxFirestore } from 'redux-firestore';


const store = createStore (reducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(firebase),
  reactReduxFirebase(firebase)
));

ReactDOM.render(
  <Provider store = {store}>
    <Router />
  </Provider>,
  document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
