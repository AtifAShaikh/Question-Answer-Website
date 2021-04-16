import React, { useState, useEffect } from "react";
import "./style.css";

function SignupModal() {

  const [signupInputState, setSignupInputState] = useState({
    name: '',
    password: '',
    email: '',
  });

  const signupUser = (e) => {
    e.preventDefault();
    console.log('attempting to sign up user with following info');
    console.log(signupInputState);
  }

  return (
    <div className="modal fade bd-example-modal-lg signup" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content signupBody d-flex justify-content-center align-items-center flex-column mb-1">
    <h3 className="mt-3 modalTitle">Sign Up</h3>
        <form className="form d-flex justify-content-center align-items-center flex-column mb-1">
        <input
            name="firstName"
            type="text"
            placeholder="username"
            className="text-center inputArea"
            onChange={(e) => {
              setSignupInputState({
                ...signupInputState,
                name: e.target.value
              })
            }}
          />
          <input
            name="firstName"
            type="text"
            placeholder="email"
            className="text-center inputArea"
            onChange={(e) => {
              setSignupInputState({
                ...signupInputState,
                email: e.target.value
              })
            }}
          />
          <input
            name="lastName"
            type="text"
            placeholder="password"
            className="text-center inputArea"
            onChange={(e) => {
              setSignupInputState({
                ...signupInputState,
                password: e.target.value
              })
            }}
          />
          <button className="butt mb-3 mt-2" onClick={signupUser}>Submit</button>
        </form>
    </div>
  </div>
</div>
  );
}

export default SignupModal;