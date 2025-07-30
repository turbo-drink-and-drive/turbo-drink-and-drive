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
  title: "Turbo Drive",
  description: "Turbo Drive, Sofia, Bulgaria, Call us: +359888336303, Personal Driver, Drink and Drive service, Rent a car",
  keywords: [
    "Turbo Drive",
    "Sofia",
    "Bulgaria",
    "Personal Driver",
    "Drink and Drive service",
    "Rent a car",
  ],
  authors: [{ name: "Turbo Drive", url: "https://www.turbodrive.pro" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Turbo Drive",
    description: "Sofia, Bulgaria\nCall us: +359888336303\n Personal Driver, Drink and Drive service, Rent a car",
    url: "https://www.turbodrive.pro",
    siteName: "Turbo Drive",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Turbo Drive logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turbo Drive",
    description:
      "Sofia, Bulgaria\nCall us: +359888336303\n Personal Driver, Drink and Drive service, Rent a car",
    images: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
