// TODO: wire BigCommerce data here
// This component reads theme.config.json.tokens.maxWidth for consistent layout
// Converts Shopify page-width class to React with Tailwind

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Container({
  children,
  className = '',
  fullWidth = false,
  padding = 'md'
}: ContainerProps) {
  const paddingClasses = {
    none: '',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8'
  };

  const containerClasses = fullWidth 
    ? `w-full ${paddingClasses[padding]}`
    : `max-w-7xl mx-auto ${paddingClasses[padding]}`;

  return (
    <div className={`${containerClasses} ${className}`}>
      {children}
    </div>
  );
}
