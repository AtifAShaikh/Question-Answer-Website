import React, { useState, useEffect } from "react";

function QuestionFeedItem(){
    return (
        <div className="feedQuestionBody p-3 mb-3">
        <p>🔬 Science</p>
        <h3>Title goes here</h3>
        <h7>Body of the question goes here, This is where one would put the info about their question and blah blah blah</h7>
        <div className="d-flex align-items-center justify-content-start mt-2">
            <div className="d-flex align-items-start justify-content-start ml-2">
                <img src="https://res.cloudinary.com/dj63qafw1/image/upload/v1618773391/upvote_wgxhu2.png" width="30px"></img>
                <h4 className="ml-2">17</h4 >
            </div>
            <div className="d-flex align-items-start justify-content-start ml-2">
                <img src="https://res.cloudinary.com/dj63qafw1/image/upload/v1618773743/downvote_datjur.png" width="30px"></img>
                <h4 className="ml-2">17</h4 >
            </div>
            <div className="d-flex align-items-start justify-content-start ml-2">
                <img src="https://res.cloudinary.com/dj63qafw1/image/upload/v1618774281/commentv2_xcsxyz.png" width="30px"></img>
                <h4 className="ml-2">17</h4 >
            </div>
            
        </div>
    </div>
    );
}

export default QuestionFeedItem;