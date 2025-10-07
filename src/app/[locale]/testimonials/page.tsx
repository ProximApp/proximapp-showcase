import { useTranslations } from "next-intl";
import { ScrollAnimation } from "@/hooks/useScrollAnimation";
import { Testimonials } from "@/components/testimonials";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, School, Award, Heart } from "lucide-react";

export default function TestimonialsPage() {
  const t = useTranslations("pages.testimonials");

  const highlights = [
    {
      icon: Users,
      title: "50,000+ Happy Users",
      description:
        "Students, faculty, and administrators across 500+ institutions trust ProximApp daily.",
    },
    {
      icon: Star,
      title: "4.9/5 Average Rating",
      description:
        "Consistently rated as the top school management platform by our users.",
    },
    {
      icon: School,
      title: "Leading Institutions",
      description:
        "From elementary schools to universities, ProximApp serves diverse educational environments.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Winner of multiple education technology awards and certifications.",
    },
  ];

  const impactStats = [
    { number: "95%", label: "Reduction in Administrative Time" },
    { number: "88%", label: "Improvement in Student Engagement" },
    { number: "92%", label: "Increase in Event Participation" },
    { number: "99.9%", label: "System Uptime Reliability" },
  ];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-50">
      <div className="container mx-auto px-4 ml-6 md:ml-8 lg:ml-12">
        <ScrollAnimation animationType="fade-down" delay={0}>
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 bg-gray-100 dark:bg-gray-200 border-gray-300 dark:border-gray-400 text-gray-800 dark:text-gray-900"
            >
              User Reviews
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-800">
              Testimonials
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-800 max-w-3xl mx-auto leading-relaxed">
              See why educators and students worldwide choose ProximApp for
              their school management needs.
            </p>
          </div>
        </ScrollAnimation>

        {/* Impact Highlights */}
        <ScrollAnimation animationType="fade-up" delay={100}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className={`text-center bg-white dark:bg-gray-100 border-gray-200 dark:border-gray-300 hover-lift transition-all duration-500 stagger-${
                  index + 1
                }`}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gray-100 dark:bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center hover-lift transition-all duration-300">
                    <highlight.icon className="h-8 w-8 text-gray-700 dark:text-gray-800" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-gray-800">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-700 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollAnimation>

        {/* Main Testimonials Section */}
        <Testimonials />

        {/* Impact Statistics */}
        <ScrollAnimation animationType="scale" delay={200}>
          <div className="max-w-6xl mx-auto mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-800">
                Proven Impact
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-800 max-w-3xl mx-auto leading-relaxed">
                Real results from real institutions using ProximApp.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-100 dark:to-gray-200 rounded-lg hover-lift transition-all duration-500 stagger-${
                    index + 1
                  }`}
                >
                  <div className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-700 mb-4 animate-fade-in-up">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 dark:text-gray-700 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation animationType="bounce" delay={300}>
          <div className="max-w-4xl mx-auto text-center mt-20 p-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-200 dark:to-gray-300 rounded-2xl hover-lift transition-all duration-500">
            <Heart className="h-16 w-16 text-gray-600 dark:text-gray-700 mx-auto mb-6 animate-float" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-800 mb-4">
              Ready to Join Our Community?
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-800 mb-8 leading-relaxed">
              Experience the difference that ProximApp can make in your
              institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-700 hover:bg-gray-800 text-white dark:bg-gray-600 dark:hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300 hover-lift btn-animate"
              >
                Get Started Today
              </a>
              <a
                href="/features"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-400 text-gray-700 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 hover-glow"
              >
                Learn More
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
