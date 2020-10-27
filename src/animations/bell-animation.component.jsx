import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../animationData/bell.json";

class BellAnimation extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions} />
      </div>
    );
  }
}

export default BellAnimation;
