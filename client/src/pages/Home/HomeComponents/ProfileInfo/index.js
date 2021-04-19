import React, { useState, useEffect } from "react";
import './style.css';

function ProfileInfo(){

    const logout = () => {
        console.log('logout happens here');
    }

    return(
        <div className="profileDiv d-flex justify-content-center align-items-center flex-column">
            <img src="https://res.cloudinary.com/dj63qafw1/image/upload/v1618778857/defaultPerson_srecv8.png" width="80%" className="profilePic mt-4"></img>
            <h2>Name here</h2>
            <h5>Email here</h5>
            <button className="butt logoutButton align-center mb-3" onClick={logout}>Log Out</button>
        </div>
    );
}

export default ProfileInfo;