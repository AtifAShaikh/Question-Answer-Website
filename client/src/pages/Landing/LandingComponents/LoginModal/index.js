import React, { useState, useEffect } from "react";
import "./style.css";

function LoginModal() {

  const [loginInputState, setLoginInputState] = useState({
    password: '',
    email: '',
  });

  const loginUser = (e) => {
    e.preventDefault();
    console.log('attempting login with credentials');
    console.log(loginInputState);
    document.location.replace('/home');
  }

  useEffect(() => {
    //Display the value in the console. Initially it is empty.
    // console.log(loginInputState);
    //useEffect will trigger when the state changes.
  }, [loginInputState]);

  return (
    <div className="modal fade bd-example-modal-lg login" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content loginBody">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="mt-3 modalTitle">Login</h3>
        <form className="form d-flex justify-content-center align-items-center flex-column mb-1">
          <input
            name="firstName"
            type="text"
            placeholder="email"
            className="text-center inputArea"
            onChange={(e) => {
              setLoginInputState({
                ...loginInputState,
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
              setLoginInputState({
                ...loginInputState,
                password: e.target.value
              })
            }}
          />
          <button onClick={loginUser} className="butt mb-3 mt-2">Submit</button>
        </form>
    
      </div>
    </div>
  </div>
</div>
  );
}

export default LoginModal;