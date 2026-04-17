"use client";

import { useEffect, useRef } from 'react';

interface ScrollOptions {
  threshold?: number;
  rootMargin?: string;
  animationDelay?: number;
}

export const useScrollOptimization = (options: ScrollOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '-50px',
    animationDelay = 0
  } = options;

  useEffect(() => {
    // Optimize scroll performance
    let ticking = false;
    
    const updateScrollPosition = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Add parallax effects or other scroll-based animations here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  return {
    threshold,
    rootMargin,
    animationDelay
  };
};

export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '-50px',
      ...options
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [callback, options]);

  return targetRef;
};

// Enhanced scroll animations with better performance
export const scrollRevealConfig = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { 
    once: true, 
    margin: "-100px",
    amount: 0.3 // Trigger when 30% of element is visible
  },
  transition: { 
    duration: 0.4, 
    ease: "easeOut" 
  }
};

export const scrollRevealLeftConfig = {
  ...scrollRevealConfig,
  initial: { opacity: 0, x: -50, y: 0 },
  whileInView: { opacity: 1, x: 0, y: 0 }
};

export const scrollRevealRightConfig = {
  ...scrollRevealConfig,
  initial: { opacity: 0, x: 50, y: 0 },
  whileInView: { opacity: 1, x: 0, y: 0 }
};

export const scrollRevealScaleConfig = {
  ...scrollRevealConfig,
  initial: { opacity: 0, scale: 0.9, y: 30 },
  whileInView: { opacity: 1, scale: 1, y: 0 }
};

// 3D scroll reveal configurations
export const scrollReveal3DConfig = {
  initial: { 
    opacity: 0, 
    y: 30, 
    rotateX: -15, 
    translateZ: -50 
  },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0, 
    translateZ: 0 
  },
  viewport: { 
    once: true, 
    margin: "-100px",
    amount: 0.2
  },
  transition: { 
    duration: 0.5, 
    ease: "easeOut" 
  }
};
