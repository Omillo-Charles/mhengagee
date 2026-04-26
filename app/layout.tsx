import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: {
    default: "Mhengagee Media | Visual Excellence & Cinematic Storytelling",
    template: "%s | Mhengagee Media"
  },
  description: "A Nairobi-based creative powerhouse dedicated to crafting visual identities that demand attention through cinematic storytelling, photography, videography, and uncompromising quality.",
  keywords: ["Photography", "Videography", "Cinematography", "Branding", "Events Coverage", "Nairobi", "Kenya", "Mhengagee Media", "Creative Agency"],
  authors: [{ name: "Mhengagee Media" }],
  creator: "Mhengagee Media",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://mhengagee.com",
    siteName: "Mhengagee Media",
    title: "Mhengagee Media | Visual Excellence & Cinematic Storytelling",
    description: "A Nairobi-based creative powerhouse dedicated to crafting visual identities that demand attention through cinematic storytelling and uncompromising quality.",
    images: [
      {
        url: "/images/mhenga1.jpeg",
        width: 1200,
        height: 630,
        alt: "Mhengagee Media Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mhengagee Media | Visual Excellence & Cinematic Storytelling",
    description: "A Nairobi-based creative powerhouse dedicated to crafting visual identities that demand attention through cinematic storytelling and uncompromising quality.",
    images: ["/images/mhenga1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex min-h-screen flex-col">
        <Preloader />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
