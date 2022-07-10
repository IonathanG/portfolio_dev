import React, { useRef } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        workRef={workRef}
        contactRef={contactRef}
      />
      <div className="Main">
        <Introduction />
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
