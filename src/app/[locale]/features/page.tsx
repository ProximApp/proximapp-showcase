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
import {
  Users,
  CreditCard,
  Shield,
  BarChart3,
  MessageSquare,
  Smartphone,
} from "lucide-react";

export default function FeaturesPage() {
  const t = useTranslations("pages.features");

  const features = [
    {
      icon: Users,
      titleKey: "student.title",
      descriptionKey: "student.description",
    },
    {
      icon: CreditCard,
      titleKey: "payment.title",
      descriptionKey: "payment.description",
    },
    {
      icon: Shield,
      titleKey: "authentication.title",
      descriptionKey: "authentication.description",
    },
    {
      icon: BarChart3,
      titleKey: "analytics.title",
      descriptionKey: "analytics.description",
    },
    {
      icon: MessageSquare,
      titleKey: "communication.title",
      descriptionKey: "communication.description",
    },
    {
      icon: Smartphone,
      titleKey: "mobile.title",
      descriptionKey: "mobile.description",
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index}>
              <Card className="h-full bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 dark:bg-gray-200 rounded-lg">
                      <feature.icon className="h-6 w-6 text-gray-700 dark:text-gray-800" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-gray-800">
                      {t(feature.titleKey)}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-700 leading-relaxed">
                    {t(feature.descriptionKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}
