"use client";

import { useState } from 'react';

export function Header() {
  console.log('Header component is rendering...');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar - Exact Shopify styling */}
      <div className="announcement-bar color-scheme-5">
        <div className="page-width">
          <div className="announcement-bar__message">
            <a href="/collections/all" className="announcement-bar__link">
              10% off on your first order USE "WELCOME10"
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-2">
                <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Exact Shopify styling */}
      <header className="header color-scheme-2">
        <div className="page-width">
          <div className="header__content">
            {/* Logo */}
            <div className="header__logo-wrapper">
              <a href="/" className="header__logo">
                JAY BHARAT
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="header__nav hidden md:flex">
              <a href="/collections/all" className="header__nav-link">
                All Products
              </a>
              <a href="/collections/farsan-snacks" className="header__nav-link">
                Farsan Snacks
              </a>
              <a href="/collections/gujju-classics" className="header__nav-link">
                Gujju Classics
              </a>
              <a href="/collections/party-essentials" className="header__nav-link">
                Party Essentials
              </a>
              <a href="/collections/mithai-sweet" className="header__nav-link">
                Mithai & Sweet
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="header__actions">
              {/* Search */}
              <button
                className="header__action-button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* User Account */}
              <a href="/account" className="header__action-button" aria-label="Account">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16 17V15C16 13.9391 15.5786 12.9217 14.8284 12.1716C14.0783 11.4214 13.0609 11 12 11H8C6.93913 11 5.92172 11.4214 5.17157 12.1716C4.42143 12.9217 4 13.9391 4 15V17M12 7C12 9.20914 10.2091 11 8 11C5.79086 11 4 9.20914 4 7C4 4.79086 5.79086 3 8 3C10.2091 3 12 4.79086 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Cart */}
              <a href="/cart" className="header__action-button" aria-label="Cart">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 17.6 16.6 18 16 18H8C7.4 18 7 17.6 7 17V13H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="header__action-button md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="search-bar animate--fade-in">
              <div className="search-bar__content">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="input search-bar__input"
                  autoFocus
                />
                <button className="button search-bar__button">
                  Search
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu animate--slide-in-left">
            <div className="mobile-menu__content">
              <div className="mobile-menu__header">
                <h3 className="mobile-menu__title">Menu</h3>
                <button
                  className="mobile-menu__close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 2L2 18M2 2L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <nav className="mobile-menu__nav">
                <a href="/collections/all" className="mobile-menu__link">
                  All Products
                </a>
                <a href="/collections/farsan-snacks" className="mobile-menu__link">
                  Farsan Snacks
                </a>
                <a href="/collections/gujju-classics" className="mobile-menu__link">
                  Gujju Classics
                </a>
                <a href="/collections/party-essentials" className="mobile-menu__link">
                  Party Essentials
                </a>
                <a href="/collections/mithai-sweet" className="mobile-menu__link">
                  Mithai & Sweet
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* WhatsApp Fixed Button - Exact from Shopify theme */}
      <div className="whatsapp-fix">
        <a href="https://api.whatsapp.com/send?phone=919876543210&text=Hi, I would like to order from JAY BHARAT">
          <img src="https://cdn.shopify.com/s/files/1/0790/5889/5154/files/whatsapp_icon_22271a5f-abce-4891-ae16-688c59f72375.png?v=1689142834" alt="WhatsApp" />
          <span>Chat with us</span>
        </a>
      </div>

      {/* Additional Header Styles */}
      <style jsx>{`
        .search-bar {
          background: var(--color-scheme-2-background);
          border-top: 1px solid rgba(var(--color-foreground), 0.1);
          padding: 1.5rem 0;
        }
        
        .search-bar__content {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .search-bar__input {
          flex: 1;
          max-width: 40rem;
        }
        
        .search-bar__button {
          white-space: nowrap;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--color-scheme-2-background);
          z-index: 200;
          overflow-y: auto;
        }
        
        .mobile-menu__content {
          padding: 2rem;
        }
        
        .mobile-menu__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(var(--color-foreground), 0.1);
        }
        
        .mobile-menu__title {
          margin: 0;
          font-size: 2rem;
        }
        
        .mobile-menu__close {
          background: none;
          border: none;
          color: var(--color-foreground);
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .mobile-menu__nav {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-menu__link {
          color: var(--color-foreground);
          text-decoration: none;
          font-size: 1.8rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(var(--color-foreground), 0.1);
          transition: color 0.3s ease;
        }
        
        .mobile-menu__link:hover {
          color: var(--color-button);
        }
        
        @media (max-width: 767px) {
          .header__nav {
            display: none;
          }
          
          .search-bar__content {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-bar__input {
            max-width: none;
          }
        }
      `}</style>
    </>
  );
}
