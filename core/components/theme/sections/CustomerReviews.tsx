'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface CustomerReviewsProps {
  settings: {
    title?: string;
    text?: string;
    width_type?: string;
    desktop_items_per_row?: number;
    mobile_items_per_row?: number;
    desktop_padding?: number;
    mobile_padding?: number;
    top_margin_desktop?: number;
    bottom_margin_desktop?: number;
    left_margin_desktop?: number;
    right_margin_desktop?: number;
    swiper_pagination?: string;
    swiper_arrow?: string;
  };
  blocks: Array<{
    settings: {
      image: string;
      title?: string;
      link?: string;
      block_description?: string;
    };
  }>;
}

export function CustomerReviews({ settings, blocks }: CustomerReviewsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blocks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, blocks.length]);

  if (!blocks || blocks.length === 0) return null;

  const isFullWidth = settings.width_type === 'full';
  const gridCols = settings.desktop_items_per_row || 4;
  const mobileCols = settings.mobile_items_per_row || 2;
  const padding = settings.desktop_padding || 30;
  const mobilePadding = settings.mobile_padding || 20;

  return (
    <section 
      className={`w-full bg-brand-brown ${isFullWidth ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}
      style={{
        paddingTop: `${settings.top_margin_desktop || 40}px`,
        paddingBottom: `${settings.bottom_margin_desktop || 80}px`,
        paddingLeft: isFullWidth ? `${settings.left_margin_desktop || 30}px` : undefined,
        paddingRight: isFullWidth ? `${settings.right_margin_desktop || 30}px` : undefined,
      }}
    >
      {/* Section Header */}
      {settings.title && (
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            {settings.title}
          </h2>
          {settings.text && (
            <p className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto">
              {settings.text}
            </p>
          )}
        </div>
      )}

      {/* Reviews Grid/Slider */}
      <div className="relative">
        {/* Desktop Grid View */}
        <div className="hidden md:grid gap-6 md:gap-8"
          style={{
            gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
            gap: `${padding}px`,
          }}
        >
          {blocks.map((block, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {block.settings.link ? (
                <a 
                  href={block.settings.link.replace('shopify://collections/', '/collections/')}
                  className="block text-decoration-none"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={block.settings.image.replace('shopify://shop_images/', '/assets/shop_images/')}
                      alt={block.settings.title || 'Customer Review'}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  
                  {block.settings.title && (
                    <div className="p-4 bg-white text-center">
                      <h3 className="text-lg font-semibold text-brand-brown-900">
                        {block.settings.title}
                      </h3>
                    </div>
                  )}
                </a>
              ) : (
                <div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={block.settings.image.replace('shopify://shop_images/', '/assets/shop_images/')}
                      alt={block.settings.title || 'Customer Review'}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  
                  {block.settings.title && (
                    <div className="p-4 bg-white text-center">
                      <h3 className="text-lg font-semibold text-brand-brown-900">
                        {block.settings.title}
                      </h3>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / mobileCols)}%)`,
              width: `${(blocks.length / mobileCols) * 100}%`,
            }}
          >
            {blocks.map((block, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / (blocks.length / mobileCols)}%` }}
              >
                <div className="px-2">
                  <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    {block.settings.link ? (
                      <a 
                        href={block.settings.link.replace('shopify://collections/', '/collections/')}
                        className="block text-decoration-none"
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={block.settings.image.replace('shopify://shop_images/', '/assets/shop_images/')}
                            alt={block.settings.title || 'Customer Review'}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>
                        
                        {block.settings.title && (
                          <div className="p-4 bg-white text-center">
                            <h3 className="text-lg font-semibold text-brand-brown-900">
                              {block.settings.title}
                            </h3>
                          </div>
                        )}
                      </a>
                    ) : (
                      <div>
                        <div className="relative aspect-square overflow-hidden">
                          <Image
                            src={block.settings.image.replace('shopify://shop_images/', '/assets/shop_images/')}
                            alt={block.settings.title || 'Customer Review'}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>
                        
                        {block.settings.title && (
                          <div className="p-4 bg-white text-center">
                            <h3 className="text-lg font-semibold text-brand-brown-900">
                              {block.settings.title}
                            </h3>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          {settings.swiper_arrow === 'true' && (
            <>
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + blocks.length) % blocks.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-brown p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Previous review"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % blocks.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-brown p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
                aria-label="Next review"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {settings.swiper_pagination === 'on' && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(blocks.length / mobileCols) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * mobileCols)}
                className={`w-3 h-3 rounded-full transition-all ${
                  Math.floor(currentSlide / mobileCols) === index
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to review group ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
