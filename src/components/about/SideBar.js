import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faGithubSquare,
  faFacebook,
  faInstagram,
  faTwitter,
  faBehance,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
const iconStyle = {
  marginTop: "35px",
  color: "#1a125a",
};
const links = {
  github: "https://github.com/sreesairaghava",
  linkedin: "https://www.linkedin.com/in/sreesairaghava/",
  facebook: "https://www.facebook.com/sreesairaghavas/",
  instagram: "https://www.instagram.com/raghava.codes/",
  twtiter: "https://twitter.com/iamsreesai",
  dribbble: "https://dribbble.com/sreesairaghava",
  behance: "https://www.behance.net/sreesairaghava/moodboards",
};
const sideNav = [
  {
    id: "1",
    name: "github",
    link: links.github,
    icon: faGithubSquare,
  },
  {
    id: "2",
    name: "linkedin",
    link: links.linkedin,
    icon: faLinkedin,
  },
  {
    id: "3",
    name: "facebook",
    link: links.facebook,
    icon: faFacebook,
  },
  {
    id: "4",
    name: "instagram",
    link: links.instagram,
    icon: faInstagram,
  },
  {
    id: "5",
    name: "twitter",
    link: links.twtiter,
    icon: faTwitter,
  },
  {
    id: "6",
    name: "dribbble",
    link: links.dribbble,
    icon: faDribbble,
  },
  {
    id: "7",
    name: "behance",
    link: links.behance,
    icon: faBehance,
  },
];
const SideBar = () => {
  return (
    <>
      <div className="sideBar">
        {sideNav.map((item, key) => (
          <div style={iconStyle} key={sideNav[key].id}>
            <a
              href={sideNav[key].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={sideNav[key].icon}
                size={"3x"}
              ></FontAwesomeIcon>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
