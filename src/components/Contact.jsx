import React, { useState } from "react";

const Contact = (props, ref) => {
  const [isMessageSubmitted, setIsMessageSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsMessageSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section ref={ref} className="contact-container">
      <header>
        <span className="numeral">04.</span>
        <span className="menu-name">Let's Connect! </span>
        <span className="line-through"></span>
      </header>
      <div className="contact-main">
        <div className="contact-main__left">
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
            commodi? Laboriosam ratione nesciunt corporis aliquid omnis adipisci
            corrupti harum facere.
          </span>
          <span className="social-links">
            <span>LinkedIn</span>
            <span>Twitter</span>
            <span>GitHub</span>
            <span>Email</span>
          </span>
        </div>

        {!isMessageSubmitted ? (
          <form
            className="contact-main__right"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send message</button>
          </form>
        ) : (
          <div className="messageSent contact-main__right">
            <span>Thank you for your message!</span>
            <br />
            I'll get back to you as soon as possible.
          </div>
        )}
      </div>
    </section>
  );
};

export default React.forwardRef(Contact);
