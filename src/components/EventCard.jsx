import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #854ce6;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  margin: 20px auto;
  position: relative;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_primary};
`;

const Committees = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_secondary};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px; /* Gap between buttons */
  margin-top: 16px;
`;

// Reusing the GithubButton styles from your Navbar component
const Button = styled.a`
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

const EventCard = ({ event, handleOpenModal, handleRegister }) => {
  return (
    <Card>
      <Image src="/event1.png" alt={event.name} />
      <Content>
        <Title>{event.name}</Title>
        <Committees>{event.committees.join(', ')}</Committees>
        
        {/* Button Container to hold both buttons */}
        <ButtonContainer>
          <Button onClick={() => handleOpenModal(event)}>View</Button>
          {/* <Button onClick={() => handleRegister(event)}>Register</Button> */}
        </ButtonContainer>
      </Content>
    </Card>
  );
};

export default EventCard;
