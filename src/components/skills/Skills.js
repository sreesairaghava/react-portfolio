import React from "react";
import Card from "./Card";
import icons from "../../assets/assets-portfolio/Icons";
const Skills = () => {
  return (
    <div className="skills-container">
      <span>Top Skills</span>
      <div className="card-container">
        {icons.map(({ id, src, desc, title, link }, index) => (
          <Card key={id} title={title} desc={desc} src={src} link={link}></Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
