// TODO: wire BigCommerce data here
// This component reads theme.config.json.tokens for styling
// Converts Shopify badge styling to React with Tailwind

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sale' | 'sold-out' | 'new' | 'featured';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'featured',
  size = 'md',
  className = ''
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variantClasses = {
    sale: 'bg-red-100 text-red-800',
    'sold-out': 'bg-gray-100 text-gray-800',
    new: 'bg-green-100 text-green-800',
    featured: 'bg-blue-100 text-blue-800'
  };
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-xs'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
}
