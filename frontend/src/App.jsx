import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import AnalyzePage from "@/pages/AnalyzePage";
import ResultsPage from "@/pages/ResultsPage";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="healthvoice-theme">
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analyze" element={<AnalyzePage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
