import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css';
import ErrorBoundary from './components/errorBoundary';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('app')
);