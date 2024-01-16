import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ListeEtudiants } from './Listeetudiants';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { reducer } from './Reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(reducer)

root.render(
  <Provider store={store}>
    <App />
  </Provider >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
