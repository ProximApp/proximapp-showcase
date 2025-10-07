import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProximApp - Digital Solutions",
  description: "Innovative digital solutions for modern businesses",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
