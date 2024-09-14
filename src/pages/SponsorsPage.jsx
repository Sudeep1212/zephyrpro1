import React from 'react';

const sponsors = [
  { name: "Sponsor 1", image: "/event1.png" },
  { name: "Sponsor 2", image: "/event1.png" },
  { name: "Sponsor 3", image: "/event1.png" },
  { name: "Sponsor 4", image: "/event1.png" },
  { name: "Sponsor 5", image: "/event1.png" },
  { name: "Sponsor 6", image: "/event1.png" },
  { name: "Sponsor 7", image: "/event1.png" },
  { name: "Sponsor 8", image: "/event1.png" },
  { name: "Sponsor 9", image: "/event1.png" },
  { name: "Sponsor 10", image: "/event1.png" },
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
