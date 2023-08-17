import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var rootElement = ReactDOM.createRoot(
    document.getElementById('root')
)
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
