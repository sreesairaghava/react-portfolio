import React from "react";
import SpecialCard from "./SpecialCard";
import { hireImages } from "../../assets/images/Images";
const talentSpecs = [
  {
    id: 1,
    skill: "Web Design",
    link: "#",
    img: hireImages[0],
    color: "#5140e8",
    desc:
      "Skilled in creating user Centric designs with Accessibility and aesthetic Design elements. Skilled in various tools",
  },
  {
    id: 2,
    skill: "UI/UX Design",
    link: "#",
    img: hireImages[1],
    desc:
      " Proficient in creating user Experiences rather than just designs. Hands-on experience Using tool like Adobe XD",
    color: "#e8cf43",
  },
  {
    id: 3,
    skill: "Web Development",
    link: "",
    img: hireImages[2],
    desc:
      "Frontend web development,Full Stack web dev,Skill in working with teams and Using version control tools Like GIT and Gerrit",
    color: "#5fb12b",
  },
];
const Hire = () => {
  return (
    <>
      <span className="whyme">Why Me?</span>
      <h3 className="splIn">Specialized In</h3>
      <div className="hire-container">
        {talentSpecs.map(({ id, skill, link, desc, color, img }) => (
          <SpecialCard
            id={id}
            skill={skill}
            link={link}
            desc={desc}
            bgColor={color}
            img={img}
          ></SpecialCard>
        ))}
      </div>
    </>
  );
};

export default Hire;
