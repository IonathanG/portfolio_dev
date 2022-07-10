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
          <li>Javascript (ES+6)</li>
          <li>React</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Sass</li>
          <li>Firebase</li>
          <li>GitHub</li>
          <li>Redux Toolkit</li>
          <li>Accessibility</li>
          <li>Adobe Lightroom Photoshop</li>
        </ul>
      </div>
    </section>
  );
};

export default React.forwardRef(Skills);
