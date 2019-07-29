import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';
import ErrorBoundary from '~components/ErrorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('app')
);