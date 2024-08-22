import React from "react";

function ProjectCard({ src, link, h3,P }) {
  return (
    <a href={link} target='_blank'>
      <img className='hover' src={src} alt={h3} />
      <h3>{h3}</h3>
      <p>{P}</p>
    </a>
  );
}

export default ProjectCard;
