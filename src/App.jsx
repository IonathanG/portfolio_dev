import React, { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ThemeContext from "./context/ThemeContext";

function App() {
  // refs used for scrolling to the matching component
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const { darkTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (darkTheme) {
      document.querySelector("body").classList.remove("light_background");
    } else {
      document.querySelector("body").classList.add("light_background");
    }
  }, [darkTheme]);

  return (
    <div className={`App ${darkTheme ? "" : "light_background"}`}>
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        workRef={workRef}
        contactRef={contactRef}
      />
      <div className="Main">
        <Introduction workRef={workRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Work ref={workRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
