import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className="card w-full bg-base-200 shadow-xl mb-6 transition-all duration-300 hover:shadow-2xl">
      <figure className="relative h-64 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-300 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <p className="text-sm text-gray-200">{project.timeline}</p>
        </div>
      </figure>
      
      <div className="card-body p-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">{project.shortDescription}</p>
          <button 
            className="btn btn-circle btn-sm btn-ghost" 
            onClick={toggleExpand}
            aria-label={expanded ? "Show less details" : "Show more details"}
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        {expanded && (
          <div className="mt-4 transition-all duration-300 animate-fadeIn">
            {/* Affiliation if exists */}
            {project.affiliation && (
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-full">
                  🏫
                </div>
                <span className="text-sm">{project.affiliation}</span>
              </div>
            )}
            
            {/* Project description section - no markdown needed */}
            <div className="space-y-6 mt-4">
              {/* Main description */}
              <div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Key Features Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  {project.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      <div>
                        <span className="font-semibold">{feature.title}</span>
                        {feature.description && <span> – {feature.description}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Technologies Used:</h3>
                <ul className="space-y-2">
                  {project.technologies?.map((tech, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sm">•</span>
                      <div>
                        <span className="font-semibold">{tech.category}:</span> {tech.details}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Skills Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">Skills Showcased:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills?.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-base-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Links section */}
            <div className="mt-6 space-y-3">
              {project.links?.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  className="flex items-center gap-4 p-3 hover:bg-base-300 rounded-lg transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 bg-base-300 rounded-md flex items-center justify-center">
                    {link.type === 'github' ? 
                      <Github size={24} /> : 
                      <ExternalLink size={24} />
                    }
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{link.title}</h3>
                    <p className="text-xs text-gray-400">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;