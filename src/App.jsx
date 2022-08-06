import { GlobalStyles } from "./components/styles/globalStyles";
import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/styles/Theme";
import { AppContainer } from "./components/styles/App.styled";
import { MainContent } from "./components/styles/App.styled";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";

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
