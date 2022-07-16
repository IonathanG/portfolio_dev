import React from "react";

const Introduction = ({ workRef }) => {
  const handleClick = () => {
    const header_OffSet = 80;
    const offset_Position = workRef.current.offsetTop - header_OffSet;

    window.scrollTo({ top: offset_Position, behavior: "smooth" });
  };

  return (
    <div className="introduction-container">
      <h1 className="header">
        <span className="header__one">Hi, my name is</span>
        <span className="header__two">Ionathan Gusmini.</span>
        <span className="header__three">I build things for the Web.</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum ea
        voluptatibus eaque consequatur. Autem animi, quod ipsam, in aut neque
        esse nesciunt necessitatibus nulla unde amet deserunt voluptas
        voluptatem.
      </p>
      <button className="introduction-button" onClick={handleClick}>
        Checkout my work!
      </button>
    </div>
  );
};

export default Introduction;
