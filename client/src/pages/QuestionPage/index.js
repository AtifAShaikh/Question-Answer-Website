import React, { useState, useEffect } from "react";
import './style.css';
import { Link, useParams } from "react-router-dom";
import HomeNav from '../Home/HomeComponents/HomeNav';
import QuestionPageBody from './QuestionPageBody';

function QuestionPage(){

    const {id} = useParams()
    return(
        <div>
            <HomeNav></HomeNav>
            <QuestionPageBody questionId={id}></QuestionPageBody>
        </div>

    );
}

export default QuestionPage;

