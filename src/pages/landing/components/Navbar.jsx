import React, { useState } from "react";
import { Link as LinkR, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
    background-color: #090917;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  z-index: 11;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 10px;
  list-style: none;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #854CE6;
  }
`;


const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

// const MobileMenu = styled.ul`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   gap: 16px;
//   padding: 0 6px;
//   list-style: none;
//   padding: 12px 40px 24px 40px;
//   background: ${({ theme }) => theme.card_light + 99};
//   position: absolute;
//   top: 80px;
//   right: 0;

//   transition: all 0.6s ease-in-out;
//   transform: ${({ isOpen }) =>
//     isOpen ? "translateX(0)" : "translateX(-100%)"};
//   border-radius: 0 0 20px 20px;
//   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
//   opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
//   z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
// `;
const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  padding: 12px 40px 24px 40px;
  background: #090917; /* Same background color as Nav */
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Navigate to the home page
  };

 

  return (
    <Nav>
      <NavbarContainer>
      <h1 className="font-bold text-4xl text-[#E7AEF3] cursor-pointer" onClick={handleClick}>Zephyr'24</h1>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/sponsors">Sponsors</NavLink>
          </li>
        </NavItems>

      </NavbarContainer>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" onClick={() => setIsOpen(false)}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/sponsors" onClick={() => setIsOpen(false)}>
            Sponsors
          </NavLink>
        </li>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
