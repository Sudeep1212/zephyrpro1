import React from 'react';
import './SponsorsPage.css'; // Custom styles for cards

const sponsors = [
  { name: "Sponsor 1", image: "/src/assets/event1.jpeg" },
  { name: "Sponsor 2", image: "/src/assets/event1.jpeg" },
  { name: "Sponsor 3", image: "/src/assets/event1.jpeg" },
  { name: "Sponsor 4", image: "/src/assets/event1.jpeg" },
  { name: "Sponsor 5", image: "/src/assets/event1.jpeg" },
  { name: "Sponsor 6", image: "/src/assets/event1.jpeg" },
  { name: "Sponsor 7", image: "/src/assets/event1.jpeg" },
  { name: "Sponsor 8", image: "/src/assets/event1.jpeg" },
  { name: "Sponsor 9", image: "/src/assets/event1.jpeg" },
  { name: "Sponsor 10", image: "/src/assets/event1.jpeg" },
];

const SponsorsPage = () => {
  return (
    <div className="sponsors-page">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="sponsor-card">
          <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
          <h3>{sponsor.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default SponsorsPage;
