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
import { Check } from "lucide-react";

export default function SolutionsPage() {
  const t = useTranslations("pages.solutions");

  const solutions = [
    {
      titleKey: "elementary.title",
      descriptionKey: "elementary.description",
      featuresKey: "elementary.features",
    },
    {
      titleKey: "secondary.title",
      descriptionKey: "secondary.description",
      featuresKey: "secondary.features",
    },
    {
      titleKey: "university.title",
      descriptionKey: "university.description",
      featuresKey: "university.features",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-50">
      <div className="container mx-auto px-4 ml-6 md:ml-8 lg:ml-12">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 bg-gray-100 dark:bg-gray-200 border-gray-300 dark:border-gray-400 text-gray-800 dark:text-gray-900"
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ScrollAnimation key={index}>
              <Card className="h-full bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-gray-800">
                    {t(solution.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-700 leading-relaxed">
                    {t(solution.descriptionKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {t
                      .raw(solution.featuresKey)
                      .map((feature: string, featureIndex: number) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <Check className="h-5 w-5 text-gray-700 dark:text-gray-800 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-800">
                            {feature}
                          </span>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
