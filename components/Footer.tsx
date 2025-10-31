"use client";

import Link from "next/link";
import { Shield, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/opiyodon",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/opiyodon",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/opiyodon",
      icon: Twitter,
    },
    {
      name: "Email",
      url: "mailto:opiyodon9@gmail.com",
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Lab Challenges", href: "/lab-challenges" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    gsap.from(".footer-element", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "footer",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="footer-element md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <div>
                <div className="font-bold text-xl">Opiyo Don</div>
                <div className="text-white/60 text-sm">
                  Cybersecurity Portfolio
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Cybersecurity enthusiast and full-stack developer specializing in
              web security, penetration testing, and secure application
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-element">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-element">
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-element border-t border-white/10 mt-8 sm:mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Opiyo Don. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>Built with Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
