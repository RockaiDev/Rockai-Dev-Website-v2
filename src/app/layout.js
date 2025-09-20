import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { StarsBackgroundDemo } from "@/components/StarsBackground/StarsBackground";
import Footer from "@/components/Footer/Footer";
import "aos/dist/aos.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

// Metadata for SEO
export const metadata = {
  metadataBase: new URL('https://www.rockaidev.com'),
  title: "Rockai Dev - Software Solutions",
  description: "Rockai Dev specializes in AI-powered solutions, custom software development, and innovative technology services. Transform your business with our cutting-edge AI tools and expert development team.",
  keywords: "AI solutions, software development, artificial intelligence, custom software, web development, mobile apps, PropAI, AttendAI, POS systems, chatbot development",
  authors: [{ name: "Rockai Dev" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Rockai Dev - Software Solutions",
    description: "Transform your business with our cutting-edge AI tools and expert development team. Specializing in AI solutions, custom software development, and innovative technology services.",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: "Rockai Dev Logo",
      },
    ],
    url: "/",
    siteName: "Rockai Dev",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rockai Dev - Software Solutions",
    description: "Transform your business with our cutting-edge AI tools and expert development team. Specializing in AI solutions, custom software development, and innovative technology services.",
    images: ["/Logo.png"],
    site: "@rockaidev",
    creator: "@rockaidev",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    distribution: "global",
    rating: "general",
    referrer: "no-referrer-when-downgrade",
    "theme-color": "#0f0229",
    "msapplication-navbutton-color": "#0f0229",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Rockai Dev",
    "application-name": "Rockai Dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rockai Dev",
              "description": "AI-powered solutions and custom software development services",
              "url": "https://www.rockaidev.com",
              "logo": "https://www.rockaidev.com/Logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://linkedin.com/company/rockaidev",
                "https://twitter.com/rockaidev"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "foundingDate": "2024",
              "industry": "Software Development",
              "services": [
                "AI Solutions",
                "Custom Software Development",
                "Web Development",
                "Mobile App Development",
                "PropAI",
                "AttendAI",
                "POS Systems",
                "Chatbot Development"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} relative min-h-screen`}>
        <StarsBackgroundDemo />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
