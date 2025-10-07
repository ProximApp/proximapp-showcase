import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  features?: string[];
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  features,
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={`h-full bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift group transition-all duration-500 transform-gpu ${
        className || ""
      }`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gray-100 dark:bg-gray-200 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-300 transition-all duration-300 hover-lift animate-pulse-glow">
              <Icon className="h-6 w-6 text-gray-700 dark:text-gray-800 group-hover:text-gray-800 dark:group-hover:text-gray-900 transition-colors duration-300" />
            </div>
            <div>
              <CardTitle className="text-xl text-gray-900 dark:text-gray-800 group-hover:text-gray-800 dark:group-hover:text-gray-900 transition-colors duration-300">
                {title}
              </CardTitle>
              {badge && (
                <Badge
                  variant="secondary"
                  className="mt-1 bg-gray-100 dark:bg-gray-200 text-gray-700 dark:text-gray-800 hover-lift transition-all duration-300"
                >
                  {badge}
                </Badge>
              )}
            </div>
          </div>
        </div>
        <CardDescription className="text-base text-gray-600 dark:text-gray-700 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      {features && (
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-700"
              >
                <div className="h-1.5 w-1.5 bg-gray-400 dark:bg-gray-500 rounded-full" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}

interface FeatureGridProps {
  children: ReactNode;
  className?: string;
}

export function FeatureGrid({ children, className }: FeatureGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}
