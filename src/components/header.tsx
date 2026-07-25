import { useTranslations } from "next-intl";
import { BrandMark } from "@/components/brand-mark";

export function Header() {
  const t = useTranslations("showcase");

  const links = [
    { href: "#modules", label: t("nav.features") },
    { href: "#branding", label: t("nav.branding") },
    { href: "#build", label: t("nav.build") },
    { href: "#opensource", label: t("nav.opensource") },
    { href: "#demo", label: t("nav.demo") },
  ];

  return (
    <header className="site-head">
      <div className="wrap">
        <a className="wordmark" href="#top" aria-label="ProximApp">
          <BrandMark />
          <span className="word">
            Proxim<b>App</b>
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {links.map((l, i) => (
            <span key={l.href} style={{ display: "inline-flex", alignItems: "center" }}>
              <a href={l.href}>{l.label}</a>
              {i < links.length - 1 && <span className="sep">◆</span>}
            </span>
          ))}
        </nav>

        <div className="head-actions">
          <a className="btn" href="#demo">
            {t("nav.cta")} <span className="diamond">◆</span>
          </a>
        </div>
      </div>
    </header>
  );
}
