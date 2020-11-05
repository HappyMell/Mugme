import React from "react";
import "./color-gallery.styles.scss";

const ColorGallery = ({ gallery }) => (
  <div
    className="wrapper-color"
    style={{ backgroundColor: `${gallery.backgroundColor}` }}
  >
    <h2
      className="wrapper-color__header"
      style={{ color: `${gallery.textColor}` }}
    >
      {gallery.name}
    </h2>
    <p
      className="wrapper-color__description"
      style={{ color: `${gallery.textColor}` }}
    >
      {gallery.description}
    </p>
    <div
      className="wrapper-color__hover-image"
      style={{ backgroundImage: `url(${gallery.hoverImage})` }}
    />
    <div className="wrapper-color__card-footer">
      <p className="note" style={{ color: `${gallery.textColor}` }}>
        {gallery.info}
      </p>
    </div>
  </div>
);

export default ColorGallery;
