import React from "react";
import "./home-features.styles.scss";

const HomeFeatures = ({ icon, title }) => (
  <div className="home-feature">
    <div className="icon">{icon}</div>
    <h2 className="title">{title}</h2>
  </div>
);

export default HomeFeatures;
