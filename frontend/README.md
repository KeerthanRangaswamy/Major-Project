# HealthVoice AI - Voice-Based Health Analysis Platform

A modern, AI-powered web application that analyzes respiratory health conditions through voice input. Built with React, Tailwind CSS, and shadcn/ui components.

![HealthVoice AI](https://img.shields.io/badge/React-18.3-blue) ![Tailwind](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **🎤 Voice Recording** - Record audio directly in the browser with real-time feedback
- **📤 Audio Upload** - Upload pre-recorded audio files (MP3, WAV, etc.)
- **🤖 AI Analysis** - ML-powered analysis for detecting respiratory conditions
- **📊 Detailed Reports** - Comprehensive health reports in markdown format
- **🌓 Dark Mode** - Beautiful dark/light theme with smooth transitions
- **📱 Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **⚡ Fast & Modern** - Built with Vite for lightning-fast performance

## 🎯 Detected Conditions

The ML model can analyze and detect:

- Normal respiratory function
- Mild cough
- Severe cough
- Asthma indicators

## 🚀 Quick Start

### Prerequisites

- Node.js (v20.19+ or v22.12+)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd Major-Project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:5173
```

## 📖 How to Use

### Step 1: Enter Patient Information

- Provide patient age (required)
- Select gender (required)
- Optionally add patient name

### Step 2: Provide Audio Input

Choose one of the following options:

- **Record Audio**: Click "Start Recording" and speak into your microphone
- **Upload Audio**: Upload a pre-recorded audio file

### Step 3: Analyze

- Click "Analyze Health" button
- Wait for AI processing (takes ~3 seconds)

### Step 4: View Results

- Review comprehensive health report
- Download report in markdown format
- View personalized recommendations and medications

## 🏗️ Project Structure

```
Major-Project/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── select.jsx
│   │   │   └── badge.jsx
│   │   ├── AudioInput.jsx   # Audio recording/upload component
│   │   ├── Features.jsx     # Features section
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section
│   │   ├── HowToUse.jsx     # How-to-use section
│   │   ├── PatientInfoForm.jsx  # Patient info form
│   │   ├── ResultsDisplay.jsx   # Results/prescription display
│   │   └── theme-provider.jsx   # Dark mode provider
│   ├── pages/
│   │   ├── HomePage.jsx     # Landing page
│   │   ├── AnalyzePage.jsx  # Analysis dashboard
│   │   └── ResultsPage.jsx  # Results page
│   ├── lib/
│   │   └── utils.js         # Utility functions
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/
├── package.json
└── vite.config.js
```

## 🎨 Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 7.3
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM 7.1
- **Icons**: Lucide React
- **State Management**: React Hooks

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🌈 Color Scheme

The application uses a beautiful gradient-based color palette:

- **Primary**: Blue (#2563eb) to Purple (#9333ea)
- **Secondary**: Pink (#ec4899) to Orange (#f97316)
- **Success**: Green (#10b981) to Emerald (#059669)
- **Danger**: Red (#ef4444) to Pink (#ec4899)

## 📱 Responsive Design

The UI is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔮 Future Enhancements

- [ ] Backend API integration with real ML model
- [ ] User authentication and history
- [ ] Multiple language support
- [ ] Export reports to PDF
- [ ] Email report functionality
- [ ] Advanced audio visualization
- [ ] Real-time collaboration
- [ ] Integration with health APIs

## ⚠️ Important Notes

- This is currently using dummy data for demonstration
- Real ML model integration required for production
- Consult healthcare professionals for actual medical advice
- Audio recording requires browser microphone permissions

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ for health and wellness

---

**Disclaimer**: This application is for educational and demonstration purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment.
