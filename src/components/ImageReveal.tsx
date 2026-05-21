'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  maskColor?: string;
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  className,
  maskColor = 'bg-[#3E3E4E]',
}: ImageRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 } // Trigger earlier to ensure images show up quickly
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden group w-full h-full', className)}
    >
      {/* The stationary image - Using native img for best compatibility with external URLs */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "object-cover transition-transform duration-700 group-hover:scale-105",
          !width && !height ? "absolute inset-0 w-full h-full" : "w-full h-auto"
        )}
        loading="lazy"
      />

      {/* The sliding mask */}
      <div
        className={cn(
          'absolute inset-0 z-20 pointer-events-none',
          maskColor,
          isVisible ? 'reveal-mask-animation' : 'translate-x-0'
        )}
      />
    </div>
  );
}
