import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "View the Mhengagee Media portfolio. A showcase of cinematic storytelling, brand identities, events coverage, and moments captured through our lens.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
