'use client'
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SocialMedia from './SocialMedia';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add your form submission logic here
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Me",
      value: "contact@yourportfolio.com",
      action: () => navigator.clipboard.writeText("contact@yourportfolio.com"),
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "New Delhi, India",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Me",
      value: "+91 98765 43210",
      action: () => window.location.href = "tel:+919876543210",
    },
  ];

  return (
    <div className="min-h-screen bg-gadient-to-br from-gray-900 to-purple-900 text-white p-8">
      <div className="max-w-6xl mx-auto relative z-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text ">
          Let's Connect.
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-bold mb-8">Direct Channels</h2>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-all duration-300 cursor-pointer"
                  onClick={method.action}
                >
                  <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-300">{method.title}</h3>
                    <p className="text-gray-400">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-700/50 pt-8">
              <h3 className="text-lg font-semibold mb-4">Find Me Online</h3>
              <div className="flex space-x-4">
              <SocialMedia/>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <form 
            onSubmit={handleSubmit}
            className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-700/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-gray-700/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full bg-gray-700/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-500/20 text-green-400 rounded-lg text-center transition-all duration-300">
                  Message sent successfully! 🎉
                </div>
              )}
            </div>
          </form>
        </div>
      </div>



      <div className='text-[12rem] font-title opacity-5 left-0 font-bold fixed bottom-0 -z-1'>Contact Me.</div>
    </div>
  );
};

export default ContactPage;