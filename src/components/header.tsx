"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("showcase.nav");
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: "#fonctions", label: t("features") },
    { href: "#sur-mesure", label: t("custom") },
    { href: "#personnalisation", label: t("personalization") },
    { href: "#demo", label: t("demo") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0b15]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/proximapp-logo.png"
            alt="ProximApp"
            width={30}
            height={30}
            priority
            className="h-[30px] w-[30px] object-contain"
          />
          <span className="font-display text-[20px] font-extrabold">
            ProximApp
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-white/65 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#demo"
            className="rounded-full bg-[#8b7bff] px-[18px] py-2.5 text-[13.5px] font-bold text-[#0b0b15] transition-transform hover:-translate-y-0.5"
          >
            {t("cta")}
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/80 md:hidden"
        >
          <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0b0b15] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-white/75">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-1 w-fit rounded-full bg-[#8b7bff] px-5 py-2.5 text-[13.5px] font-bold text-[#0b0b15]"
            >
              {t("cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
