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
  openGraph: {
    title: "Turbo Drive",
    description:
      "Sofia, Bulgaria\nCall us: +359888336303\n Personal Driver, Drink and Drive service, Rent a car",
    url: "https://Turbodrive.pro",
    siteName: "Turbo Drive",
    images: [
      {
        url: "/logo.svg",
        width: 360,
        height: 38,
        alt: "Turbo Drive logo",
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
    images: ["/logo.svg"],
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
