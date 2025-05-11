// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
// BrowserRouter를 한 번만 임포트합니다.
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './Main/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/yoominju">
    <App />
  </BrowserRouter>
);

reportWebVitals();
