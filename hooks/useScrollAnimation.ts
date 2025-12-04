"use client";

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(options = { threshold: 0.1, triggerOnce: true }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } 
      },
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

export function usePageLoadAnimation(delay = 0) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setIsLoaded(true), delay); }, [delay]);
  return isLoaded;
}

