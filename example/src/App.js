import React, { Component } from "react";

import { SuperLogo, WaitIcon } from "super-library";

export default class App extends Component {
  render() {
    return (
      <div>
        <WaitIcon height={256} />
        <SuperLogo />
      </div>
    );
  }
}
