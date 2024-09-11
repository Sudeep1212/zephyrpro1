import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import EventDetailPage from './pages/EventDetailPage'; // Event detail page
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/events/:id" element={<EventDetailPage />} />
    </Routes>
  </Router>
);
