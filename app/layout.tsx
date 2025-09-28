import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B.Shukurullo • Fullstack JavaScript Developer",
  description:
    "Portfolio of Shukurullo Boburov – Fullstack JavaScript developer specializing in Next.js, NestJS, React, and modern web technologies.",
  other: {
    "google-site-verification": "MaugEz5g-WDQQUU6ft4Q4Lf5dFcTSjwdDyJA1UKPo64",
  },
  icons: {
    icon: "/logo.png", // URL style path, relative to public folder
    apple: "/logo.png",
  },
  openGraph: {
    title: "B.Shukurullo • Fullstack JavaScript Developer",
    description:
      "Portfolio of Shukurullo Boburov – Fullstack JavaScript developer specializing in Next.js, NestJS, React, and modern web technologies.",
    url: "https://www.boburov.uz",
    siteName: "boburov.uz",
    type: "website",
    images: [
      {
        url: "/icons/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shukurullo Boburov Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B.Shukurullo • Fullstack JavaScript Developer",
    description:
      "Portfolio of Shukurullo Boburov – Fullstack JavaScript developer specializing in Next.js, NestJS, React, and modern web technologies.",
    images: ["/icons/logo.jpg"],
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
