import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Introduction = ({ workRef }) => {
  const { darkTheme } = useContext(ThemeContext);

  const handleClick = () => {
    const header_OffSet = 80;
    const offset_Position = workRef.current.offsetTop - header_OffSet;

    window.scrollTo({ top: offset_Position, behavior: "smooth" });
  };

  return (
    <div
      className={`introduction-container ${
        darkTheme ? "" : "introduction-container_light"
      }`}
    >
      <h1 className="header">
        <span className="header__one">Hi, my name is</span>
        <span className="header__two">Ionathan Gusmini.</span>
        <span className="header__three">I build things for the Web.</span>
      </h1>
      <div className="introduction-container__main">
        <p>
          I'm a multidisciplinary developer with a passion for creating
          engaging, <span> entertaining user experiences.</span>
        </p>
        <p>
          I enjoy turning complex problems into simple, beautiful and intuitive
          apps that live on the <span>internet.</span>
        </p>
        <p>
          When I'm not coding, you'll find me hiking in the wild with a camera
          in my hands or studying languages at the coffee shop.
        </p>
      </div>

      <button className="introduction-button" onClick={handleClick}>
        Checkout my work!
      </button>
    </div>
  );
};

export default Introduction;
