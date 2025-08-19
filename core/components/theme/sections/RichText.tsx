// TODO: wire BigCommerce data here
// This component converts Shopify rich-text section to React
// Converts Shopify rich-text.liquid styling to React with Tailwind

import React from 'react';
import { Container } from '../ui/Container';
import { SectionProps } from '@/lib/theme/section-registry';

export function RichText({ config, className = '' }: SectionProps) {
  const {
    html = '<p>Welcome to our store!</p>',
    textAlignment = 'center'
  } = config;

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <section className={`py-16 ${className}`}>
      <Container>
        <div className={`max-w-4xl mx-auto ${alignmentClasses[textAlignment as keyof typeof alignmentClasses]}`}>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
    </section>
  );
}
