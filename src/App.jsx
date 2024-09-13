import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import AllEventsPage from './pages/AllEventsPage';
import SponsorsPage from './pages/SponsorsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<AllEventsPage />} />
      <Route path="/events/:id" element={<EventDetailPage />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
    </Routes>
  );
}

export default App;
