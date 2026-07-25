import { useTranslations } from "next-intl";
import { BrandMark } from "@/components/brand-mark";

export function Footer() {
  const t = useTranslations("showcase");

  const links = [
    { href: "#modules", label: t("nav.features") },
    { href: "#branding", label: t("nav.branding") },
    { href: "#opensource", label: t("nav.opensource") },
    { href: "#demo", label: t("nav.demo") },
    { href: "mailto:contact@proximapp.fr", label: t("footer.contact") },
  ];

  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-top">
          <a className="wordmark" href="#top" aria-label="ProximApp">
            <BrandMark />
            <span className="word">
              Proxim<b>App</b>
            </span>
          </a>
          <nav className="foot-links" aria-label="Footer">
            {links.map((l, i) => (
              <span key={l.href} style={{ display: "inline-flex", alignItems: "center" }}>
                <a href={l.href}>{l.label}</a>
                {i < links.length - 1 && <span className="sep">◆</span>}
              </span>
            ))}
          </nav>
        </div>
        <div className="foot-bottom">
          <span>
            Open source <span className="diamond">◆</span>{" "}
            <a href="https://github.com/ProximApp">github.com/ProximApp</a>
          </span>
          <span>{t("footer.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
