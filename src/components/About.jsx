import React from "react";

const About = () => {
  return (
    <section className="about-container">
      <header>
        <span className="numeral">01.</span>
        <span className="menu-name">About Me </span>
        <span className="line-through"></span>
      </header>

      <div className="about-main">
        <div className="about-main__details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            quisquam perspiciatis fugit nesciunt quasi quod itaque nostrum omnis
            atque? Velit quasi eaque fugiat? Placeat consequatur doloremque
            explicabo nam sed odio, est repellat illum impedit voluptatibus
            nihil dignissimos ullam non molestiae quae quibusdam magni rerum
            quia illo quidem saepe quos accusantium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            doloribus molestias neque eius at vitae commodi dolorem iure
            voluptate laborum velit facere eligendi ab totam quis modi debitis
            quo voluptatem, unde aliquid perferendis explicabo? Aspernatur
            nesciunt quae dolorum? Praesentium eos quam porro maiores
            voluptatibus maxime corporis incidunt repellat nihil distinctio.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur quibusdam dolores eligendi fuga est dolorum, eius beatae
            ullam, illo odio sed assumenda ipsum in voluptatem ipsam eveniet,
            provident qui voluptatibus.
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

export default About;
