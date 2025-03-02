'use client';
import { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SocialMedia from './SocialMedia';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import emailjs from '@emailjs/browser'; // Import EmailJS

const ContactMe = () => {
  const mainContainer = useRef();
  const form = useRef(); // Ref for the form

  useGSAP(() => {
    const tl = gsap.timeline();
    // Main container animation
    tl.from(mainContainer.current, {
      opacity: -1,
      duration: 1.3,
      ease: 'power4.out',
    });
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false); // State to track errors

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Md Sayyub',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Send the form data using EmailJS
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, // Use NEXT_PUBLIC_ prefix
        process.env.NEXT_PUBLIC_TEMPLATE_ID, // Use NEXT_PUBLIC_ prefix
        form.current, // Pass the form element
        process.env.NEXT_PUBLIC_PUBLIC_KEY, // Use NEXT_PUBLIC_ prefix
        templateParams // Pass template parameters
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          setIsSubmitted(true); // Show success message
          setIsError(false); // Reset error state
          setFormData({ name: '', email: '', message: '' }); // Clear the form
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          setIsSubmitted(false); // Reset success state
          setIsError(true); // Show error message
        }
      );
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Me',
      value: 'sayyubchishty40@gmail.com',
      action: () => (window.location.href = 'mailto:sayyubchishty40@gmail.com'),
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Dhanbad, India',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Me',
      value: '+91 7368065632',
      action: () => (window.location.href = 'tel:+919876543210'),
    },
  ];

  return (
    <div ref={mainContainer} className="min-h-screen text-white md:p-8  bg-gray-90   py-6 pl-6 md:px-10 w-[92vw] md:w-[60vw]">
      <div className="max-w-6xl mx-auto relative z-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text ">
          Let's Connect.
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-bold mb-8">Direct Channels</h2>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex  items-start space-x-4 p-4 rounded-xl bg-gray-700/20 hover:bg-gray-700/40 transition-all duration-300 cursor-pointer"
                  onClick={method.action}
                >
                  <div className="p-3 rounded-lg ">{method.icon}</div>
                  <div>
                    <h3 className="font-semibold md:text-[15px] text-[14px] text-gray-300">{method.title}</h3>
                    <p className="text-[10px] font-semibold md:text-sm text-gray-400">{method.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-700/50 pt-8">
              <h3 className="text-lg font-semibold mb-4">Find Me Online</h3>
              <div className="flex space-x-4">
                <SocialMedia />
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <form
            ref={form} // Add ref to the form
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
                  name="from_name" // Match EmailJS template variable
                  required
                  className="w-full bg-gray-700/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
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
                  name="from_email" // Match EmailJS template variable
                  required
                  className="w-full bg-gray-700/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
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
                  name="message" // Match EmailJS template variable
                  required
                  className="w-full bg-gray-700/20 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white  hover:bg-blue-700  disabled:opacity-50 py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-500/20 text-green-400 rounded-lg text-center transition-all duration-300">
                  Message sent successfully! 🎉
                </div>
              )}

              {/* Error Message */}
              {isError && (
                <div className="mt-4 p-4 bg-red-500/20 text-red-400 rounded-lg text-center transition-all duration-300">
                  Message not sent. Please try again.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="text-[5rem] md:text-[12rem] font-title opacity-[0.03] left-0 font-extrabold fixed bottom-10 md:bottom-0 -z-1">
        Contact Me.
      </div>
    </div>
  );
};

export default ContactMe