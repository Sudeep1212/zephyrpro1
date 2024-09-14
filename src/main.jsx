import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import EventDetailPage from './pages/EventDetailPage';
import AllEventsPage from './pages/AllEventsPage';
import SponsorsPage from './pages/SponsorsPage';
import './index.css';
import Navbar from './pages/landing/components/Navbar';
import HomePage from './pages/landing/HomePage';
import EventsAll from './pages/landing/EventsAll';
const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <div className=''>
      <Navbar /> 

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/events" element={<AllEventsPage />} /> */}
          <Route path="/events" element={<EventsAll />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          
        </Routes>
      </div>
    </div>
  </Router>
);
