import React from "react";
import "./SportCard.css";

const SportCard = props =>
  <div className="card" onClick={props.handleImageClick}>
    <div className="img-container">
      <img alt={props.name} id={props.id} src={props.image} />
    </div>
  </div>;
export default SportCard;
