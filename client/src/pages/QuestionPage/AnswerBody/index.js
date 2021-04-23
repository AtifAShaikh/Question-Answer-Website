import React, { useState, useEffect } from "react";
import './style.css';

function AnswerBody(props){

    const [answerInfo, setAnswerInfo] = useState({
        answer: {},
        asker: {},
        user: {},
        answererData: {},
        upvoters: 0,
        downvoters: 0,
        displayUpvoteButton: true,
        displayDownvoteButton: true,
    });

    useEffect(()=>{
        fetch(`/api/users/${props.answerData.userId}`, {
            method: 'GET',
        }).then((response)=>{
            return response.json();
        }).then((data)=>{

            let upvoteState = true;
            if(props.answerData.upvoters.includes(props.user._id)){
                upvoteState = false;
            }

            let downvoteState = true;
            if(props.answerData.downvoters.includes(props.user._id)){
                downvoteState=false;
            }


            setAnswerInfo({
                answer: props.answerData,
                asker: props.asker,
                user: props.user,
                answererData: data,
                upvoters: props.answerData.upvoters.length,
                downvoters: props.answerData.downvoters.length,
                displayUpvoteButton: upvoteState,
                displayDownvoteButton: downvoteState,
            })
        })
    }, [])

    const askerApprovedTag = ()=> {
        console.log(props.answerData.favorited);
        if(props.answerData.favorited){
            return(
                <p className="fav">🤩 - Asker Approved - 🤩</p>
            );
        } else {
            return (<div></div>);
        }
    }

    const giveFavButton = ()=>{
        if(answerInfo.asker._id===answerInfo.user._id && !answerInfo.answer.favorited){
            return(
                <button className="butt aButt" onClick={()=>{
                    favoriteAnswer();
                }}>Favorite</button>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

    const sendUpvoteButton = () => {
        if(answerInfo.displayUpvoteButton){
            return(
                <button className="butt aButt" onClick={()=>{
                    upvoteAnswer();
                }}>Upvote</button>
                
            );
        } else {
            return(
                <h5 className="ml-3 mt-2 mr-1 uiText aUpvoteText">Upvotes: </h5>
            );
        }
    }

    const sendDownvoteButton = () => {
        if(answerInfo.displayDownvoteButton){
            return(
                <button className="butt aButt" onClick={()=>{
                    downvoteAnswer();
                }}>Downvote</button>
                
            );
        } else {
            return(
                <h5 className="ml-3 mt-2 mr-1 uiText aUpvoteText">Downvotes: </h5>
            );
        }
    }



    const favoriteAnswer = ()=>{
        fetch(`/api/answers/${answerInfo.answer._id}`, {
            method: 'PUT',
            body: JSON.stringify({favorited: true}),
            headers: { 'Content-Type': 'application/json' },
        }).then((res)=>{
            document.location.reload();
        })
    }

    const upvoteAnswer = ()=>{
        fetch('/api/answers/upvote/upvoters', {
            method: 'PUT',
            body: JSON.stringify({aId: answerInfo.answer._id}),
            headers: { 'Content-Type': 'application/json' },
        }).then(()=>{
            document.location.reload();
        })
    }

    const downvoteAnswer = () => {
        fetch('/api/answers/downvote/downvoters', {
            method: 'PUT',
            body: JSON.stringify({aId: answerInfo.answer._id}),
            headers: { 'Content-Type': 'application/json' },
        }).then(()=>{
            document.location.reload();
        })
    }

    console.log(answerInfo);

    return(
        <div className="answerBody p-4 mb-3">
            {askerApprovedTag()}
            <img height="50px" src={answerInfo.answererData.picture} className="qPagePicA mb-2"></img>
            <h4>{answerInfo.answererData.username}</h4>
            <div className="sepperator mb-3"></div>
            <div className="ml-3" dangerouslySetInnerHTML={{__html: props.answerData.body}}></div>
                        <div className="sepperator mb-3 mt-3"></div>
                        <div className="d-flex justify-content-start align-items-center">
                                {sendUpvoteButton()}
                                <h5 className="mt-2">{answerInfo.upvoters}</h5>
                                {sendDownvoteButton()}
                                <h5 className="mt-2">{answerInfo.downvoters}</h5>
                                {giveFavButton()}
                        </div>
        </div>
    );
}

export default AnswerBody;