import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "matchsticks — image infrastructure for Nigerian businesses",
  description:
    "Upload, transform, and deliver images built for Nigerian SMEs: resumable uploads that survive flaky mobile networks, WhatsApp and email ingestion, naira billing, and bandwidth-aware delivery.",
  openGraph: {
    title: "matchsticks — image infrastructure for Nigerian businesses",
    description:
      "Upload, transform, and deliver images built for Nigerian SMEs: resumable uploads that survive flaky mobile networks, WhatsApp and email ingestion, naira billing, and bandwidth-aware delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
