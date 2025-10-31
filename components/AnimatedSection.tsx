"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleUp";
  delay?: number;
  duration?: number;
}

/**
 * AnimatedSection Component
 * Wrapper component that applies GSAP scroll animations to its children
 * Supports multiple animation types with customizable timing
 */
export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 0.8,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Import ScrollTrigger dynamically
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      const element = sectionRef.current;

      // Define animation properties based on type
      const animProps: gsap.TweenVars = {
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      };

      // Set initial state based on animation type
      switch (animation) {
        case "fadeIn":
          gsap.from(element, {
            ...animProps,
            opacity: 0,
          });
          break;
        case "slideUp":
          gsap.from(element, {
            ...animProps,
            y: 50,
            opacity: 0,
          });
          break;
        case "slideLeft":
          gsap.from(element, {
            ...animProps,
            x: -50,
            opacity: 0,
          });
          break;
        case "slideRight":
          gsap.from(element, {
            ...animProps,
            x: 50,
            opacity: 0,
          });
          break;
        case "scaleUp":
          gsap.from(element, {
            ...animProps,
            scale: 0.8,
            opacity: 0,
            ease: "back.out(1.4)",
          });
          break;
      }
    });
  }, [animation, delay, duration]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
