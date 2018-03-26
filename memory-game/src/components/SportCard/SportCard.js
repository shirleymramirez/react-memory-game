import React from "react";
import "./SportCard.css";

const SportCard = props => 
  <div className="card">
    <div className="img-container">
      <img
        alt={props.name}
        id={props.id}
        src={props.image}
        onClick={props.onClick}
      />
    </div>
  </div>
export default SportCard;
