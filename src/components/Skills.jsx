import React from "react";

const Skills = (props, ref) => {
  return (
    <section ref={ref} className="skills-container">
      <header>
        <span className="numeral">02.</span>
        <span className="menu-name">Some of my Skills </span>
        <span className="line-through"></span>
      </header>
      <div className="skills-main">
        Here are a few technologies I’ve been working with recently:
        <ul className="skills-list">
          <li>
            <img src="/icons/javascript.svg" alt="javacript-icon" /> Javascript
            (ES+6)
          </li>
          <li>
            <img src="/icons/react.svg" alt="react-icon" /> React
          </li>
          <li>
            <img src="/icons/html.svg" alt="html-icon" /> HTML5
          </li>
          <li>
            <img src="/icons/css.svg" alt="css-icon" /> CSS3
          </li>
          <li>
            <img src="/icons/sass.svg" alt="sass-icon" />
            Sass
          </li>
          <li>
            <img src="/icons/firebase.svg" alt="firebase-icon" />
            Firebase
          </li>
          <li>
            <img src="/icons/github.svg" alt="github-icon" />
            GitHub
          </li>
          <li>
            <img src="/icons/redux.svg" alt="redux-icon" />
            Redux Toolkit
          </li>
          <li>
            <img src="/icons/accessibility.svg" alt="accessibility-icon" />
            Accessibility
          </li>
          <li>
            <img src="/icons/adobe.svg" alt="adobe-icon" />
            Adobe Lightroom
          </li>
        </ul>
      </div>
    </section>
  );
};

export default React.forwardRef(Skills);
