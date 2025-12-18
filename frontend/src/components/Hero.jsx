import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-300 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-lime-300 dark:bg-lime-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
              AI-Powered Health Analysis
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-lime-600 dark:from-emerald-400 dark:via-teal-400 dark:to-lime-400 bg-clip-text text-transparent">
              Voice Analysis
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              for Better Health Insights
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Upload or record your voice to get instant AI-powered health
            analysis. Detect respiratory conditions like cough, severe cough,
            and asthma with advanced machine learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Link to="/analyze" className="cursor-pointer">
              <Button size="lg" className="group text-base px-8 py-6">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6"
              onClick={() => {
                document
                  .getElementById("how-to-use")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
                95%+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Accuracy Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400">
                &lt;30s
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Analysis Time
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-pink-600 dark:text-pink-400">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Availability
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
