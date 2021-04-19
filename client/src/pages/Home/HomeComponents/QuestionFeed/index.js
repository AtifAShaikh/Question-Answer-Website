import React, { useState, useEffect } from "react";
import './style.css';
import QuestionFeedItem from '../QuestionFeedItem';
import { Editor } from "@tinymce/tinymce-react";
import Catagories from "../CatagoryList/catagory";



function QuestionFeed(props) {

    var i = -1;
    const catagorySelectList = Catagories.map(catagory => {
        i++;
        // return <CatagoryItem myText={catagory} filter={props.filter} key={i}></CatagoryItem>;
        return <option>{catagory}</option>;
    });

    const [askQuestionInput, setQuestionInput] = useState({
        body: '',
        catagory: 'Arts',
        title: '',
        search: '',
      });

    useEffect(() => {}, [askQuestionInput]);

    const submitQuestion = (e) => {
        e.preventDefault();
        console.log(askQuestionInput);
    }

    const searchQuestion = (e) => {
        e.preventDefault();
        console.log(askQuestionInput.search);
    }

    return (
        <div>
            <div className="searchCont d-flex justify-content-between align-items-center">
                <div className="">
                    <form className="form d-flex justify-content-center align-items-center flex-column searchForm">
                        <div className="searchCont">
                        <input
                        value={askQuestionInput.search}
                        name="search"
                        type="text"
                        placeholder=""
                        className="text-center inputArea searchInput"
                        onChange={(e)=>{
                            setQuestionInput({
                                ...askQuestionInput,
                                search: e.target.value
                            })
                        }}
                    />
                    <button className="butt searchButton ml-3 align-center" onClick={searchQuestion}>Search</button>
                        </div>
                    </form>
                </div>
                <div className="">
                    <button className="butt searchButton askButton" data-toggle="modal" data-target=".ask" >Ask</button>
                </div>
            </div>
            <div className="mt-3">
                {/* <div dangerouslySetInnerHTML={{__html: askQuestionInput.body}}></div> */}
               <QuestionFeedItem></QuestionFeedItem>
               <QuestionFeedItem></QuestionFeedItem>
               <QuestionFeedItem></QuestionFeedItem>
               <QuestionFeedItem></QuestionFeedItem>
               <QuestionFeedItem></QuestionFeedItem>
               
            </div>

            <div className="modal fade bd-example-modal-xl ask" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content loginBody">
      <div className="d-flex justify-content-center align-items-center flex-column">
        
        <form className="form d-flex justify-content-center align-items-center flex-column mb-1">
        <h4 className="mt-3 modalTitle">Select a catagory for your question</h4>

        <select class="form-control form-control-lg mt-4"
        onChange={(e)=>{
            var valueToSet = e.target.value.split(' ')[1];
            setQuestionInput({
                ...askQuestionInput,
                catagory: valueToSet
            });
        }}>
            {catagorySelectList}
        </select>
        <h4 className="mt-3 modalTitle">Give your Question a Title</h4>
        <input
            value={askQuestionInput.title}
            name="titler"
            type="text"
            placeholder="title"
            className="text-center inputArea"
            onChange={(e)=>{
                setQuestionInput({
                    ...askQuestionInput,
                    title: e.target.value
                })
            }}
          />
          <h4 className="mt-3 modalTitle">Provide Details</h4>
          <Editor
          value={askQuestionInput.body}
          init={{
            height: 600,
            menubar: false,
          }}
          onEditorChange={(content, editor) => {
            setQuestionInput({
              ...askQuestionInput,
              body: content
            })
          }}
          >
          </Editor>

        <button className="butt mb-3 mt-4" onClick={submitQuestion}>Submit</button>
        </form>
    
      </div>
    </div>
  </div>
</div>
        </div>
    );
  }


export default QuestionFeed;