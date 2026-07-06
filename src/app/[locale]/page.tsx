"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

/* -- small building blocks ------------------------------------------------ */

function Toast({
  icon,
  bg,
  meta,
  children,
}: {
  icon: string;
  bg: string;
  meta: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[15px] border border-white/[0.06] bg-[#0b0b15]/90 p-3 shadow-[0_12px_26px_rgba(0,0,0,0.3)]">
      <div
        className="flex h-9 w-9 flex-none items-center justify-center rounded-[10px] text-[17px]"
        style={{ background: bg }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[10.5px] font-bold tracking-wide text-white/50">
          {meta}
        </div>
        <div className="mt-0.5 text-[13px] font-semibold text-[#f1f0f8]">
          {children}
        </div>
      </div>
    </div>
  );
}

function ScreenshotSlot({ label }: { label: string }) {
  return (
    <div className="flex h-[440px] w-[216px] flex-none items-center justify-center rounded-[30px] border border-dashed border-white/20 bg-white/[0.03] p-6 text-center text-[13px] text-white/40">
      {label}
    </div>
  );
}

/* -- page ----------------------------------------------------------------- */

export default function HomePage() {
  const t = useTranslations("showcase");

  const users = ["École Centrale de Lyon", "emlyon business school"];

  const features = [
    { icon: "🗓️", title: t("features.events.title"), desc: t("features.events.desc"), custom: false },
    { icon: "📣", title: t("features.posts.title"), desc: t("features.posts.desc"), custom: false },
    { icon: "🗳️", title: t("features.campaigns.title"), desc: t("features.campaigns.desc"), custom: false },
    { icon: "✨", title: t("features.custom.title"), desc: t("features.custom.desc"), custom: true },
  ];

  return (
    <div className="font-body text-[#f1f0f8]">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden px-6 pb-14 pt-12 sm:px-14">
        <div className="pointer-events-none absolute -right-10 -top-16 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(139,123,255,0.22),transparent_70%)]" />
        <div className="relative mx-auto grid max-w-[1160px] items-center gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#46d9ff]/35 px-3.5 py-[7px] text-[12.5px] font-bold uppercase tracking-wider text-[#46d9ff]">
              {t("hero.badge")}
            </span>
            <h1 className="font-display text-[52px] font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-[72px] lg:text-[82px]">
              {t("hero.titleLead")}{" "}
              <span className="text-[#8b7bff]">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="mb-8 mt-6 max-w-[480px] text-[18px] leading-[1.5] text-white/[0.62]">
              {t("hero.subtitle")}
            </p>
            <div className="mb-9 flex flex-wrap items-center gap-3">
              <Link
                href="#demo"
                className="rounded-full bg-[#8b7bff] px-7 py-[15px] text-[15.5px] font-bold text-[#0b0b15] transition-transform hover:-translate-y-0.5"
              >
                {t("hero.ctaPrimary")}
              </Link>
              <Link
                href="#demo"
                className="rounded-full border border-white/25 px-[26px] py-[15px] text-[15.5px] font-semibold transition-colors hover:bg-white/5"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-[18px] border-t border-white/[0.12] pt-6">
              <span className="text-[13px] text-white/40">
                {t("hero.usersLabel")}
              </span>
              {users.map((u) => (
                <span
                  key={u}
                  className="font-display text-[16px] font-bold text-white/75"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/mockup-app.png"
              alt={t("hero.mockupAlt")}
              width={300}
              height={300}
              priority
              className="animate-floaty h-auto w-full max-w-[300px] drop-shadow-[0_26px_44px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section id="fonctions" className="scroll-mt-20 px-6 pb-4 pt-14 sm:px-14">
        <div className="mx-auto mb-10 max-w-[1160px]">
          <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-wider text-[#8b7bff]">
            {t("sectionFeatures.eyebrow")}
          </div>
          <h2 className="mb-3.5 font-display text-[40px] font-extrabold leading-[0.98] sm:text-[46px]">
            {t("sectionFeatures.title")}
          </h2>
          <p className="max-w-[560px] text-[16px] leading-[1.55] text-white/60">
            {t("sectionFeatures.intro")}
          </p>
        </div>

        <div className="mx-auto grid max-w-[1160px] items-stretch gap-4 md:grid-cols-2">
          {/* QR payment — live */}
          <div className="flex min-h-[300px] flex-col rounded-[22px] bg-[linear-gradient(125deg,#8b7bff,#46d9ff)] p-[34px] text-[#0b0b15]">
            <div className="mb-4 flex h-6 items-center text-[13px] font-bold uppercase tracking-wider">
              {t("payment.eyebrow")}
            </div>
            <h3 className="mb-2.5 font-display text-[30px] font-extrabold leading-[1.05]">
              {t("payment.title")}
            </h3>
            <p className="max-w-[340px] text-[14.5px] leading-[1.45] text-[#0b0b15]/80">
              {t("payment.desc")}
            </p>
            <div className="mt-auto pt-7">
              <Toast icon="💳" bg="#8b7bff" meta={t("payment.toastMeta")}>
                <span
                  dangerouslySetInnerHTML={{ __html: t.raw("payment.toastMsg") }}
                />
              </Toast>
            </div>
          </div>

          {/* Ticketing — coming soon */}
          <div className="relative flex min-h-[300px] flex-col rounded-[22px] border border-white/[0.08] bg-[#161622] p-[34px]">
            <span className="absolute right-[22px] top-[22px] rounded-full bg-[#46d9ff] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0b0b15]">
              {t("ticketing.soon")}
            </span>
            <div className="mb-4 flex h-6 items-center text-[20px]">🎟️</div>
            <h3 className="mb-2.5 font-display text-[30px] font-extrabold leading-[1.05]">
              {t("ticketing.title")}
            </h3>
            <p className="max-w-[340px] text-[14px] leading-[1.45] text-white/55">
              {t("ticketing.desc")}
            </p>
            <div className="mt-auto pt-7">
              <Toast icon="🎟️" bg="#46d9ff" meta={t("ticketing.toastMeta")}>
                {t("ticketing.toastMsg")}
              </Toast>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURE ROW ============ */}
      <section id="sur-mesure" className="scroll-mt-20 px-6 pb-14 sm:px-14">
        <div className="mx-auto grid max-w-[1160px] gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={
                f.custom
                  ? "rounded-[20px] border border-[#8b7bff]/40 bg-[linear-gradient(135deg,rgba(139,123,255,0.18),rgba(70,217,255,0.12))] p-[26px]"
                  : "rounded-[20px] border border-white/[0.08] bg-[#161622] p-[26px]"
              }
            >
              <div className="mb-3.5 text-[22px]">{f.icon}</div>
              <h3 className="mb-1.5 font-display text-[18px] font-bold">
                {f.title}
              </h3>
              <p
                className={`text-[13px] leading-[1.45] ${
                  f.custom ? "text-white/[0.62]" : "text-white/55"
                }`}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ PERSONNALISATION ============ */}
      <section
        id="personnalisation"
        className="scroll-mt-20 bg-[#161622] px-6 py-14 sm:px-14"
      >
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-9 max-w-[560px]">
            <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-wider text-[#8b7bff]">
              {t("personalization.eyebrow")}
            </div>
            <h2 className="mb-3.5 font-display text-[46px] font-extrabold leading-[0.98]">
              {t("personalization.title")}
            </h2>
            <p className="text-[16px] leading-[1.55] text-white/60">
              {t("personalization.desc")}
            </p>
          </div>
          <div className="flex gap-[18px] overflow-x-auto pb-2">
            <ScreenshotSlot label={t("personalization.shot1")} />
            <ScreenshotSlot label={t("personalization.shot2")} />
            <ScreenshotSlot label={t("personalization.shot3")} />
          </div>
        </div>
      </section>

      {/* ============ DEMO VIDEO ============ */}
      <section id="demo" className="scroll-mt-20 px-6 py-16 sm:px-14">
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto mb-8 max-w-[620px] text-center">
            <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-wider text-[#46d9ff]">
              {t("video.eyebrow")}
            </div>
            <h2 className="mb-3 font-display text-[44px] font-extrabold leading-none">
              {t("video.title")}
            </h2>
            <p className="text-[16px] leading-[1.55] text-white/60">
              {t("video.desc")}
            </p>
          </div>
          <div className="flex h-[300px] w-full items-center justify-center rounded-[22px] border border-dashed border-white/20 bg-white/[0.03] text-center text-[14px] text-white/40 sm:h-[460px]">
            {t("video.placeholder")}
          </div>
        </div>
      </section>

      {/* ============ OPEN SOURCE ============ */}
      <section className="bg-[#161622] px-6 py-16 sm:px-14">
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-11 max-w-[620px]">
            <div className="mb-3.5 text-[12.5px] font-bold uppercase tracking-wider text-[#46d9ff]">
              {t("oss.eyebrow")}
            </div>
            <h2 className="mb-3.5 font-display text-[40px] font-extrabold leading-[0.98] sm:text-[46px]">
              {t("oss.title")}
            </h2>
            <p className="text-[16px] leading-[1.55] text-white/60">
              {t("oss.desc")}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {(["titan", "hyperion"] as const).map((repo) => (
              <div
                key={repo}
                className="rounded-[22px] border border-white/[0.08] bg-[#0b0b15] p-[30px]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <h3 className="font-display text-[24px] font-bold">
                    {t(`oss.${repo}.name`)}
                  </h3>
                  <span
                    className={
                      repo === "titan"
                        ? "rounded-full bg-[#8b7bff] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0b0b15]"
                        : "rounded-full bg-[#46d9ff] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0b0b15]"
                    }
                  >
                    {t(`oss.${repo}.tech`)}
                  </span>
                </div>
                <p className="mb-5 text-[14.5px] leading-[1.5] text-white/60">
                  {t(`oss.${repo}.desc`)}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[12.5px] font-medium uppercase tracking-wider text-white/40">
                    {t(`oss.${repo}.meta`)}
                  </span>
                  <a
                    href="https://github.com/ProximApp"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[14px] font-bold text-[#8b7bff] transition-colors hover:text-[#46d9ff]"
                  >
                    {t("oss.cta")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="px-6 pb-20 pt-5 text-center sm:px-14">
        <div className="mx-auto max-w-[1160px]">
          <h2 className="mb-4 font-display text-[44px] font-extrabold leading-[0.95] sm:text-[60px]">
            {t("finalCta.titleLine1")}
            <br />
            {t("finalCta.titleLine2")}
          </h2>
          <p className="mb-[30px] text-[17px] text-white/60">
            {t("finalCta.desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#demo"
              className="rounded-full bg-[#8b7bff] px-[30px] py-4 text-[16px] font-bold text-[#0b0b15] transition-transform hover:-translate-y-0.5"
            >
              {t("finalCta.ctaPrimary")}
            </Link>
            <a
              href="mailto:contact@proximapp.fr"
              className="rounded-full border border-white/25 px-7 py-4 text-[16px] font-semibold transition-colors hover:bg-white/5"
            >
              {t("finalCta.email")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
