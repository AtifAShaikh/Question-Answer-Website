import React, { useState, useEffect } from "react";
import './style.css';

function ProfileInfo(props){

    // console.log(props);
    

    useEffect(()=>{
    })

    const logout = () => {
        console.log('logout initiated');
        fetch('/api/users/logout',{
            method: 'POST',
            body: JSON.stringify({}),
            headers: { 'Content-Type': 'application/json' }
        }).then((response)=>{
            
            return response;
        }).then((data)=>{
            document.location.replace('/');
            return data;
        });
    }

    const uploadImage = () => {
        
    }

    return(
        <div className="profileDiv d-flex justify-content-center align-items-center flex-column">
            
            <img src={props.user.picture} width="80%" className="profilePic mt-4" onClick={()=> {
                window.cloudinary.openUploadWidget({
                    cloudName: "dj63qafw1", uploadPreset: "h7f3zhfs",
                    sources: [ 'local'],}, 
                    async (error, result) => {
                        if(result.event == 'success'){
                            let userPicObj = {
                                picture: result.info.secure_url,
                            }
            
                            await fetch(`/api/users/${props.user._id}`, {
                                method: 'PUT',
                                body: JSON.stringify(userPicObj),
                                headers: { 'Content-Type': 'application/json' },
                            });
                            document.location.reload();
                        }
                    });
            }}></img>
            <h2>{props.user.username}</h2>
            <h5>{props.user.email}</h5>
            <button className="butt logoutButton align-center mb-3" onClick={logout}>Log Out</button>
        </div>
    );
}

export default ProfileInfo;