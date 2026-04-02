import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root is the main entry point of the react application
// it is the root element of the react application
// it is from public/index.html? yes it is 
// but where is the link between index.js and public/index.html?
// it is in the public/index.html file
// so it is like a bridge between index.js and public/index.html
// <App /> is a component
// it is a component because it is a function that returns jsx

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
