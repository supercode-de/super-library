import React, { Component } from "react";

import styles from "../styles.css";

class ComponentTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Add initialization
  }

  render() {
    return (
      <div>
        <p>Content goes here...</p>
      </div>
    );
  }
}

export default ComponentTemplate;
