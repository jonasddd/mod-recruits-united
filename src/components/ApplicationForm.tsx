
import { useEffect, useRef, useState } from 'react';
import { Send, User, Clock, Award, MessageSquare } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ApplicationForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    discordUsername: '',
    age: '',
    availability: '',
    experience: '',
    motivation: ''
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate webhook submission
    try {
      // In a real application, this would send to a Discord webhook
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted! 🎉",
        description: "Your application has been sent directly to our server owner. You'll hear back within 24-48 hours via Discord.",
      });
      
      setFormData({
        discordUsername: '',
        age: '',
        availability: '',
        experience: '',
        motivation: ''
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="application" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-discord-700 mb-4">
            <Send className="w-4 h-4 mr-2" />
            Apply Now
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            <span className="gradient-text">Moderator</span> Application
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Take the first step towards joining our moderation team. Fill out the form below and we'll get back to you soon.
          </p>
        </div>

        <div className={`glass rounded-3xl p-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Discord Username */}
            <div>
              <label htmlFor="discordUsername" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 mr-2" />
                Discord Username + Tag
              </label>
              <input
                type="text"
                id="discordUsername"
                name="discordUsername"
                value={formData.discordUsername}
                onChange={handleChange}
                placeholder="e.g., YourUsername#1234"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-discord-500 focus:border-discord-500 transition-colors bg-white/50 backdrop-blur-sm"
              />
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                Age
              </label>
              <select
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-discord-500 focus:border-discord-500 transition-colors bg-white/50 backdrop-blur-sm"
              >
                <option value="">Select your age range</option>
                <option value="13-15">13-15 years old</option>
                <option value="16-17">16-17 years old</option>
                <option value="18-20">18-20 years old</option>
                <option value="21-25">21-25 years old</option>
                <option value="26-30">26-30 years old</option>
                <option value="30+">30+ years old</option>
              </select>
            </div>

            {/* Availability */}
            <div>
              <label htmlFor="availability" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                Availability (Hours per week & timezone)
              </label>
              <input
                type="text"
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="e.g., 15-20 hours/week, EST timezone, mostly evenings"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-discord-500 focus:border-discord-500 transition-colors bg-white/50 backdrop-blur-sm"
              />
            </div>

            {/* Previous Experience */}
            <div>
              <label htmlFor="experience" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Award className="w-4 h-4 mr-2" />
                Previous Moderation Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4}
                placeholder="Describe any previous moderation experience, including Discord servers, forums, or other communities you've helped manage..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-discord-500 focus:border-discord-500 transition-colors bg-white/50 backdrop-blur-sm resize-none"
              />
            </div>

            {/* Motivation */}
            <div>
              <label htmlFor="motivation" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="w-4 h-4 mr-2" />
                Why do you want to be a moderator?
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your motivation for becoming a moderator, what you hope to contribute, and why you're interested in our community..."
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-discord-500 focus:border-discord-500 transition-colors bg-white/50 backdrop-blur-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full neumorphic px-8 py-4 rounded-xl text-discord-700 font-semibold text-lg transition-all duration-300 hover:animate-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-discord-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </div>

            {/* Disclaimer */}
            <div className="text-center text-xs text-gray-500 mt-4">
              By submitting this application, you agree to our community guidelines and moderation policies.
              We typically respond within 24-48 hours via Discord DM.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
