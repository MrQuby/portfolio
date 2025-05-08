import { useState, useEffect } from 'react';
import profile from '../assets/profile.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const phrases = [
      'a Student Developer',
      'a React Developer'
    ];
    
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const phrase = phrases[currentPhrase];
      
      if (isDeleting) {
        setText(phrase.substring(0, currentChar - 1));
        currentChar--;
      } else {
        setText(phrase.substring(0, currentChar + 1));
        currentChar++;
      }
      
      setIsTyping(true);
      
      if (!isDeleting && currentChar === phrase.length) {
        // Start deleting after a pause
        isDeleting = true;
        setIsTyping(false);
        typingSpeed = 100;
        setTimeout(type, 1500);
      } else if (isDeleting && currentChar === 0) {
        // Move to next phrase
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typingSpeed = 100;
        setTimeout(type, 500);
      } else {
        // Continue with current action (typing or deleting)
        setTimeout(type, typingSpeed);
      }
    };
    
    setTimeout(type, 1000);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-60 w-56 h-56 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:max-w-2xl">
            <p className="inline-block px-3 py-1 text-primary font-medium rounded-full bg-blue-100 mb-6">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-dark mb-4 leading-tight">Alvin Lagoras</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-600 mb-6">
              <span>{text}</span>
              <span className={`inline-block w-1 h-8 bg-primary ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
              A 3rd year BSIT student passionate about creating modern web and mobile applications with cutting-edge technologies.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn btn-outline">
                View My Work
              </a>
            </div>
          </div>
          
          <div className="hidden md:block md:w-2/5">
            <div className="relative w-full h-96">
              {/* Profile image with design elements */}
              <div className="w-full h-96 bg-gradient-to-br from-primary to-blue-700 rounded-xl transform rotate-3 shadow-xl"></div>
              <div className="absolute inset-0 transform -rotate-3 bg-white rounded-xl overflow-hidden flex items-center justify-center shadow-2xl">
                <img 
                  src={profile} 
                  alt="Alvin Lagoras" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-lg shadow-lg transform rotate-12"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-yellow-400 rounded-lg shadow-lg transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
