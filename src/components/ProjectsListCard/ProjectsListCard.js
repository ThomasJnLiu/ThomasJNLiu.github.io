import React from "react";
import "./ProjectsListCard.css";
import MoreButton from "../MoreButton/MoreButton";

const ProjectsListCard = ({ ProjectInfo }) => (
  <div className="projects-list-card">
    <div className="image-container">
      {ProjectInfo.img ? (
        <img src={process.env.PUBLIC_URL + ProjectInfo.img[0]} />
      ) : null}
      {/* <img src={process.env.PUBLIC_URL + ProjectInfo.img[0]} /> */}
    </div>
    <div className="project-preview">
      <h1>{ProjectInfo.name}</h1>
      <p>
        {ProjectInfo.content[0].substring(0, 150)}...
        <br></br>
        <MoreButton projectName={ProjectInfo.name} />
      </p>{" "}
    </div>
  </div>
);

export default ProjectsListCard;