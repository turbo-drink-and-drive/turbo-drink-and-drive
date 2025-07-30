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
  description: "Turbo Drive\nSofia, Bulgaria\nCall us: +359888336303\n Personal Driver, Drink and Drive service, Rent a car",
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
    icon: "https://www.turbodrive.pro/favicon.ico",
    shortcut: "https://www.turbodrive.pro/favicon.ico",
  },
  openGraph: {
    title: "Turbo Drive",
    description:
      "Sofia, Bulgaria\nCall us: +359888336303\n Personal Driver, Drink and Drive service, Rent a car",
    url: "https://www.turbodrive.pro",
    siteName: "Turbo Drive",
    images: [
      {
        url: "https://www.turbodrive.pro/logo.svg",
        width: 600,
        height: 315,
        alt: "Turbo Drive logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "https://www.turbodrive.pro/logo.svg",
    title: "Turbo Drive",
    description:
      "Sofia, Bulgaria\nCall us: +359888336303\n Personal Driver, Drink and Drive service, Rent a car",
    images: ["https://www.turbodrive.pro/logo.svg"],
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
