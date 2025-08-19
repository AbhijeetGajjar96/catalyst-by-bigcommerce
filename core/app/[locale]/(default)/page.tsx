import { HeroSlider } from '../../../components/theme/sections/HeroSlider';
import { CategoryGrid } from '../../../components/theme/sections/CategoryGrid';
import { RotatingTextBand } from '../../../components/theme/sections/RotatingTextBand';
import { OverviewSection } from '../../../components/theme/sections/OverviewSection';
import { BottomServices } from '../../../components/theme/sections/BottomServices';
import { CustomerReviews } from '../../../components/theme/sections/CustomerReviews';
import { Header } from '../../../components/header';
import { Footer } from '../../../components/footer';

// Import the Shopify sections data
import sectionsData from '../../../lib/shopify/index.sections.json';

// TypeScript interfaces for Shopify sections data
interface SectionBlock {
  type: string;
  settings: {
    image?: string;
    mobile_image?: string;
    title?: string;
    block_description?: string;
    link?: string;
    [key: string]: any;
  };
}

interface Section {
  type: string;
  settings: {
    type?: string;
    width_type?: string;
    title?: string;
    text?: string;
    [key: string]: any;
  };
  blocks?: Record<string, SectionBlock>;
}

interface SectionsData {
  sections: Record<string, Section>;
  order: string[];
}

// Cast the imported data to our interface
const shopifySections = sectionsData as SectionsData;

// Function to render specific sections based on their purpose
function renderSpecificSection(sectionId: string, purpose: string) {
  const section = shopifySections.sections[sectionId];
  if (!section) return null;

  const blocks = Object.values(section.blocks || []) as any[];

  switch (purpose) {
    case 'hero':
      return <HeroSlider blocks={blocks} settings={section.settings} />;
    case 'categories':
      return <CategoryGrid blocks={blocks} settings={section.settings} />;
    case 'text-band':
      return <RotatingTextBand settings={section.settings} />;
    case 'overview':
      return <OverviewSection blocks={blocks} settings={section.settings} />;
    case 'services':
      return <BottomServices blocks={blocks} settings={section.settings} />;
    case 'reviews':
      return <CustomerReviews blocks={blocks} settings={section.settings} />;
    default:
      return null;
  }
}

export default function HomePage() {
  // Define page sections with their specific purposes
  const pageSections = [
    { id: 'ys_custom_gallery_HJP3FA', purpose: 'hero', name: 'Hero Slider' },
    { id: 'ys_custom_gallery_tELG8t', purpose: 'categories', name: 'Category Grid' },
    { id: 'custom_liquid_HCciGk', purpose: 'text-band', name: 'Rotating Text Band' },
    { id: 'ys_custom_gallery_xb8dwx', purpose: 'overview', name: 'Overview Section' },
    { id: 'ys_custom_gallery_gF9DUX', purpose: 'services', name: 'Bottom Services' },
    { id: 'ys_custom_gallery_7Pif7p', purpose: 'reviews', name: 'Customer Reviews' }
  ];

  return (
    <>
      {/* Header Component */}
      <Header />
      
      {/* Main Content */}
      <main className="min-h-screen">
        {/* Page Sections */}
        {pageSections.map((section, index) => (
          <section 
            key={section.id} 
            className="section-wrapper"
            style={{
              marginTop: index === 0 ? '0' : 'var(--spacing-sections-desktop)',
              marginBottom: index === pageSections.length - 1 ? '0' : 'var(--spacing-sections-desktop)'
            }}
          >
            {renderSpecificSection(section.id, section.purpose)}
          </section>
        ))}
      </main>
      
      {/* Footer Component */}
      <Footer />
    </>
  );
}