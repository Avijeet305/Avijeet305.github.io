import { Inter } from "next/font/google";
import JsonLd from "./components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "portfolio",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "profile",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.image,
        width: 140,
        height: 140,
        alt: `${site.name}, ${site.jobTitle}`
      }
    ],
    firstName: "Avijeet",
    lastName: "Shah",
    username: "avijeetshah"
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: [site.image]
  },
  icons: {
    icon: [{ url: "/image/Avijeet.jpeg", type: "image/jpeg" }],
    apple: [{ url: "/image/Avijeet.jpeg" }]
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} px-6 py-8 max-[780px]:p-4`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
