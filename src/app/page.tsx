import { getMessages, setRequestLocale } from "next-intl/server";

import { LocaleShell } from "@/components/locale-shell";
import ShowcasePage from "@/components/showcase-page";

export default async function HomePage() {
  const locale = "fr";

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <LocaleShell locale={locale} messages={messages}>
      <ShowcasePage />
    </LocaleShell>
  );
}