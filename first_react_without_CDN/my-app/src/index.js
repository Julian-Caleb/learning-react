import React from 'react';
// React 17 API from 'react-dom'
// React 18 API from 'react-dom/client'
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const someText = (
  <div>
    <h1>Hi, my name is Caleb!</h1>
    <h3>Welcome to my page!</h3>
  </div>
)

// React 17 API
// ReactDOM.render(
//   someText,
//   document.getElementById("root")
// )

// React 18 API
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(someText)

reportWebVitals();