import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Github, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export const SocialMedia = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/agungdhrs",
      icon: <Github size={24} />,
      color: "hover:text-gray-100 hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/agungdhr",
      icon: <Linkedin size={24} />,
      color: "hover:text-blue-100 hover:bg-blue-700"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/agungdhr",
      icon: <Instagram size={24} />,
      color: "hover:text-pink-100 hover:bg-pink-600"
    },
    {
      name: "Email",
      url: "mailto:agungdhrs@gmail.com",
      icon: <Mail size={24} />,
      color: "hover:text-red-100 hover:bg-red-500"
    }
  ];

  return (
    <section
      id="social"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[600px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Connect With Me
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${social.color}`}
              >
                <div className="p-3 rounded-full bg-white/10">{social.icon}</div>
                <span className="font-medium text-lg">{social.name}</span>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-white/70">Let's connect and build something amazing together!</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};