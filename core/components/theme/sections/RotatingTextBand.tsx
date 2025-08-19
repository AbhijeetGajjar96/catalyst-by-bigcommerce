'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface RotatingTextBandProps {
  settings: {
    custom_liquid?: string;
    color_scheme?: string;
    padding_top?: number;
    padding_bottom?: number;
  };
}

export function RotatingTextBand({ settings }: RotatingTextBandProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
    "Tiffin Of Tradition",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section 
      className="w-full bg-brand-brown overflow-hidden"
      style={{
        paddingTop: `${settings.padding_top || 20}px`,
        paddingBottom: `${settings.padding_bottom || 20}px`,
      }}
    >
      <div className="max-w-full">
        <div className="rotating-text-container relative h-[41px] md:h-[50px] overflow-hidden">
          <div 
            className="rotating-text flex items-center justify-center transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentTextIndex * 100}%)`,
            }}
          >
            {texts.map((text, index) => (
              <div key={index} className="flex items-center min-w-full justify-center">
                <span className="home-text text-2xl md:text-4xl font-bold text-white font-serif tracking-widest px-5 md:px-8">
                  {text}
                </span>
                <div className="home-img mx-3 md:mx-6">
                  <Image
                    src="/assets/icons/square.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for the rotating text effect */}
      <style jsx>{`
        .rotating-text-container {
          line-height: 41px;
        }
        
        @media (min-width: 786px) {
          .rotating-text-container {
            line-height: 50px;
          }
        }
        
        .home-text {
          padding: 0 20px !important;
          font-size: 35px;
        }
        
        .home-img img {
          width: 35px !important;
        }
        
        .home-fancy-text {
          letter-spacing: 0.3rem;
          padding-bottom: 20px;
          padding-top: 20px;
        }
        
        @media only screen and (max-width: 786px) {
          .rotating-text-container {
            line-height: 35px !important;
          }
          .home-text {
            font-size: 18px;
            padding: 0 8px !important;
          }
          .home-fancy-text {
            padding-bottom: 10px;
            padding-top: 15px;
          }
          .home-img img {
            width: 30px !important;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .home-img img {
            width: 25px !important;
          }
          .rotating-text-container {
            line-height: 30px;
          }
        }
      `}</style>
    </section>
  );
}
