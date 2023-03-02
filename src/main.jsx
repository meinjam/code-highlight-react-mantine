import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/tailwind.scss';
import './assets/scss/style.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename='/'>
      <App />
      <ToastContainer position='bottom-right' theme='colored' autoClose={4000} />
    </Router>
  </React.StrictMode>
);
