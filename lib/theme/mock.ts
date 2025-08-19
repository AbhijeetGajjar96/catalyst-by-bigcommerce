// TODO: Replace mock data with CMS/JSON where sections consume props
// This file provides mock data for the theme components during development

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface FooterLinkGroup {
  title: string;
  links: NavigationItem[];
}

export interface MockProduct {
  id: number;
  title: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  altText?: string;
  available: boolean;
  tags: string[];
  description?: string;
}

export interface MockCollection {
  id: number;
  title: string;
  description?: string;
  image: string;
  productCount: number;
}

// Navigation data
export const siteNav: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/demo/collection' },
  { 
    label: 'Categories', 
    href: '/demo/categories',
    children: [
      { label: 'Clothing', href: '/demo/collection?category=clothing' },
      { label: 'Accessories', href: '/demo/collection?category=accessories' },
      { label: 'Home & Garden', href: '/demo/collection?category=home' }
    ]
  },
  { label: 'About', href: '/demo/about' },
  { label: 'Contact', href: '/demo/contact' }
];

export const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Customer Service',
    links: [
      { label: 'Contact Us', href: '/demo/contact' },
      { label: 'Shipping Info', href: '/demo/shipping' },
      { label: 'Returns', href: '/demo/returns' },
      { label: 'Size Guide', href: '/demo/size-guide' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/demo/about' },
      { label: 'Careers', href: '/demo/careers' },
      { label: 'Privacy Policy', href: '/demo/privacy' },
      { label: 'Terms of Service', href: '/demo/terms' }
    ]
  },
  {
    title: 'Follow Us',
    links: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'Pinterest', href: 'https://pinterest.com' }
    ]
  }
];

// Mock products data
export const mockProducts: MockProduct[] = [
  {
    id: 1,
    title: 'Classic Cotton T-Shirt',
    price: 29.99,
    compareAtPrice: 39.99,
            image: '/assets/product-1.jpg',
    altText: 'Classic cotton t-shirt in white',
    available: true,
    tags: ['clothing', 't-shirt', 'cotton'],
    description: 'A comfortable and versatile cotton t-shirt perfect for everyday wear.'
  },
  {
    id: 2,
    title: 'Denim Jacket',
    price: 99.99,
            image: '/assets/product-2.jpg',
    altText: 'Classic denim jacket in blue',
    available: true,
    tags: ['clothing', 'jacket', 'denim'],
    description: 'Timeless denim jacket with a modern fit and classic styling.'
  },
  {
    id: 3,
    title: 'Leather Crossbody Bag',
    price: 79.99,
    compareAtPrice: 99.99,
            image: '/assets/product-3.jpg',
    altText: 'Brown leather crossbody bag',
    available: true,
    tags: ['accessories', 'bag', 'leather'],
    description: 'Handcrafted leather crossbody bag with adjustable strap.'
  },
  {
    id: 4,
    title: 'Wireless Headphones',
    price: 149.99,
            image: '/assets/product-4.jpg',
    altText: 'Black wireless headphones',
    available: false,
    tags: ['electronics', 'audio', 'wireless'],
    description: 'Premium wireless headphones with noise cancellation.'
  },
  {
    id: 5,
    title: 'Organic Cotton Hoodie',
    price: 59.99,
            image: '/assets/product-5.jpg',
    altText: 'Gray organic cotton hoodie',
    available: true,
    tags: ['clothing', 'hoodie', 'organic'],
    description: 'Comfortable hoodie made from 100% organic cotton.'
  },
  {
    id: 6,
    title: 'Stainless Steel Water Bottle',
    price: 24.99,
    compareAtPrice: 34.99,
            image: '/assets/product-6.jpg',
    altText: 'Silver stainless steel water bottle',
    available: true,
    tags: ['accessories', 'bottle', 'stainless-steel'],
    description: 'Insulated water bottle that keeps drinks cold for 24 hours.'
  },
  {
    id: 7,
    title: 'Canvas Sneakers',
    price: 69.99,
            image: '/assets/product-7.jpg',
    altText: 'White canvas sneakers',
    available: true,
    tags: ['footwear', 'sneakers', 'canvas'],
    description: 'Classic canvas sneakers with rubber sole for everyday comfort.'
  },
  {
    id: 8,
    title: 'Ceramic Coffee Mug',
    price: 19.99,
            image: '/assets/product-8.jpg',
    altText: 'White ceramic coffee mug',
    available: true,
    tags: ['home', 'kitchen', 'ceramic'],
    description: 'Handcrafted ceramic coffee mug perfect for your morning brew.'
  }
];

// Mock collections
export const mockCollections: MockCollection[] = [
  {
    id: 1,
    title: 'New Arrivals',
    description: 'Latest styles and trends',
            image: '/assets/collection-new.jpg',
    productCount: 12
  },
  {
    id: 2,
    title: 'Best Sellers',
    description: 'Our most popular products',
            image: '/assets/collection-bestsellers.jpg',
    productCount: 8
  },
  {
    id: 3,
    title: 'Sale Items',
    description: 'Great deals on quality products',
            image: '/assets/collection-sale.jpg',
    productCount: 15
  }
];

// Mock hero banner data
export const mockHeroBanner = {
  heading: 'New Arrivals',
  subheading: 'Fresh styles for every season',
          image: '/assets/hero-banner.jpg',
  ctaLabel: 'Shop now',
  ctaHref: '/demo/collection',
  overlayOpacity: 0.3
};

// Mock image banner data
export const mockImageBanner = {
          image: '/assets/mid-banner.jpg',
  heading: 'Free Shipping',
  subheading: 'On orders over $50',
  href: '/demo/collection',
  textAlignment: 'center' as const
};

// Mock rich text content
export const mockRichText = {
  html: '<p>Welcome to our store! We offer the latest trends in fashion and lifestyle products. Shop with confidence knowing we provide quality items at competitive prices.</p>'
};

// Mock site settings
export const mockSiteSettings = {
  shopName: 'Jay Bharat Store',
      logo: '/assets/logo.png',
    favicon: '/assets/favicon.ico',
  phone: '+1 (555) 123-4567',
  email: 'hello@jaybharat.com',
  address: '123 Commerce St, Business City, BC 12345',
  currency: 'USD',
  currencySymbol: '$'
};
