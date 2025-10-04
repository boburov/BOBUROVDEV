import type { Metadata } from "next";
import "@/app/style/globals.css";

export const metadata: Metadata = {
  title: "Shukurullo Boburov | Fullstack JavaScript Developer (Next.js, NestJS, React)",
  description:
    "Official portfolio of Shukurullo Boburov – Fullstack JavaScript developer from Uzbekistan. Specialized in Next.js, NestJS, React.js, Prisma, PostgreSQL, TailwindCSS, and Telegram bot development. Explore my projects, skills, and experience in building scalable modern web applications.",
  keywords: [
    "Shukurullo Boburov",
    "Boburov developer",
    "Fullstack JavaScript developer",
    "Next.js developer",
    "NestJS developer",
    "React.js portfolio",
    "PostgreSQL Prisma",
    "Telegram bot developer",
    "Uzbekistan programmer",
    "Web developer portfolio",
    "Frontend developer Uzbekistan",
    "Backend developer Uzbekistan",
    "Docker developer",
    "AWS S3 migration",
    "TailwindCSS UI",
    "Node.js developer",
  ],
  authors: [{ name: "Shukurullo Boburov", url: "https://www.boburov.uz" }],
  creator: "Shukurullo Boburov",
  publisher: "boburov.uz",
  metadataBase: new URL("https://www.boburov.uz"),
  alternates: {
    canonical: "https://www.boburov.uz",
  },
  openGraph: {
    title: "Shukurullo Boburov – Fullstack JavaScript Developer",
    description:
      "Portfolio of Shukurullo Boburov, Fullstack JavaScript developer specializing in Next.js, NestJS, React, TailwindCSS, PostgreSQL, and modern web apps. Discover my projects, skills, and career journey.",
    url: "https://www.boburov.uz",
    siteName: "boburov.uz",
    type: "website",
    images: [
      {
        url: "/icons/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shukurullo Boburov Portfolio – Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rovixwb",
    title: "Shukurullo Boburov – Fullstack Developer",
    description:
      "Explore the portfolio of Shukurullo Boburov, Fullstack JavaScript developer skilled in Next.js, NestJS, React, Prisma, PostgreSQL, and Telegram bots.",
    images: ["/icons/logo.jpg"],
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
