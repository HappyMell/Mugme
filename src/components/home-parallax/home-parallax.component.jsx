import React from "react";
import "./home-parallax.styles.scss";

const HomeParallax = ({ imageUrl }) => (
  <div
    className="home-parallax"
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
  ></div>
);

export default HomeParallax;
