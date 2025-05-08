import { useEffect, useRef } from 'react';
import profile from '../assets/profile.jpg';

const About = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-24 pt-28 bg-white opacity-0 transition-opacity duration-1000">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-primary font-medium rounded-full bg-blue-100 mb-4">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark">Know Me More</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary to-blue-700 rounded-xl transform rotate-3 shadow-xl"></div>
              <div className="absolute inset-0 transform -rotate-3 bg-white rounded-xl overflow-hidden flex items-center justify-center shadow-2xl">
                <img 
                  src={profile} 
                  alt="Alvin Lagoras" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 left-6 w-20 h-20 bg-secondary rounded-lg shadow-lg transform rotate-12"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-lg shadow-lg transform -rotate-12"></div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-blue-600 rounded-full shadow-lg flex flex-col items-center justify-center text-white">
                <span className="text-3xl font-bold">1+</span>
                <span className="text-sm">Years of<br/>Experience</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-3xl font-bold text-dark mb-4">I'm <span className="text-primary">Alvin Lagoras</span>, a Student Developer</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate student developer with a strong foundation in modern web technologies. 
              Currently pursuing my degree in Information Technology, I combine academic knowledge with hands-on
              project experience to build responsive, user-friendly applications.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I enjoy turning complex problems into simple, beautiful, and intuitive designs. 
              When I'm not coding or learning new technologies, you'll find me working on hardware, 
              networking, optimizing systems, or collaborating with fellow tech enthusiasts.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div className="flex flex-col items-center text-center border-b border-gray-200 pb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-dark text-base mb-1">Name:</h4>
                <p className="text-gray-600">Alvin Lagoras</p>
              </div>
              
              <div className="flex flex-col items-center text-center border-b border-gray-200 pb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h4 className="font-bold text-dark text-base mb-1">Email:</h4>
                <p className="text-gray-600">alvin.lagoras@gmail.com</p>
              </div>
              
              <div className="flex flex-col items-center text-center border-b border-gray-200 pb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-dark text-base mb-1">Location:</h4>
                <p className="text-gray-600">Cebu, Philippines</p>
              </div>
              
              <div className="flex flex-col items-center text-center border-b border-gray-200 pb-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h4 className="font-bold text-dark text-base mb-1">Availability:</h4>
                <p className="text-gray-600">Available for freelance</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center sm:justify-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
              <a 
                href="#contact" 
                className="btn-primary w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0 mr-0 sm:mr-4"
              >
                Hire Me
              </a>
              <a 
                href="#" 
                className="btn-outline w-full sm:w-auto text-center sm:text-left"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
