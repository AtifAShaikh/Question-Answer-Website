import React, { useState, useEffect } from "react";
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
            <h5>All Catagories</h5>
            {catagoryItemList}
        </div>
    );
  }


export default CatagoryList;