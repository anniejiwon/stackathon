'use strict';

import React from 'react'
import {Component} from 'react';
import Root from './components/Root.js'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import store from './store'
import Result from './components/Result'

render (
  <Provider store={store}>
    <Router history={ hashHistory }>
      <Route path="/" component={Root} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
