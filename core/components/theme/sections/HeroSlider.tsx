'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface HeroSliderProps {
  settings: {
    title?: string;
    text?: string;
    slider_autoplay?: string;
    swiper_style?: string;
    swiper_arrow?: string;
  };
  blocks: Array<{
    settings: {
      image: string;
      mobile_image?: string;
      title?: string;
      link?: string;
    };
  }>;
}

export function HeroSlider({ settings, blocks }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(settings.slider_autoplay === 'true');

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blocks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, blocks.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + blocks.length) % blocks.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % blocks.length);
  };

  if (!blocks || blocks.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden bg-brand-brown">
      {/* Section Header */}
      {settings.title && (
        <div className="text-center py-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            {settings.title}
          </h2>
          {settings.text && (
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {settings.text}
            </p>
          )}
        </div>
      )}

      {/* Slider Container */}
      <div className="relative w-full">
        {/* Slides */}
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px]">
          {blocks.map((block, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Desktop Image */}
              <div className="hidden md:block w-full h-full">
                <Image
                  src={block.settings.image.replace('shopify://shop_images/', '/assets/shop_images/')}
                  alt={block.settings.title || 'Hero Image'}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              
              {/* Mobile Image */}
              {block.settings.mobile_image && (
                <div className="md:hidden w-full h-full">
                  <Image
                    src={block.settings.mobile_image.replace('shopify://shop_images/', '/assets/shop_images/')}
                    alt={block.settings.title || 'Hero Image'}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              )}

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  {block.settings.title && (
                    <h3 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
                      {block.settings.title}
                    </h3>
                  )}
                  {block.settings.link && (
                    <a
                      href={block.settings.link.replace('shopify://collections/', '/collections/')}
                      className="inline-block bg-brand-gold text-brand-brown px-8 py-3 rounded-md font-semibold hover:bg-brand-gold/90 transition-colors"
                    >
                      Shop Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {settings.swiper_arrow === 'true' && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-brown p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-brown p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {settings.swiper_style === 'dots' && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {blocks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
