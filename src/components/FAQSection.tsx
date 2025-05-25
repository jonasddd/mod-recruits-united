
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
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

  const faqs = [
    {
      question: "Do I need previous moderation experience?",
      answer: "While previous experience is helpful, it's not required! We value enthusiasm, good judgment, and a willingness to learn. We provide comprehensive training for all new moderators."
    },
    {
      question: "How soon will I hear back after applying?",
      answer: "We typically respond within 24-48 hours via Discord DM. During busy periods, it may take up to 72 hours. We review every application carefully."
    },
    {
      question: "What are the time commitments?",
      answer: "We're flexible with schedules! Most moderators contribute 10-20 hours per week, but we can work with your availability. Consistency is more important than total hours."
    },
    {
      question: "Is this a paid position?",
      answer: "This is a volunteer position, but we offer perks like special roles, early access to features, and recognition within the community. The experience and skills gained are invaluable."
    },
    {
      question: "What tools and bots do you use?",
      answer: "We use popular moderation bots like Carl-bot, Dyno, and MEE6, along with custom tools. Don't worry if you're unfamiliar - we'll teach you everything you need to know."
    },
    {
      question: "Can I apply if I'm under 18?",
      answer: "Yes! We welcome mature applicants of all ages. However, applicants under 16 may have additional requirements and closer supervision during the initial period."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-discord-700 mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Find answers to common questions about our moderator application process and requirements.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass rounded-2xl overflow-hidden transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-discord-600 transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">Feel free to reach out to us directly on Discord for any additional questions about the application process.</p>
            <button className="neumorphic px-6 py-3 rounded-xl text-discord-700 font-medium transition-all duration-300 hover:animate-glow">
              Join Our Discord
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
