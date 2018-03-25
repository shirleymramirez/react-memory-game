import React from "react";
import "./SportCard.css";

const SportCard = props => (
    <div className = "card">
        <div className = "img-container">
            <img alt = {props.name} src={props.image}/>
        </div>
    </div> 
);

export default SportCard;
