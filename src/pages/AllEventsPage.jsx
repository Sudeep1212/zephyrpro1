import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import eventsData from '../data/data.json';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import EventDetailPage from './EventDetailPage'; // Import EventDetailPage

const AllEventsPage = () => {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false); // State for closing animation

  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
    const filtered = eventsData.filter(event =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleFilter = (committee) => {
    if (committee === "All") {
      setFilteredEvents(eventsData);
    } else {
      const filtered = eventsData.filter(event =>
        event.committees.includes(committee)
      );
      setFilteredEvents(filtered);
    }
  };

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setOpen(true);
    setClosing(false); // Reset closing animation state
  };

  const handleCloseModal = () => {
    setClosing(true); // Start closing animation
    setTimeout(() => {
      setOpen(false);
      setSelectedEvent(null);
    }, 300); // Set timeout to match closing animation
  };

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown onFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} handleOpenModal={handleOpenModal} />
        ))}
      </div>

      {/* Modal with Event Detail */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-out">
          <div
            className={`bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative transition-all duration-300 transform ${
              closing ? 'opacity-0 scale-95 ease-in' : 'opacity-100 scale-100 ease-out'
            }`}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <EventDetailPage event={selectedEvent} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEventsPage;
