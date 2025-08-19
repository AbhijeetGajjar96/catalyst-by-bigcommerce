'use client';

import Image from 'next/image';

interface CategoryGridProps {
  settings: {
    title?: string;
    text?: string;
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

export function CategoryGrid({ settings, blocks }: CategoryGridProps) {
  if (!blocks || blocks.length === 0) return null;

  const gridCols = settings.desktop_items_per_row || 3;
  const mobileCols = settings.mobile_items_per_row || 1;
  const padding = settings.desktop_padding || 20;
  const mobilePadding = settings.mobile_padding || 10;

  return (
    <section 
      className="w-full bg-brand-cream"
      style={{
        paddingTop: `${settings.top_margin_desktop || 0}px`,
        paddingBottom: `${settings.bottom_margin_desktop || 80}px`,
        paddingLeft: `${settings.left_margin_desktop || 0}px`,
        paddingRight: `${settings.right_margin_desktop || 0}px`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {settings.title && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-brand-brown-900 mb-4 font-serif">
              {settings.title}
            </h2>
            {settings.text && (
              <p className="text-xl text-brand-brown-900/80 max-w-3xl mx-auto">
                {settings.text}
              </p>
            )}
          </div>
        )}

        {/* Category Grid */}
        <div 
          className="grid gap-6 md:gap-8"
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
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={block.settings.image.replace('shopify://shop_images/', '/assets/shop_images/')}
                      alt={block.settings.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-brown-900 mb-2 text-center group-hover:text-brand-gold transition-colors">
                      {block.settings.title}
                    </h3>
                    {block.settings.block_description && (
                      <p className="text-brand-brown-900/70 text-center">
                        {block.settings.block_description}
                      </p>
                    )}
                  </div>
                </a>
              ) : (
                <div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={block.settings.image.replace('shopify://shop_images/', '/assets/shop_images/')}
                      alt={block.settings.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-brown-900 mb-2 text-center group-hover:text-brand-gold transition-colors">
                      {block.settings.title}
                    </h3>
                    {block.settings.block_description && (
                      <p className="text-brand-brown-900/70 text-center">
                        {block.settings.block_description}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
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
