import React, { Component } from "react";
import lottie from "lottie-web";
import animationData from "./animationData";



class BeratungIcon extends Component {
    constructor(props) {
      super(props);
      this.state = { animation: null };
    }
    componentDidMount() {
      const container = document.getElementById("beratung-icon");
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
          id="beratung-icon"
          onMouseOver={() => this.state.animation.play()}
          onMouseLeave={() => this.state.animation.stop()}
        />
      );
    }
  }
  
  export default BeratungIcon;