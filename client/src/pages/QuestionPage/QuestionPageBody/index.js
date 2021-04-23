import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import './style.css';
import AnswerContainer from '../AnswerContainer';

function QuestionPageBody(props){

    const [answerBody, setABodyState] = useState({
        body: ''
    });

    const [qInfo, setQInfo] = useState({
       questionData: '',
       askerData: '',
       userData: '',
       upvotes: 0, 
       downvotes: 0,
       displayFollowButton: true,
       displayUpvoteButton: true,
       displayDownvoteButton: true,
       answers: [], 
    });

    useEffect(()=>{
        fetch(`/api/questions/${props.questionId}`,{
            method: 'GET',
        }).then((response)=>{
            return response.json();
        }).then((data)=>{
            // console.log(data);

            let newfollowState = true;
            if(data.asker._id == data.user._id || data.user.followed.includes(data.question._id)){
               newfollowState=false; 
            } else {
                console.log('asker and user are not the same');
            }

            let upvoteButtonState = true;
            if(data.question.upvoters.includes(data.user._id)){
                upvoteButtonState=false;
            }

            let downvoteButtonState = true;
            if(data.question.downvoters.includes(data.user._id)){
                downvoteButtonState=false;
            }


            setQInfo({
                ...qInfo,
                questionData: data.question,
                upvotes: data.question.upvoters.length,
                downvotes: data.question.downvoters.length,
                askerData: data.asker,
                userData: data.user,
                displayFollowButton: newfollowState,
                displayUpvoteButton: upvoteButtonState,
                displayDownvoteButton: downvoteButtonState,
                answers: data.answers,
            })
        });
    }, []);

    const followQuestion = () => {
        fetch('/api/users/follow/question', {
            method: 'POST',
            body: JSON.stringify({id: qInfo.questionData._id}),
            headers: { 'Content-Type': 'application/json' },
        }).then(()=>{
            document.location.reload();
        })
    }

    const upVoteQuestion = () => {
        fetch('/api/questions/upvote/upvoters', {
            method: 'PUT',
            body: JSON.stringify({qId: qInfo.questionData._id}),
            headers: { 'Content-Type': 'application/json' },
        }).then(()=>{
            document.location.reload();
        })
    }

    const downVoteQuestion = () => {
        fetch('/api/questions/downvote/downvoters', {
            method: 'PUT',
            body: JSON.stringify({qId: qInfo.questionData._id}),
            headers: { 'Content-Type': 'application/json' },
        }).then(()=>{
            document.location.reload();
        })
    }

    const createAnswer = () => {
        let objToSend = {
            body: answerBody.body,
            userId: qInfo.userData._id,
            questionId: qInfo.questionData._id,
            favorited: false,
            upvoters: [],
            downvoters: [],
        }

        fetch('/api/answers', {
            method: 'POST',
            body: JSON.stringify(objToSend),
            headers: {'Content-Type': 'application/json'},
        }).then(()=>{
            document.location.reload();
        })
    }

    const giveButton = ()=>{
            // console.log(qInfo.displayFollowButton);
            if(qInfo.displayFollowButton){
                return(
                    <button className="butt" onClick={()=>{
                        followQuestion();
                    }}>Follow</button>
                );
            } else {
                return(<h5 className="ml-3 mt-2 mr-2 uiText">Following</h5>);
            }
    }
    
    const giveUpVoteButton = () => {
        if(qInfo.displayUpvoteButton){
            return(
                <button className="butt" onClick={()=>{
                    upVoteQuestion();
                }}>Upvote</button>
            );
        } else {
            return (<h5 className="ml-3 mt-2 mr-1 uiText">Upvotes: </h5>);
        }
    }

    const giveDownVoteButton = () => {
        // console.log(qInfo.displayDownvoteButton);
        if(qInfo.displayDownvoteButton){
            return(
                <button className="butt" onClick={()=>{
                    downVoteQuestion();
                }}>Downvote</button>
            );
        } else {
            return (<h5 className="ml-3 mt-2 mr-1 uiText">DownVotes: </h5>);
        }
    }

    return(
        <div className="container qPageBody">
            <div className="d-flex justify-content-enter align-items-center flex-column mt-3">
                <div className="col-10">
                    <div className="qDisplayMain p-4">
                        <img height="100px" src={qInfo.askerData.picture} className="qPagePic mb-2"></img>
                        <h4>Asked by {qInfo.askerData.username} in {qInfo.questionData.catagory}</h4>
                        <h1>{qInfo.questionData.title}</h1>
                        <div className="sepperator mb-3"></div>
                        <div className="ml-3" dangerouslySetInnerHTML={{__html: qInfo.questionData.body}}></div>
                        <div className="sepperator mb-3 mt-3"></div>
                        <div className="d-flex justify-content-start align-items-center">
                                {giveUpVoteButton()}
                                <h5 className="mt-2">{qInfo.upvotes}</h5>
                                {giveDownVoteButton()}
                                <h5 className="mt-2">{qInfo.downvotes}</h5>
                                {/* <button className="butt">Follow</button> */}
                                {giveButton()}
                                <button className="butt" data-toggle="modal" data-target=".answer">Answer</button>
                        </div>
                    </div>
                    <div className="mt-3">
                        <AnswerContainer answers={qInfo.answers} asker={qInfo.askerData} user={qInfo.userData}></AnswerContainer>
                    </div>
<div className="modal fade bd-example-modal-xl answer" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content loginBody">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <form className="form d-flex justify-content-center align-items-center flex-column mb-1">
          <h4 className="mt-3 modalTitle">Answer</h4>
          <Editor
          init={{
            height: 600,
            menubar: false,
          }}
          onEditorChange={(content, editor) => {
              setABodyState({
                  body: content,
              })
          }}
          >
          </Editor>
        <button className="butt mb-3 mt-4" onClick={(e)=>{
            e.preventDefault();
            createAnswer();
        }}>Submit</button>
        </form>
    
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
}

export default QuestionPageBody;