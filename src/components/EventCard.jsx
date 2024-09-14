import React from 'react';

const EventCard = ({ event, handleOpenModal }) => {
  return (
    <div className="event-card p-4 bg-transparent shadow-lg rounded-lg text-white">
      <img src="/src/assets/event1.jpeg" alt={event.name} className="w-full h-40 object-cover mb-4" />
      <h3 className="text-xl font-bold">{event.name}</h3>
      <p className="text-gray-600">{event.committees.join(", ")}</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => handleOpenModal(event)}
      >
        View Details
      </button>
    </div>
  );
};

export default EventCard;
