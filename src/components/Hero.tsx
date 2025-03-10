import React from 'react';
import SocialIcons from './Btn';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsSection from './Skills';
import ProjectRack from './ProjectRack';

const Hero:React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#036330] to-[#242524] text-white">
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center text-center px-4 py-16 max-w-3xl mx-auto">
          {/* Profile Image */}
          <div className="w-40 h-40 rounded-full bg-white p-2 mb-8">
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-white">Code</span>,{" "}
              <span className="text-orange-400">Coffee</span>,{" "}
              <span className="text-white">Create</span>! I'm Dip Patel
            </h1>
            <p className="text-xl mb-8">
              a back-end virtuoso, crafting seamless and powerful digital solutions!
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="mailto:dv9patel@uwaterloo.ca" 
                className="px-6 py-3 bg-teal-700 hover:bg-teal-800 rounded-lg flex items-center gap-2"
              >
                <span className="material-icons text-sm">Contact me</span>
                
              </a>
              <a 
                href="/path/to/cv.pdf" 
                download 
                className="px-6 py-3 bg-gray-700 bg-opacity-50 hover:bg-opacity-70 rounded-lg flex items-center gap-2"
              >
                <span className="material-icons text-sm">Download CV</span> 
              </a>
            </div>
            
            {/* Social Icons */}
            <SocialIcons />
          </div>
        </div>
      </div>
      
        {/* Vertical Rule */}
        <div className="flex justify-center">
            <div className="w-1.5 h-16 bg-gray-400 bg-opacity-50"></div>
        </div>

      {/* About Me Section */}
      <div className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg">
          I am a Software Development Engineer at Amazon Web Services (AWS), where I contribute to the RDS platform team.
        </p>
      </div>

      <ExperienceTimeline />
      <SkillsSection/>
      <ProjectRack/>

    </div>
  );
};

export default Hero;