"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Users,
  Calendar,
  CreditCard,
  MessageSquare,
  Zap,
  Shield,
  Smartphone,
  Github,
} from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslations("navigation");
  const tDropdown = useTranslations("navigation.dropdown");

  const components: {
    title: string;
    href: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      title: tDropdown("studentManagement"),
      href: "/solutions#student-management",
      description: tDropdown("studentDescription"),
      icon: Users,
    },
    {
      title: tDropdown("eventOrganization"),
      href: "/solutions#events",
      description: tDropdown("eventDescription"),
      icon: Calendar,
    },
    {
      title: tDropdown("financialManagement"),
      href: "/solutions#finance",
      description: tDropdown("financialDescription"),
      icon: CreditCard,
    },
    {
      title: tDropdown("communicationHub"),
      href: "/solutions#communication",
      description: tDropdown("communicationDescription"),
      icon: MessageSquare,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-gray-50/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-300">
      <div className="container flex h-16 items-center justify-between ml-6 md:ml-8 lg:ml-12">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <div className="h-8 w-8 bg-gray-900 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="font-bold text-sm text-white">P</span>
          </div>
          <span className="font-bold text-xl text-gray-900 dark:text-gray-800">
            ProximApp
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-700 dark:text-gray-800 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors">
                {t("solutions")}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white dark:bg-gray-50 rounded-lg shadow-xl dark:border-gray-300 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-800">
                    {tDropdown("solutionsTitle")}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-700 mt-1">
                    {tDropdown("solutionsDescription")}
                  </p>
                </div>
                <ul className="grid w-[500px] gap-2 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                  {components.map((component, index) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
                      className="hover:bg-gray-50 dark:hover:bg-gray-100 transition-all duration-200 rounded-md border border-transparent hover:border-gray-200 dark:hover:border-gray-300 hover:shadow-sm"
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-100 border-t border-gray-100 dark:border-gray-200">
                  <Link
                    href="/solutions"
                    className="text-xs text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 font-medium transition-colors flex items-center justify-center"
                  >
                    {tDropdown("viewAllSolutions")}
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/features">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-gray-700 dark:text-gray-800 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors`}
                >
                  {t("features")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-gray-700 dark:text-gray-800 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors`}
                >
                  {t("about")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/testimonials">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-gray-700 dark:text-gray-800 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors`}
                >
                  {t("testimonials")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-gray-700 dark:text-gray-800 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors`}
                >
                  {t("contact")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-100 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-200 hover-lift transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Link href="/contact">{t("getStarted")}</Link>
          </Button>
          <Button
            asChild
            className="hidden md:inline-flex bg-gray-900 hover:bg-gray-800 text-white hover-lift transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Link href="https://github.com/proximapp" target="_blank">
              <Github className="mr-2 h-4 w-4" />
              {t("github")}
            </Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-100 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-200 hover-lift transition-all duration-300 shadow-sm hover:shadow-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-300 bg-white dark:bg-gray-50">
          <div className="container py-4 space-y-4 ml-6 md:ml-8 lg:ml-12">
            <Link
              href="/solutions"
              className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-800 hover:text-gray-900 dark:hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("solutions")}
            </Link>
            <Link
              href="/features"
              className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-800 hover:text-gray-900 dark:hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("features")}
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-800 hover:text-gray-900 dark:hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-800 hover:text-gray-900 dark:hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("contact")}
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-100 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Link href="/contact">{t("getStarted")}</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Link href="https://github.com/proximapp" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  {t("github")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ComponentType<{ className?: string }>;
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-all duration-200 group",
            className
          )}
          {...props}
        >
          <div className="flex items-start space-x-3">
            {Icon && (
              <div className="p-2 bg-gray-100 dark:bg-gray-200 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-300 transition-colors">
                <Icon className="h-4 w-4 text-gray-700 dark:text-gray-800" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold leading-tight text-gray-900 dark:text-gray-800 group-hover:text-gray-700 dark:group-hover:text-gray-600 transition-colors">
                {title}
              </div>
              <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-700 mt-1 line-clamp-2">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
