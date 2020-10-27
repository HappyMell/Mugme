import React from "react";
import "./subscribe.styles.scss";

const Subscribe = ({ id, imageUrl, title, subtitle, backgroundColor }) => (
  <div
    className="subscribe"
    style={{ backgroundImage: `url(${imageUrl})`, backgroundColor }}
  >
    <div className="subscribe__wrapper">
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
      {id === 2 && (
        <div className="form-block">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
          <input type="submit" value="Subscribe" />
        </div>
      )}
    </div>
  </div>
);

export default Subscribe;
