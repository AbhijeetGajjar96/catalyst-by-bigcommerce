// TODO: Replace mock with CMS/JSON where sections consume props
// This registry maps section types to their React components for dynamic rendering

import React from 'react';
import { Hero } from '@/components/theme/sections/Hero';
import { ImageBanner } from '@/components/theme/sections/ImageBanner';
import { RichText } from '@/components/theme/sections/RichText';
import { ProductGrid } from '@/components/theme/sections/ProductGrid';

export interface SectionConfig {
  type: string;
  [key: string]: any;
}

export interface SectionProps {
  config: SectionConfig;
  className?: string;
}

// Registry mapping section types to components
export const sectionRegistry: Record<string, React.ComponentType<SectionProps>> = {
  hero: Hero,
  image_banner: ImageBanner,
  rich_text: RichText,
  product_grid: ProductGrid
};

// Helper function to render sections dynamically
export function renderSection(config: SectionConfig, className?: string) {
  const Component = sectionRegistry[config.type];
  
  if (!Component) {
    console.warn(`Unknown section type: ${config.type}`);
    return null;
  }

  return React.createElement(Component, { config, className });
}

// Type for section configurations
export type SectionType = keyof typeof sectionRegistry;

// Validate section configuration
export function validateSectionConfig(config: SectionConfig): boolean {
  if (!config.type) {
    console.error('Section config missing type:', config);
    return false;
  }

  if (!sectionRegistry[config.type]) {
    console.error(`Unknown section type: ${config.type}`, config);
    return false;
  }

  return true;
}
