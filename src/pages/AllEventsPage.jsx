import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import eventsData from '../data/data.json';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

const AllEventsPage = () => {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown onFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default AllEventsPage;
