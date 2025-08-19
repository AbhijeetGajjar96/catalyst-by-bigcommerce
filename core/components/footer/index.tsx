"use client";

export function Footer() {
  return (
    <footer className="footer color-scheme-1">
      {/* Footer Patti - Exact from Shopify theme */}
      <div className="footer_patti"></div>
      
      <div className="page-width">
        <div className="footer__content">
          {/* Company Information */}
          <div className="footer__section">
            <h3 className="footer__section-title">JAY BHARAT</h3>
            <p className="footer__section-description">
              Authentic Gujarati cuisine delivered to your doorstep. Experience the taste of tradition with our handcrafted farsan, mithai, and party essentials.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18.244 0H1.756C.786 0 0 .786 0 1.756v16.488C0 18.714.786 19.5 1.756 19.5h8.268v-7.184H5.742v-2.85h4.282V7.35c0-4.246 2.592-6.592 6.408-6.592 1.818 0 3.378.132 3.378.132v3.9h-1.902c-1.876 0-2.476 1.164-2.476 2.358v2.85h4.398l-.558 2.85h-3.84V19.5h4.506c.97 0 1.756-.786 1.756-1.756V1.756C20 .786 19.214 0 18.244 0z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.054.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.318 0 6.974.01 5.88.059 2.246.227.227 2.242.061 5.877 0 6.972 0 7.316 0 10c0 2.683.01 3.027.059 4.122.167 3.632 2.182 5.65 5.817 5.817 1.07.048 1.414.058 4.122.058 2.683 0 3.027-.01 4.122-.058 3.629-.167 5.652-2.182 5.817-5.817.049-1.095.059-1.439.059-4.122 0-2.683-.01-3.027-.059-4.122-.166-3.635-2.185-5.65-5.817-5.817C13.027.01 12.683 0 10 0zm0 4.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm5.338-9.87a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="footer__section-title">Quick Links</h3>
            <ul className="footer__links">
              <li><a href="/collections/all" className="footer__link">All Products</a></li>
              <li><a href="/collections/farsan-snacks" className="footer__link">Farsan Snacks</a></li>
              <li><a href="/collections/gujju-classics" className="footer__link">Gujju Classics</a></li>
              <li><a href="/collections/party-essentials" className="footer__link">Party Essentials</a></li>
              <li><a href="/collections/mithai-sweet" className="footer__link">Mithai & Sweet</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer__section">
            <h3 className="footer__section-title">Customer Service</h3>
            <ul className="footer__links">
              <li><a href="/pages/contact" className="footer__link">Contact Us</a></li>
              <li><a href="/pages/shipping" className="footer__link">Shipping Info</a></li>
              <li><a href="/pages/returns" className="footer__link">Returns</a></li>
              <li><a href="/pages/faq" className="footer__link">FAQ</a></li>
              <li><a href="/pages/catering" className="footer__link">Catering</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer__section">
            <h3 className="footer__section-title">Contact Info</h3>
            <div className="footer__contact">
              <p className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="footer__contact-icon">
                  <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <span>123 Food Street, Ahmedabad, Gujarat</span>
              </p>
              <p className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="footer__contact-icon">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>hello@jaybharat.com</span>
              </p>
              <p className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="footer__contact-icon">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>+91 98765 43210</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Payment Icons */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <div className="footer__copyright">
              <p>&copy; 2025 JAY BHARAT. All rights reserved.</p>
            </div>
            
            <div className="footer__policies">
              <a href="/pages/privacy-policy" className="footer__policy-link">Privacy Policy</a>
              <a href="/pages/terms-of-service" className="footer__policy-link">Terms of Service</a>
              <a href="/pages/refund-policy" className="footer__policy-link">Refund Policy</a>
            </div>

            {/* Payment Icons - Exact from Shopify theme */}
            <div className="footer__payment">
              <span className="footer__payment-text">We Accept:</span>
              <div className="footer__payment-icons">
                <svg width="40" height="25" viewBox="0 0 40 25" fill="currentColor" className="footer__payment-icon">
                  <path d="M35 0H5C2.24 0 0 2.24 0 5v15c0 2.76 2.24 5 5 5h30c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM5 2h30c1.66 0 3 1.34 3 3v15c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3z"/>
                  <path d="M8 8h4v9H8zM16 8h4v9h-4zM24 8h4v9h-4z"/>
                </svg>
                <svg width="40" height="25" viewBox="0 0 40 25" fill="currentColor" className="footer__payment-icon">
                  <path d="M35 0H5C2.24 0 0 2.24 0 5v15c0 2.76 2.24 5 5 5h30c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM5 2h30c1.66 0 3 1.34 3 3v15c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3z"/>
                  <path d="M8 8h24v9H8z"/>
                </svg>
                <svg width="40" height="25" viewBox="0 0 40 25" fill="currentColor" className="footer__payment-icon">
                  <path d="M35 0H5C2.24 0 0 2.24 0 5v15c0 2.76 2.24 5 5 5h30c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM5 2h30c1.66 0 3 1.34 3 3v15c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3z"/>
                  <path d="M8 8h24v9H8z"/>
                </svg>
                <svg width="40" height="25" viewBox="0 0 40 25" fill="currentColor" className="footer__payment-icon">
                  <path d="M35 0H5C2.24 0 0 2.24 0 5v15c0 2.76 2.24 5 5 5h30c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM5 2h30c1.66 0 3 1.34 3 3v15c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3z"/>
                  <path d="M8 8h24v9H8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Footer Styles */}
      <style jsx>{`
        .footer_patti {
          height: 4px;
          background: linear-gradient(90deg, #edc56d 0%, #bc9256 50%, #984d38 100%);
        }
        
        .footer__section-title {
          font-family: var(--font-heading-family);
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--color-foreground);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .footer__section-description {
          color: rgba(var(--color-foreground), 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .footer__social {
          display: flex;
          gap: 1rem;
        }
        
        .footer__social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
          background: rgba(var(--color-foreground), 0.1);
          color: var(--color-foreground);
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .footer__social-link:hover {
          background: var(--color-foreground);
          color: var(--color-background);
          transform: translateY(-2px);
        }
        
        .footer__links {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .footer__link {
          color: rgba(var(--color-foreground), 0.8);
          text-decoration: none;
          display: block;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        
        .footer__link:hover {
          color: var(--color-foreground);
          border-bottom-color: var(--color-foreground);
        }
        
        .footer__contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .footer__contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: rgba(var(--color-foreground), 0.8);
          margin: 0;
        }
        
        .footer__contact-icon {
          flex-shrink: 0;
          opacity: 0.7;
        }
        
        .footer__bottom {
          border-top: 1px solid rgba(var(--color-foreground), 0.1);
          padding-top: 2rem;
          margin-top: 3rem;
        }
        
        .footer__bottom-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          align-items: center;
          text-align: center;
        }
        
        .footer__copyright {
          color: rgba(var(--color-foreground), 0.7);
          font-size: 1.4rem;
        }
        
        .footer__policies {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .footer__policy-link {
          color: rgba(var(--color-foreground), 0.7);
          text-decoration: none;
          font-size: 1.4rem;
          transition: color 0.3s ease;
        }
        
        .footer__policy-link:hover {
          color: var(--color-foreground);
        }
        
        .footer__payment {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        
        .footer__payment-text {
          color: rgba(var(--color-foreground), 0.7);
          font-size: 1.4rem;
          font-weight: 500;
        }
        
        .footer__payment-icons {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .footer__payment-icon {
          width: 4rem;
          height: 2.5rem;
          color: rgba(var(--color-foreground), 0.6);
          transition: color 0.3s ease;
        }
        
        .footer__payment-icon:hover {
          color: var(--color-foreground);
        }
        
        @media (max-width: 767px) {
          .footer__content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer__social {
            justify-content: center;
          }
          
          .footer__policies {
            flex-direction: column;
            gap: 1rem;
          }
          
          .footer__bottom-content {
            gap: 1.5rem;
          }
        }
        
        @media (min-width: 768px) {
          .footer__bottom-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }
          
          .footer__payment {
            align-items: flex-end;
          }
        }
      `}</style>
    </footer>
  );
}
