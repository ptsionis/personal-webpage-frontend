import React from "react";

import "./ProjectPreview.css";

const ProjectPreview = ({ title, previewImg, previewUrl }) => {
  return (
    <>
      <img
        className="project-preview-img"
        src={`.././images/previews/${previewImg}`}
        alt={title}
      />
      <a
        className="project-preview-layer d-flex justify-content-center align-items-center text-decoration-none"
        target="_blank"
        href={previewUrl}
      >
        {title}
      </a>
    </>
  );
};

export default ProjectPreview;
