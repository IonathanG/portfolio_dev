import { GlobalStyles } from "../Shared/globalStyles";
import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../Shared/Theme";
import { AppContainer, MainContent } from "./App.styled";
import { useTheme } from "../hooks/useTheme";
import Navbar from "../components/Navbar/Navbar";
import Introduction from "../components/Introduction/Introduction";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function App() {
  // ----- refs used for scrolling to the matching component -----
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  // ----- -----

  // ----- initialise and toggle theme -----
  const { theme, toggleTheme } = useTheme();
  const [themeMode, setThemeMode] = useState(
    theme === "light" ? lightTheme : darkTheme
  );

  useEffect(() => {
    setThemeMode(theme === "light" ? lightTheme : darkTheme);
  }, [theme]);
  // ----- -----

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <AppContainer>
          <Navbar
            aboutRef={aboutRef}
            skillsRef={skillsRef}
            workRef={workRef}
            contactRef={contactRef}
            toggleTheme={toggleTheme}
          />
          <MainContent>
            <Introduction workRef={workRef} />
            <About ref={aboutRef} />
            <Skills ref={skillsRef} />
            <Work ref={workRef} />
            <Contact ref={contactRef} />
            <Footer />
          </MainContent>
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
