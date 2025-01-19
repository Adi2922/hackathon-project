







// Import Bootstrap CSS in your index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'; // General styles (applied first)
import './App.css';   // App-wide styles
import './styles/global.css'; // Custom global styles (overrides index/App styles)

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
