import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import EventDetailPage from './pages/EventDetailPage';
import './index.css';
import Navbar from './pages/landing/components/Navbar';
import HomePage from './pages/landing/HomePage';
import EventsAll from './pages/landing/EventsAll';
import Sponsorspage from './pages/landing/Sponsorspage';
const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <div className=''>
      <Navbar /> 

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsAll />} />
          <Route path="/events/:id" element={<EventDetailPage />} />
          <Route path="/sponsors" element={<Sponsorspage />} />
          
        </Routes>
      </div>
    </div>
  </Router>
);
