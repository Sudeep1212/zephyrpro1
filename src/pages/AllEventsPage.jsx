import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import eventsData from '../data/data.json';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import EventDetailPage from './EventDetailPage';
import { AnimatePresence } from 'framer-motion';

const AllEventsPage = () => {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [open, setOpen] = useState(false);

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
  };

  const handleCloseModal = () => {
    setOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  return (
    <div className="p-5 md:p-24">
      <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center mb-5 space-y-2 sm:space-y-0 space-x-0 sm:space-x-4"> {/* Added space-x-4 for spacing */}
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown onFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-full">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} handleOpenModal={handleOpenModal} />
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <EventDetailPage event={selectedEvent} closeModal={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AllEventsPage;
