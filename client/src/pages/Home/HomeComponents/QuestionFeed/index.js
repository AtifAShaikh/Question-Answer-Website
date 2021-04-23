import React, { useState, useEffect } from "react";
import './style.css';
import QuestionFeedItem from '../QuestionFeedItem';
import { Editor } from "@tinymce/tinymce-react";
import Catagories from "../CatagoryList/catagory";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'



function QuestionFeed(props) {

  const [qFeedState, setQFeedState] = useState({
    questions: [],
    filter: props.currentFilter,
    questionItems: [],
    rawQuestions: [],
  });

  const [filterState, setFilterState] = useState({
    filter: '',
  });

  useEffect(()=>{
    setFilterState({
      filter: props.currentFilter,
    });
    // console.log(filterState.filter);
  }, []);

  useEffect(()=>{
    // console.log(filterState.filter);
  }, [filterState]);

  useEffect(()=>{
    // console.log(qFeedState);
    var QuestionFeedList;
    
    fetch('/api/questions', {
      method: 'GET',
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
      // console.log(data);
      let k = -1;
      let qItemsToPut = data.slice(0).reverse().map(question => {
        k++;
        return({id: k, name: question.title})
      })

      let i=-1;
      QuestionFeedList = data.slice(0).reverse().map(question => {
        i++;
        if(props.currentFilter === ''){
          return (
            <QuestionFeedItem 
              key={i} 
              title={question.title} 
              catagory={question.catagory} 
              body={question.body}
              upvoters={question.upvoters}
              downvoters={question.downvoters}
              myId={question._id}
            ></QuestionFeedItem>);
        } else if (props.currentFilter==='Asked'){
          if(props.user.asked.includes(question._id)){
            return (
              <QuestionFeedItem 
                key={i} 
                title={question.title} 
                catagory={question.catagory} 
                body={question.body}
                upvoters={question.upvoters}
                downvoters={question.downvoters}
                myId={question._id}
              ></QuestionFeedItem>);
          } else {
            return(<div></div>);
          }
        } else if (props.currentFilter==='Followed'){
          if(props.user.followed.includes(question._id)){
            return (
              <QuestionFeedItem 
                key={i} 
                title={question.title} 
                catagory={question.catagory} 
                body={question.body}
                upvoters={question.upvoters}
                downvoters={question.downvoters}
                myId={question._id}
              ></QuestionFeedItem>);
          } else {
            return(<div></div>);
          }
        } else if (props.currentFilter==='Answered'){
          if(props.user.answered.includes(question._id)){
            return (
              <QuestionFeedItem 
                key={i} 
                title={question.title} 
                catagory={question.catagory} 
                body={question.body}
                upvoters={question.upvoters}
                downvoters={question.downvoters}
                myId={question._id}
              ></QuestionFeedItem>);
          } else {
            return(<div></div>);
          }
        } else {
          if(question.catagory !== props.currentFilter){
            return(<div></div>);
          } else {
            return (
              <QuestionFeedItem 
                key={i} 
                title={question.title} 
                catagory={question.catagory} 
                body={question.body}
                upvoters={question.upvoters}
                downvoters={question.downvoters}
                myId={question._id}
              ></QuestionFeedItem>);
          }
        }
        
      });
      setQFeedState({
        questions: QuestionFeedList,
        questionItems: qItemsToPut,
        rawQuestions: data,
      })
    })
  }, [props.currentFilter]);


    var i = -1;
    const catagorySelectList = Catagories.map(catagory => {
        i++;
        // return <CatagoryItem myText={catagory} filter={props.filter} key={i}></CatagoryItem>;
        return <option key={i}>{catagory}</option>;
    });

    const [askQuestionInput, setQuestionInput] = useState({
        body: '',
        catagory: '🎭 Arts',
        title: '',
        search: '',
      });

    useEffect(() => {}, [askQuestionInput]);

    const submitQuestion = (e) => {
        e.preventDefault();
        let objToSend = {
          title: askQuestionInput.title,
          body: askQuestionInput.body,
          catagory: askQuestionInput.catagory,
          upvoters: [],
          downvoters: [],
          askerID: props.user._id,
        }
        console.log(objToSend);

        fetch('/api/questions', {
          method: 'POST',
          body: JSON.stringify(objToSend),
          headers: { 'Content-Type': 'application/json' }
        }).then((response)=>{
          return response.json();
        }).then((data)=>{
          // console.log(data);
          document.location.reload();
        });
    }

    // const searchQuestion = (e) => {
    //     e.preventDefault();
        
    // }

    const handleOnSelect = (item) => {
      // the item selected
      // console.log(item)
      qFeedState.rawQuestions.forEach((question)=>{
        if(question.title === item.name){
          document.location.replace(`/question/${question._id}`)
        }
      })
    }

    return (
        <div>
          {/* <h2>current filter: {props.currentFilter}</h2> */}
            <div className="searchCont d-flex justify-content-between align-items-center">
                <div className="">
                    <div className="autoSearchCont">
                    <ReactSearchAutocomplete
                      items={qFeedState.questionItems}
                      onSelect={handleOnSelect}
                      autoFocus
                    />
                    </div>
                  
                    {/* <form className="form d-flex justify-content-center align-items-center flex-column searchForm">
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
                    
                    </form> */}
                </div>
                <div className="">
                    <button className="butt searchButton askButton" data-toggle="modal" data-target=".ask" >Ask</button>
                </div>
            </div>
            <div className="mt-3">
               {qFeedState.questions}
            </div>

            <div className="modal fade bd-example-modal-xl ask" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content loginBody">
      <div className="d-flex justify-content-center align-items-center flex-column">
        
        <form className="form d-flex justify-content-center align-items-center flex-column mb-1">
        <h4 className="mt-3 modalTitle">Select a catagory for your question</h4>

        <select className="form-control form-control-lg mt-4"
        onChange={(e)=>{
            // var valueToSet = e.target.value.split(' ')[1];
            var valueToSet = e.target.value;
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