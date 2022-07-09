import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const btnRef = useRef();
  const containerRef = useRef();
  const menuRef = useRef();

  // open/close side menu when hamburger is clicked
  const handleMenu = () => {
    setShowMenu((prevState) => !prevState);
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

    window.onscroll = () => {
      console.log(window.pageYOffset);
      let currentScroll_Pos = window.pageYOffset;
      prevScroll_Pos < currentScroll_Pos && currentScroll_Pos > 60
        ? setShowNavbar(false)
        : setShowNavbar(true);
      prevScroll_Pos = currentScroll_Pos;
    };
  }, []);

  // Close Menu if window is resized >= phone size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 780) setShowMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`Navbar ${showNavbar ? "" : "hide-Navbar"}`}>
        <div className="Navbar__logo">
          <img className="logo" src="logo/logo.svg" alt="logo" />
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
              <li className="menu-item" onClick={() => setShowMenu(false)}>
                <span className="menu-item__numeral">01. </span>{" "}
                <span>About</span>
              </li>
              <li className="menu-item" onClick={() => setShowMenu(false)}>
                <span className="menu-item__numeral">02. </span>{" "}
                <span>Skills</span>
              </li>
              <li className="menu-item" onClick={() => setShowMenu(false)}>
                <span className="menu-item__numeral">03. </span>{" "}
                <span>Work</span>
              </li>
              <li className="menu-item" onClick={() => setShowMenu(false)}>
                <span className="menu-item__numeral">04. </span>{" "}
                <span>Contact</span>
              </li>
              <li
                className="menu-item resume"
                onClick={() => setShowMenu(false)}
              >
                Resume
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
