import { GlobalStyles } from "./components/styles/globalStyles";
import React, { useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import { darkTheme, lightTheme } from "./components/styles/Theme";
import { AppContainer } from "./components/styles/App.styled";
import { MainContent } from "./components/styles/App.styled";

function App() {
  // refs used for scrolling to the matching component
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  //const { darkTheme } = useContext(ThemeContext);

  const theme = useState("dark");

  const themeMode = theme === "light" ? lightTheme : darkTheme;

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
