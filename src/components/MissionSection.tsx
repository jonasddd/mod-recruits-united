
import { useEffect, useRef, useState } from 'react';
import { Target, Heart, Users, Zap } from 'lucide-react';

const MissionSection = () => {
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

  return (
    <section id="mission" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-discord-700 mb-4">
            <Target className="w-4 h-4 mr-2" />
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why We're <span className="gradient-text">Hiring Moderators</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Our Discord community is rapidly growing, and we need passionate individuals 
            to help maintain a welcoming, safe, and engaging environment for all members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Heart,
              title: "Passion for Community",
              description: "We seek moderators who genuinely care about fostering positive interactions and building meaningful connections.",
              delay: "delay-100"
            },
            {
              icon: Users,
              title: "Collaborative Spirit",
              description: "Work alongside our existing team to create consistent moderation standards and share knowledge.",
              delay: "delay-200"
            },
            {
              icon: Zap,
              title: "Quick Response",
              description: "Help us maintain rapid response times to member questions, conflicts, and community needs.",
              delay: "delay-300"
            },
            {
              icon: Target,
              title: "Goal-Oriented",
              description: "Focus on our shared mission of creating the best Discord community experience possible.",
              delay: "delay-400"
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 ${item.delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-discord-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className={`mt-16 glass rounded-2xl p-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">What We Look For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-medium text-gray-800 mb-2">Fair & Consistent</h4>
              <p className="text-sm text-gray-600">Apply rules equally and maintain consistency in all moderation decisions.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💬</div>
              <h4 className="font-medium text-gray-800 mb-2">Great Communication</h4>
              <p className="text-sm text-gray-600">Excellent written communication skills and ability to de-escalate conflicts.</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⏰</div>
              <h4 className="font-medium text-gray-800 mb-2">Available & Reliable</h4>
              <p className="text-sm text-gray-600">Consistent presence during your scheduled hours and reliable attendance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
