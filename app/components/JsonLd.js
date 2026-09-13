import { site } from "@/lib/site";

const person = {
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  alternateName: ["Avijeet", "avijeetshah"],
  url: `${site.url}/`,
  image: site.image,
  jobTitle: site.jobTitle,
  email: `mailto:${site.email}`,
  description: site.description,
  nationality: "Nepalese",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NP"
  },
  sameAs: [site.github]
};

const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: `${site.url}/`,
  name: site.title,
  description: site.description,
  inLanguage: "en",
  publisher: { "@id": `${site.url}/#person` }
};

const profilePage = {
  "@type": "ProfilePage",
  "@id": `${site.url}/#profile`,
  url: `${site.url}/`,
  name: site.title,
  description: site.description,
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#person` },
  mainEntity: { "@id": `${site.url}/#person` }
};

export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
