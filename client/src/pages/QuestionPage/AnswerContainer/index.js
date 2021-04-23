import React, { useState, useEffect } from "react";
import AnswerBody from '../AnswerBody';

function AnswerContainer(props){


    var j=-1;
    const answerList = props.answers.map((answer)=>{
        j++;
        return <AnswerBody key={j} answerData={answer} asker={props.asker} user={props.user}></AnswerBody>
    })

    return(
        <div>
            {answerList}
        </div>
        
    );
}

export default AnswerContainer;