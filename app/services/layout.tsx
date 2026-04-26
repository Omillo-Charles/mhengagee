import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Explore Mhengagee Media's photography and videography packages. We offer cinematic event coverage, studio portraits, visual brand identity, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
