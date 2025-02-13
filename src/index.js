import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Details from './Details';
import { BrowserRouter, Routes, Route } from "react-router";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/details/:photoId" element={<Details />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
