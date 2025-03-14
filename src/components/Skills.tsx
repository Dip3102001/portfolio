import React, { useState, useEffect } from 'react';

const SkillsSection:React.FC = () => {
  // State to track which skill is currently animated
  const [animatedSkill, setAnimatedSkill] = useState(null);

  // Skills data organized by categories
  const skillCategories = [
    {
      title: "Web Tech Stack",
      skills: [
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", 
        "Angular", "Node.js", "Express.js","REST API", "Tailwind CSS", "Bootstrap", "DaisyUI"
      ]
    },
    {
      title: "ML Tech Stack",
      skills: [
        "Python", "PyTorch", "Scikit-learn", "Pandas", 
        "NumPy", "Matplotlib", "Keras", "NLTK", "OpenCV", 
        "Jupyter", "Hugging Face"
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Git", "Docker", "Kubernetes", "AWS", "GCP", "Terraform", "Linux", "Bash"
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        "MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "SQLite"
      ]
    }
  ];

  // Function to handle skill click
  const handleSkillClick = (skill) => {
    setAnimatedSkill(skill);
    setTimeout(() => {
      setAnimatedSkill(null);
    }, 500);
  };

  // Function to randomly animate skills on component mount
  useEffect(() => {
    const animateRandomSkills = () => {
      const allSkills = skillCategories.flatMap(category => category.skills);
      const randomSkills = allSkills.filter(() => Math.random() < 0.2);
      
      randomSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkill(skill);
          setTimeout(() => {
            setAnimatedSkill(null);
          }, 500);
        }, index * 300 + Math.random() * 1000);
      });
    };

    const initialTimeout = setTimeout(animateRandomSkills, 1000);
    return () => clearTimeout(initialTimeout);
  }, []);

return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Technical Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">{category.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                        key={skillIndex}
                        className={`badge animated-gradient text-white cursor-pointer transition-all duration-300`}
                    >
                        {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// };

export default SkillsSection;