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
          <img src={MainImage} alt="sreesai" className="mainImage" />
        </div>
      </div>
    );
  }
}

export default About;
