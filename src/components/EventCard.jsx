import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Ensure styles are set here or in another CSS file

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src="/src/assets/event1.jpeg" alt={event.name} className="event-image" />
      <h3>{event.name}</h3>
      <p>- {event.committees.join(", ")}</p>
      <Link to={`/events/${event.id}`}>View Details</Link>
    </div>
  );
};

export default EventCard;
