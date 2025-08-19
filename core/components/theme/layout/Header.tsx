"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar (from Shopify export) */}
      <div className="announcement-bar">
        <span>10% off on your first order USE "WELCOME10"</span>
      </div>

      {/* Main Header with gold band and section-header class to match theme behavior */}
      <div className="section-header-bar">
        <header className="section-header sticky top-0 z-40" style={{ backgroundColor: 'var(--brand-gold)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Navigation - Desktop */}
            <nav className="hidden lg:flex space-x-8 text-sm">
              <Link href="/collections/sweets" className="font-medium">
                Sweets
              </Link>
              <Link href="/collections/snacks" className="font-medium">
                Snacks
              </Link>
              <Link href="/pages/catering" className="font-medium">
                Catering
              </Link>
              <Link href="/pages/about" className="font-medium">
                About
              </Link>
              <Link href="/pages/contact" className="font-medium">
                Contact
              </Link>
            </nav>

            {/* Center Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-3xl font-bold tracking-wider">
                JAY BHARAT
              </div>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Account */}
              <Link className="text-sm font-medium" href="/account">
                Account
              </Link>

              {/* Cart */}
              <Link className="relative p-3 rounded-full transition-colors" href="/cart" aria-label="Cart">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span className="absolute -top-1 -right-1 text-xs bg-orange-600 text-white w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  2
                </span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md transition-colors"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200">
              <div className="py-4 space-y-2">
                <Link href="/collections/sweets" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors font-medium">
                  Sweets
                </Link>
                <Link href="/collections/snacks" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors font-medium">
                  Snacks
                </Link>
                <Link href="/pages/catering" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors font-medium">
                  Catering
                </Link>
                <Link href="/pages/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors font-medium">
                  About
                </Link>
                <Link href="/pages/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600 transition-colors font-medium">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
      </div>
    </>
  );
}