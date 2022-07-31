import React, { useEffect, useRef, useState, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Navbar = ({ aboutRef, skillsRef, workRef, contactRef }) => {
  const { darkTheme, switchTheme } = useContext(ThemeContext);

  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const btnRef = useRef();
  const containerRef = useRef();
  const menuRef = useRef();

  // open/close side menu when hamburger is clicked
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  // disable scrolling on the body when menu is open
  useEffect(() => {
    showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [showMenu]);

  // close menu if click outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !btnRef.current.contains(e.target) &&
        !containerRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      )
        setShowMenu(false);
    };
    document.body.addEventListener("click", closeMenu);
    return () => document.body.removeEventListener("click", closeMenu);
  }, []);

  // Navbar appears/disappears on scroll
  useEffect(() => {
    let prevScroll_Pos = window.pageYOffset;

    const toggleNavbar = () => {
      let currentScroll_Pos = window.pageYOffset;
      prevScroll_Pos < currentScroll_Pos && currentScroll_Pos > 60
        ? setShowNavbar(false)
        : setShowNavbar(true);
      prevScroll_Pos = currentScroll_Pos;
    };

    window.addEventListener("scroll", toggleNavbar);
    return () => window.removeEventListener("scroll", toggleNavbar);
  }, []);

  // Close Menu if window is resized >= phone size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 780) setShowMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close down menu on Click + Scroll down to the dedicated section
  const handleClick = (menuIndex) => {
    setShowMenu(false);
    const header_OffSet = 80;
    let offset_Position = 0;

    switch (menuIndex) {
      case 0:
        offset_Position = 0;
        break;
      case 1:
        offset_Position = aboutRef.current.offsetTop - header_OffSet;
        break;
      case 2:
        offset_Position = skillsRef.current.offsetTop - header_OffSet;
        break;
      case 3:
        offset_Position = workRef.current.offsetTop - header_OffSet;
        break;
      case 4:
        offset_Position = contactRef.current.offsetTop - header_OffSet;
        break;
      default:
        return null;
    }

    window.scrollTo({ top: offset_Position, behavior: "smooth" });
  };

  // monitor current scroll
  // handle menu change on scroll
  // select color of current item in display
  useEffect(() => {
    const handleScroll = () => {
      console.log("test");
      const position = window.pageYOffset;
      setScrollPosition(position + 140);

      setShowAbout(false);
      setShowSkills(false);
      setShowWork(false);
      setShowContact(false);

      if (
        scrollPosition >= aboutRef.current.offsetTop &&
        scrollPosition < skillsRef.current.offsetTop
      ) {
        console.log("numero1");
        setShowAbout(true);
      } else if (
        scrollPosition >= skillsRef.current.offsetTop &&
        scrollPosition < workRef.current.offsetTop
      ) {
        setShowSkills(true);
      } else if (
        scrollPosition >= workRef.current.offsetTop &&
        scrollPosition < contactRef.current.offsetTop
      ) {
        setShowWork(true);
      } else if (scrollPosition >= contactRef.current.offsetTop) {
        setShowContact(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);

  return (
    <>
      <div
        className={`Navbar ${showNavbar ? "" : "hide-Navbar"} ${
          darkTheme ? "" : "Navbar_light"
        } `}
      >
        <div className="Navbar__left">
          <div onClick={() => handleClick(0)} className="logo" alt="logo">
            <span>I</span>
            <span>|</span>
            <span>G</span>
          </div>

          <div className="switch-theme" onClick={switchTheme}>
            <img
              src={`${
                !darkTheme ? "/icons/dark_icon.svg" : "/icons/bright_icon.svg"
              }`}
              alt="color_theme_icon"
            />
          </div>
        </div>

        <div className="Navbar__menu">
          <div className="menu-hamburger" onClick={handleMenu} ref={btnRef}>
            <div className={`slice ${showMenu ? "top" : ""}`}></div>
            <div className={`slice ${showMenu ? "middle" : ""}`}></div>
            <div className={`slice ${showMenu ? "bottom" : ""}`}></div>
          </div>
          <div
            className={`menu-container ${showMenu ? "show-menu" : ""}`}
            ref={containerRef}
          >
            <ul className="list-items" ref={menuRef}>
              <li className="menu-item" onClick={() => handleClick(1)}>
                <span className="menu-item__numeral">01. </span>{" "}
                <span className={showAbout ? "showMenuItem" : ""}>About</span>
              </li>
              <li className="menu-item" onClick={() => handleClick(2)}>
                <span className="menu-item__numeral">02. </span>{" "}
                <span className={showSkills ? "showMenuItem" : ""}>Skills</span>
              </li>
              <li className="menu-item" onClick={() => handleClick(3)}>
                <span className="menu-item__numeral">03. </span>{" "}
                <span className={showWork ? "showMenuItem" : ""}>Work</span>
              </li>
              <li className="menu-item" onClick={() => handleClick(4)}>
                <span className="menu-item__numeral">04. </span>{" "}
                <span className={showContact ? "showMenuItem" : ""}>
                  Contact
                </span>
              </li>
              <li
                className="menu-item resume"
                onClick={() => setShowMenu(false)}
              >
                <a
                  href="resume/resume_Ionathan_Gusmini.pdf"
                  target="_blank"
                  rel="noreferrer"
                  alt="email-link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showMenu && <div className="layer-dim"></div>}
    </>
  );
};

export default Navbar;
