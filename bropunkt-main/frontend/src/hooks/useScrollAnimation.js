import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll animations
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
};

// Animated section wrapper component
export const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'animate-on-scroll',
  delay = 0 
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? 'animate-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// Animated card with stagger effect
export const AnimatedCard = ({ 
  children, 
  className = '', 
  index = 0,
  baseDelay = 0.1
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? 'animate-visible' : ''} ${className}`}
      style={{ transitionDelay: `${index * baseDelay}s` }}
    >
      {children}
    </div>
  );
};
