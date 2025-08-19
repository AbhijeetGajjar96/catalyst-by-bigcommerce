"use client";
import Image from 'next/image';

type Section = {
  type: string;
  settings?: Record<string, any>;
  blocks?: Record<string, any>;
};

function normalizeImage(src?: string) {
  if (!src) return '';
  return src.replace('shopify://shop_images/', '/assets/shop_images/');
}

export function ShopifySectionRenderer({ section }: { section: Section }) {
  if (!section) return null;
  const settings = section.settings ?? {};
  const blocks = Object.values(section.blocks ?? {}) as any[];

  if (section.type === 'ys_custom_gallery') {
    const isSlider = settings.type === 'slider';
    const title = settings.title as string | undefined;
    const text = settings.text as string | undefined;

    if (isSlider) {
      return (
        <section className="section-padding">
          {title && <h2 className="h1 center">{title}</h2>}
          {text && <p className="rte center">{text}</p>}
          <div style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory' }}>
            {blocks.map((b, i) => {
              const img = normalizeImage(b?.settings?.mobile_image || b?.settings?.image);
              return (
                <div key={i} style={{ minWidth: 320, scrollSnapAlign: 'start' }}>
                  {img && (
                    <Image src={img} alt={b?.settings?.title || ''} width={1280} height={640} style={{ width: '100%', height: 'auto' }} />
                  )}
                  {b?.settings?.title && <div className="gallery_title center">{b.settings.title}</div>}
                </div>
              );
            })}
          </div>
        </section>
      );
    }

    // default/grid
    return (
      <section className="section-padding">
        {title && <h2 className="h1 center">{title}</h2>}
        {text && <p className="rte center">{text}</p>}
        <div className="grid grid--3-col">
          {blocks.map((b, i) => {
            const img = normalizeImage(b?.settings?.image);
            return (
              <div className="grid__item center" key={i}>
                {img && (
                  <Image src={img} alt={b?.settings?.title || ''} width={900} height={900} style={{ width: '100%', height: 'auto' }} />
                )}
                {b?.settings?.title && <div className="gallery_title">{b.settings.title}</div>}
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  if (section.type === 'custom-liquid') {
    // Simple safe representation of the marquee band
    return (
      <div className="section-padding center">
        <div className="Heading h2 home_fancy_text">
          <span className="home_text">Tiffin Of Tradition</span>
          <img src="/assets/icons/square.svg" alt="" style={{ width: 24, display: 'inline-block', margin: '0 12px' }} />
          <span className="home_text">Tiffin Of Tradition</span>
        </div>
      </div>
    );
  }

  return null;
}


