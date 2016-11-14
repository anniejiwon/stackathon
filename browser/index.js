'use strict';

import React from 'react';
import {Component} from 'react';
import Root from './components/Root.js';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import store from './store';
import Result from './components/Result';
import axios from 'axios';
import {receiveAllQuestions} from './reducer';
import {loadQuestion} from './reducer';
import NewQuestions from './components/NewQuestions';



const consolelog = function() {
      console.log('store.getState: ', store.getState());
}
const loadFirstQuestion = function() {
  loadQuestion(1);
}

const loadQuestions = (questions) => {
  store.dispatch(receiveAllQuestions(questions));
};

const onHomeEnter = function () {
  fetch('/api/questions')
    .then(res => res.json())
    .then(result => loadQuestions(result))
};



render (
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={Root} />
      <Route path="newQuestions" component={ NewQuestions } />
    </Router>
  </Provider>,
  document.getElementById('app')
)
