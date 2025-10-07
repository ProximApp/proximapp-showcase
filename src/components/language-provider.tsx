"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    // Get the current path without the locale
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "") || "/";

    // Navigate to the new locale path
    router.push(`/${locale}${pathWithoutLocale}`);
    setIsDropdownOpen(false);
  };

  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <>
      {children}
      {/* Language Switcher - Fixed position */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-background/95 backdrop-blur border shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Globe className="h-4 w-4 mr-2" />
            {currentLocale.toUpperCase()}
          </Button>

          {isDropdownOpen && (
            <div className="absolute bottom-full mb-2 right-0 bg-background border rounded-md shadow-lg min-w-[100px]">
              <div className="py-1">
                <button
                  onClick={() => switchLanguage("en")}
                  className={`w-full px-3 py-2 text-left hover:bg-muted transition-colors ${
                    currentLocale === "en" ? "bg-muted font-semibold" : ""
                  }`}
                >
                  🇺🇸 EN
                </button>
                <button
                  onClick={() => switchLanguage("fr")}
                  className={`w-full px-3 py-2 text-left hover:bg-muted transition-colors ${
                    currentLocale === "fr" ? "bg-muted font-semibold" : ""
                  }`}
                >
                  🇫🇷 FR
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
