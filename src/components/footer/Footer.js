import React from "react";
import { rcLogoFooter } from "../../assets/images/Images";
import { navItems } from "../about/NavBar";
const Footer = () => {
  return (
    <div className="footer-container">
      <img src={rcLogoFooter} alt="" />
      <span>Thanks for making till here, Have a Good Day :)</span>
      <div className="list">
        {navItems.map((item, key) => (
          <a href={navItems[key].link} key={navItems[key].title}>
            <li>{navItems[key].title}</li>
          </a>
        ))}
      </div>
      <span className="footer-final">
        Designed and Developed by Sree Sai Raghava
      </span>
    </div>
  );
};

export default Footer;
