import React from 'react';
import { useParams, Link } from 'react-router-dom';
import eventsData from '../data/data.json';

const EventDetailPage = () => {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return <p>Event not found!</p>;
  }

  return (
    <div>
      <h1>{event.name}</h1>
      <img src="/src/assets/event1.jpeg" alt={event.name} />
      <p>Entry Fee: {event.entryFee} Rs</p>
      {event.prizePool && <p>Prize Pool: {event.prizePool} Rs</p>}
      <p>Organized by: {event.committees.join(", ")}</p>
      <p>Date: {event.date}</p>
      <h3>Event Heads:</h3>
      {event.eventHeads.map(head => (
        <p key={head.phone}>{head.name} - {head.phone}</p>
      ))}
      <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
        Register Here
      </a>
      <br />
      <Link to="/events">Back to Events</Link>
    </div>
  );
};

export default EventDetailPage;
