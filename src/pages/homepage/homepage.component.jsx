import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory">
      <div className="card-hero-product" style={{ backgroundColor: "#ff6464" }}>
        <h2 className="title">me&you</h2>
      </div>
      <div
        className="card-hero-product"
        style={{
          backgroundImage:
            "url(https://uploads-ssl.webflow.com/5f355e6ddb2cd46fe581b3b4/5f355e6ddb2cd46a6f81b40e_heroimage.jpg)",
        }}
      ></div>
    </div>
  </div>
);

export default HomePage;
