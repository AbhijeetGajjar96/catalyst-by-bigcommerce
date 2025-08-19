import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Providers } from '../providers'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jay Bharat - Authentic Indian Sweets & Snacks',
  description: 'Serving authentic Indian sweets & snacks since 1985. Fresh daily, nationwide shipping, 100% vegetarian.',
}

export default async function RootLayout({ 
  children, 
  params 
}: { 
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={montserrat.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f97316" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        
        {/* Shopify Theme CSS */}
        <link rel="stylesheet" href="/assets/base.css" />
        <link rel="stylesheet" href="/assets/custom-overrides.css" />
        <link rel="stylesheet" href="/assets/mask-blobs.css" />
        <link rel="stylesheet" href="/assets/component-accordion.css" />
        <link rel="stylesheet" href="/assets/component-article-card.css" />
        <link rel="stylesheet" href="/assets/component-card.css" />
        <link rel="stylesheet" href="/assets/component-cart-drawer.css" />
        <link rel="stylesheet" href="/assets/component-cart-items.css" />
        <link rel="stylesheet" href="/assets/component-cart-notification.css" />
        <link rel="stylesheet" href="/assets/component-cart.css" />
        <link rel="stylesheet" href="/assets/component-collection-hero.css" />
        <link rel="stylesheet" href="/assets/component-complementary-products.css" />
        <link rel="stylesheet" href="/assets/component-deferred-media.css" />
        <link rel="stylesheet" href="/assets/component-discounts.css" />
        <link rel="stylesheet" href="/assets/component-facets.css" />
        <link rel="stylesheet" href="/assets/component-image-with-text.css" />
        <link rel="stylesheet" href="/assets/component-list-menu.css" />
        <link rel="stylesheet" href="/assets/component-list-payment.css" />
        <link rel="stylesheet" href="/assets/component-list-social.css" />
        <link rel="stylesheet" href="/assets/component-localization-form.css" />
        <link rel="stylesheet" href="/assets/component-mega-menu.css" />
        <link rel="stylesheet" href="/assets/component-menu-drawer.css" />
        <link rel="stylesheet" href="/assets/component-modal-video.css" />
        <link rel="stylesheet" href="/assets/component-model-viewer-ui.css" />
        <link rel="stylesheet" href="/assets/component-newsletter.css" />
        <link rel="stylesheet" href="/assets/component-pagination.css" />
        <link rel="stylesheet" href="/assets/component-pickup-availability.css" />
        <link rel="stylesheet" href="/assets/component-predictive-search.css" />
        <link rel="stylesheet" href="/assets/component-price.css" />
        <link rel="stylesheet" href="/assets/component-product-model.css" />
        <link rel="stylesheet" href="/assets/component-product-variant-picker.css" />
        <link rel="stylesheet" href="/assets/component-progress-bar.css" />
        <link rel="stylesheet" href="/assets/component-rating.css" />
        <link rel="stylesheet" href="/assets/component-search.css" />
        <link rel="stylesheet" href="/assets/component-show-more.css" />
        <link rel="stylesheet" href="/assets/component-slider.css" />
        <link rel="stylesheet" href="/assets/component-slideshow.css" />
        <link rel="stylesheet" href="/assets/component-swatch-input.css" />
        <link rel="stylesheet" href="/assets/component-swatch.css" />
        <link rel="stylesheet" href="/assets/component-totals.css" />
        <link rel="stylesheet" href="/assets/component-volume-pricing.css" />
        <link rel="stylesheet" href="/assets/collage.css" />
        <link rel="stylesheet" href="/assets/collapsible-content.css" />
        <link rel="stylesheet" href="/assets/customer.css" />
        <link rel="stylesheet" href="/assets/newsletter-section.css" />
        <link rel="stylesheet" href="/assets/quantity-popover.css" />
        <link rel="stylesheet" href="/assets/quick-add.css" />
        <link rel="stylesheet" href="/assets/quick-order-list.css" />
        <link rel="stylesheet" href="/assets/section-blog-post.css" />
        <link rel="stylesheet" href="/assets/section-collection-list.css" />
        <link rel="stylesheet" href="/assets/section-contact-form.css" />
        <link rel="stylesheet" href="/assets/section-email-signup-banner.css" />
        <link rel="stylesheet" href="/assets/section-featured-blog.css" />
        <link rel="stylesheet" href="/assets/section-featured-product.css" />
        <link rel="stylesheet" href="/assets/section-footer.css" />
        <link rel="stylesheet" href="/assets/section-image-banner.css" />
        <link rel="stylesheet" href="/assets/section-main-blog.css" />
        <link rel="stylesheet" href="/assets/section-main-page.css" />
        <link rel="stylesheet" href="/assets/section-main-product.css" />
        <link rel="stylesheet" href="/assets/section-multicolumn.css" />
        <link rel="stylesheet" href="/assets/section-password.css" />
        <link rel="stylesheet" href="/assets/section-related-products.css" />
        <link rel="stylesheet" href="/assets/section-rich-text.css" />
        <link rel="stylesheet" href="/assets/template-collection.css" />
        <link rel="stylesheet" href="/assets/template-giftcard.css" />
        <link rel="stylesheet" href="/assets/video-section.css" />
      </head>
      <body className="gradient template-index" suppressHydrationWarning>
        <a className="skip-to-content-link button visually-hidden" href="#MainContent">
          Skip to content
        </a>
        
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>

        {/* Shopify Theme JavaScript */}
        <script src="/assets/animations.js" defer />
        <script src="/assets/cart-drawer.js" defer />
        <script src="/assets/cart-notification.js" defer />
        <script src="/assets/cart.js" defer />
        <script src="/assets/constants.js" defer />
        <script src="/assets/customer.js" defer />
        <script src="/assets/details-disclosure.js" defer />
        <script src="/assets/details-modal.js" defer />
        <script src="/assets/facets.js" defer />
        <script src="/assets/global.js" defer />
        <script src="/assets/localization-form.js" defer />
        <script src="/assets/magnify.js" defer />
        <script src="/assets/main-search.js" defer />
        <script src="/assets/media-gallery.js" defer />
        <script src="/assets/password-modal.js" defer />
        <script src="/assets/pickup-availability.js" defer />
        <script src="/assets/predictive-search.js" defer />
        <script src="/assets/price-per-item.js" defer />
        <script src="/assets/product-form.js" defer />
        <script src="/assets/product-info.js" defer />
        <script src="/assets/product-modal.js" defer />
        <script src="/assets/product-model.js" defer />
        <script src="/assets/pubsub.js" defer />
        <script src="/assets/quantity-popover.js" defer />
        <script src="/assets/quick-add-bulk.js" defer />
        <script src="/assets/quick-add.js" defer />
        <script src="/assets/quick-order-list.js" defer />
        <script src="/assets/recipient-form.js" defer />
        <script src="/assets/search-form.js" defer />
        <script src="/assets/share.js" defer />
        <script src="/assets/show-more.js" defer />
        <script src="/assets/theme-editor.js" defer />
      </body>
    </html>
  )
}