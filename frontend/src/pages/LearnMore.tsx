import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Leaf,
  Tractor,
  BarChart3,
  CreditCard,
  Users,
  Shield,
  Mic,
  Globe,
  CloudSun,
  Mail,
  AlertTriangle,
  Languages,
  Truck,
} from "lucide-react";
import TechStackSection from "@/components/TechStackSection"; // ✅ import your tech stack section

export default function LearnMore() {
  const overviewItems = [
    {
      icon: Leaf,
      title: "🌾 Crop Marketplace",
      brief:
        "Direct trading between farmers and buyers with transparent pricing.",
      gradient: "from-agricultural to-agricultural-dark",
    },
    {
      icon: Tractor,
      title: "🚜 Equipment Rentals",
      brief:
        "Rent, buy, or sell agricultural equipment, seeds, and fertilizers.",
      gradient: "from-earth to-agricultural",
    },
    {
      icon: BarChart3,
      title: "📊 Market Intelligence",
      brief:
        "AI-powered insights on weather, crop diseases, yield predictions, and market prices.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: CreditCard,
      title: "💳 Financial Services",
      brief: "Micro-loans, crop insurance, and digital payment solutions.",
      gradient: "from-sunshine to-agricultural",
    },
    {
      icon: Users,
      title: "👨‍👩‍👧‍👦 Community Hub",
      brief:
        "Connect with other farmers, share knowledge, and consult experts.",
      gradient: "from-accent to-primary",
    },
    {
      icon: Leaf,
      title: "🌱 Sustainability",
      brief:
        "Promote eco-friendly farming practices with certifications and traceability.",
      gradient: "from-agricultural-light to-agricultural",
    },
    {
      icon: Shield,
      title: "🔒 Security & Trust",
      brief:
        "Blockchain transparency, user verification, secure payments, and dispute resolution.",
      gradient: "from-primary-glow to-primary",
    },
  ];

  const features = [
    { icon: Mic, text: "🎙️ Voice Commands for easy navigation" },
    { icon: Globe, text: "🌐 Interactive & Localized UI" },
    { icon: CloudSun, text: "☀️ Live Weather & Climate Updates" },
    { icon: Mail, text: "📩 Agri Updates directly via Email" },
    { icon: Languages, text: "🌏 Multi-Language Support (Hindi, Tamil, Bengali, Marathi, Telugu, etc.)" }, // Added
  ];

  const problems = [
    { icon: AlertTriangle,Tractor,Truck, text: "❌ Lack of transparent crop pricing" },
    { icon: AlertTriangle, text: "❌ Limited access to modern equipment" },
    { icon: AlertTriangle, text: "❌ Difficulty in accessing credit & insurance" },
    { icon: AlertTriangle, text: "❌ Low awareness of eco-friendly practices" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12">
        📖 Learn More - Kisaan Mitra Overview
      </h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {overviewItems.map((item, index) => (
          <Card
            key={index}
            className="relative group overflow-hidden hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-xl`}
            ></div>

            <CardHeader className="relative z-10 flex items-center space-x-4 mb-4">
              <div
                className={`p-4 rounded-xl shadow-lg bg-gradient-to-br ${item.gradient} flex-shrink-0`}
              >
                <item.icon className="w-6 h-6 text-white animate-bounce-slow" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10">
              <p className="text-sm text-muted-foreground leading-relaxed transition-all duration-500">
                {item.brief}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Top Takeaways */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          🚀 Top Takeaways
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              ✨ Key Features
            </h3>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 hover:scale-105 transition-all duration-500 shadow-md"
                >
                  <feature.icon className="w-5 h-5 text-primary animate-bounce-slow" />
                  <span className="text-base text-foreground">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problems */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-destructive">
              ⚠️ Problems We Solve
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-destructive/10 to-warning/10 hover:scale-105 transition-all duration-500 shadow-md"
                >
                  <problem.icon className="w-5 h-5 text-destructive animate-bounce-slow" />
                  <span className="text-base text-foreground">{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          ⚙️ Our Tech Stack
        </h2>
        <TechStackSection />
      </div>
    </div>
  );
}
