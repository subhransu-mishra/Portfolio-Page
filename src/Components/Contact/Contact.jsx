import { useState, useEffect } from 'react';
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('form');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Your message has been sent successfully! We\'ll get back to you soon.'
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }, 2000);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 py-20 overflow-hidden" id='contact_section'>
      {/* Tech background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        
        {/* Tech grid lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div key={`h-${i}`} className="absolute h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" style={{ top: `${i * 10}%`, left: 0, right: 0 }}></div>
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={`v-${i}`} className="absolute w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent" style={{ left: `${i * 10}%`, top: 0, bottom: 0 }}></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-0.5">
              <div className="w-full h-full flex items-center justify-center rounded-full bg-gray-900">
                <Send className="text-blue-400 w-6 h-6" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas.</p>
        </div>
        
        <div className="max-w-6xl mx-auto bg-gray-800/40 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Contact Info */}
            <div className="lg:w-2/5 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20 p-8 lg:p-12">
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-gray-300 mb-8">Ready to start your next project? Reach out through any of these channels.</p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Location</h4>
                      <p className="text-gray-400">Bhubaneswar, Odisha, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-indigo-400" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Email</h4>
                      <a href="mailto:work.subhransu@gmail.com" className="text-gray-400 hover:text-blue-400 transition">hello@techdev.com</a>
                    </div>
                  </div>
                  
                 
                  
                
                </div>
                
               
              </div>
            </div>
            
            {/* Right side - Form and Map toggle */}
            <div className="lg:w-3/5 bg-gray-800/20 backdrop-blur-xl">
              <div className="p-6">
                <div className="flex mb-6 bg-gray-700/30 rounded-lg p-1">
                  <button 
                    className={`flex-1 py-2 px-4 rounded-md transition ${activeTab === 'form' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' : 'text-gray-300 hover:text-white'}`}
                    onClick={() => setActiveTab('form')}
                  >
                    Contact Form
                  </button>
                  <button 
                    className={`flex-1 py-2 px-4 rounded-md transition ${activeTab === 'map' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' : 'text-gray-300 hover:text-white'}`}
                    onClick={() => setActiveTab('map')}
                  >
                    Location
                  </button>
                </div>
                
                <div className="min-h-[460px]">
                  {activeTab === 'form' ? (
                    <div className="p-4">
                      {formStatus.type && (
                        <div className={`p-4 mb-6 rounded-lg flex items-start ${formStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {formStatus.type === 'success' ? 
                            <CheckCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" /> : 
                            <AlertCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                          }
                          <p>{formStatus.message}</p>
                        </div>
                      )}
                      
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">Full Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400 outline-none transition"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="johndoe@example.com"
                              required
                              className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400 outline-none transition"
                            />
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="subject" className="block text-gray-300 mb-2 text-sm">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="What is this regarding?"
                            className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400 outline-none transition"
                          />
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">Your Message</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can I help you?"
                            required
                            rows="5"
                            className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 text-white placeholder-gray-400 outline-none transition resize-none"
                          ></textarea>
                        </div>
                        
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className={`px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium flex items-center justify-center transition
                          ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-700/40'}`}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="h-full">
                      <div className="bg-gray-800 h-[460px] rounded-lg overflow-hidden relative">
                        {/* Placeholder for map - in a real app you'd use a proper map component */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                          <div className="text-center">
                            <div className="inline-block p-4 rounded-full bg-gray-700/50 mb-4">
                              <MapPin className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-white text-xl font-medium mb-2">Our Location</h3>
                            <p className="text-gray-400 mb-4">Tech Innovation Hub<br/>Bhubaneswar, Odisha , India</p>
                            <a 
                              href="https://maps.app.goo.gl/BFXAQtbeo5fCQe9F6" 
                              target="_blank" 
                              rel="noreferrer" 
                              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
                            >
                              View on Google Maps
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating tech elements */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 blur-xl"></div>
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-xl"></div>
      </div>
    </section>
  );
}

// Helper component for social icons
function SocialIcon({ platform }) {
  switch (platform) {
    case 'github':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'dribbble':
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.175.15.35.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
        </svg>
      );
    default:
      return null;
  }
}