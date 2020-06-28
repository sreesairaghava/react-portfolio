import React from "react";
import Logo from "../../assets/images/rc-logo.png";
export const navItems = [
  {
    title: "About",
    link: "#",
  },
  {
    title: "Skills",
    link: "#",
  },
  {
    title: "Why Me?",
    link: "#",
  },
  {
    title: "Project",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
];

const NavBar = () => {
  return (
    <nav>
      <img src={Logo} className="logo" alt="social-links" />
      <div className="list">
        {navItems.map((item, key) => (
          <a href={navItems[key].link} key={navItems[key].title}>
            <li>{navItems[key].title}</li>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
