import type { Metadata } from "next";
import "@/app/style/globals.css";

export const metadata: Metadata = {
  title: "Boburov's Skills – Fullstack JavaScript Developer",
  description:
    "Shukurullo Boburov – Fullstack JavaScript developer. Specializing in Next.js, React.js, NestJS, Node.js, PostgreSQL, Tailwind CSS, Telegram bots, and modern web technologies.",
  keywords: [
    "Shukurullo Boburov",
    "Fullstack developer Uzbekistan",
    "Next.js developer",
    "NestJS developer",
    "React.js developer",
    "Node.js backend",
    "PostgreSQL Prisma",
    "Telegram bot developer",
    "Tailwind CSS UI",
    "Frontend Backend Developer",
  ],
  other: {
    "google-site-verification": "MaugEz5g-WDQQUU6ft4Q4Lf5dFcTSjwdDyJA1UKPo64",
  },
  icons: {
    icon: "./boburov.png", // favicon
    apple: "./boburov.png", // apple touch
  },
  openGraph: {
    title: "Boburov's Skills – Fullstack JavaScript Developer",
    description:
      "Explore skills of Shukurullo Boburov – Fullstack JavaScript developer. From frontend (React, Next.js, Tailwind) to backend (NestJS, Node.js, PostgreSQL, Prisma) and bot development.",
    url: "https://www.boburov.uz/skills",
    siteName: "boburov.uz",
    type: "website",
    images: [
      {
        url: "./boburov.png",
        width: 1200,
        height: 630,
        alt: "Shukurullo Boburov Portfolio & Skills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boburov's Skills – Fullstack JavaScript Developer",
    description:
      "Discover the skillset of Shukurullo Boburov: Fullstack JavaScript, Next.js, React.js, NestJS, Node.js, PostgreSQL, Prisma, Tailwind CSS, and Telegram bot development.",
    images: ["./boburov.png"],
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
