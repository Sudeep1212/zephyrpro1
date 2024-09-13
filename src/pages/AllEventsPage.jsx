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
    <div className="all-events-page">
      <div className="search-filter-container">
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown onFilter={handleFilter} />
      </div>
      <div className="event-list">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default AllEventsPage;
