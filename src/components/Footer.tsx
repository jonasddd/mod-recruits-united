
import { Heart, Shield, Users, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">ModRecruits</h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Building stronger Discord communities through dedicated moderation. 
              Join our team and help create positive spaces for thousands of members.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <Users className="w-4 h-4 mr-2" />
                <span>500+ Active Members</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Shield className="w-4 h-4 mr-2" />
                <span>15+ Moderators</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Our Mission', href: '#mission' },
                { label: 'Apply Now', href: '#application' },
                { label: 'FAQ', href: '#faq' }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@modrecruits.com</span>
              </div>
              <button className="neumorphic px-4 py-2 rounded-lg text-discord-700 font-medium text-sm transition-all duration-300 hover:scale-105">
                Join Discord Server
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span>for the Discord community</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Community Guidelines</button>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-500 mt-6">
            © 2024 ModRecruits. All rights reserved. This website is not affiliated with Discord Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
