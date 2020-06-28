import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card" key={props.id}>
      <img src={props.img} alt={props.title} className="projectCard-img" />
      <h5>{props.title}</h5>
      <p>{props.desc}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button>GitHub</button>
      </a>
    </div>
  );
};

export default ProjectCard;
