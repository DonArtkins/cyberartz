"use client";

import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
} from "lucide-react";
import { gsap } from "gsap";

/**
 * Contact information and social links
 */
const contactInfo = {
  email: "opiyodon9@gmail.com",
  phone: "+254-714-230692",
  location: "Kabarak, Nakuru, Kenya",
};

const socialLinks = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/opiyodon",
    icon: Github,
    handle: "@opiyodon",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/opiyodon",
    icon: Linkedin,
    handle: "Opiyo Don",
  },
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/opiyodon",
    icon: Twitter,
    handle: "@opiyodon",
  },
];

/**
 * Contact Page
 * Professional contact information with social media links
 * Features animated contact cards and call-to-action buttons
 */
export default function ContactPage() {
  const headerRef = useRef<HTMLDivElement>(null);

  /**
   * Animate header on mount
   */
  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="page-transition min-h-screen pt-24 sm:pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Get In Touch
            </h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities,
            collaborations, or just connecting with fellow tech enthusiasts
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Methods */}
          <AnimatedSection animation="slideUp" className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Email */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="group p-6 sm:p-8 bg-black border border-white/10 rounded-xl hover-lift text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-white/70 text-sm break-all">
                  {contactInfo.email}
                </p>
              </a>

              {/* Phone */}
              <a
                href={`tel:${contactInfo.phone}`}
                className="group p-6 sm:p-8 bg-black border border-white/10 rounded-xl hover-lift text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-white/70 text-sm">{contactInfo.phone}</p>
              </a>

              {/* Location */}
              <div className="group p-6 sm:p-8 bg-black border border-white/10 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-white/70 text-sm">{contactInfo.location}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Social Media Links */}
          <AnimatedSection animation="slideUp" className="mb-12 sm:mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Connect With Me
              </h2>
              <p className="text-white/70">
                Follow me on social media for updates and insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 sm:p-8 bg-black border border-white/10 rounded-xl hover-lift"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{social.name}</h3>
                        <p className="text-white/60 text-sm">{social.handle}</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm">
                      Follow my journey and stay updated with my latest projects
                      and insights
                    </p>
                  </a>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Quick Actions */}
          <AnimatedSection animation="slideUp" className="mb-12 sm:mb-16">
            <div className="p-8 sm:p-12 bg-black border border-white/10 rounded-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Let&apos;s Collaborate
              </h2>
              <p className="text-white/70 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you have a project in mind, need cybersecurity
                consulting, or just want to discuss tech, I&apos;d love to hear
                from you. Let&apos;s build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Email
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/resume"
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-md font-medium hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View Resume
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Additional Info */}
          <AnimatedSection animation="slideUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Availability */}
              <div className="p-6 sm:p-8 bg-black border border-white/10 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  Availability
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Currently available for freelance projects, internships, and
                  full-time opportunities in web development and cybersecurity
                  roles. Open to remote and on-site positions.
                </p>
              </div>

              {/* Response Time */}
              <div className="p-6 sm:p-8 bg-black border border-white/10 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Response Time</h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  I typically respond to emails and messages within 24-48 hours.
                  For urgent matters, please include &quot;URGENT&quot; in your
                  subject line or reach out via phone.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Portfolio Link */}
          <AnimatedSection animation="slideUp" className="mt-12">
            <div className="text-center p-6 bg-white/2 rounded-xl">
              <p className="text-white/60 text-sm">
                Check out my development portfolio at{" "}
                <a
                  href="https://opiyodon.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:opacity-70 transition-opacity"
                >
                  opiyodon.vercel.app
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
