"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Code, Lock } from "lucide-react";
import { gsap } from "gsap";
import Lottie from "lottie-react";
import Image from "next/image";

/**
 * Hero Component
 * Landing page hero section with animated introduction
 * Features profile image, tagline, and call-to-action buttons
 */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  /**
   * Initialize GSAP animations on component mount
   */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero elements with stagger
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
        ease: "power3.out",
      });

      gsap.from(".hero-stats", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Animate profile image with scale and rotation
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scale: 0.8,
          opacity: 0,
          rotation: -10,
          duration: 1.2,
          delay: 0.2,
          ease: "back.out(1.4)",
        });
      }

      // Floating animation for icons
      gsap.to(".floating-icon", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <div className="hero-title">
              <p className="text-white/60 text-sm sm:text-base mb-2 tracking-wide uppercase">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I&apos;m <span className="gradient-text">Opiyo Don</span>
              </h1>
            </div>

            {/* Subtitle/Role */}
            <div className="hero-subtitle">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/80">
                Cybersecurity Enthusiast & Full-Stack Developer
              </h2>
            </div>

            {/* Description */}
            <p className="hero-description text-base sm:text-lg text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about securing digital infrastructure and building
              robust applications. Exploring the intersection of development and
              security through hands-on learning and real-world challenges.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-md font-medium hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
              </Link>
            </div>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="hero-stats text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold">5+</div>
                <div className="text-xs sm:text-sm text-white/60">Projects</div>
              </div>
              <div className="hero-stats text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold">3+</div>
                <div className="text-xs sm:text-sm text-white/60">
                  Years Learning
                </div>
              </div>
              <div className="hero-stats text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold">∞</div>
                <div className="text-xs sm:text-sm text-white/60">Passion</div>
              </div>
            </div>
          </div>

          {/* Right column - Profile image and floating elements */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Profile image container */}
              <div
                ref={imageRef}
                className="relative aspect-square rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl"
              >
                {/* Profile image from Unsplash - cybersecurity themed */}
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop&crop=faces"
                  alt="Opiyo Don - Cybersecurity Professional"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating icon elements */}
              <div className="absolute -top-6 -left-6 floating-icon p-4 bg-black border border-white/10 rounded-xl glass">
                <Shield className="w-8 h-8" />
              </div>
              <div className="absolute -bottom-6 -right-6 floating-icon p-4 bg-black border border-white/10 rounded-xl glass">
                <Code className="w-8 h-8" />
              </div>
              <div className="absolute top-1/2 -right-12 floating-icon p-4 bg-black border border-white/10 rounded-xl glass hidden xl:block">
                <Lock className="w-8 h-8" />
              </div>

              {/* Decorative rings */}
              <div className="absolute -inset-4 border border-white/5 rounded-2xl -z-10" />
              <div className="absolute -inset-8 border border-white/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
        <span className="text-xs text-white/50">Scroll</span>
      </div>
    </section>
  );
}
