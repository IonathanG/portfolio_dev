import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Main">
        <Introduction />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
