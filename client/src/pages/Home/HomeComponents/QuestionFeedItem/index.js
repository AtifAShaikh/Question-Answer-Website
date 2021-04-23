import React, {useState, useEffect} from "react";
import './style.css';

function QuestionFeedItem(props){

    const [answers, setAnswers] = useState({
        answerList: [],
    });

    useEffect(()=>{
        fetch('/api/answers/get/num', {
            method: 'PUT',
            body: JSON.stringify({qId: props.myId}),
            headers: { 'Content-Type': 'application/json' },
        }).then(res=>res.json())
        .then((data)=>{
            setAnswers({
                answerList: data,
            })
        })
    })

    return (
        <div className="feedQuestionBody p-3 mb-3" onClick={() => {
            console.log(props.myId);
            document.location.replace(`/question/${props.myId}`);
        }}>
        <p>{props.catagory}</p>
        <h3>{props.title}</h3>
        <div className="sepperator mb-3"></div>
        <div dangerouslySetInnerHTML={{__html: props.body}} className="ml-3 bodyContent overflow-auto"></div>
        <div className="sepperator mb-3"></div>
        <div className="d-flex align-items-center justify-content-start mt-2">
            <div className="d-flex align-items-start justify-content-start ml-2">
                <img src="https://res.cloudinary.com/dj63qafw1/image/upload/v1618773391/upvote_wgxhu2.png" width="30px" alt="upvote"></img>
                <h4 className="ml-2">{props.upvoters.length}</h4 >
            </div>
            <div className="d-flex align-items-start justify-content-start ml-2">
                <img src="https://res.cloudinary.com/dj63qafw1/image/upload/v1618773743/downvote_datjur.png" width="30px" alt="downvote"></img>
                <h4 className="ml-2">{props.downvoters.length}</h4 >
            </div>
            <div className="d-flex align-items-start justify-content-start ml-2">
                <img src="https://res.cloudinary.com/dj63qafw1/image/upload/v1618774281/commentv2_xcsxyz.png" width="30px" alt="comments"></img>
                <h4 className="ml-2">{answers.answerList.length}</h4 >
            </div>
            
        </div>
    </div>
    );
}

export default QuestionFeedItem;