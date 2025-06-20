import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B.Shukurullo • Software Craftsman",
   description: "Official portfolio of Shukurullo Boburov, a fullstack JavaScript developer."
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
