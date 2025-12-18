import { UserCircle, Mic, Upload, Brain, FileCheck } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Enter Patient Information",
    description:
      "Provide basic details like age and gender for personalized analysis",
    icon: UserCircle,
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: 2,
    title: "Record or Upload Audio",
    description:
      "Record your voice directly or upload a pre-recorded audio file",
    icon: Mic,
    color: "from-teal-500 to-cyan-500",
  },
  {
    number: 3,
    title: "AI Processing",
    description:
      "Our ML model analyzes voice patterns to detect respiratory conditions",
    icon: Brain,
    color: "from-lime-500 to-emerald-500",
  },
  {
    number: 4,
    title: "Get Your Report",
    description:
      "Receive a detailed prescription with health insights and recommendations",
    icon: FileCheck,
    color: "from-green-500 to-teal-500",
  },
];

export default function HowToUse() {
  return (
    <section
      id="how-to-use"
      className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            How It
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              {" "}
              Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Simple steps to get your health analysis in minutes
          </p>
        </div>

        {/* Steps with Path */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative">
                {/* Connecting Line - Hidden on mobile */}
                {!isLast && (
                  <div className="absolute left-8 sm:left-1/2 top-20 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 sm:-translate-x-1/2 z-0"></div>
                )}

                {/* Step Card */}
                <div className="relative mb-8 group">
                  {/* Mobile Layout - Icons left, content right */}
                  <div className="flex items-start gap-4 sm:hidden">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10 relative`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout - Alternating left/right */}
                  <div className="hidden sm:flex items-start justify-center">
                    {/* Left Side */}
                    <div className="flex-1 flex justify-end pr-8">
                      {isLeft && (
                        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                              Step {step.number}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10 relative`}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex-1 flex justify-start pl-8">
                      {!isLeft && (
                        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                              Step {step.number}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
