import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights",
  description: "Stay updated with the latest events, campus news, and behind-the-scenes content from Mhengagee Media.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
