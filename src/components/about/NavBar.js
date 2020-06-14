import React from "react";
import Logo from "../../assets/images/rc-logo.png";
const navItems = [
  {
    title: "About",
    link: "",
  },
  {
    title: "Skills",
    link: "",
  },
  {
    title: "Why Me?",
    link: "",
  },
  {
    title: "Project",
    link: "",
  },
  {
    title: "Contact",
    link: "",
  },
];

const NavBar = () => {
  return (
    <nav>
      <img src={Logo} className="logo" alt="social-links" />
      <div className="list">
        {navItems.map((item, key) => (
          <a href={navItems[key].link}>
            <li>{navItems[key].title}</li>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
