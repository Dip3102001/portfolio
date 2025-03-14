import React from "react";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component

interface ProjectFolderProps {
  folderTitle: string;
  projects: Array<{
    title: string;
    description: string;
    imageUrl: string;
  }>;
}

const ProjectFolder: React.FC<ProjectFolderProps> = ({ folderTitle, projects }) => {
  return (
    <div className="p-6 rounded-lg shadow-lg">
      {/* Folder Title */}
      <h2 className="text-2xl font-bold mb-6">{folderTitle}</h2>

      {/* Grid of Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectFolder;