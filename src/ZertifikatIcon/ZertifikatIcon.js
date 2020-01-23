import React, { Component } from "react";
import lottie from "lottie-web";
import animationData from "./animationData";

import styles from "../styles.css";

class ZertifikatIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { animation: null };
  }
  componentDidMount() {
    const container = document.getElementById("zertifikat-icon");
    container.setAttribute("style", `height: ${this.props.height}px;`);

    this.state.animation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData
    });
  }

  render() {
    return (
      <div
        id="zertifikat-icon"
        onMouseOver={() => this.state.animation.play()}
        onMouseLeave={() => this.state.animation.stop()}
      />
    );
  }
}

export default ZertifikatIcon;
