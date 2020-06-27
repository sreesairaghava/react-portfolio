import React, { Component } from "react";
import "../../styles/styles.scss";
import MainImage from "../../assets/images/main-image.png";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
class About extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container-main">
          <SideBar></SideBar>
          <div className="intro">
            <span className="hello">Hello I'm</span>
            <span className="name"> Sree Sai Raghava</span>
            <br />
            <span className="title">Front-End Developer</span>
            <br />
            <span className="freelance">Freelance UI/UX Designer</span>
            <br />
            <button>
              <span>Hire Me</span>
            </button>
          </div>
          <img src={MainImage} alt="sreesai" className="mainImage" />
        </div>
      </div>
    );
  }
}

export default About;
