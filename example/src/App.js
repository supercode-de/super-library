import React, { Component } from "react";

import { SuperLogo, WaitIcon, BeratungIcon, FinanzierungIcon } from "super-library";

export default class App extends Component {
  render() {
    return (
      <div>
        <WaitIcon height={256} />
        <BeratungIcon height={256} />
        <FinanzierungIcon height={256} />        
        <SuperLogo />
      </div>
    );
  }
}
