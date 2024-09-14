import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventDetailPage from './pages/EventDetailPage';
import AllEventsPage from './pages/AllEventsPage';
import SponsorsPage from './pages/SponsorsPage';
import HomePage from './pages/landing/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<AllEventsPage />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
    </Routes>
  );
}

export default App;
