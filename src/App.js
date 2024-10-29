import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PhotoGallery from './components/Gallery'; // Update this to match the component's export
import BirthdayCard from './components/BirthdayCard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<PhotoGallery />} /> {/* Update to use PhotoGallery */}
        <Route path="/birthday-card" element={<BirthdayCard name="John Doe" date="January 1" />} />
      </Routes>
    </Router>
  );
};

export default App;
