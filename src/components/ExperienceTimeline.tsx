import React from 'react';
import ExperienceItem from './ExperienceItem';
import { experiences } from "../data/experienceData"

const ExperienceTimeline:React.FC = () => {
  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-400 bg-opacity-40"></div>
        
        {/* Experience items */}
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <ExperienceItem 
              key={experience.id}
              {...experience}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;