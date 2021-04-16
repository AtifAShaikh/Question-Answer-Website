import React from "react";
import "./style.css";

function LandingNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light landingNav">
  <a className="navbar-brand" href="#"><h2>Bounce</h2></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    {/* <ul className="navbar-nav links">
      <li className="nav-item active">
        <a className="nav-link" href="#"><h5>login</h5></a>
      </li>
      <li className="nav-item active signup">
        <a className="nav-link" href="#"><h5>sign up</h5></a>
      </li>
    </ul> */}
  </div>
</nav>
  );
}

export default LandingNav;
