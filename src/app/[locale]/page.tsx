"use client";

import * as React from "react";
import { useTranslations } from "next-intl";

/* rich-text tag handlers for <em> / <b> inside messages */
const rich = {
  em: (chunks: React.ReactNode) => <em>{chunks}</em>,
  b: (chunks: React.ReactNode) => <b>{chunks}</b>,
};

/* -- inline icons (stroke = currentColor) --------------------------------- */
const Icon = {
  star: (
    <path d="M12 2l2.4 6.9L21 9l-5 4.6L17.6 21 12 17l-5.6 4L8 13.6 3 9l6.6-.1z" />
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  ship: (
    <>
      <path d="M12 16V3" />
      <path d="M7 8l5-5 5 5" />
      <path d="M4 15v4a2 2 0 002 2h12a2 2 0 002-2v-4" />
    </>
  ),
  support: <path d="M21 11.5a8.4 8.4 0 01-9 8.4L3 21l1.1-3.8A8.5 8.5 0 1121 11.5z" />,
  payments: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h4" />
    </>
  ),
  events: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </>
  ),
  news: (
    <>
      <path d="M4 4h13v16H6a2 2 0 01-2-2z" />
      <path d="M17 8h3v10a2 2 0 01-2 2" />
      <path d="M7 8h7M7 12h7M7 16h4" />
    </>
  ),
  campaigns: (
    <>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </>
  ),
  custom: (
    <>
      <path d="M12 3l2 4 4 .6-3 3 .7 4.4L12 13l-3.4 2 .7-4.4-3-3 4-.6z" />
      <path d="M12 17v4M8 21h8" />
    </>
  ),
  ticketing: (
    <>
      <path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 000 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 000-4z" />
      <path d="M14 6v12" strokeDasharray="2 2" />
    </>
  ),
};

function StepIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      className="ico"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ======================================================================= */

export default function HomePage() {
  const t = useTranslations("showcase");

  /* ---------- module composer (React state) ---------- */
  type ModKey =
    | "payments"
    | "events"
    | "news"
    | "campaigns"
    | "custom"
    | "ticketing";
  const modules: {
    key: ModKey;
    soon?: boolean;
    disabled?: boolean;
  }[] = [
    { key: "payments" },
    { key: "events" },
    { key: "news" },
    { key: "campaigns" },
    { key: "custom" },
    { key: "ticketing", soon: true, disabled: true },
  ];
  const order: ModKey[] = [
    "payments",
    "events",
    "news",
    "campaigns",
    "custom",
    "ticketing",
  ];
  const previewTiles: ModKey[] = [
    "payments",
    "events",
    "news",
    "campaigns",
    "custom",
  ];
  const [selected, setSelected] = React.useState<Set<ModKey>>(
    () => new Set<ModKey>(["payments", "events", "news"])
  );
  const toggle = (m: { key: ModKey; disabled?: boolean }) => {
    if (m.disabled) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(m.key)) next.delete(m.key);
      else next.add(m.key);
      return next;
    });
  };
  const activeMods = order.filter((k) => selected.has(k));

  /* ---------- white-label brand switcher (React state) ---------- */
  const brands = [
    {
      key: "myecl",
      name: "MyECL",
      sub: "École Centrale de Lyon",
      b: "#d1541f",
      b2: "#ec7a3f",
    },
    {
      key: "myemapp",
      name: "myemapp",
      sub: "emlyon business school",
      b: "#1f6f8f",
      b2: "#3fa9c9",
    },
    {
      key: "yours",
      name: t("branding.yourBde"),
      sub: t("branding.yourAssociation"),
      b: "#7a4bd0",
      b2: "#a074e6",
    },
  ];
  const [brand, setBrand] = React.useState(0);
  const active = brands[brand];

  /* ---------- typed deploy terminal (DOM effect) ---------- */
  const termRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const term = termRef.current;
    if (!term) return;
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lines = Array.from(term.querySelectorAll<HTMLElement>(".tl"));
    if (!lines.length || reduce) return;
    term.classList.add("type");
    const caret = document.createElement("span");
    caret.className = "term-caret";
    let started = false;
    let i = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const next = () => {
      if (i >= lines.length) return;
      const line = lines[i];
      line.classList.add("shown");
      line.appendChild(caret);
      i += 1;
      const delay = 260 + (line.textContent?.length ?? 0) * 9;
      timers.push(setTimeout(next, delay));
    };
    const run = () => {
      if (started) return;
      started = true;
      next();
    };
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              run();
              io?.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      io.observe(term);
    } else {
      run();
    }
    return () => {
      io?.disconnect();
      timers.forEach(clearTimeout);
      caret.remove();
    };
  }, []);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-frame">
            <span className="corner tl" aria-hidden="true" />
            <span className="corner tr" aria-hidden="true" />
            <span className="corner bl" aria-hidden="true" />
            <span className="corner br" aria-hidden="true" />

            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow anim d1">{`{ ${t("hero.eyebrow")} }`}</span>
                <h1 className="display hero-h1 anim d2">
                  {t.rich("hero.title", rich)}
                </h1>
                <p className="hero-sub serif-tag anim d3">{t("hero.sub")}</p>
                <p className="lead hero-body anim d3">{t("hero.body")}</p>
                <div className="hero-cta-row anim d4">
                  <a className="btn" href="#demo">
                    {t("hero.ctaPrimary")} <span className="diamond">◆</span>
                  </a>
                  <a className="btn ghost" href="#flagship">
                    {t("hero.ctaSecondary")}{" "}
                    <span className="diamond cyan">◆</span>
                  </a>
                </div>
                <div className="hero-meta anim d5">
                  <span>
                    {t("hero.meta1")} <span className="diamond">◆</span>
                  </span>
                  <span>
                    Flutter + FastAPI <span className="diamond">◆</span>
                  </span>
                  <span>{t("hero.meta3")}</span>
                </div>
              </div>

              {/* hero art: ink disc + phone */}
              <div className="hero-art">
                <svg className="ink-disc" viewBox="0 0 430 430" aria-hidden="true">
                  <defs>
                    <radialGradient id="disc" cx="42%" cy="38%" r="70%">
                      <stop offset="0%" className="s0" />
                      <stop offset="55%" className="s1" />
                      <stop offset="100%" className="s2" />
                    </radialGradient>
                    <filter id="rough">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="2"
                        seed="7"
                        result="n"
                      />
                      <feDisplacementMap in="SourceGraphic" in2="n" scale="6" />
                    </filter>
                  </defs>
                  <g className="splat" opacity=".9">
                    <circle cx="360" cy="86" r="7" />
                    <circle cx="392" cy="120" r="3.4" />
                    <circle cx="345" cy="150" r="2.2" />
                    <circle cx="58" cy="330" r="6" />
                    <circle cx="34" cy="300" r="3" />
                    <circle cx="78" cy="368" r="2.4" />
                    <circle cx="386" cy="286" r="4" />
                    <circle cx="405" cy="250" r="2.2" />
                    <circle cx="40" cy="110" r="4.6" />
                    <circle cx="20" cy="140" r="2.2" />
                  </g>
                  <circle
                    cx="215"
                    cy="215"
                    r="168"
                    fill="url(#disc)"
                    filter="url(#rough)"
                  />
                  <g className="tex" filter="url(#rough)" opacity=".18">
                    <circle cx="150" cy="150" r="1.6" />
                    <circle cx="270" cy="130" r="1.2" />
                    <circle cx="300" cy="250" r="2" />
                    <circle cx="140" cy="280" r="1.4" />
                    <circle cx="215" cy="330" r="1.2" />
                    <circle cx="330" cy="180" r="1" />
                  </g>
                  <circle
                    cx="215"
                    cy="215"
                    r="188"
                    fill="none"
                    className="ring"
                    strokeWidth="1"
                    opacity=".4"
                  />
                  <circle cx="403" cy="215" r="3" className="spark" />
                </svg>

                <div
                  className="phone"
                  role="img"
                  aria-label={t("hero.phoneAlt")}
                >
                  <div className="phone-notch" />
                  <div className="phone-screen">
                    <div className="ps-head">
                      <div className="brand">
                        BDE<b>Lyon</b>
                      </div>
                      <div className="sc">{t("hero.scanToPay")}</div>
                    </div>
                    <div className="ps-body">
                      <div className="ps-qr">
                        <svg
                          viewBox="0 0 100 100"
                          width="100%"
                          height="100%"
                          aria-hidden="true"
                        >
                          <g className="hqr-d">
                            <rect x="4" y="4" width="26" height="26" fill="none" stroke="#14121c" strokeWidth="6" />
                            <rect x="14" y="14" width="6" height="6" />
                            <rect x="70" y="4" width="26" height="26" fill="none" stroke="#14121c" strokeWidth="6" />
                            <rect x="80" y="14" width="6" height="6" />
                            <rect x="4" y="70" width="26" height="26" fill="none" stroke="#14121c" strokeWidth="6" />
                            <rect x="14" y="80" width="6" height="6" />
                            <rect x="40" y="8" width="6" height="6" />
                            <rect x="52" y="8" width="6" height="6" />
                            <rect x="40" y="20" width="6" height="6" />
                            <rect x="60" y="20" width="6" height="6" />
                            <rect x="8" y="40" width="6" height="6" />
                            <rect x="20" y="40" width="6" height="6" />
                            <rect x="8" y="52" width="6" height="6" />
                            <rect x="20" y="60" width="6" height="6" />
                          </g>
                          <g className="hqr-v">
                            <rect x="40" y="40" width="6" height="6" />
                            <rect x="52" y="40" width="6" height="6" />
                            <rect x="64" y="40" width="6" height="6" />
                            <rect x="40" y="52" width="6" height="6" />
                            <rect x="52" y="52" width="6" height="6" />
                            <rect x="76" y="52" width="6" height="6" />
                            <rect x="40" y="64" width="6" height="6" />
                            <rect x="64" y="64" width="6" height="6" />
                            <rect x="52" y="76" width="6" height="6" />
                            <rect x="76" y="76" width="6" height="6" />
                            <rect x="88" y="64" width="6" height="6" />
                            <rect x="64" y="88" width="6" height="6" />
                          </g>
                        </svg>
                      </div>
                      <div className="ps-pill tnum">
                        <span className="dot" />€12.00 · {t("hero.paid")}
                      </div>
                    </div>
                    <div className="ps-foot">
                      <i className="on" />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== ONBOARDING 01–04 ===================== */}
      <section className="section" id="how">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{`{ ${t("how.eyebrow")} }`}</span>
            <h2 className="display section-title">{t.rich("how.title", rich)}</h2>
          </div>
          <div className="steps">
            {(
              [
                { n: "01", cmd: "brand", icon: Icon.star },
                { n: "02", cmd: "modules", icon: Icon.grid },
                { n: "03", cmd: "deploy", icon: Icon.ship },
                { n: "04", cmd: "support", icon: Icon.support },
              ] as const
            ).map((s) => (
              <article className="step" key={s.n}>
                <div className="num tnum">{s.n}</div>
                <StepIcon>{s.icon}</StepIcon>
                <h3>{t(`how.${s.cmd}.title`)}</h3>
                <div className="cmd">{s.cmd}</div>
                <p>{t(`how.${s.cmd}.desc`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FLAGSHIP QR ===================== */}
      <section className="section flagship" id="flagship">
        <div className="wrap">
          <div className="flag-grid">
            <div className="flag-copy">
              <span className="eyebrow">{`{ ${t("flagship.eyebrow")} }`}</span>
              <h2 className="display">{t.rich("flagship.title", rich)}</h2>
              <p className="lead">{t("flagship.lead")}</p>
              <ul className="flag-points">
                <li>
                  <span className="diamond">◆</span>
                  <span>{t("flagship.p1")}</span>
                </li>
                <li>
                  <span className="diamond">◆</span>
                  <span>{t("flagship.p2")}</span>
                </li>
                <li>
                  <span className="diamond cyan">◆</span>
                  <span>{t("flagship.p3")}</span>
                </li>
              </ul>
              <a className="btn" href="#demo">
                {t("nav.cta")} <span className="diamond">◆</span>
              </a>
            </div>

            <div className="flag-panel">
              <span className="tick tl" aria-hidden="true" />
              <span className="tick tr" aria-hidden="true" />
              <span className="tick bl" aria-hidden="true" />
              <span className="tick br" aria-hidden="true" />
              <div className="qr-wrap">
                <div className="qr-mono">{`{ ${t("flagship.qrLabel")} }`}</div>
                <div className="qr" aria-hidden="true">
                  {QR_PATTERN.map((row, r) =>
                    row.map((cell, c) => (
                      <i key={`${r}-${c}`} className={cell} />
                    ))
                  )}
                </div>
                <div className="receipt">
                  <div className="r-l">
                    <span className="st">{t("flagship.received")}</span>
                    <span className="ds">{t("flagship.dues")}</span>
                  </div>
                  <span className="amt tnum">€12.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section
        aria-label={t("stats.aria")}
        style={{ padding: "clamp(2.4rem,5vw,3.8rem) 0" }}
      >
        <div className="wrap">
          <div className="stats">
            <div className="stat">
              <div className="n tnum">
                0<em>%</em>
              </div>
              <div className="k">{t("stats.fees")}</div>
            </div>
            <div className="stat">
              <div className="n tnum">2</div>
              <div className="k">{t("stats.campuses")}</div>
            </div>
            <div className="stat">
              <div className="n tnum">1</div>
              <div className="k">{t("stats.codebase")}</div>
            </div>
            <div className="stat">
              <div className="n tnum">
                100<em>%</em>
              </div>
              <div className="k">{t("stats.oss")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MODULE COMPOSER ===================== */}
      <section className="section" id="modules">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{`{ ${t("composer.eyebrow")} }`}</span>
            <h2 className="display section-title">
              {t.rich("composer.title", rich)}
            </h2>
            <p className="lead" style={{ marginTop: "1rem" }}>
              {t("composer.intro")}
            </p>
          </div>

          <div className="composer">
            <div className="cmp-grid" role="group" aria-label={t("composer.groupAria")}>
              {modules.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  className="cmp-card"
                  aria-pressed={selected.has(m.key)}
                  disabled={m.disabled}
                  onClick={() => toggle(m)}
                >
                  <div className="cmp-top">
                    <svg
                      className="cmp-ico"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      {Icon[m.key]}
                    </svg>
                    {m.soon ? (
                      <span className="soon">{t("composer.soon")}</span>
                    ) : (
                      <span className="cmp-check" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M5 12l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <div>
                    <h3>{t(`modules.${m.key}`)}</h3>
                    <div className="m-cat">{t(`modules.cat.${m.key}`)}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="cmp-aside">
              <div
                className="cmp-phone"
                role="img"
                aria-label={t("composer.previewAria")}
              >
                <div className="cmp-screen">
                  <div className="cmp-scr-top">
                    <div className="b">
                      BDE<em>Lyon</em>
                    </div>
                    <div className="s">{t("composer.yourModules")}</div>
                  </div>
                  <div className="cmp-app">
                    {previewTiles.map((k) => (
                      <div
                        key={k}
                        className={`cmp-tile${selected.has(k) ? " on" : ""}`}
                      >
                        <svg
                          className="ti"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          {Icon[k]}
                        </svg>
                        <span className="tn">{t(`modules.${k}`)}</span>
                      </div>
                    ))}
                    {activeMods.length === 0 && (
                      <div className="cmp-empty">{t("composer.empty")}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="cmp-cmd" aria-hidden="true">
                <span className="pr">proxima ~ $</span> proxima ship --modules{" "}
                <span className="fl">
                  {activeMods.length ? activeMods.join(" ") : "—"}
                </span>{" "}
                <span className="cnt">
                  · {activeMods.length} {t("composer.shipped")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHITE LABEL ===================== */}
      <section
        className="section"
        id="branding"
        style={{
          background: "var(--panel)",
          borderTop: "1px solid var(--hair)",
          borderBottom: "1px solid var(--hair)",
        }}
      >
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{`{ ${t("branding.eyebrow")} }`}</span>
            <h2 className="display section-title">
              {t.rich("branding.title", rich)}
            </h2>
            <p className="lead" style={{ marginTop: "1rem" }}>
              {t("branding.intro")}
            </p>
          </div>

          <div
            className="skinner"
            style={
              {
                "--b": active.b,
                "--b2": active.b2,
              } as React.CSSProperties
            }
          >
            <div className="sk-stage">
              <div className="sk-dev">
                <div className="sk-scr">
                  <div className="sk-top">
                    <div className="sk-brand">{active.name}</div>
                    <div className="sk-sub">{active.sub}</div>
                    <div className="sk-chip" />
                  </div>
                  <div className="sk-tiles">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="sk-pay">{t("branding.scanToPay")}</div>
                </div>
              </div>
            </div>

            <div className="sk-controls" role="group" aria-label={t("branding.groupAria")}>
              {brands.map((br, i) => (
                <button
                  key={br.key}
                  type="button"
                  className="sk-btn"
                  aria-pressed={brand === i}
                  onClick={() => setBrand(i)}
                >
                  <span className="sk-sw" style={{ background: br.b }} />
                  {br.name}
                </button>
              ))}
            </div>
            <p className="sk-cap">{t.rich("branding.caption", rich)}</p>
          </div>
        </div>
      </section>

      {/* ===================== DEPLOY TERMINAL ===================== */}
      <section className="section" id="build">
        <div className="wrap">
          <div
            className="section-head"
            style={{ textAlign: "center", maxWidth: "660px", marginInline: "auto" }}
          >
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              {`{ ${t("build.eyebrow")} }`}
            </span>
            <h2 className="display section-title">{t.rich("build.title", rich)}</h2>
            <p className="lead" style={{ margin: "1rem auto 0" }}>
              {t("build.lead")}
            </p>
          </div>
          <div className="term-wrap">
            <div className="term" role="img" aria-label={t("build.termAria")}>
              <div className="term-bar">
                <span className="diamond">◆</span> proxima build{" "}
                <span className="tb-r">{t("build.barRight")}</span>
              </div>
              <div className="term-body" ref={termRef}>
                <div className="tl">
                  <span className="pr">proxima ~ $</span>{" "}
                  <span className="cm">proxima new &quot;BDE Lyon&quot;</span>
                </div>
                <div className="tl">
                  <span className="bl">✦</span>
                  <span className="lb">brand</span>{" "}
                  <span className="desc">— {t("build.brand")}</span>
                  <span className="ok">✓</span>
                </div>
                <div className="tl">
                  <span className="bl">✦</span>
                  <span className="lb">modules</span>{" "}
                  <span className="desc">— {t("build.modules")}</span>
                  <span className="ok">✓</span>
                </div>
                <div className="tl">
                  <span className="bl">✦</span>
                  <span className="lb">build</span>{" "}
                  <span className="desc">— {t("build.buildLine")}</span>
                  <span className="ok">✓</span>
                </div>
                <div className="tl">
                  <span className="bl">✦</span>
                  <span className="lb">ship</span>{" "}
                  <span className="desc">— App Store · Play · Web</span>
                  <span className="ok">✓</span>
                </div>
                <div className="tl end">
                  <span className="ar">→</span>
                  <span className="cm">{t("build.done")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OPEN SOURCE ===================== */}
      <section className="section" id="opensource">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{`{ ${t("oss.eyebrow")} }`}</span>
            <h2 className="display section-title">{t.rich("oss.title", rich)}</h2>
          </div>
          <div className="os-grid">
            <article className="os-card">
              <span className="c-tick" aria-hidden="true" />
              <div className="role">{t("oss.clientRole")}</div>
              <div className="repo">
                Titan <em>— Flutter</em>
              </div>
              <p>{t("oss.titanDesc")}</p>
              <div className="c-meta">
                <span className="diamond">◆</span> iOS · Android · Web
              </div>
              <a className="gh" href="https://github.com/ProximApp">
                {t("oss.gh")} <span>→</span>
              </a>
            </article>
            <article className="os-card">
              <span className="c-tick" aria-hidden="true" />
              <div className="role">{t("oss.backendRole")}</div>
              <div className="repo">
                Hyperion <em>— FastAPI</em>
              </div>
              <p>{t("oss.hyperionDesc")}</p>
              <div className="c-meta">
                <span className="diamond">◆</span> Python · PostgreSQL · Redis
              </div>
              <a className="gh" href="https://github.com/ProximApp">
                {t("oss.gh")} <span>→</span>
              </a>
            </article>
          </div>

          <div style={{ marginTop: "clamp(2.4rem,5vw,3.6rem)" }}>
            <div className="trust">
              <span>
                {t("oss.trust1")} <span className="diamond">◆</span>
              </span>
              <span>
                Flutter + FastAPI <span className="diamond">◆</span>
              </span>
              <span>
                {t("oss.trust3")} <span className="diamond">◆</span>
              </span>
              <span>{t("oss.trust4")}</span>
            </div>
            <p className="live-on">
              <span className="dotv" />
              {t.rich("oss.liveOn", rich)}
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CTA BAND ===================== */}
      <section className="cta-band" id="demo">
        <span className="glyph g1" aria-hidden="true">
          ◆
        </span>
        <span className="glyph g2" aria-hidden="true">
          ◆
        </span>
        <div className="wrap">
          <span className="eyebrow">{`{ ${t("cta.eyebrow")} }`}</span>
          <h2>{t.rich("cta.title", rich)}</h2>
          <div className="cta-actions">
            <a className="btn paper" href="mailto:contact@proximapp.fr">
              {t("nav.cta")} <span className="diamond">◆</span>
            </a>
            <a className="email" href="mailto:contact@proximapp.fr">
              contact@proximapp.fr
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* decorative 11×11 QR pattern (v = accent cell, o = empty, "" = ink) */
const QR_PATTERN: string[][] = [
  ["v", "", "", "o", "", "o", "", "o", "", "", "v"],
  ["", "o", "", "o", "", "", "v", "o", "", "o", ""],
  ["", "", "v", "", "o", "", "", "o", "v", "", ""],
  ["o", "o", "", "v", "", "o", "", "", "o", "", "o"],
  ["", "", "o", "", "v", "", "o", "", "", "v", ""],
  ["o", "", "", "o", "", "v", "", "o", "", "", "o"],
  ["", "v", "o", "", "", "o", "", "", "v", "", ""],
  ["", "o", "", "", "v", "", "o", "", "", "o", "v"],
  ["v", "", "o", "", "", "", "v", "o", "", "", ""],
  ["", "o", "", "v", "o", "", "", "", "o", "", "o"],
  ["v", "", "", "o", "", "", "v", "o", "", "", "v"],
];
