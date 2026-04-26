import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Mhengagee Media, a creative powerhouse based in Nairobi specializing in cinematic storytelling, blending art and technology to create visual identities.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
