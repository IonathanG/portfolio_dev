import React from "react";

const Work = (props, ref) => {
  return (
    <section ref={ref} className="work-container">
      <header>
        <span className="numeral">03.</span>
        <span className="menu-name">Some Things I've Built </span>
        <span className="line-through"></span>
      </header>
    </section>
  );
};

export default React.forwardRef(Work);
