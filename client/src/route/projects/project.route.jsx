import React from "react";
import ProjectCard from "../../component/card/card.component";
import EcomImg from "../../img/ecom.png";
import HsApi from "../../img/Helsiki-API.png";
import NoteKeeper from "../../img/NoteKeeper.png";
import Maito from "../../img/maito.png";
import JokeRank from "../../img/JokeRank.png";
import drumKit from "../../img/drumKit.png";

import "./project.styles.scss";

const Project = () => {
  return (
    <div className="project-route">
      <div className="project-route-card">
        <ProjectCard
          title="Search Helsinki"
          description="The app using Helsinki open API data to allow users search for places, events and incoming activities in the city. Stacks: Reactjs, NodeJs"
          image={HsApi}
          gitHubUrl="https://github.com/HungHoang108/Helsinki_ApiData"
        />
        <ProjectCard
          title="Note Keeper"
          description="User can register, login with Gmail or email and password to take notes. Stack: MongoDB, Express, React, Nodejs, Firebase (authentication)."
          image={NoteKeeper}
          gitHubUrl="https://github.com/HungHoang108/NoteKeeper-FullStack/tree/master"
        />
        <ProjectCard
          title="Online store"
          description="An ecommerce website build with ReactJs, Redux toolkit, TypeScript, SCSS and Jest testing"
          image={EcomImg}
          gitHubUrl="https://github.com/HungHoang108/frontend-project-public"
          url="https://merry-genie-108.netlify.app/"
        />
        <ProjectCard
          title="JokeRank"
          description="A basic crud C# .Net app with authentification and search. Allowing users to register, login and create posts"
          image={JokeRank}
          gitHubUrl="https://github.com/HungHoang108/JokeRank"
        />

        <ProjectCard
          title="Maito"
          description="A static site with pure Html, SCSS, animation,flexbox and grid"
          image={Maito}
          gitHubUrl="https://github.com/HungHoang108/scss-assignment-integrify"
          url="https://hunghoang108.github.io/scss-assignment-integrify/"
        />

        <ProjectCard
          title="DrumkitOnline"
          description="An Udemy project, the drumkit allows users to play music directly on the browser using keyboards or mouse control. Stack: Html, CSS, JavsScript."
          image={drumKit}
          url="https://hunghoang108.github.io/DrumkitOnline/"
          gitHubUrl="https://github.com/HungHoang108/DrumkitOnline"
        />
      </div>
    </div>
  );
};

export default Project;
