export const StructuredData = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yanis Touloum",
    "jobTitle": "Étudiant en Master Finance d'Entreprise",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "Burgundy School of Business",
      "alternateName": "BSB"
    },
    "email": "yanis.touloum@bsb-education.com",
    "url": "https://yanis-touloum.fr",
    "sameAs": [
      "https://www.linkedin.com/in/yanis-touloum-05b60b316"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Burgundy School of Business",
      "alternateName": "BSB"
    },
    "knowsAbout": [
      "Analyse Financière",
      "Audit",
      "Modélisation DCF",
      "Contrôle de Gestion",
      "Mathématiques Financières",
      "Due Diligence"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dijon",
      "addressCountry": "FR"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Yanis Touloum - Portfolio Professionnel",
    "url": "https://yanis-touloum.fr",
    "description": "Portfolio professionnel de Yanis Touloum, étudiant en Master Finance d'Entreprise à BSB. Expertise en analyse financière, audit et modélisation DCF.",
    "author": {
      "@type": "Person",
      "name": "Yanis Touloum"
    },
    "inLanguage": "fr-FR"
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Yanis Touloum - Portfolio Professionnel",
    "url": "https://yanis-touloum.fr",
    "mainEntity": {
      "@type": "Person",
      "name": "Yanis Touloum",
      "jobTitle": "Étudiant en Master Finance d'Entreprise",
      "worksFor": {
        "@type": "EducationalOrganization",
        "name": "Burgundy School of Business"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
};

