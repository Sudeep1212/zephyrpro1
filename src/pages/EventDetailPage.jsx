import React from 'react';

const EventDetailPage = ({ event }) => {
  if (!event) {
    return <p className="text-gray-700">Event details not available!</p>;
  }

  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">{event.name}</h1>
      <img src="/src/assets/event1.jpeg" alt={event.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <p className="mb-2 text-gray-700"><strong>Entry Fee:</strong> {event.entryFee} Rs</p>
      {event.prizePool && (
        <p className="mb-2 text-gray-700"><strong>Prize Pool:</strong> {event.prizePool} Rs</p>
      )}
      <p className="mb-2 text-gray-700"><strong>Organized by:</strong> {event.committees.join(", ")}</p>
      <p className="mb-2 text-gray-700"><strong>Date:</strong> {event.date}</p>

      <h3 className="text-lg font-semibold mb-2">Event Heads:</h3>
      <ul className="mb-4">
        {event.eventHeads.map(head => (
          <li key={head.phone} className="text-gray-700">
            {head.name} - {head.phone}
          </li>
        ))}
      </ul>

      <a
        href={event.registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Register Here
      </a>
    </div>
  );
};

export default EventDetailPage;
