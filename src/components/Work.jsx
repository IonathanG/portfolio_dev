import React from "react";

const Work = (props, ref) => {
  return (
    <section ref={ref} className="work-container">
      <header>
        <span className="numeral">03.</span>
        <span className="menu-name">Some Things I've Built </span>
        <span className="line-through"></span>
      </header>

      <div className="work-main">
        <div className="work-main__item">
          <img
            className="work-main__item--image"
            src="images/e-commerce-screenshot.png"
            alt="image_shopping_website"
          />
          <div className="work-main__item--details">
            <div className="item-title">
              <span className="featured">Featured Project</span>
              <span>E-Commerce Shopping</span>
            </div>
            <div className="item-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              laborum iusto, accusamus repudiandae voluptatibus facere enim unde
              animi eum quisquam tempore officiis?
            </div>
            <div className="item-tech">tech used</div>
            <div className="item-links">Links</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.forwardRef(Work);
