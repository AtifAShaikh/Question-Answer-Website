import React, { useState, useEffect } from "react";
import LandingNav from "./LandingComponents/LandingNav";
import LandingJumbo from './LandingComponents/LandingJumbo';
import './style.css';


function Landing() {
    return (
      <div className="mainBody">
        <LandingNav></LandingNav>
        <div className="container">
          <LandingJumbo></LandingJumbo>
        </div>
      </div>
    );
  }


export default Landing;
