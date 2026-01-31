import React, { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { aboutInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Contact">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card glowEffect>
            <h3 className="font-orbitron text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-blue/20 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-accent-gold/10 to-accent-blue/10 border border-accent-gold/20 flex items-center justify-center">
                    <i className="fas fa-envelope text-accent-gold"></i>
                  </div>
                </div>
                <div>
                  <div className="font-rajdhani font-semibold mb-1">Email</div>
                  <div className="text-gray-400 text-sm font-space-mono break-all">{aboutInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-blue/20 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-accent-gold/10 to-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-accent-blue"></i>
                  </div>
                </div>
                <div>
                  <div className="font-rajdhani font-semibold mb-1">Location</div>
                  <div className="text-gray-400 text-sm">{aboutInfo.location}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-blue/20 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-accent-gold/10 to-accent-blue/10 border border-green-500/20 flex items-center justify-center">
                    <i className="fas fa-clock text-green-400"></i>
                  </div>
                </div>
                <div>
                  <div className="font-rajdhani font-semibold mb-1">Availability</div>
                  <div className="text-gray-400 text-sm">Response within 24h</div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card glowEffect>
            <h3 className="font-orbitron text-xl font-bold mb-6">Social Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-accent-gold/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-12 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-accent-gold/50 transition-all">
                  <i className="fab fa-github text-lg text-gray-400 group-hover:text-accent-gold transition-colors"></i>
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-accent-blue/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-12 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-accent-blue/50 transition-all">
                  <i className="fab fa-linkedin-in text-lg text-gray-400 group-hover:text-accent-blue transition-colors"></i>
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-accent-gold/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-12 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-accent-gold/50 transition-all">
                  <i className="fab fa-twitter text-lg text-gray-400 group-hover:text-accent-gold transition-colors"></i>
                </div>
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-accent-blue/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative h-12 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-accent-blue/50 transition-all">
                  <i className="fab fa-codepen text-lg text-gray-400 group-hover:text-accent-blue transition-colors"></i>
                </div>
              </a>
            </div>
          </Card>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card glowEffect>
            <h3 className="font-orbitron text-xl font-bold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-rajdhani font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all font-rajdhani hover:bg-white/10"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-rajdhani font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all font-rajdhani hover:bg-white/10"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-rajdhani font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all font-rajdhani hover:bg-white/10"
                  placeholder="Message subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-rajdhani font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all resize-none font-rajdhani hover:bg-white/10"
                  placeholder="Your message..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="relative group w-full md:w-auto px-8 py-4 bg-gradient-to-r from-accent-gold to-accent-blue text-dark-950 font-orbitron font-bold rounded-lg hover-lift transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">SEND MESSAGE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;