import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="group relative cursor-pointer transition-transform duration-300 hover:-translate-y-2">
      <div className="card bg-base-100 shadow-xl overflow-hidden">
        {/* Thumbnail */}
        <figure className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </figure>

        {/* Card Content */}
        <div className="card-body p-6">
          <h2 className="card-title text-lg">{title}</h2>
          
          {/* Description with fade effect */}
          <div className="relative">
            <div className="text-sm text-gray-500 overflow-hidden max-h-20 relative">
              {description}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-base-100 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;