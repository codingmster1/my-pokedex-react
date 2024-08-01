import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/b&wpic.jpg";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hello I'm Jeff Doyle</h1>
      <h2 className="profile-text">The creator of this pokedex</h2>
      <h3 className="profile-text">
       <div className="pokedex-tip">Pokedex Project Notice:</div> <div className="pokedex-tip__2">Some mega evolutions may fail to load due to the API not having the correct data.
       Loading times may render endliessly due to the error. If this happens, simply click on a new tab like Search to refresh.</div>
      </h3>
      <div className="profile-links">
        <a href="https://github.com/codingmster1">
          <FaGithub />
        </a>
        <a href="https://discordapp.com/users/373813732767432707">
          <FaDiscord />
        </a>
        <a href="https://www.linkedin.com/in/jeff-doyle23/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);