import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Activity, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg group-hover:scale-105 transition-transform">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                HealthVoice AI
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors px-4 py-2 rounded-full cursor-pointer ${
                  location.pathname === "/"
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                to="/analyze"
                className={`text-sm font-medium transition-colors px-4 py-2 rounded-full cursor-pointer ${
                  location.pathname === "/analyze"
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : "hover:text-primary"
                }`}
              >
                Analyze
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Link to="/analyze" className="hidden sm:block">
                <Button>Start Analysis</Button>
              </Link>
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-64 bg-background border-l shadow-lg">
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                    HealthVoice AI
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Sidebar Navigation */}
              <nav className="flex flex-col p-4 space-y-2">
                <Link
                  to="/"
                  onClick={() => setIsSidebarOpen(false)}
                  className={`text-base font-medium transition-colors px-4 py-3 rounded-full text-center cursor-pointer ${
                    location.pathname === "/"
                      ? "bg-emerald-600 text-white"
                      : "hover:bg-accent"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/analyze"
                  onClick={() => setIsSidebarOpen(false)}
                  className={`text-base font-medium transition-colors px-4 py-3 rounded-full text-center cursor-pointer ${
                    location.pathname === "/analyze"
                      ? "bg-emerald-600 text-white"
                      : "hover:bg-accent"
                  }`}
                >
                  Analyze
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
