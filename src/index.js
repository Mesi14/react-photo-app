import React from 'react';
import ReactDOM from 'react-dom/client';
import './';
import App from './components/App';
import Details from './components/Details';
import Photos from './components/Photos';
import { BrowserRouter, Routes, Route } from "react-router";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Photos />} />
        <Route path="/details/:photoId" element={<Details />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
