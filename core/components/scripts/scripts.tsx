"use client";

import { useEffect } from 'react';

export function Scripts() {
  useEffect(() => {
    // Initialize Shopify theme functionality
    if (typeof window !== 'undefined') {
      // Set global variables for Shopify theme
      (window as any).shopUrl = window.location.origin;
      (window as any).routes = {
        cart_add_url: '/api/cart/add',
        cart_change_url: '/api/cart/change',
        cart_update_url: '/api/cart/update',
        cart_url: '/cart',
        predictive_search_url: '/api/search',
      };

      (window as any).cartStrings = {
        error: 'There was an error while updating your cart.',
        quantityError: 'You can only add [quantity] of this item to your cart.',
      };

      (window as any).variantStrings = {
        addToCart: 'Add to cart',
        soldOut: 'Sold out',
        unavailable: 'Unavailable',
        unavailable_with_option: 'The option [value] is unavailable',
      };
    }
  }, []);

  return null;
}