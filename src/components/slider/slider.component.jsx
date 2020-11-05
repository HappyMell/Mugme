import React from "react";
import "./slider.styles.scss";

const Slider = ({ slider }) => {
  console.log(slider.imageUrl);
  return (
    <div className="slider-container">
      <video autoPlay loop>
        <source src={slider.video}></source>
      </video>
      <img src={slider.imageUrl} alt="hand holding a mug" />
    </div>
  );
};

export default Slider;
