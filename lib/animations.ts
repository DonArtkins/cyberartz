/**
 * GSAP Animation Utilities
 * Centralized animation configurations for consistent effects
 */

import { gsap } from "gsap";

// Define a type that works with GSAP
type AnimationTarget = string | Element | null | Array<string | Element>;

/**
 * Fade in animation from opacity 0 to 1
 * @param element - Target element or selector
 * @param duration - Animation duration in seconds
 * @param delay - Delay before animation starts
 */
export const fadeIn = (
  element: AnimationTarget,
  duration: number = 0.8,
  delay: number = 0
): gsap.core.Tween => {
  return gsap.from(element, {
    opacity: 0,
    duration,
    delay,
    ease: "power2.out",
  });
};

/**
 * Slide up animation with fade
 * @param element - Target element or selector
 * @param distance - Distance to slide in pixels
 * @param duration - Animation duration in seconds
 * @param delay - Delay before animation starts
 */
export const slideUp = (
  element: AnimationTarget,
  distance: number = 50,
  duration: number = 0.8,
  delay: number = 0
): gsap.core.Tween => {
  return gsap.from(element, {
    y: distance,
    opacity: 0,
    duration,
    delay,
    ease: "power3.out",
  });
};

/**
 * Slide in from left with fade
 * @param element - Target element or selector
 * @param distance - Distance to slide in pixels
 * @param duration - Animation duration in seconds
 * @param delay - Delay before animation starts
 */
export const slideInLeft = (
  element: AnimationTarget,
  distance: number = 100,
  duration: number = 0.8,
  delay: number = 0
): gsap.core.Tween => {
  return gsap.from(element, {
    x: -distance,
    opacity: 0,
    duration,
    delay,
    ease: "power3.out",
  });
};

/**
 * Slide in from right with fade
 * @param element - Target element or selector
 * @param distance - Distance to slide in pixels
 * @param duration - Animation duration in seconds
 * @param delay - Delay before animation starts
 */
export const slideInRight = (
  element: AnimationTarget,
  distance: number = 100,
  duration: number = 0.8,
  delay: number = 0
): gsap.core.Tween => {
  return gsap.from(element, {
    x: distance,
    opacity: 0,
    duration,
    delay,
    ease: "power3.out",
  });
};

/**
 * Stagger animation for multiple elements
 * @param elements - Target elements or selector
 * @param animation - Animation type
 * @param staggerDelay - Delay between each element animation
 */
export const staggerAnimation = (
  elements: AnimationTarget,
  animation: "fadeIn" | "slideUp" | "slideInLeft" | "slideInRight" = "fadeIn",
  staggerDelay: number = 0.1
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  switch (animation) {
    case "fadeIn":
      tl.from(elements, {
        opacity: 0,
        duration: 0.6,
        stagger: staggerDelay,
        ease: "power2.out",
      });
      break;
    case "slideUp":
      tl.from(elements, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: staggerDelay,
        ease: "power3.out",
      });
      break;
    case "slideInLeft":
      tl.from(elements, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: staggerDelay,
        ease: "power3.out",
      });
      break;
    case "slideInRight":
      tl.from(elements, {
        x: 50,
        opacity: 0,
        duration: 0.6,
        stagger: staggerDelay,
        ease: "power3.out",
      });
      break;
  }

  return tl;
};

/**
 * Scale up animation
 * @param element - Target element or selector
 * @param duration - Animation duration in seconds
 * @param delay - Delay before animation starts
 */
export const scaleUp = (
  element: AnimationTarget,
  duration: number = 0.6,
  delay: number = 0
): gsap.core.Tween => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration,
    delay,
    ease: "back.out(1.4)",
  });
};

/**
 * Hover animation for interactive elements
 * @param element - Target element
 */
export const hoverScale = (element: HTMLElement): void => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};

/**
 * Parallax scroll effect
 * @param element - Target element or selector
 * @param speed - Parallax speed multiplier
 */
export const parallaxScroll = (
  element: AnimationTarget,
  speed: number = 0.5
): void => {
  if (typeof window !== "undefined") {
    gsap.to(element, {
      y: () => window.scrollY * speed,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }
};

/**
 * Reveal animation on scroll
 * @param element - Target element or selector
 * @param direction - Direction of reveal
 */
export const revealOnScroll = (
  element: AnimationTarget,
  direction: "up" | "down" | "left" | "right" = "up"
): gsap.core.Tween => {
  const animProps: gsap.TweenVars = {
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  };

  switch (direction) {
    case "up":
      animProps.y = 50;
      break;
    case "down":
      animProps.y = -50;
      break;
    case "left":
      animProps.x = -50;
      break;
    case "right":
      animProps.x = 50;
      break;
  }

  return gsap.from(element, animProps);
};

/**
 * Text reveal animation letter by letter
 * @param element - Target element containing text
 * @param duration - Duration per letter
 * @param staggerDelay - Delay between letters
 */
export const textReveal = (
  element: AnimationTarget,
  duration: number = 0.05,
  staggerDelay: number = 0.03
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  tl.from(element, {
    opacity: 0,
    duration: 0.01,
  }).from(
    element,
    {
      clipPath: "inset(0 100% 0 0)",
      duration: duration * 10,
      ease: "power4.inOut",
    },
    "<"
  );

  return tl;
};

/**
 * Page transition animation
 */
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Initialize ScrollTrigger (call this in useEffect)
 */
export const initScrollTrigger = async (): Promise<
  typeof ScrollTrigger | null
> => {
  if (typeof window !== "undefined") {
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    return ScrollTrigger;
  }
  return null;
};
