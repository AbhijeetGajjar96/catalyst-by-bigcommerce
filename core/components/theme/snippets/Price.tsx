// TODO: wire BigCommerce data here
// This component converts Shopify Liquid price snippet to React
// Input (Liquid): price snippet using {{ product.price | money }}
// Output (React): <Price amount={priceCents} currency="USD" />

import React from 'react';

interface PriceProps {
  amount: number;
  compareAtAmount?: number;
  currency?: string;
  currencySymbol?: string;
  showBadges?: boolean;
  available?: boolean;
  className?: string;
}

export function Price({
  amount,
  compareAtAmount,
  currency = 'USD',
  currencySymbol = '$',
  showBadges = false,
  available = true,
  className = ''
}: PriceProps) {
  const formatPrice = (price: number) => {
    return `${currencySymbol}${(price / 100).toFixed(2)}`;
  };

  const isOnSale = compareAtAmount && compareAtAmount > amount;
  const discountPercentage = isOnSale && compareAtAmount 
    ? Math.round(((compareAtAmount - amount) / compareAtAmount) * 100)
    : 0;

  return (
    <div className={`price ${className}`}>
      <div className="price__container">
        {isOnSale ? (
          <div className="price__sale">
            <span className="sr-only">Sale price</span>
            <span className="price-item price-item--sale price-item--last text-lg font-semibold text-gray-900">
              {formatPrice(amount)}
            </span>
            <span className="sr-only">Regular price</span>
            <span className="ml-2">
              <s className="price-item price-item--regular text-sm text-gray-500">
                {formatPrice(compareAtAmount)}
              </s>
            </span>
          </div>
        ) : (
          <div className="price__regular">
            <span className="sr-only">Regular price</span>
            <span className="price-item price-item--regular text-lg font-semibold text-gray-900">
              {formatPrice(amount)}
            </span>
          </div>
        )}
      </div>
      
      {showBadges && (
        <div className="mt-2 space-x-2">
          {isOnSale && (
            <span className="badge price__badge-sale bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
              {discountPercentage}% off
            </span>
          )}
          {!available && (
            <span className="badge price__badge-sold-out bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
              Sold out
            </span>
          )}
        </div>
      )}
    </div>
  );
}
