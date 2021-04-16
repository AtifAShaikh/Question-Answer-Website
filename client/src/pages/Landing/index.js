import React, { useState, useEffect } from "react";
import LandingNav from "./LandingComponents/LandingNav";
import LandingJumbo from './LandingComponents/LandingJumbo';
import SignupModal from './LandingComponents/SignupModal';
import LoginModal from './LandingComponents/LoginModal';
import './style.css';


function Landing() {
    return (
      <div className="mainBody">
        <LandingNav></LandingNav>
        <div className="container">
          <LandingJumbo></LandingJumbo>
        </div>
        <SignupModal></SignupModal>
        <LoginModal></LoginModal>
      </div>
    );
  }


export default Landing;
