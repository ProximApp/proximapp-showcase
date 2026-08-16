import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProximApp — L'app qui fait vivre votre campus",
  description:
    "Une app à l'image de votre association : paiements par QR code, événements, actus et modules sur-mesure. Open source — conçue, déployée et maintenue de bout en bout.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${serif.variable} ${sans.variable} ${mono.variable} antialiased`}
        style={{
          background: "var(--paper)",
          color: "var(--ink)",
        }}
      >
        {children}
      </body>
    </html>
  );
}