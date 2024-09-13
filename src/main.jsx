import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import EventDetailPage from './pages/EventDetailPage';
import HomePage from './pages/HomePage';
import AllEventsPage from './pages/AllEventsPage';
import SponsorsPage from './pages/SponsorsPage';
import './index.css';
import NavBar from './components/NavBar'; // Import the NavBar component
const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <div>
      <NavBar /> {/* Add NavBar here to ensure it's on top of all pages */}

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<AllEventsPage />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
        </Routes>
      </div>
    </div>
  </Router>
);
