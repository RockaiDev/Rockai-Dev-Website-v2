// JSON-LD Structured Data Component
export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RockAI Dev",
    "alternateName": "RockAI Development",
    "url": "https://www.rockaidev.com",
    "logo": "https://www.rockaidev.com/Logo.png",
    "description": "Leading AI-powered software development company specializing in custom solutions, PropAI CRM, HodourAI, and SUFRA POS. Transform your business with cutting-edge technology.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Hassan Rageh"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Smouha",
      "addressLocality": "Alexandria",
      "addressCountry": "Egypt"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+201555867970",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61564089689600",
      "https://www.instagram.com/rockaidev/",
      "https://www.linkedin.com/company/rockaidev/",
      "https://www.tiktok.com/@rockaidev"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Software Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "PropAI CRM",
            "description": "AI-powered customer relationship management system"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HodourAI",
            "description": "AI assistant for teachers and educational management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SUFRA POS",
            "description": "Smart restaurant management system"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RockAI Dev",
    "url": "https://www.rockaidev.com",
    "description": "AI-powered software development company offering custom solutions, PropAI CRM, HodourAI, and SUFRA POS",
    "publisher": {
      "@type": "Organization",
      "name": "RockAI Dev"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.rockaidev.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PropAI CRM",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "AI-powered customer relationship management system with intelligent automation and insights",
    "url": "https://www.rockaidev.com/products/propai",
    "author": {
      "@type": "Organization",
      "name": "RockAI Dev"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
    </>
  );
}
