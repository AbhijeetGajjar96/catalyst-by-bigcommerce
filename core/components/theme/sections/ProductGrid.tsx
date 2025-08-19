// TODO: wire BigCommerce data here
// This component converts Shopify featured-collection section to React
// Converts Shopify featured-collection.liquid styling to React with Tailwind

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';
import { Price } from '../snippets/Price';
import { mockProducts } from '@/lib/theme/mock';
import { SectionProps } from '@/lib/theme/section-registry';

export function ProductGrid({ config, className = '' }: SectionProps) {
  const {
    title = 'Featured Products',
    description,
    columns = 4,
    productsToShow = 8
  } = config;

  // Use mock products for now - TODO: replace with BigCommerce data
  const products = mockProducts.slice(0, productsToShow);

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5'
  };

  return (
    <section className={`py-16 ${className}`}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Product Grid */}
        <div className={`grid ${gridCols[columns as keyof typeof gridCols] || 'grid-cols-4'} gap-6 md:gap-8`}>
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/demo/product/${product.id}`} className="block">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <Image
                    src={product.image}
                    alt={product.altText || product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 space-y-2">
                    {product.compareAtPrice && product.compareAtPrice > product.price && (
                      <Badge variant="sale">Sale</Badge>
                    )}
                    {!product.available && (
                      <Badge variant="sold-out">Sold Out</Badge>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                    {product.title}
                  </h3>
                  
                  <div className="mt-2">
                    <Price
                      amount={Math.round(product.price * 100)}
                      compareAtAmount={product.compareAtPrice ? Math.round(product.compareAtPrice * 100) : undefined}
                      showBadges={false}
                      available={product.available}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/demo/collection"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            View All Products
          </Link>
        </div>
      </Container>
    </section>
  );
}
