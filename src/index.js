import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Images from './Images';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Navbar/>
    <Images/>
    </BrowserRouter>
   
  </React.StrictMode>
);

