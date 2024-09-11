import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import eventsData from '../data/data.json';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

const HomePage = () => {
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
    <div className="homepage">
      <div className="search-filter-container">
        <SearchBar onSearch={handleSearch} />
        <div className="filter-container">
          <label htmlFor="committee-filter">Search by Committee:</label>
          <FilterDropdown onFilter={handleFilter} id="committee-filter" />
        </div>
      </div>
      <div className="event-list">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
