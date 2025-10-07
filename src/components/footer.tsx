import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-50 border-t border-gray-200 dark:border-gray-300">
      <div className="container py-12 md:py-16 ml-6 md:ml-8 lg:ml-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="space-y-4">
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
            <p className="text-sm text-gray-600 dark:text-gray-700 leading-relaxed">
              Open-source modular platform for school associations. Streamline
              management with Flutter apps, Python backend, and secure QR
              payments.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-100 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-200 transition-all duration-300"
              >
                <Link href="https://github.com/proximapp" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-100 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-200 transition-all duration-300"
              >
                <Link href="#" target="_blank">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-100 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-200 transition-all duration-300"
              >
                <Link href="#" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-800">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/features"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-800">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Integration Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-800">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-700 hover:text-gray-900 dark:hover:text-gray-800 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-700">
            © {new Date().getFullYear()} ProximApp. All rights reserved.
          </p>
          <div className="flex items-center text-sm mt-4 md:mt-0 text-gray-600 dark:text-gray-700">
            <span>Built with</span>
            <span className="ml-1 text-red-500">♥</span>
            <span className="ml-1">by the open-source community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
