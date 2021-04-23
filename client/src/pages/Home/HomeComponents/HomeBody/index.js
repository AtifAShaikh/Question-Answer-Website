import React, { useState, useEffect } from "react";
import './style.css';
import CatagoryList from '../CatagoryList';
import QuestionFeed from '../QuestionFeed';
import ProfileInfo from '../ProfileInfo';



function HomeBody(props) {


    return (
        <div className="homeBody">
            <div className="container">
                <div className="row">
                    <div className="col-2 mt-3">
                        <CatagoryList filter={props.filter} reset={props.reset}></CatagoryList>
                    </div>
                    <div className="col-7 mt-3">
                        <QuestionFeed user={props.user} currentFilter={props.currentFilter}></QuestionFeed>
                    </div>
                    <div className="col-3 mt-3">
                        <ProfileInfo user={props.user}></ProfileInfo>
                    </div>
                </div>
            </div>
        </div>
    );
  }


export default HomeBody;