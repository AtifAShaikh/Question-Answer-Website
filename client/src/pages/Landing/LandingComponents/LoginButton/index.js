import React from "react";
import "./style.css";

function LoginButton() {
  return (
    <button type="button" className="btn btn-primary butt" data-toggle="modal" data-target=".login">Login</button>
  );
}

export default LoginButton;