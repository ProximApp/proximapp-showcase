import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("showcase.footer");

  return (
    <footer className="bg-[#0b0b15]">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-3 border-t border-white/10 px-6 py-7 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-14">
        <span className="flex items-center gap-2 font-display font-extrabold text-[#f1f0f8]">
          <Image
            src="/proximapp-logo.png"
            alt=""
            width={22}
            height={22}
            className="h-[22px] w-[22px] object-contain"
          />
          ProximApp
        </span>
        <Link
          href="https://github.com/ProximApp"
          target="_blank"
          className="transition-colors hover:text-white/70"
        >
          {t("openSource")}
        </Link>
      </div>
    </footer>
  );
}
