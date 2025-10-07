"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
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
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Scroll animation component wrapper
interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?:
    | "fade-up"
    | "fade-left"
    | "fade-right"
    | "fade-down"
    | "scale"
    | "slide-up"
    | "bounce";
  delay?: number;
  duration?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export function ScrollAnimation({
  children,
  className = "",
  animationType = "fade-up",
  delay = 0,
  duration = 600,
  stagger = false,
  staggerDelay = 100,
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationClass = () => {
    switch (animationType) {
      case "fade-left":
        return "animate-on-scroll-left";
      case "fade-right":
        return "animate-on-scroll-right";
      case "fade-down":
        return "animate-on-scroll-down";
      case "scale":
        return "animate-on-scroll-scale";
      case "slide-up":
        return "animate-on-scroll-slide-up";
      case "bounce":
        return "animate-on-scroll-bounce";
      default:
        return "animate-on-scroll";
    }
  };

  const staggerClass = stagger ? "stagger-children" : "";

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${staggerClass} ${
        isVisible ? "in-view" : ""
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...(stagger && { "--stagger-delay": staggerDelay }),
      }}
    >
      {children}
    </div>
  );
}
