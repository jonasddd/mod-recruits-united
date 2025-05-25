
import { useEffect, useRef, useState } from 'react';
import { FileText, Send, MessageCircle, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: FileText,
      title: "Fill Out Application",
      description: "Complete our comprehensive application form with your Discord details, experience, and motivations.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Send,
      title: "Instant Submission",
      description: "Your application is automatically sent directly to our server owner via secure Discord webhook.",
      color: "from-discord-500 to-purple-500"
    },
    {
      icon: MessageCircle,
      title: "Direct Response",
      description: "Receive a personal response via Discord message within 24-48 hours about your application status.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCircle,
      title: "Welcome Aboard",
      description: "If selected, get instant access to moderator channels and begin your journey with our team.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-discord-700 mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Application Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            How the <span className="gradient-text">Application Works</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our streamlined process ensures quick responses and transparent communication throughout your application journey.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-discord-200 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative group transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-discord-200 flex items-center justify-center text-sm font-semibold text-discord-600 z-10">
                    {index + 1}
                  </div>
                  
                  <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 mt-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Information */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass rounded-2xl p-6 inline-block">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-gray-600">Average Response: 24-48 hours</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-gray-300"></div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-discord-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-gray-600">Success Rate: 85% for complete applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
