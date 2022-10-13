import React, { useEffect, useRef, useState } from "react";
import {
  StyledNavbar,
  NavbarLeft,
  Logo,
  ToggleTheme,
  Menu,
  MenuHamburger,
  TopSlice,
  BottomSlice,
  MiddleSlice,
  MenuContainer,
  ListItems,
  MenuItem,
  NavNumeral,
  MenuName,
  Resume,
  LayerBackgroundDim,
} from "./Navbar.styled.js";

const Navbar = ({ aboutRef, skillsRef, workRef, contactRef, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);

  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

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
  useEffect(() => {
    setShowMenu(false);
    const header_OffSet = 80;
    let offset_Position = 0;

    switch (currentMenuIndex) {
      case 0:
        offset_Position = 0;
        console.log("test");
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
      case null:
        console.log("null");
        break;
      default:
        console.log("reset");
    }

    if (currentMenuIndex !== null) {
      window.scrollTo({ top: offset_Position, behavior: "smooth" });
    }

    // reset index menu for next click - case same menu index is clicked twice
    setTimeout(() => {
      setCurrentMenuIndex(null);
    }, 1000);
  }, [currentMenuIndex, aboutRef, skillsRef, workRef, contactRef]);

  // -- change color of current menu item in display // monitor current scroll --
  useEffect(() => {
    const handleScroll = () => {
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
  }, [scrollPosition, aboutRef, skillsRef, workRef, contactRef]);

  return (
    <>
      <StyledNavbar showNavbar={showNavbar}>
        <NavbarLeft>
          <Logo onClick={() => setCurrentMenuIndex(0)} alt="logo">
            <span>I</span>
            <span>|</span>
            <span>G</span>
          </Logo>
          <ToggleTheme
            onClick={() => toggleTheme()}
            alt="color_theme_icon"
          ></ToggleTheme>
        </NavbarLeft>
        <Menu>
          <MenuHamburger onClick={handleMenu} ref={btnRef}>
            <TopSlice showMenu={showMenu}></TopSlice>
            <MiddleSlice showMenu={showMenu}></MiddleSlice>
            <BottomSlice showMenu={showMenu}></BottomSlice>
          </MenuHamburger>

          <MenuContainer showMenu={showMenu} ref={containerRef}>
            <ListItems ref={menuRef}>
              <MenuItem onClick={() => setCurrentMenuIndex(1)}>
                <NavNumeral>01. </NavNumeral>{" "}
                <MenuName isActive={showAbout}>About</MenuName>
              </MenuItem>
              <MenuItem onClick={() => setCurrentMenuIndex(2)}>
                <NavNumeral>02. </NavNumeral>{" "}
                <MenuName isActive={showSkills}>Skills</MenuName>
              </MenuItem>
              <MenuItem onClick={() => setCurrentMenuIndex(3)}>
                <NavNumeral>03. </NavNumeral>{" "}
                <MenuName isActive={showWork}>Work</MenuName>
              </MenuItem>
              <MenuItem onClick={() => setCurrentMenuIndex(4)}>
                <NavNumeral>04. </NavNumeral>{" "}
                <MenuName isActive={showContact}>Contact</MenuName>
              </MenuItem>
              <MenuItem onClick={() => setShowMenu(false)}>
                <Resume
                  href="/resume/Resume Ionathan Gusmini_Front End Dev.pdf"
                  target="_blank"
                  rel="noreferrer"
                  alt="email-link"
                >
                  Resume
                </Resume>
              </MenuItem>
            </ListItems>
          </MenuContainer>
        </Menu>
      </StyledNavbar>
      {showMenu && <LayerBackgroundDim></LayerBackgroundDim>}
    </>
  );
};

export default Navbar;
