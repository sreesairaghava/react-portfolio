import React from "react";

const SpecialCard = (props) => {
  return (
    <div className="splCard-container">
      <img src={props.img} alt="" />
      <h4>{props.skill}</h4>
      <p>{props.desc}</p>
      <a href={props.link}>Readmore</a>
    </div>
  );
};

export default SpecialCard;
