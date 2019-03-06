import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles';

import Shell from './App/Shell';

axios.defaults.baseURL = 'http://react.fail';

ReactDOM.render(
  <Router>
    <Shell />
  </Router>,
  document.getElementById('root'),
);
