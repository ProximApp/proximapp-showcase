import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// Broadsheet editorial pairing: Fraunces (serif display), Hanken Grotesk
// (sans body/UI), IBM Plex Mono (labels & terminal). Exposed as CSS vars that
// globals.css maps onto --serif / --sans / --mono.
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

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}


export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${serif.variable} ${sans.variable} ${mono.variable} antialiased`}
        style={{ background: "var(--paper)", color: "var(--ink)" }}
      >
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider>
            {/* pa-root wraps the page (not the fixed language switcher, which
                LanguageProvider renders as a sibling) so its grain + z-index
                rules don't fight the switcher's fixed positioning. */}
            <div className="pa-root">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
