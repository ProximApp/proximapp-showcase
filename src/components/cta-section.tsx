"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import { useTranslations } from "next-intl";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  className,
}: CTASectionProps) {
  return (
    <section className={`py-20 ${className || ""}`}>
      <div className="container ml-6 md:ml-8 lg:ml-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-800">
            {title}
          </h2>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-800 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="px-8 bg-gray-900 hover:bg-gray-800 text-white shadow-md hover:shadow-lg transition-all duration-300 hover-lift"
            >
              <Link href={primaryButtonHref}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-100 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-200 hover-lift transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <Link href={secondaryButtonHref} target="_blank">
                  <Github className="mr-2 h-5 w-5" />
                  {secondaryButtonText}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DefaultCTA() {
  const t = useTranslations("cta");

  return (
    <CTASection
      title={t("title")}
      description={t("subtitle")}
      primaryButtonText={t("button")}
      primaryButtonHref="/contact"
      secondaryButtonText={t("secondaryButton")}
      secondaryButtonHref="https://github.com/proximapp"
      className="bg-white dark:bg-gray-50"
    />
  );
}
