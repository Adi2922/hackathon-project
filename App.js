

// Import Bootstrap CSS in your index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import PDFUpload from './components/PDFUpload'
// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure correct path
import Footer from './components/Footer'; // Assuming you have a Footer component

// Import your page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Main content area where different pages will render */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Route */}
          <Route path="/about" element={<About />} /> {/* About Route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Route */}
          {/* Add more routes as needed */}
        </Routes>
      </div>

      <div className="main-content">
        <PDFUpload />
      </div>

      <Footer />
    </div>
  );
}

export default App;
