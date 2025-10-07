import { useTranslations } from "next-intl";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("pages.contact");

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-50">
      <div className="container mx-auto px-4 ml-6 md:ml-8 lg:ml-12">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <Badge
              variant="outline"
              className="mb-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-200 dark:to-gray-300 border-gray-300 dark:border-gray-400 text-gray-800 dark:text-gray-900 px-4 py-2 text-sm font-medium hover-lift transition-all duration-300"
            >
              {t("title")}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-gray-800 tracking-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-800 max-w-4xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation>
            <Card className="bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift hover-glow transition-all duration-500 shadow-sm">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-800 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span>{t("form.send")}</span>
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-700 mt-3">
                  {t("form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-800 tracking-wide"
                    >
                      {t("form.name")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder={t("form.namePlaceholder")}
                      className="border-gray-300 dark:border-gray-400 focus:border-gray-600 dark:focus:border-gray-700 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-300 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 bg-gray-50 dark:bg-gray-200 h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-800 tracking-wide"
                    >
                      {t("form.email")} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("form.emailPlaceholder")}
                      className="border-gray-300 dark:border-gray-400 focus:border-gray-600 dark:focus:border-gray-700 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-300 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 bg-gray-50 dark:bg-gray-200 h-12"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-800 tracking-wide"
                  >
                    {t("form.subject")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="subject"
                    placeholder={t("form.subjectPlaceholder")}
                    className="border-gray-300 dark:border-gray-400 focus:border-gray-600 dark:focus:border-gray-700 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-300 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 bg-gray-50 dark:bg-gray-200 h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-800 tracking-wide"
                  >
                    {t("form.message")} <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    rows={8}
                    placeholder={t("form.messagePlaceholder")}
                    className="border-gray-300 dark:border-gray-400 focus:border-gray-600 dark:focus:border-gray-700 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-300 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-500 bg-gray-50 dark:bg-gray-200 resize-none"
                    required
                  />
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-950 text-white dark:from-gray-700 dark:to-gray-800 dark:hover:from-gray-800 dark:hover:to-gray-900 h-14 text-lg font-semibold hover-lift transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Mail className="w-5 h-5 mr-3" />
                    {t("form.send")}
                  </Button>
                  <p className="text-xs text-gray-500 dark:text-gray-600 mt-3 text-center">
                    {t("form.responseTime")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="mt-12">
              <Card className="bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift hover-glow transition-all duration-500 shadow-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-200 dark:to-blue-300 rounded-xl hover-lift transition-all duration-300">
                      <Mail className="h-6 w-6 text-blue-700 dark:text-blue-800" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-800">
                      {t("info.email")}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <CardDescription className="text-gray-600 dark:text-gray-700 font-medium text-lg">
                    contact@proximapp.org
                  </CardDescription>
                  <p className="text-sm text-gray-500 dark:text-gray-600 mt-2">
                    {t("form.supportNote")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
