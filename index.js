import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// To begin measuring performance within your app, you can:
// - Pass a function to log results, such as reportWebVitals(console.log)
// - Send results to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals.


reportWebVitals();
