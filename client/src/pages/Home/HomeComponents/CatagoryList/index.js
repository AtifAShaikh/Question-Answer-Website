import React from "react";
import CatagoryItem from "../CatagoryItem";
import Catagories from './catagory';
import './style.css';


function CatagoryList(props) {
    
    var i = -1;
    const catagoryItemList = Catagories.map(catagory => {
        i++;
        return <CatagoryItem myText={catagory} filter={props.filter} key={i}></CatagoryItem>;
    });

    return (
        <div>
            <h5>Activity</h5>
            <CatagoryItem myText='Asked' filter={props.filter} key={999}></CatagoryItem>
            <CatagoryItem myText='Answered' filter={props.filter} key={998}></CatagoryItem>
            <CatagoryItem myText='Followed' filter={props.filter} key={997}></CatagoryItem>
            <h5>Catagories</h5>
            <CatagoryItem myText='🌎 All' filter={props.reset} key={996}></CatagoryItem>
            {catagoryItemList}
        </div>
    );
  }


export default CatagoryList;