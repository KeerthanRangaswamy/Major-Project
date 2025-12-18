import { Mic, Upload, Brain, FileText, Shield, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Mic,
    title: "Voice Recording",
    description:
      "Record your voice directly in the browser with our intuitive interface. No additional software needed.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Upload,
    title: "Audio Upload",
    description:
      "Upload pre-recorded audio files in various formats. We support MP3, WAV, and more.",
    color: "from-lime-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "Advanced machine learning models analyze voice patterns to detect respiratory conditions accurately.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Detailed Reports",
    description:
      "Get comprehensive health reports with recommendations and insights in an easy-to-read format.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your health data is encrypted and secure. We prioritize your privacy and data protection.",
    color: "from-lime-500 to-green-500",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get your analysis results in under 30 seconds. Fast, accurate, and reliable diagnostics.",
    color: "from-teal-500 to-emerald-500",
  },
];

export default function Features() {
  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Powerful Features for
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              {" "}
              Better Health
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to analyze respiratory health using voice
            technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-emerald-200 dark:hover:border-emerald-800 cursor-pointer"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
