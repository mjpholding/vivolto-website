import type { Metadata } from "next";
import "./globals.css";
import "./themes.css";

const SITE_URL = "https://www.vivolto.de";
const TITLE = "Vivolto GmbH – Elektrotechnik, Photovoltaik & KNX in NRW";
const DESCRIPTION =
  "Vivolto GmbH aus Kerpen: Elektrotechnik, Photovoltaik, KNX-Systeme und Gebäudetechnik für Industrie und Gewerbe in NRW.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Vivolto GmbH",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/hero-elektrotechnik.webp", width: 1536, height: 1024, alt: "Vivolto – Elektrotechnik" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero-elektrotechnik.webp"],
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Vivolto GmbH",
  url: SITE_URL,
  logo: `${SITE_URL}/vivolto-logo-transparent.png`,
  image: `${SITE_URL}/hero-elektrotechnik.webp`,
  email: "info@vivolto.de",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ottostraße 14",
    postalCode: "50170",
    addressLocality: "Kerpen",
    addressRegion: "NRW",
    addressCountry: "DE",
  },
  areaServed: "Nordrhein-Westfalen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
