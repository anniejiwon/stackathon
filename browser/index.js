'use strict';

import React from 'react';
import {Component} from 'react';
import Root from './components/Root.js';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import store from './store';
import Result from './components/Result';
import RootModalContainer from './containers/RootModalContainer';
import axios from 'axios'
import {receiveAllQuestions} from './reducer'

 



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
      <Route path="/" component={Root} onEnter={onHomeEnter} >
        <Route path="rootModal" component={RootModalContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
