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
    // Add your form submission logic here
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
    <Section id="contact" title="Contact" subtitle="Restons en contact">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-cyan-400/20 flex items-center justify-center">
                  <i className="fas fa-envelope text-primary-500"></i>
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-400">{aboutInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-cyan-400/20 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-primary-500"></i>
                </div>
                <div>
                  <div className="font-medium">Localisation</div>
                  <div className="text-gray-400">{aboutInfo.location}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500/20 to-cyan-400/20 flex items-center justify-center">
                  <i className="fas fa-clock text-primary-500"></i>
                </div>
                <div>
                  <div className="font-medium">Disponibilité</div>
                  <div className="text-gray-400">Réponse sous 24h</div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-6">Réseaux sociaux</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-lg glass-morphism flex items-center justify-center hover-lift">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-lg glass-morphism flex items-center justify-center hover-lift">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-lg glass-morphism flex items-center justify-center hover-lift">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-lg glass-morphism flex items-center justify-center hover-lift">
                <i className="fab fa-codepen"></i>
              </a>
            </div>
          </Card>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <h3 className="text-xl font-bold mb-6">Envoyez-moi un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Votre message..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary-600 to-cyan-500 text-white font-semibold rounded-lg hover-lift hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Contact;