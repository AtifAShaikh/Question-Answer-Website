import React from "react";
import "./style.css";

function SignupButton() {
  return (
    <button type="button" className="btn btn-primary butt" data-toggle="modal" data-target=".signup">Sign Up</button>
  );
}

export default SignupButton;