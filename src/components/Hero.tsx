import React from 'react';
import SocialIcons from './Btn';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsSection from './Skills';
import ProjectRack from './ProjectRack';
import Navbar from './Navbar';

const Hero:React.FC = () => {
  return (
    <>
      <Navbar/>
      <div id="home" className="flex flex-col min-h-screen bg-gradient-to-b from-[#000c25] to-[000000] text-white">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center text-center px-4 py-16 max-w-3xl mx-auto">
            {/* Profile Image */}
            <div className="w-50 h-50 rounded-full bg-white p-2 mb-8">
              <img 
                src="/me.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Text Content */}
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Hey, I am Dip Vijaykumar
                <br/>
                <br/>
              </h1>
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">Curious</span>,{" "}
                <span className="text-orange-400">tinkerer</span>,{" "}
                <span className="text-white">Explorer</span>
              </h2>
              <p className="text-xl mb-8">
                A tech maestro, blending software craftsmanship with cutting-edge AI to build intelligent and impactful solutions!
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
        <div id="about" className="py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="max-w-2xl mx-auto text-lg">
            Hi there! I'm a passionate software developer with a keen interest in artificial intelligence. I love exploring how code and intelligent algorithms can come together to solve real-world problems.
          </p>
        </div>
  
          {/* Vertical Rule */}
          <div id="experience" className="flex justify-center">
              <div className="w-1.5 h-16 bg-gray-400 bg-opacity-50"></div>
          </div>

        <ExperienceTimeline/>
          {/* Vertical Rule */}
          <div id="skills" className="flex justify-center">
              <div className="w-1.5 h-16 bg-gray-400 bg-opacity-50"></div>
          </div>

        <SkillsSection/>
          {/* Vertical Rule */}
          <div id="projects" className="flex justify-center">
              <div className="w-1.5 h-16 bg-gray-400 bg-opacity-50"></div>
          </div>

        <ProjectRack/>

      </div>
    </>
  );
};

export default Hero;