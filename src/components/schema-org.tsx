const siteUrl = "https://aaronoriginate.github.io/gold-pm-poc";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gold Project Management",
  alternateName: "Gold PM",
  description:
    "Fractional delivery leadership and PMO support for PE-backed and Series A-C companies. We install delivery infrastructure for fast-growing companies where delivery has become a bottleneck.",
  url: siteUrl,
  logo: `${siteUrl}/images/unsplash/hero/hero-01-gold-geometric-shapes.jpg`,
  image: `${siteUrl}/images/unsplash/hero/hero-01-gold-geometric-shapes.jpg`,
  email: "michael@goldprojectmanagement.com",
  founder: {
    "@type": "Person",
    name: "Michael Gold",
    jobTitle: "Founder & Lead Strategic Consultant",
    url: `${siteUrl}/about`,
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
    { "@type": "Continent", name: "Europe" },
  ],
  serviceType: [
    "Fractional Delivery Leadership",
    "PMO Setup and Optimisation",
    "Post-Acquisition Delivery Integration",
    "Delivery Diagnostics",
    "Portfolio Visibility and Governance",
    "Capacity Planning",
  ],
  knowsAbout: [
    "Project Management",
    "PMO",
    "Delivery Leadership",
    "Portfolio Visibility",
    "Governance Frameworks",
    "Post-Acquisition Integration",
    "Capacity Planning",
    "Delivery Operating Models",
    "Fractional Leadership",
  ],
  slogan: "Delivery that scales",
  priceRange: "£5,000-£25,000+/month",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "michael@goldprojectmanagement.com",
    availableLanguage: "English",
  },
  sameAs: ["https://linkedin.com/company/goldpm"],
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

export function FAQPageSchema({ items }: { items: { question: string; answer: string }[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
