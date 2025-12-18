import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowToUse from "@/components/HowToUse";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowToUse />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-800 dark:to-teal-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Analyze Your Health?
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Start your journey to better health insights with our AI-powered
            voice analysis
          </p>
          <Link to="/analyze" className="cursor-pointer">
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-8 py-6"
            >
              Start Analysis Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t py-3">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              © 2025 HealthVoice AI. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              AI-powered health analysis for better wellness
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
