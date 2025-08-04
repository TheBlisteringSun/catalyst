import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

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
  message = "Thanks to Jukebox for the COOLEST custom stickers",
  ctaText = "Visit",
  ctaLink = "https://www.jukeboxprint.com/custom-stickers",
  backgroundColor = "bg-gradient-to-r from-purple-600 to-blue-600",
  onClose,
  showIcon = true,
  showCTA = true
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for page to fully load
    const handleLoad = () => {
      // Add small delay to ensure everything is truly loaded
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

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible || !isLoaded) return null;

  return (
    <div className={`${backgroundColor} text-white relative overflow-hidden z-50`}>
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
              {message}
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-2 sm:mt-0 sm:ml-4">
            {showCTA && (
              <a
                href={ctaLink}
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-purple-600 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            )}
            
            <button
              onClick={handleClose}
              className="p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;