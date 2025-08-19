'use client';

import Image from 'next/image';

interface BottomServicesProps {
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
  };
  blocks: Array<{
    settings: {
      image: string;
      title: string;
      link?: string;
      block_description?: string;
    };
  }>;
}

export function BottomServices({ settings, blocks }: BottomServicesProps) {
  if (!blocks || blocks.length === 0) return null;

  const isFullWidth = settings.width_type === 'full';
  const gridCols = settings.desktop_items_per_row || 3;
  const mobileCols = settings.mobile_items_per_row || 1;
  const padding = settings.desktop_padding || 40;
  const mobilePadding = settings.mobile_padding || 20;

  return (
    <section 
      className={`w-full bg-brand-cream ${isFullWidth ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}
      style={{
        paddingTop: `${settings.top_margin_desktop || 40}px`,
        paddingBottom: `${settings.bottom_margin_desktop || 80}px`,
        paddingLeft: isFullWidth ? `${settings.left_margin_desktop || 50}px` : undefined,
        paddingRight: isFullWidth ? `${settings.right_margin_desktop || 50}px` : undefined,
      }}
    >
      {/* Section Header */}
      {settings.title && (
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-brand-brown-900 mb-4 font-serif">
            {settings.title}
          </h2>
          {settings.text && (
            <p className="text-xl text-brand-brown-900/80 max-w-3xl mx-auto">
              {settings.text}
            </p>
          )}
        </div>
      )}

      {/* Services Grid */}
      <div 
        className="grid gap-8 md:gap-12"
        style={{
          gridTemplateColumns: `repeat(${mobileCols}, minmax(0, 1fr))`,
          gap: `${mobilePadding}px`,
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
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={block.settings.image.replace('shopify://shop_images/', '/assets/shop_images/')}
                    alt={block.settings.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="p-6 bg-white text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-brown-900 mb-2 uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                    {block.settings.title}
                  </h3>
                  {block.settings.block_description && (
                    <p className="text-brand-brown-900/70">
                      {block.settings.block_description}
                    </p>
                  )}
                </div>
              </a>
            ) : (
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={block.settings.image.replace('shopify://shop_images/', '/assets/shop_images/')}
                    alt={block.settings.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                
                <div className="p-6 bg-white text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-brown-900 mb-2 uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                    {block.settings.title}
                  </h3>
                  {block.settings.block_description && (
                    <p className="text-brand-brown-900/70">
                      {block.settings.block_description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Responsive Grid for larger screens */}
      <style jsx>{`
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(${gridCols}, minmax(0, 1fr));
            gap: ${padding}px;
          }
        }
      `}</style>
    </section>
  );
}
