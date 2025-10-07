"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  Github,
  Smartphone,
  Server,
  Shield,
  QrCode,
} from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Clean white/light gray background with floating animation */}
      <div className="absolute inset-0 bg-white dark:bg-gray-50">
        <div
          className="absolute inset-0 opacity-30 animate-float"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animationDelay: "1s",
            animationDuration: "4s",
          }}
        ></div>
      </div>

      <div className="container relative z-10 ml-6 md:ml-8 lg:ml-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge with bounce animation */}
          <div className="animate-fade-in-up stagger-1">
            <Badge
              variant="secondary"
              className="mb-6 bg-gray-100 dark:bg-gray-200 border-gray-300 dark:border-gray-400 text-gray-800 dark:text-gray-900 transition-all duration-300"
            >
              {t("badge")}
            </Badge>
          </div>

          {/* Main Heading with enhanced animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up stagger-2 text-gray-900 dark:text-gray-800">
            {t("title")}
          </h1>

          {/* Subtitle with slide animation */}
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-800 leading-relaxed animate-slide-up stagger-3 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>

          {/* Feature highlights with stagger animation */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 stagger-children animate-fade-in-up">
            <div className="flex items-center space-x-2 text-sm px-4 py-2 bg-white dark:bg-gray-100 rounded-full shadow-sm hover-lift stagger-1 transition-all duration-300">
              <Smartphone className="h-4 w-4 text-gray-700 dark:text-gray-800" />
              <span className="text-gray-800 dark:text-gray-900">
                Flutter Mobile Apps
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm px-4 py-2 bg-white dark:bg-gray-100 rounded-full shadow-sm hover-lift stagger-2 transition-all duration-300">
              <Server className="h-4 w-4 text-gray-700 dark:text-gray-800" />
              <span className="text-gray-800 dark:text-gray-900">
                FastAPI Backend
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm px-4 py-2 bg-white dark:bg-gray-100 rounded-full shadow-sm hover-lift stagger-3 transition-all duration-300">
              <Shield className="h-4 w-4 text-gray-700 dark:text-gray-800" />
              <span className="text-gray-800 dark:text-gray-900">
                SSO Integration
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm px-4 py-2 bg-white dark:bg-gray-100 rounded-full shadow-sm hover-lift transition-all duration-300">
              <QrCode className="h-4 w-4 text-gray-700 dark:text-gray-800" />
              <span className="text-gray-800 dark:text-gray-900">
                QR Payments
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              size="lg"
              className="px-8 bg-gray-900 hover:bg-gray-800 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover-lift"
            >
              <Link href="/contact">
                {t("primaryCta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 border border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-100 hover:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 dark:text-gray-900 hover-lift transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Link href="https://github.com/proximapp" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                {t("secondaryCta")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
