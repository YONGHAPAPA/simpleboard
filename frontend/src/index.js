import React, { Children } from 'react';
import {createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Root from './components/Layouts/Root';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //[M.RMK]StrictMode 때문에 2번 랜더링이 발생함
  // <React.StrictMode>
  //   {/* <App/> */}
  //   {<Root/>}
  // </React.StrictMode>
  <Root/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
