import React, { Component } from "react";

import { SuperLogo, WaitIcon, BeratungIcon, FinanzierungIcon, MethodikIcon, TeamIcon, NetzwerkIcon, ZertifikatIcon, ZielIcon } from "super-library";

export default class App extends Component {
  render() {
    return (
      <div>
      
        <BeratungIcon height={256} />
        <FinanzierungIcon height={256} />  
        <MethodikIcon height={256} /> 
        <TeamIcon height={256} />  
        <NetzwerkIcon height={256} /> 
        <ZertifikatIcon height={256} />    
        <ZielIcon height={256} />        
        
      </div>
    );
  }
}
