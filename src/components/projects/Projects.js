import React from "react";
import ProjectCard from "./ProjectCard";
import { projectImages } from "../../assets/images/Images";
const projectList = [
  {
    id: 1,
    title: "Image Editor",
    desc:
      "Image editing tool, developed with HTML,CSS and JavaScript, SPA With features to edit pics.",
    link: "https://github.com/sreesairaghava/Online-Image-Editor",
    img: projectImages[0],
  },
  {
    id: 2,
    title: "Covid-Tracker",
    desc:
      "Website to track active covid-19 Cases and plot as graph using React Js and Canvas JS for maps.",
    link: "https://github.com/sreesairaghava/covid-19-tracker",
    img: projectImages[1],
  },
  {
    id: 3,
    title: "Avtar Maker",
    desc:
      "Avatar maker lets you create Custom avatar developed using React JS and Fabric JS",
    link: "https://github.com/sreesairaghava/avatar-maker-master",
    img: projectImages[2],
  },
];
const Projects = () => {
  return (
    <div className="projects-container">
      <span className="project-title">Projects</span>
      <div className="projects-Cardcontainer">
        {projectList.map(({ id, title, link, img, desc }) => (
          <ProjectCard
            key={id}
            title={title}
            link={link}
            img={img}
            desc={desc}
          />
        ))}
      </div>
      <a href="https://github.com/sreesairaghava">
        <button className="other-projects">
          <span>Checkout My Other Projects</span>
        </button>
      </a>
    </div>
  );
};

export default Projects;
