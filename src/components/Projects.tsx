import { useRef, useEffect } from 'react';
import portfolio from '../assets/portfolio.png';
import attendance from '../assets/attendance.png';
import billSplit from '../assets/billSplit.png';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Only keep the top 3 projects
  const projects = [
    {
      title: "RFID Gate Attendance System",
      description: "A full-stack web application for managing student records, course enrollments, and academic performance tracking. Built with Laravel, MySQL, and React.",
      tags: ["React", "Firebase", "Tailwind CSS", "Vite"],
      image: attendance,
      demoLink: "https://rfid-attendance-monitor.vercel.app/",
      codeLink: "https://github.com/MrQuby",
    },
    {
      title: "Bill Split",
      description: "A cross-platform mobile application that connects local restaurants with customers. Features include real-time order tracking and payment processing.",
      tags: ["React", "Firebase", "Tailwind CSS", "Vite"],
      image: billSplit,
      demoLink: "https://example.com",
      codeLink: "https://github.com/MrQuby",
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React, TypeScript and Tailwind CSS. Features include dark mode, animations, and contact form with validation.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      image: portfolio,
      demoLink: "https://example.com",
      codeLink: "https://github.com/MrQuby",
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 pt-28 bg-white opacity-0 transition-opacity duration-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-primary font-medium rounded-full bg-blue-100 mb-4">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark">Student Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Explore my academic and personal projects developed while pursuing my Computer Science degree.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-primary relative overflow-hidden group-hover:h-36 transition-all duration-300">
                {/* Project image */}
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/MrQuby" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            View More Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
