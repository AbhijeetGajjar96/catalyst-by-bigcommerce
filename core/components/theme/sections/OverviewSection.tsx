'use client';

import Image from 'next/image';

interface OverviewSectionProps {
  settings: {
    title?: string;
    text?: string;
    width_type?: string;
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
      mobile_image?: string;
      title?: string;
      link?: string;
      block_description?: string;
    };
  }>;
}

export function OverviewSection({ settings, blocks }: OverviewSectionProps) {
  if (!blocks || blocks.length === 0) return null;

  const isFullWidth = settings.width_type === 'full';
  const showPagination = settings.swiper_pagination === 'on';
  const showArrows = settings.swiper_arrow === 'true';

  return (
    <section 
      className={`w-full bg-brand-cream ${isFullWidth ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}
      style={{
        paddingTop: `${settings.top_margin_desktop || 0}px`,
        paddingBottom: `${settings.bottom_margin_desktop || 0}px`,
        paddingLeft: isFullWidth ? `${settings.left_margin_desktop || 0}px` : undefined,
        paddingRight: isFullWidth ? `${settings.right_margin_desktop || 0}px` : undefined,
      }}
    >
      {/* Section Header */}
      {settings.title && (
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-brown-900 mb-4 font-serif">
            {settings.title}
          </h2>
          {settings.text && (
            <p className="text-xl text-brand-brown-900/80 max-w-3xl mx-auto">
              {settings.text}
            </p>
          )}
        </div>
      )}

      {/* Overview Content */}
      <div className="relative">
        {blocks.map((block, index) => (
          <div key={index} className="relative">
            {/* Desktop Image */}
            <div className="hidden md:block w-full">
              <Image
                src={block.settings.image.replace('shopify://shop_images/', '/assets/shop_images/')}
                alt={block.settings.title || 'Overview Image'}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Mobile Image */}
            {block.settings.mobile_image && (
              <div className="md:hidden w-full">
                <Image
                  src={block.settings.mobile_image.replace('shopify://shop_images/', '/assets/shop_images/')}
                  alt={block.settings.title || 'Overview Image'}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Overlay Content */}
            {block.settings.title && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white bg-black/40 px-8 py-6 rounded-lg">
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
                    {block.settings.title}
                  </h3>
                  {block.settings.block_description && (
                    <p className="text-xl max-w-2xl mx-auto">
                      {block.settings.block_description}
                    </p>
                  )}
                  {block.settings.link && (
                    <a
                      href={block.settings.link.replace('shopify://collections/', '/collections/')}
                      className="inline-block bg-brand-gold text-brand-brown px-8 py-3 rounded-md font-semibold hover:bg-brand-gold/90 transition-colors mt-4"
                    >
                      Explore Now
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Pagination Dots */}
        {showPagination && (
          <div className="flex justify-center mt-6 space-x-2">
            {blocks.map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-brand-brown/30"
              />
            ))}
          </div>
        )}

        {/* Navigation Arrows */}
        {showArrows && blocks.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-brand-brown/80 hover:bg-brand-brown text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-brown/80 hover:bg-brand-brown text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </section>
  );
}
