import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="project-card" key={props.id}>
      <h5>{props.title}</h5>
      <p>{props.desc}</p>
      <a href={props.link}>
        <button>GitHub</button>
      </a>
    </div>
  );
};

export default ProjectCard;
