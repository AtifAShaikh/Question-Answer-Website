import React from "react";
import "./style.css";

function LandingJumbo() {
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container d-flex justify-content-center align-item-center flex-column">
    <h1 className="display-4 text-center mb-5 title">Bounce</h1>
    <p className="lead text-center">
        Bounce is a platform designed to make it simple and efficient to ask questions and <span className="bounce">Bounce</span> ideas off of other curious users.
        We believe in the power of collaboration and sharing ideas, thoughts, and questions no matter how crazy or weird they may seem.
        Every day is an opportunity to learn something new and ask new and exciting questions.
    </p>
  </div>
</div>
  );
}

export default LandingJumbo;