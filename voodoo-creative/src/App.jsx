import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import OurWork from './pages/OurWork';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

