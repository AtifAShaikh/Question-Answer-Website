import React from "react";
import "./style.css";
import LoginButton from '../LoginButton';
import SignupButton from '../SignupButton';

function LandingJumbo() {
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container d-flex justify-content-center align-item-center flex-column">
    <h1 className="display-4 text-center mb-3 title">Bounce</h1>
    <div className="row justify-content-md-center mb-4">
    <LoginButton></LoginButton>
    <SignupButton></SignupButton>
    </div>
    
    <p className="lead text-center">
        Bounce is a platform designed to make it simple and efficient to ask questions and <span className="bounce">Bounce</span> ideas off of other curious users.
        We believe in the power of collaboration and that you should always share an idea, thought, or question no matter how crazy or weird it may seem.
        Every day is an opportunity to learn something and ask new and exciting questions.
    </p>
  </div>
</div>
  );
}

export default LandingJumbo;