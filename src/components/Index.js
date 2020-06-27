import React, { Component } from "react";
import About from "./about/About";
import Skills from "./skills/Skills";
import Hire from "./hire/Hire";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
class Index extends Component {
  render() {
    return (
      <>
        <About></About>
        <Skills></Skills>
        <Hire></Hire>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </>
    );
  }
}

export default Index;
