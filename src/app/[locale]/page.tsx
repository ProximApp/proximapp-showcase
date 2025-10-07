"use client";

import { Hero } from "@/components/hero";
import { DefaultCTA } from "@/components/cta-section";
import { FeatureCard } from "@/components/feature-card";
import { Testimonials } from "@/components/testimonials";
import { useTranslations } from "next-intl";
import {
  Users,
  CreditCard,
  Shield,
  BarChart3,
  MessageSquare,
  Smartphone,
} from "lucide-react";

export default function HomePage() {
  const t = useTranslations("features");

  const features = [
    {
      icon: Users,
      title: t("sso.title"),
      description: t("sso.description"),
    },
    {
      icon: CreditCard,
      title: t("qr.title"),
      description: t("qr.description"),
    },
    {
      icon: Shield,
      title: t("management.title"),
      description: t("management.description"),
    },
    {
      icon: BarChart3,
      title: t("analytics.title"),
      description: t("analytics.description"),
    },
    {
      icon: MessageSquare,
      title: t("communication.title"),
      description: t("communication.description"),
    },
    {
      icon: Smartphone,
      title: t("mobile.title"),
      description: t("mobile.description"),
    },
  ];

  return (
    <>
      <Hero />
      <section className="py-20 w-full bg-white dark:bg-gray-50">
        <div className="container mx-auto px-4 ml-6 md:ml-8 lg:ml-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-800 mx-auto animate-fade-in-up">
              {t("title")}
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-700 dark:text-gray-800 leading-relaxed animate-slide-up">
              {t("subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto stagger-children">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`animate-scale-in stagger-${index + 1}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="hover-lift transform-gpu"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      <div className="animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
        <DefaultCTA />
      </div>
    </>
  );
}
