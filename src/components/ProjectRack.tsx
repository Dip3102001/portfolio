import React from "react";
import ProjectFolder from "./ProjectFolder";

const ProjectRack: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is a description for Project 1. It showcases some amazing work!",
      imageUrl: "/chess.jpg",
    },
    {
      title: "Project 2",
      description: "This is a description for Project 2. It showcases some amazing work!",
      imageUrl: "/metaverse-2d.jpg",
    },
    {
      title: "Project 3",
      description: "This is a description for Project 3. It showcases some amazing work!",
      imageUrl: "/wp.png",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <ProjectFolder folderTitle="My Projects" projects={projects} />
    </div>
  );
};

export default ProjectRack;