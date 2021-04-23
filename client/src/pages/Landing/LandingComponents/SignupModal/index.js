import React, { useState, useEffect } from "react";
import "./style.css";

function SignupModal() {

  const [signupInputState, setSignupInputState] = useState({
    name: '',
    password: '',
    password2: '',
    email: '',
  });

  const signupUser = (e) => {
    e.preventDefault();
    // console.log(signupInputState);
    if(signupInputState.name==''){
      alert('Please enter a username');
      return;
    }
    if(signupInputState.email==''){
      alert('Please enter an email');
      return;
    }
    if(signupInputState.password==''){
      alert('Please enter an password');
      return;
    }
    if(signupInputState.password2==''){
      alert('Please re-enter your password');
      return;
    }
    if(signupInputState.password != signupInputState.password2){
      alert('Please make sure your passwords match')
      return;
    }

    let objToSend = {
      username: signupInputState.name,
      password: signupInputState.password,
      email: signupInputState.email,
      picture: "https://res.cloudinary.com/dj63qafw1/image/upload/v1618778857/defaultPerson_srecv8.png",
      followed: [],
	    asked: [],
	    answered: [],
    }

    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(objToSend),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      return response.json();
    }).then((data) => {
      // console.log(data);
      if(data.name=="MongoError"){
        alert('This email is already in use');
        return;
      } else {
        loginUser(data);
      }
    })
  }

  function loginUser(userInfo){
    console.log('logging in this user');
    console.log(userInfo);
    fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      console.log('response here');
      console.log(response);
      if(response.status == 422 || response.status == 400){
        alert('login failed');
      } else if (response.status == 200){
        console.log('login succesful');
        document.location.replace('/home');
      }
      return response;
    }).then((data) => {
      console.log('data');
      return data;
    });
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
            type="password"
            placeholder="password"
            className="text-center inputArea"
            onChange={(e) => {
              setSignupInputState({
                ...signupInputState,
                password: e.target.value
              })
            }}
          />
          <input
            name="lastName"
            type="password"
            placeholder="re-enter password"
            className="text-center inputArea"
            onChange={(e) => {
              setSignupInputState({
                ...signupInputState,
                password2: e.target.value
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