import React from "react";

const Card = (props) => {
  return (
    <div className="card-style">
      <p className="card-title">{props.title}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          className="card-image"
          src={props.src}
          key={props.id}
          alt={props.desc}
        ></img>
      </a>
    </div>
  );
};

export default Card;
