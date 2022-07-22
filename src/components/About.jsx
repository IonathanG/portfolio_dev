import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const About = (props, ref) => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <section
      ref={ref}
      className={`about-container ${darkTheme ? "" : "about-container_light"}`}
    >
      <header>
        <span className="numeral">01.</span>
        <span className="menu-name">About Me </span>
        <span className="line-through"></span>
      </header>

      <div className="about-main">
        <div className="about-main__details">
          <p>
            A curiosity-driven Front-End Developer. <br />
            I'm a world traveler turned Developer and photography enthusiast.{" "}
            <br />
            I am a Junior Developer career pivoting from the travel industry,
            with experience working with Rails. My previous career as a team
            leader and entrepreneur allowed me to be collaborative and creative,
            which is something I now enjoy bringing to my code. I am empathetic,
            approachable and an active listener; traits that allow me to create
            great projects and build relationships along the way.
            <br />
            The valleys of rural Wales aren't quite Silicon Valley, but growing
            up out here gives you a lot of space to think. When I wasn't out
            exploring the mountains, I was teaching myself to code. <br />
            Graduating university with a degree in Japanese and Web Production
            in 2007, I swapped Pen Y Fan for Mt. Fuji, and moved to Japan where
            I spent time working in the emerging Tokyo startup scene. After I
            came back to the UK, I joined one of the South West’s leading
            digital agencies and worked my way up to lead their frontend
            development team. <br />
          </p>
          <p>
            Serial world traveler and language-botherer <br />
            Beyond coding, I have love for a different syntax - I am fascinated
            by linguistics ...
            <br />
          </p>
          <p>
            Photography. Outside of my work I like to spend as much time as I
            can travelling and getting out and about with my camera. I shoot
            with a Sony A7 III and a few prime lenses, and sometimes go on wild
            adventures.
          </p>
        </div>
        <img
          className="about-main__picture"
          src="images/coding_2.jpg"
          alt="random"
        />
      </div>
    </section>
  );
};

export default React.forwardRef(About);
