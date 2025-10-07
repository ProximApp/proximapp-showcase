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
import { Target, Code2, Users } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("pages.about");

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-50">
      <div className="container mx-auto px-4 ml-6 md:ml-8 lg:ml-12">
        <ScrollAnimation animationType="fade-down" delay={0}>
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 bg-gray-100 dark:bg-gray-200 border-gray-300 dark:border-gray-400 text-gray-800 dark:text-gray-900 hover-glow"
            >
              {t("title")}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-800">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-800 max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <ScrollAnimation animationType="fade-left" delay={100}>
            <Card className="h-full bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift transition-all duration-500">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-200 rounded-lg hover-lift transition-all duration-300">
                    <Target className="h-6 w-6 text-gray-700 dark:text-gray-800" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-gray-800">
                    {t("mission.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 dark:text-gray-700 leading-relaxed">
                  {t("mission.description")}
                </CardDescription>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation animationType="scale" delay={200}>
            <Card className="h-full bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift transition-all duration-500">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-200 rounded-lg hover-lift transition-all duration-300">
                    <Code2 className="h-6 w-6 text-gray-700 dark:text-gray-800" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-gray-800">
                    {t("technology.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 text-gray-600 dark:text-gray-700 leading-relaxed">
                  {t("technology.description")}
                </CardDescription>
                <ul className="space-y-2">
                  {t
                    .raw("technology.items")
                    .map((item: string, index: number) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-700 hover-lift transition-all duration-200"
                      >
                        • {item}
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation animationType="fade-right" delay={300}>
            <Card className="h-full bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift transition-all duration-500">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-100 dark:bg-gray-200 rounded-lg hover-lift transition-all duration-300">
                    <Users className="h-6 w-6 text-gray-700 dark:text-gray-800" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-gray-800">
                    {t("community.title")}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 dark:text-gray-700 leading-relaxed">
                  {t("community.description")}
                </CardDescription>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
