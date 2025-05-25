
import { useEffect, useState } from 'react';
import { ArrowRight, Users, Shield } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToApplication = () => {
    const element = document.querySelector('#application');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Hero Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-discord-700 mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Join Our Moderation Team
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="gradient-text">Apply to Become</span>
              <br />
              <span className="text-gray-800">a Moderator</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Help shape our growing Discord community. We're looking for dedicated individuals 
              who share our values and want to make a positive impact.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button
                onClick={scrollToApplication}
                className="group neumorphic px-8 py-4 rounded-xl text-discord-700 font-semibold text-lg transition-all duration-300 hover:animate-glow flex items-center"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm">Join 500+ active members</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-discord-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Community Support</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-discord-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Active Members</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-discord-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Current Moderators</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-discord-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
