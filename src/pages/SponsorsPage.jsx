import React from 'react';

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
    <div className="flex flex-wrap justify-center gap-5 p-5 md:p-24 md:pt-16">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="text-center w-36 font-semibold">
          <img src={sponsor.image} alt={sponsor.name} className="w-24 h-24 object-cover mx-auto" />
          <h3>{sponsor.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default SponsorsPage;
