import { useState } from "react";
import { FileText, Download, CheckCircle, AlertCircle } from "lucide-react";
import { jsPDF } from "jspdf";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Dummy prescription generator
const generateDummyPrescription = (patientInfo) => {
  const conditions = ["Normal", "Mild Cough", "Severe Cough", "Asthma"];
  const randomCondition =
    conditions[Math.floor(Math.random() * conditions.length)];

  const prescriptions = {
    Normal: {
      diagnosis: "Normal Respiratory Function",
      severity: "low",
      summary:
        "Your respiratory system appears to be functioning normally. No immediate concerns detected.",
      findings: [
        "Clear breathing patterns observed",
        "No signs of respiratory distress",
        "Voice quality is normal",
        "Lung function appears healthy",
      ],
      recommendations: [
        "Continue maintaining a healthy lifestyle",
        "Stay hydrated and get adequate rest",
        "Regular exercise to maintain lung health",
        "Monitor any changes in breathing patterns",
      ],
      medications: [],
    },
    "Mild Cough": {
      diagnosis: "Mild Cough Detected",
      severity: "medium",
      summary:
        "Analysis indicates presence of mild cough. This is typically not serious but should be monitored.",
      findings: [
        "Mild irritation in respiratory tract detected",
        "Slight changes in voice patterns",
        "No severe respiratory distress",
        "Probable viral or environmental cause",
      ],
      recommendations: [
        "Increase fluid intake (water, warm beverages)",
        "Use honey or lozenges for throat relief",
        "Avoid irritants like smoke and pollution",
        "Get adequate rest and sleep",
        "Monitor symptoms for 3-5 days",
      ],
      medications: [
        "Over-the-counter cough syrup (as needed)",
        "Vitamin C supplements",
        "Steam inhalation twice daily",
      ],
    },
    "Severe Cough": {
      diagnosis: "Severe Cough Detected",
      severity: "high",
      summary:
        "Analysis indicates significant cough patterns. Medical consultation is recommended.",
      findings: [
        "Persistent coughing patterns detected",
        "Significant respiratory tract irritation",
        "Possible bacterial or viral infection",
        "Vocal strain evident in analysis",
      ],
      recommendations: [
        "Consult a healthcare professional immediately",
        "Complete rest and avoid strenuous activities",
        "Stay well-hydrated",
        "Use a humidifier in your room",
        "Avoid cold beverages and foods",
        "Cover mouth when coughing",
      ],
      medications: [
        "Prescribed cough suppressant (consult doctor)",
        "Antibiotics if bacterial infection (doctor prescribed)",
        "Expectorant to clear mucus",
        "Pain relievers for throat discomfort",
      ],
    },
    Asthma: {
      diagnosis: "Asthma Indicators Detected",
      severity: "high",
      summary:
        "Voice analysis shows patterns consistent with asthma. Immediate medical evaluation required.",
      findings: [
        "Wheezing patterns detected in voice analysis",
        "Restricted airflow indicators",
        "Breathing difficulty patterns observed",
        "Chronic respiratory stress signals",
      ],
      recommendations: [
        "**Seek immediate medical attention**",
        "Avoid known allergens and triggers",
        "Keep rescue inhaler readily available",
        "Monitor peak flow regularly",
        "Avoid strenuous physical activity until assessed",
        "Stay in clean, dust-free environment",
      ],
      medications: [
        "Quick-relief inhaler (Albuterol) - as prescribed",
        "Long-term controller medication (consult pulmonologist)",
        "Corticosteroids if severe (doctor prescribed)",
        "Antihistamines for allergy management",
      ],
    },
  };

  const result = prescriptions[randomCondition];

  return {
    ...result,
    patientName: patientInfo?.name || "Patient",
    age: patientInfo?.age || "N/A",
    gender: patientInfo?.gender || "N/A",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    reportId: `RP${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
  };
};

export default function ResultsDisplay({ patientInfo }) {
  const [results] = useState(() => generateDummyPrescription(patientInfo));

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "low":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "high":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getSeverityIcon = (severity) => {
    return severity === "low" ? CheckCircle : AlertCircle;
  };

  const downloadReport = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const lineHeight = 7;
    let yPosition = margin;

    // Helper function to add text with word wrap
    const addText = (
      text,
      fontSize = 10,
      isBold = false,
      color = [0, 0, 0],
    ) => {
      doc.setFontSize(fontSize);
      doc.setTextColor(color[0], color[1], color[2]);
      if (isBold) {
        doc.setFont(undefined, "bold");
      } else {
        doc.setFont(undefined, "normal");
      }

      const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
      lines.forEach((line) => {
        if (yPosition > pageHeight - margin) {
          doc.addPage();
          yPosition = margin;
        }
        doc.text(line, margin, yPosition);
        yPosition += lineHeight;
      });
    };

    const addSpace = (space = 5) => {
      yPosition += space;
    };

    // Header
    doc.setFillColor(16, 185, 129); // emerald-500
    doc.rect(0, 0, pageWidth, 30, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont(undefined, "bold");
    doc.text("Health Analysis Report", margin, 20);

    yPosition = 40;

    // Report Info
    addText(`Report ID: ${results.reportId}`, 10, true);
    addText(`Date: ${results.date}`, 10);
    addText(`Generated by HealthVoice AI`, 9, false, [107, 114, 128]);
    addSpace(10);

    // Patient Information Section
    doc.setFillColor(236, 253, 245); // emerald-50
    doc.rect(margin - 5, yPosition - 5, pageWidth - 2 * margin + 10, 35, "F");
    addText("Patient Information", 14, true, [16, 185, 129]);
    addSpace(2);
    addText(`Name: ${results.patientName}`, 11);
    addText(`Age: ${results.age} years`, 11);
    addText(
      `Gender: ${
        results.gender.charAt(0).toUpperCase() + results.gender.slice(1)
      }`,
      11,
    );
    addSpace(10);

    // Diagnosis Section
    addText("Diagnosis", 14, true, [16, 185, 129]);
    addSpace(2);
    addText(results.diagnosis, 12, true);
    addSpace(3);
    addText(results.summary, 10);
    addSpace(10);

    // Key Findings Section
    addText("Key Findings", 14, true, [16, 185, 129]);
    addSpace(2);
    results.findings.forEach((finding) => {
      addText(`• ${finding}`, 10);
    });
    addSpace(10);

    // Recommendations Section
    addText("Recommendations", 14, true, [16, 185, 129]);
    addSpace(2);
    results.recommendations.forEach((rec) => {
      addText(`• ${rec}`, 10);
    });
    addSpace(10);

    // Medications Section
    addText("Suggested Medications", 14, true, [16, 185, 129]);
    addSpace(2);
    if (results.medications.length > 0) {
      results.medications.forEach((med) => {
        addText(`• ${med}`, 10);
      });
    } else {
      addText(
        "No medications required at this time.",
        10,
        false,
        [107, 114, 128],
      );
    }
    addSpace(15);

    // Footer Note
    doc.setFillColor(254, 252, 232); // yellow-50
    doc.rect(margin - 5, yPosition - 2, pageWidth - 2 * margin + 10, 20, "F");
    addText("⚠ Important Note:", 10, true, [202, 138, 4]);
    addText(
      "This is an AI-generated analysis. Please consult with a healthcare professional for proper medical advice and treatment.",
      9,
      false,
      [113, 63, 18],
    );

    // Save the PDF
    doc.save(`health-report-${results.reportId}.pdf`);
  };

  const SeverityIcon = getSeverityIcon(results.severity);

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                <FileText className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                Health Analysis Report
              </CardTitle>
              <CardDescription className="text-base">
                Report ID: {results.reportId} • Generated on {results.date}
              </CardDescription>
            </div>
            <Button
              onClick={downloadReport}
              variant="outline"
              className="ml-4 hidden sm:flex"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Patient Name
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {results.patientName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Age</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                {results.age} years
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Gender</p>
              <p className="font-semibold text-gray-900 dark:text-white capitalize">
                {results.gender}
              </p>
            </div>
          </div>

          {/* Download button for mobile - at bottom */}
          <div className="mt-6 sm:hidden">
            <Button
              onClick={downloadReport}
              variant="outline"
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Diagnosis Card */}
      <Card className="border-l-4 border-l-emerald-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Diagnosis</CardTitle>
            <Badge
              className={`${getSeverityColor(
                results.severity,
              )} text-white flex items-center gap-1`}
            >
              <SeverityIcon className="h-3 w-3" />
              {results.severity === "low"
                ? "Normal"
                : results.severity === "medium"
                  ? "Monitor"
                  : "Urgent"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {results.diagnosis}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {results.summary}
          </p>
        </CardContent>
      </Card>

      {/* Findings Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Key Findings</CardTitle>
          <CardDescription>
            Analysis detected the following patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {results.findings.map((finding, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                <span className="text-gray-700 dark:text-gray-300">
                  {finding}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Recommendations Card */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="text-xl">Recommendations</CardTitle>
          <CardDescription>
            Follow these guidelines for better health
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {results.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{rec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Medications Card */}
      {results.medications.length > 0 && (
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="text-xl">Suggested Medications</CardTitle>
            <CardDescription>
              Consult with a doctor before taking any medication
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {results.medications.map((med, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {med}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Disclaimer */}
      <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
        <CardContent>
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                Important Disclaimer
              </p>
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                This is an AI-generated analysis and should not replace
                professional medical advice. Please consult with a qualified
                healthcare provider for proper diagnosis and treatment.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
