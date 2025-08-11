'use client'; // This directive is necessary for client-side components in frameworks like Next.js

import React, { useState, useEffect, useRef } from 'react';
import {Sparkles } from 'lucide-react';

// Define the type for a single confetti particle.
interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  alpha: number;
}

// The Confetti component creates a full-screen canvas for the confetti animation.
// It uses the useEffect hook to start the animation loop when the component is mounted
// and cleans it up when it's unmounted.
const Confetti = () => {
  // Explicitly type the ref for the canvas element.
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Exit if the canvas element is not yet available.

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Exit if the 2D context cannot be created.

    // This is where the core confetti logic will be re-initialized.
    const particles: Particle[] = [];
    const particleCount = 100;
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#9e9e9e', '#607d8b'];

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      radius: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: (Math.random() - 0.5) * 5,
        y: Math.random() * 5 + 2,
      },
      alpha: 1,
    });

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.velocity.y += 0.05;
        p.x += p.velocity.x;
        p.y += p.velocity.y;
        p.alpha -= 0.005;

        if (p.y > canvas.height) {
          particles.splice(i, 1);
          i--;
        }

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (particles.length < particleCount) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      updateParticles();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();

    // Clean up the animation frame when the component is unmounted.
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none', // Allows clicking on elements behind the canvas
        zIndex: 100,
      }}
    />
  );
};

interface PromoBannerProps {
  message?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundColor?: string;
  onClose?: () => void;
  showIcon?: boolean;
  showCTA?: boolean;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ 
  backgroundColor = "bg-gradient-to-r from-purple-600 to-blue-600",
  showIcon = true,
}) => {
  const [isVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isVisible || !isLoaded) return null;

  return (
    <div className={`${backgroundColor} text-white relative overflow-hidden z-50`}>
      {/* Conditionally render the Confetti component */}
      {isConfettiActive && <Confetti />}
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-center sm:justify-between">
          <div className="flex items-center justify-center flex-1 sm:justify-start">
            {showIcon && (
              <Sparkles className="w-5 h-5 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
            )}
          <p className="text-sm font-medium sm:text-base">
            Thanks to Jukebox for the <span 
              className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-[length:200%_auto] animate-gredient-x"
              onMouseEnter={() => setIsConfettiActive(true)}
              onMouseLeave={() => setIsConfettiActive(false)}
            >COOLEST</span> <a href="https://www.jukeboxprint.com/custom-stickers" className="text-primary-500 hover:text-primary-600 transition-colors duration-200 underline">custom stickers</a>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
