import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection:React.FC = () => {
  // Sample project data
  const projects = [{
    id: "chess-game",
    title: "Chess Game Application",
    image: "/chess.jpg",
    timeline: "Jan 2024 - Mar 2024",
    shortDescription: "A fully functional chess game with intuitive UI (In-Dev)",
    description: "This project is a fully functional chess game application, built with a focus on intuitive gameplay, smooth user experience, and robust game logic. The application features a well-implemented chess engine that accurately enforces game rules, validates legal moves, and detects check, checkmate, and stalemate conditions.",
    
    features: [
      {
        title: "Two-Player Mode",
        description: "Play against a friend locally"
      },
      {
        title: "Move Validation",
        description: "Ensures only legal moves are allowed"
      },
      {
        title: "Check & Checkmate Detection",
        description: "Identifies game-ending conditions"
      },
      {
        title: "Piece Highlighting",
        description: "Shows possible moves for selected pieces"
      },
      {
        title: "Responsive UI",
        description: "Provides a seamless experience across different screen sizes"
      },
      {
        title: "Game State Management",
        description: "Keeps track of moves and board history"
      }
    ],
    
    technologies: [
      {
        category: "Frontend",
        details: "Angular with DaisyUI"
      },
      {
        category: "Backend",
        details: "Node.js"
      },
      {
        category: "Styling",
        details: "Tailwind CSS"
      }
    ],
    
    skills: [
      "Frontend Development", "Angular", "JavaScript", "Game Development", 
      "Algorithm Design", "Responsive Design"
    ],
    
    links: [
      {
        type: "github",
        url: "https://github.com/Dip3102001/chess",
        title: "Source Code",
        description: "View the complete source code on GitHub"
      }
      // {
      //   type: "external",
      //   url: "https://chess-game-demo.example.com",
      //   title: "Live Demo",
      //   description: "Try the chess game application online"
      // }
    ]
  },

  {
    "id": "camera-placement-optimization",
    "title": "Optimized Camera Placement System",
    "image": "/camoptix-v2.webp",
    "timeline": "ECE-650 Project",
    "shortDescription": "A system for optimizing street camera placement using graph theory and SAT solvers.",
    "description": "This project focused on optimizing camera placement on streets to ensure maximum coverage of intersections and roadways. It was executed in four iterative phases, each addressing a critical aspect of the problem. The first phase involved identifying street intersections on a given map, representing crossings as vertices and roads as edges. The second phase implemented an algorithm to compute the shortest path between vertices. The third phase introduced a randomized input generator for testing the algorithm, incorporating inter-process communication to enhance workflow efficiency. In the final phase, the problem was transformed into Conjunctive Normal Form (CNF), and an off-the-shelf SAT solver was used to determine the minimum number of intersections required for camera coverage.",
    
    "features": [
      {
        "title": "Graph Representation",
        "description": "Models intersections as vertices and roads as edges."
      },
      {
        "title": "Shortest Path Calculation",
        "description": "Implements an algorithm to compute optimal routes."
      },
      {
        "title": "Randomized Input Generator",
        "description": "Generates test cases to validate the algorithm."
      },
      {
        "title": "Inter-Process Communication",
        "description": "Facilitates efficient data exchange between processes."
      },
      {
        "title": "SAT Solver Integration",
        "description": "Determines the minimal camera coverage using CNF transformation."
      }
    ],
    
    "technologies": [
      {
        "category": "Programming Languages",
        "details": "C++, Python"
      },
      {
        "category": "Operating System",
        "details": "Linux"
      },
      {
        "category": "Version Control",
        "details": "Git"
      },
      {
        "category": "System Design",
        "details": "Multiprocessing, Multithreading, Inter-Process Communication"
      }
    ],
    
    "skills": [
      "Graph Algorithms", "C++", "Python", "Linux", "Git", 
      "Multiprocessing", "Multithreading", "Inter-Process Communication", 
      "Unit Testing", "Integration Testing", "SAT Solvers"
    ],
    
    "links": [
      {
        "type": "github",
        "url": "https://github.com/Dip3102001/CamOptix",
        "title": "Source Code",
        "description": "View the complete source code on GitHub"
      }
    ]
  },

  {
    "id": "clickbait-generation-classification",
    "title": "Clickbait Generation and Classification",
    "image": "clickbait.jpg",
    "timeline": "May 2024 - Aug 2024",
    "shortDescription": "A project focused on classifying and generating clickbait headlines using transformer models.",
    "description": "This project tackled two key challenges in social media analytics: clickbait classification and clickbait generation. The first task involved predicting the most suitable clickbait for posts sourced from platforms like Reddit and Twitter. Various machine learning and deep learning models were tested, with pre-trained transformer models achieving the highest accuracy of 77.53%, outperforming the best SemEval 2023 score of 74%. The second task focused on generating clickbait headlines for given posts. Due to limited training data and computational constraints, a pre-trained sequence-to-sequence transformer model was fine-tuned instead of training from scratch. This approach achieved a strong METEOR score of 0.299, demonstrating the model's ability to produce high-quality, contextually relevant clickbait headlines. The project enhanced my expertise in transformer-based architectures, text classification, and sequence generation in NLP applications.",
    
    "features": [
      {
        "title": "Clickbait Classification",
        "description": "Predicts the most suitable clickbait for social media posts."
      },
      {
        "title": "Clickbait Headline Generation",
        "description": "Generates contextually relevant clickbait headlines using a transformer-based model."
      },
      {
        "title": "Transformer-Based NLP",
        "description": "Utilizes pre-trained transformer models for both classification and generation tasks."
      },
      {
        "title": "Performance Optimization",
        "description": "Achieved an accuracy of 77.53% for classification and a METEOR score of 0.299 for generation."
      }
    ],
    
    "technologies": [
      {
        "category": "Machine Learning Framework",
        "details": "PyTorch"
      },
      {
        "category": "Programming Language",
        "details": "Python"
      },
      {
        "category": "Deep Learning Models",
        "details": "Transformers, Large Language Models (LLMs)"
      },
      {
        "category": "Natural Language Processing",
        "details": "Text Classification, Sequence Generation"
      }
    ],
    
    "skills": [
      "Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", 
      "Python", "PyTorch", "Transformer Models", "Large Language Models (LLM)", 
      "Text Classification", "Sequence Generation"
    ],
    
    "links": [
      {
        "type": "github",
        "url": "https://github.com/username/clickbait-project",
        "title": "Source Code",
        "description": "View the complete source code on GitHub"
      }
    ]
  },
  {
    "id": "sea-ice-classification",
    "title": "Sea Ice Classification from SAR Images",
    "image": "/sea-ice.webp",
    "timeline": "Jan 2023 - Apr 2023",
    "shortDescription": "Developed a deep learning model for classifying sea ice using SAR images during an internship at ISRO.",
    "description": "During my final semester internship at the Indian Space Research Organisation (ISRO), I worked under the Microwave Data Processing Department (MDPD) on the project 'Sea Ice Classification from SAR (Synthetic Aperture Radar) Images.' Using the SI-STSAR-7 dataset from the IEEE Data Portal, I analyzed temporally spaced SAR image stacks to develop a robust classification model. I compared the performance of a CONV-LSTM model and a ResNet-34 CNN model, achieving 97.33% and 96% accuracy, respectively. The CONV-LSTM model, which leveraged the temporal resolution of SAR images, outperformed the CNN and was used for final predictions. Additionally, I automated SAR image pre-processing using Python scripts integrated with ESA’s SNAP (GPT) tool, reducing processing time by 80% through parallel execution. I also developed a shell script to streamline consecutive SAR image downloads from ASF-VERTEX, ensuring efficiency and consistency. The project enhanced my skills in deep learning, image processing, and automation, contributing to advancements in remote sensing technologies for polar research.",
    
    "features": [
      {
        "title": "Deep Learning-Based Classification",
        "description": "Implemented CONV-LSTM and ResNet-34 models for sea ice classification."
      },
      {
        "title": "High-Accuracy Model",
        "description": "Achieved 97.33% accuracy with the CONV-LSTM model."
      },
      {
        "title": "Automated Image Pre-Processing",
        "description": "Reduced SAR image pre-processing time by 80% using parallel execution with ESA’s SNAP tool."
      },
      {
        "title": "Optimized Data Downloading",
        "description": "Developed shell scripts for automated SAR image downloads from ASF-VERTEX."
      }
    ],
    
    "technologies": [
      {
        "category": "Deep Learning Framework",
        "details": "PyTorch"
      },
      {
        "category": "Programming Languages",
        "details": "Python, Shell Scripting"
      },
      {
        "category": "Remote Sensing Tools",
        "details": "ESA SNAP (GPT), ASF-VERTEX, ArcGIS"
      },
      {
        "category": "Machine Learning Models",
        "details": "CONV-LSTM, ResNet-34"
      }
    ],
    
    "skills": [
      "Image Processing", "Machine Learning", "Deep Learning", 
      "Model Optimization", "Python", "PyTorch", "Shell Scripting", 
      "ArcGIS", "Automated Data Processing"
    ],
    
    "links": [
      {
        "type": "github",
        "url": "https://github.com/Dip3102001/Clickbait-1",
        "title": "Source Code",
        "description": "View the complete source code on GitHub"
      },
      {
        "type": "github",
        "url": "https://github.com/Dip3102001/Clickbait-2",
        "title": "Source Code",
        "description": "View the complete source code on GitHub"
      }
    ]
  },
  {
    "id": "image-colorization",
    "title": "Deep Learning-Based Image Colorization",
    "image": "color.webp",
    "timeline": "Jul 2022 - Dec 2022",
    "shortDescription": "Implemented a GAN-based model for transforming grayscale images into high-quality colored visuals.",
    "description": "The Image Colorization project utilizes deep learning techniques to convert grayscale images into semantically accurate and vivid colorized visuals. A Generative Adversarial Network (GAN) framework is employed, with a generator predicting plausible color distributions and a discriminator assessing realism. A UNET architecture enhances spatial details, while the LAB color space reduces computational complexity by focusing only on the color channels. The model was trained on the MIRFLICKR25k dataset, containing 25,000 grayscale images with corresponding color labels. The project addresses key challenges such as color ambiguity and variability in natural scenes. Beyond general colorization, specialized applications were explored, including medical image colorization (retinal scans) and restoration of historical photographs and videos. A real-time colorization mobile application was also developed using a client-server model with Flask as the backend. Future enhancements include integrating WGAN-GP for training stability, attention mechanisms for finer detail, and optimizing video colorization for smoother transitions.",
    
    "features": [
      {
        "title": "GAN-Based Colorization",
        "description": "Implemented a GAN model with a UNET-based generator for improved spatial detail preservation."
      },
      {
        "title": "Real-Time Mobile Application",
        "description": "Developed a mobile app with a Flask backend for real-time image colorization."
      },
      {
        "title": "Specialized Applications",
        "description": "Explored medical diagnostics (retina image colorization) and historical image restoration."
      },
      {
        "title": "Future Improvements",
        "description": "Plans to integrate WGAN-GP, attention mechanisms, and video colorization optimization."
      }
    ],
    
    "technologies": [
      {
        "category": "Deep Learning Frameworks",
        "details": "PyTorch, TensorFlow"
      },
      {
        "category": "Programming Languages",
        "details": "Python, JavaScript"
      },
      {
        "category": "Web & Mobile Development",
        "details": "React, Angular, Flask, Node.js, Spring Boot"
      },
      {
        "category": "Computer Vision Techniques",
        "details": "GANs, UNET, LAB Color Space"
      }
    ],
    
    "skills": [
      "Generative AI", "Deep Learning with GANs", "Image Processing",
      "PyTorch", "Python", "Model Optimization", "Web Development",
      "Flask Backend Development"
    ],
  },
  {
    "id": "whatsapp-clone",
    "title": "WhatsApp Clone",
    "image": "/wp-v2.webp",
    "timeline": "May 2022 - Dec 2022",
    "shortDescription": "A messaging app inspired by WhatsApp with real-time chat and authentication.",
    "description": "As part of our end-semester Android project at Birla Vishvakarma Mahavidyalaya, we developed a WhatsApp-inspired messaging application to explore various Android development concepts. The app features a user-friendly UI for seamless interaction, mobile number-based authentication for secure access, and real-time message notifications powered by Firebase. Additionally, SQLite was used to maintain chat history, ensuring a persistent and reliable messaging experience. This project helped us integrate core Android functionalities with advanced features to create a robust messaging platform.",
    
    // Features list
    "features": [
      {
        "title": "Real-Time Messaging",
        "description": "Instant communication powered by Firebase"
      },
      {
        "title": "Authentication & Authorization",
        "description": "Secure login via mobile number verification"
      },
      {
        "title": "Chat History Storage",
        "description": "SQLite database ensures persistent conversation records"
      },
      {
        "title": "User-Friendly UI",
        "description": "Seamless and intuitive interface for easy navigation"
      },
      {
        "title": "Push Notifications",
        "description": "Real-time message alerts for active conversations"
      }
    ],
    
    // Technologies list
    "technologies": [
      {
        "category": "Frontend",
        "details": "Android (Java/Kotlin)"
      },
      {
        "category": "Backend",
        "details": "Firebase & Google Cloud Platform (GCP)"
      },
      {
        "category": "Database",
        "details": "SQLite"
      }
    ],
    
    // Skills showcased
    "skills": [
      "Android Development", "Firebase", "Google Cloud Platform (GCP)", "SQLite"
    ],
    
    // Links
    "links": [
      {
        "type": "github",
        "url": "https://github.com/Dip3102001/Whatsapp-clone",
        "title": "Source Code",
        "description": "View the complete source code on GitHub"
      }
      // {
      //   "type": "external",
      //   "url": "https://whatsapp-clone-demo.example.com",
      //   "title": "Live Demo",
      //   "description": "Try the messaging application online"
      // }
    ]
  },
  {
    "id": "enigma-simulation",
    "title": "Enigma Machine Simulation",
    "image": "/enigma.webp",
    "timeline": "Jun 2020 - Oct 2020",
    "shortDescription": "A C++ simulation of the Enigma machine for demonstrating encryption.",
    "description": "As part of a Discrete Mathematics course at Birla Vishvakarma Mahavidyalaya, our team delivered a presentation on the Enigma machine. I contributed by developing a C++ simulation that provided a hands-on demonstration of its functionality and encryption process. The project showcased how the Enigma cipher works, including rotor mechanisms and letter substitutions, helping to illustrate its historical significance in cryptography.",
    
    // Features list
    "features": [
      {
        "title": "Enigma Machine Simulation",
        "description": "Accurately mimics the encryption process of the original Enigma machine"
      },
      {
        "title": "Rotor Mechanism",
        "description": "Implements rotor-based encryption for message scrambling"
      },
      {
        "title": "User Input Encryption & Decryption",
        "description": "Allows users to input text and observe its transformation"
      },
      {
        "title": "Configurable Settings",
        "description": "Supports different rotor settings to simulate various Enigma models"
      }
    ],
    
    // Technologies list
    "technologies": [
      {
        "category": "Programming Languages",
        "details": "C, C++"
      },
      {
        "category": "Libraries",
        "details": "Standard Template Library (STL)"
      }
    ],
    
    // Skills showcased
    "skills": [
      "C (Programming Language)", "C++", "Standard Template Library (STL)", "Cryptography", "Algorithmic Problem Solving"
    ],
  },
  {
    "id": "bluetooth-car",
    "title": "Bluetooth-Controlled Car",
    "image": "/bluetooth-big.jpeg",
    "timeline": "Jul 2019 - Nov 2019",
    "shortDescription": "An Arduino-based Bluetooth-controlled car for hands-on embedded systems learning.",
    "description": "As part of our first-year project in Semiconductor Technology at Birla Vishvakarma Mahavidyalaya, we designed and developed a Bluetooth-controlled car using Arduino. This project provided hands-on experience with microcontrollers and hardware interfacing, enhancing our understanding of embedded systems. It also allowed us to apply theoretical knowledge to real-world problem-solving, fostering technical proficiency and teamwork.",
    
    // Features list
    "features": [
      {
        "title": "Bluetooth Control",
        "description": "Allows remote control of the car via a smartphone app"
      },
      {
        "title": "Arduino Integration",
        "description": "Utilizes an Arduino board for processing and motor control"
      },
      {
        "title": "Motor Driver Circuit",
        "description": "Controls car movement using an H-bridge motor driver"
      },
      {
        "title": "Hardware-Software Integration",
        "description": "Seamlessly connects Bluetooth communication with hardware execution"
      }
    ],
    
    // Technologies list
    "technologies": [
      {
        "category": "Microcontroller",
        "details": "Arduino"
      },
      {
        "category": "Communication",
        "details": "Bluetooth module (HC-05/HC-06)"
      },
      {
        "category": "Electronics",
        "details": "Motor driver circuit, sensors"
      }
    ],
    
    // Skills showcased
    "skills": [
      "Arduino", "Microcontrollers", "Hardware-Software Integration"
    ],
  }  
];

  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white">My Projects</h1>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;