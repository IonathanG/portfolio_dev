import React, { useState, useContext } from "react";
import emailjs from "emailjs-com";
import ThemeContext from "../context/ThemeContext";

const Contact = (props, ref) => {
  const { darkTheme } = useContext(ThemeContext);

  const [isMessageSubmitted, setIsMessageSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // send email via contact form
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        `${process.env.REACT_APP_EMAILJS_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setIsMessageSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      ref={ref}
      className={`contact-container ${
        darkTheme ? "" : "contact-container_light"
      }`}
    >
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
            <span className="github">
              <a
                href="https://github.com/IonathanG/"
                target="_blank"
                rel="noreferrer"
                alt="email-link"
              >
                <svg viewBox="0 0 128 128">
                  <g fill="#ffffff">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path
                      stroke="#ffffff"
                      d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                    ></path>
                  </g>
                </svg>
              </a>
            </span>
            <span className="linkedin">
              <a
                href="https://www.linkedin.com/in/ionathan-gusmini/"
                target="_blank"
                rel="noreferrer"
                alt="email-link"
              >
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#ffffff"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  ></path>
                </svg>
              </a>
            </span>
            <span className="twitter">
              <a
                href="https://www.linkedin.com/in/ionathan-gusmini/"
                target="_blank"
                rel="noreferrer"
                alt="email-link"
              >
                <svg viewBox="0 0 128 128">
                  <path
                    d="M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422"
                    fill="#ffffff"
                  ></path>
                </svg>
              </a>
            </span>
            <span className="email">
              <a
                href="mailto:ionathangusmini@gmail.com"
                target="_blank"
                rel="noreferrer"
                alt="email-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                >
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                </svg>
              </a>
            </span>
          </span>
        </div>

        {!isMessageSubmitted ? (
          <form className="contact-main__right" onSubmit={sendEmail}>
            <input
              name="name"
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              name="email"
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
