import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/landing/HomePage';
import Sponsorspage from './pages/landing/Sponsorspage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sponsors" element={<Sponsorspage />} />
    </Routes>
  );
}

export default App;
