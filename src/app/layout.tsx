import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "./fonts";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    template: '%s | IP Address Tracker',
    default: 'IP Address Tracker',
  },
  description: "IP Address Tracker - generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
          async
        />
      </Head>
      <body
        className={`${rubik.className} ${rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
