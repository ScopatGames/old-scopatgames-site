//var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
import Layout  from './pages/Layout.js';
import { preload } from './images.js';
import './../scss/style.scss';

ReactDOM.render(<Layout/>, document.getElementById('app'));
preload();
