import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import StartCanvas from "./components/canvas/Stars";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import AllEventsPage from "../AllEventsPage"; // Import AllEventsPage
import StyledStarsCanvas from "./canvas/Stars";
import HeroBgAnimation from "./HeroBgAnimation/HeroBgAnimation";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;


function EventsAll() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Body>
        <StartCanvas />
        {/* <Navbar /> */}
        {/* <Hero /> */}
        {/* <Projects /> */}
        <AllEventsPage /> {/* Add AllEventsPage here */}
        {/* <Wrapper>
          <Education />
          <Contact />
        </Wrapper> */}
        <Footer />
      </Body>
    </ThemeProvider>
  );
}

export default EventsAll;
