import React from "react";
import "./background-video.styles.scss";

const BackgroundVideo = ({ id, title, linkUrl, videoUrl }) => (
  <div className="background-video">
    <h2 className="title">{title}</h2>
    <button type="button" className="link-button">
      <div className="link-button__wrapper">
        <img
          className="image-button"
          alt="icon-button"
          src="https://assets.website-files.com/5f355e6ddb2cd46fe581b3b4/5f355e6ddb2cd4511881b3fb_next%20(1)-01.svg"
        ></img>
      </div>
      <p className="button-text">View More</p>
    </button>
    <video loop={true} autoPlay>
      <source src={videoUrl} />
    </video>
  </div>
);

export default BackgroundVideo;
