import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Close as CloseIcon } from '@mui/icons-material';

// Modal container for background dimming
const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding:10px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Modal Content styling
const ModalContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.card_light};
  padding: 24px;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  color: ${({ theme }) => theme.text_primary};
`;

// Title
const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  text-align: center;
`;

// Image
const EventImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 16px;
`;

// Event Details
const EventDetails = styled.div`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

// Event heads list
const EventHeads = styled.ul`
  margin-bottom: 16px;
  list-style: none;
  padding: 0;
`;

// Event head item
const EventHeadItem = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

// Reuse the `GithubButton` style from the navbar for consistency
const RegisterButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

// Styled Close Icon
const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 12px;
  right: 12px;
  color: ${({ theme }) => theme.text_secondary};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

     &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

// Animation variants for modal
const modalVariants = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: { opacity: 1, y: "0", transition: { duration: 0.3 } },
  exit: { opacity: 0, y: "100vh", transition: { duration: 0.3 } },
};

// Enhanced EventDetailPage with modal animations and styled components
const EventDetailPage = ({ event, closeModal }) => {
  if (!event) {
    return <p className="text-gray-700">Event details not available!</p>;
  }

  return (
    <ModalBackground
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      <ModalContent variants={modalVariants}>
        {/* Close button */}
        <CloseButton onClick={closeModal} />

        {/* Event details */}
        <Title>{event.name}</Title>
        <EventImage src="/src/assets/event1.jpeg" alt={event.name} />
        
        <EventDetails>
          <p><strong>Entry Fee:</strong> {event.entryFee} Rs</p>
          {event.prizePool && <p><strong>Prize Pool:</strong> {event.prizePool} Rs</p>}
          <p><strong>Organized by:</strong> {event.committees.join(", ")}</p>
          <p><strong>Date:</strong> {event.date}</p>
        </EventDetails>

        <h3 className="text-lg font-semibold mb-2">Event Heads:</h3>
        <EventHeads>
          {event.eventHeads.map((head) => (
            <EventHeadItem key={head.phone}>
              {head.name} - {head.phone}
            </EventHeadItem>
          ))}
        </EventHeads>

        {/* Reuse Register Button Style */}
        <ResumeButton
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register Here
        </ResumeButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default EventDetailPage;
