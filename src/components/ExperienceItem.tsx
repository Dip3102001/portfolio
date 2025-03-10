// components/Experience/ExperienceItem.jsx
import React from 'react';

const ExperienceItem = ({ title, company, dateRange, achievements, isLeft }) => {
  return (
    <div className="relative">
      {/* Timeline circle */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -top-2 w-10 h-10 rounded-full border-4 border-gray-800 bg-gray-600 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-white"></div>
      </div>
      
      {/* Content box */}
      <div className={`ml-16 md:ml-0 md:w-5/12 bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg 
        ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="text-lg text-gray-300 mb-4">{company}</div>
        
        <ul className="space-y-3 text-gray-300">
          {achievements.map((achievement, index) => (
            <li key={index} className={`flex ${isLeft ? 'md:justify-end' : ''}`}>
              <span className="mr-2 md:order-1">•</span>
              <span className="md:order-2">{achievement}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-4 text-gray-400">{dateRange}</div>
      </div>
    </div>
  );
};

export default ExperienceItem;