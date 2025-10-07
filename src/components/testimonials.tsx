"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Users,
  School,
  GraduationCap,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  content: string;
  rating: number;
  avatar: string;
  category: "student" | "teacher" | "admin";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Student President",
    organization: "École Polytechnique",
    content:
      "ProximApp has revolutionized how we manage our student association. The QR code system makes event check-ins seamless, and the financial management tools help us stay transparent with our budget.",
    rating: 5,
    avatar: "MD",
    category: "student",
  },
  {
    id: 2,
    name: "Prof. Jean-Luc Martin",
    role: "Academic Director",
    organization: "Université de Paris",
    content:
      "The integration with our existing systems was smooth, and the analytics dashboard provides valuable insights into student engagement. It's exactly what we needed for modern education management.",
    rating: 5,
    avatar: "JM",
    category: "teacher",
  },
  {
    id: 3,
    name: "Sophie Chen",
    role: "IT Administrator",
    organization: "INSA Lyon",
    content:
      "Security was our main concern, but ProximApp's SSO integration and robust authentication system exceeded our expectations. The mobile app is intuitive and our students love it.",
    rating: 5,
    avatar: "SC",
    category: "admin",
  },
  {
    id: 4,
    name: "Thomas Weber",
    role: "Student",
    organization: "HEC Paris",
    content:
      "Finally, an app that actually works! Event registration is so much easier now, and I love how I can track all my association activities in one place. The interface is clean and fast.",
    rating: 5,
    avatar: "TW",
    category: "student",
  },
  {
    id: 5,
    name: "Dr. Anna Kowalski",
    role: "Dean of Students",
    organization: "Sciences Po",
    content:
      "ProximApp has significantly improved our student engagement metrics. The communication tools help us reach students more effectively, and the event management features are comprehensive.",
    rating: 5,
    avatar: "AK",
    category: "teacher",
  },
  {
    id: 6,
    name: "Lucas Rodriguez",
    role: "Tech Lead",
    organization: "EPITECH",
    content:
      "As someone who works with various platforms daily, I'm impressed by ProximApp's API design and documentation. The system is reliable, scalable, and developer-friendly.",
    rating: 5,
    avatar: "LR",
    category: "admin",
  },
];

const categories = [
  { key: "all", label: "All Reviews", icon: Users },
  { key: "student", label: "Students", icon: GraduationCap },
  { key: "teacher", label: "Faculty", icon: School },
  { key: "admin", label: "Administrators", icon: Users },
];

export function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("testimonials");

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter(
          (testimonial) => testimonial.category === activeCategory
        );

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "student":
        return GraduationCap;
      case "teacher":
        return School;
      case "admin":
        return Users;
      default:
        return Users;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-50 dark:to-gray-100">
      <div className="container mx-auto px-4 ml-6 md:ml-8 lg:ml-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimation animationType="fade-down" delay={0}>
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-4 bg-gray-100 dark:bg-gray-200 border-gray-300 dark:border-gray-400 text-gray-800 dark:text-gray-900 hover-glow"
              >
                Testimonials
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-800">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-800 max-w-3xl mx-auto leading-relaxed">
                Trusted by thousands of students, faculty, and administrators
                across leading educational institutions.
              </p>
            </div>
          </ScrollAnimation>

          {/* Category Filter */}
          <ScrollAnimation animationType="fade-up" delay={100}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.key}
                    variant={
                      activeCategory === category.key ? "default" : "outline"
                    }
                    onClick={() => {
                      setActiveCategory(category.key);
                      setCurrentIndex(0);
                    }}
                    className={`
                      flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 hover-lift hover-glow
                      ${
                        activeCategory === category.key
                          ? "bg-gray-700 hover:bg-gray-800 text-white dark:bg-gray-600 dark:hover:bg-gray-700"
                          : "border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-100"
                      }
                      stagger-${index + 1}
                    `}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category.label}</span>
                  </Button>
                );
              })}
            </div>
          </ScrollAnimation>

          {/* Stats */}
          <ScrollAnimation animationType="scale" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-white dark:bg-gray-100 rounded-lg shadow-sm hover-lift transition-all duration-300">
                <div className="text-4xl font-bold text-gray-800 dark:text-gray-700 mb-2">
                  500+
                </div>
                <p className="text-gray-600 dark:text-gray-700">Institutions</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-100 rounded-lg shadow-sm hover-lift transition-all duration-300">
                <div className="text-4xl font-bold text-gray-800 dark:text-gray-700 mb-2">
                  50K+
                </div>
                <p className="text-gray-600 dark:text-gray-700">Active Users</p>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-100 rounded-lg shadow-sm hover-lift transition-all duration-300">
                <div className="text-4xl font-bold text-gray-800 dark:text-gray-700 mb-2">
                  4.9★
                </div>
                <p className="text-gray-600 dark:text-gray-700">
                  Average Rating
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Featured Testimonial */}
          {filteredTestimonials.length > 0 && (
            <ScrollAnimation animationType="fade-up" delay={300}>
              <div className="relative mb-16">
                <Card className="bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-1">
                        <Quote className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-6 animate-float" />
                        <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-800 leading-relaxed mb-6 font-medium">
                          "{filteredTestimonials[currentIndex].content}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-300 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-800 font-bold text-lg hover-lift transition-all duration-300">
                              {filteredTestimonials[currentIndex].avatar}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 dark:text-gray-800">
                                {filteredTestimonials[currentIndex].name}
                              </div>
                              <div className="text-gray-600 dark:text-gray-700">
                                {filteredTestimonials[currentIndex].role}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-600">
                                {
                                  filteredTestimonials[currentIndex]
                                    .organization
                                }
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 dark:bg-gray-200 text-gray-700 dark:text-gray-800 hover-lift transition-all duration-300"
                            >
                              <div className="flex items-center space-x-1">
                                {(() => {
                                  const IconComponent = getCategoryIcon(
                                    filteredTestimonials[currentIndex].category
                                  );
                                  return <IconComponent className="h-3 w-3" />;
                                })()}
                                <span className="capitalize">
                                  {filteredTestimonials[currentIndex].category}
                                </span>
                              </div>
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center mt-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < filteredTestimonials[currentIndex].rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300 dark:text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Navigation */}
                {filteredTestimonials.length > 1 && (
                  <div className="flex justify-center space-x-4 mt-8">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-100 hover-lift transition-all duration-300"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center space-x-2">
                      {filteredTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 hover-lift ${
                            index === currentIndex
                              ? "bg-gray-700 dark:bg-gray-600"
                              : "bg-gray-300 dark:bg-gray-400 hover:bg-gray-500 dark:hover:bg-gray-500"
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-100 hover-lift transition-all duration-300"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          )}

          {/* Grid of Additional Testimonials */}
          <ScrollAnimation animationType="fade-up" delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.slice(1, 4).map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={`bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift transition-all duration-500 stagger-${
                    index + 1
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300 dark:text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 dark:text-gray-800 mb-4 leading-relaxed">
                      "
                      {testimonial.content.length > 120
                        ? testimonial.content.substring(0, 120) + "..."
                        : testimonial.content}
                      "
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-300 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-800 font-semibold text-sm hover-lift transition-all duration-300">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-800 text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 dark:text-gray-700 text-xs">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
