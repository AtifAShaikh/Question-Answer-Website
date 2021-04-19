import React, { useState, useEffect } from "react";
import './style.css';

function CatagoryItem(props) {
    return (
        <div className="catagoryBody text-center" onClick={props.filter}>
            {props.myText}
        </div>
    );
  }


export default CatagoryItem;