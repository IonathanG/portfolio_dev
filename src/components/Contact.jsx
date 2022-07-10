import React from "react";

const Contact = (props, ref) => {
  return (
    <section ref={ref} className="contact-container">
      <header>
        <span className="numeral">04.</span>
        <span className="menu-name">Get In Touch </span>
        <span className="line-through"></span>
      </header>
    </section>
  );
};

export default React.forwardRef(Contact);
