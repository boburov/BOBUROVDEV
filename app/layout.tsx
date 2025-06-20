import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B.Shukurullo • Software Craftsman",
  description:
    "Official portfolio of Shukurullo Boburov, a fullstack JavaScript developer.",
  other: {
    "google-site-verification": "MaugEz5g-WDQQUU6ft4Q4Lf5dFcTSjwdDyJA1UKPo64",
  },
  openGraph: {
    title: "B.Shukurullo • Software Craftsman",
    url: "https://www.boburov.uz",
    siteName: "boburov.uz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
