import React from "react";
import "./special-overflow.styles.scss";

const SpecialOverflow = ({ overflow }) => (
  <div className="special-overflow">
    <div
      className="special-overflow__container"
      style={{ backgroundImage: `url(${overflow.imageUrl})` }}
    ></div>
  </div>
);

export default SpecialOverflow;
