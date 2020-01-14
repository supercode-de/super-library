import React, { Component } from "react";
import lottie from "lottie-web";
import animationData from "./animationData";

import styles from "../styles.css";

class WaitIcon extends Component {
  constructor(props) {
    super(props);
    this.state = { animation: null };
  }
  componentDidMount() {
    const container = document.getElementById("wait-icon");
    container.setAttribute("style", `height: ${this.props.height}px;`);
    console.log("Setting width ", this.props.height);
    this.state.animation = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData
    });
  }
  render() {
    return <div id="wait-icon" />;
  }
}

export default WaitIcon;
