
import { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Senior Moderator",
      avatar: "AC",
      content: "Joining this moderation team was one of the best decisions I've made. The community is supportive, the tools are excellent, and I've learned so much about community management.",
      rating: 5,
      joinDate: "Member since 2022"
    },
    {
      name: "Sarah Williams",
      role: "Community Moderator",
      avatar: "SW",
      content: "The application process was smooth and transparent. The team welcomed me with open arms and provided amazing training. I love helping our community grow!",
      rating: 5,
      joinDate: "Member since 2023"
    },
    {
      name: "Marcus Johnson",
      role: "Event Moderator",
      avatar: "MJ",
      content: "As someone with no prior experience, I was nervous about applying. But the team's mentorship and training program made me feel confident and prepared for the role.",
      rating: 5,
      joinDate: "Member since 2023"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-discord-700 mb-4">
            <Quote className="w-4 h-4 mr-2" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What Our <span className="gradient-text">Moderators Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Hear from our current team members about their experience joining and working with our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 hover:scale-105 transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-discord-300" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-discord-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-discord-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.joinDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Join Our Team?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of a supportive community where your contributions matter. Start your moderation journey with us today.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#application');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="neumorphic px-8 py-4 rounded-xl text-discord-700 font-semibold transition-all duration-300 hover:animate-glow"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
