// TODO: wire BigCommerce data here
// This component converts Shopify image-banner section to React
// Converts Shopify image-banner.liquid styling to React with Tailwind

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionProps } from '@/lib/theme/section-registry';

export function ImageBanner({ config, className = '' }: SectionProps) {
  const {
    image = '/assets/mid-banner.jpg',
    heading,
    subheading,
    href,
    textAlignment = 'center'
  } = config;

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  const Content = () => (
    <div className={`flex flex-col justify-center h-full p-8 ${alignmentClasses[textAlignment as keyof typeof alignmentClasses]}`}>
      {heading && (
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {heading}
        </h2>
      )}
      {subheading && (
        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-md">
          {subheading}
        </p>
      )}
    </div>
  );

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="relative h-[40vh] min-h-[300px] w-full">
        <Image
          src={image}
          alt={heading || 'Banner image'}
          fill
          className="object-cover"
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="absolute inset-0 flex">
          {href ? (
            <Link href={href} className="flex-1">
              <Content />
            </Link>
          ) : (
            <div className="flex-1">
              <Content />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
