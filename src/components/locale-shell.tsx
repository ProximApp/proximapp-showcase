import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

type Props = {
  locale: string;
  messages: Record<string, unknown>;
  children: ReactNode;
};

export function LocaleShell({
  locale,
  messages,
  children,
}: Props) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <LanguageProvider>
        <div className="pa-root">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </LanguageProvider>
    </NextIntlClientProvider>
  );
}