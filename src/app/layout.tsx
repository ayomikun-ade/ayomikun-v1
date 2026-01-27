import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});
const siteConfig = {
  name: "Ayomikun Adeosun",
  url: "https://ayomikunade.vercel.app",
  description:
    "Frontend Engineer specializing in crafting high-performance, visually immersive digital experiences, merging retro aesthetics with modern architecture.",
  author: "Ayomikun Adeosun",
  twitter: "@theayomikunade",
};

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Frontend Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  creator: siteConfig.author,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  keywords: [
    "Frontend Engineer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Ayomikun Adeosun",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: siteConfig.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og.png"],
    creator: siteConfig.twitter,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: { icon: "/favicon.ico" },
  verification: {
    google: "QeUXPnR4gWaTq_B3ajWHh9k1YTJ-4tGclCloJxav0-s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/og.png`,
    sameAs: [
      "https://github.com/ayomikun-ade",
      "https://linkedin.com/ayomikun-adeosun",
      "https://twitter.com/theayomikun-ade",
    ],
    jobTitle: "Frontend Engineer",
    description: siteConfig.description,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Web Development",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${figtree.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-black`}
      >
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="crt-overlay" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
