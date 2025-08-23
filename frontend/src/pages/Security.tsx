import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, CreditCard, Users, Zap, Lock } from "lucide-react";

export default function Security() {
  const [showAll, setShowAll] = useState(false);

  const securityFeatures = [
    {
      icon: Shield,
      title: "Blockchain Records",
      description: "View verified crop transactions and records for complete transparency.",
      extra: "Every transaction is securely stored on a blockchain ledger, providing a tamper-proof record. Farmers and buyers can track their crop history, ensuring authenticity and trust in trade agreements. This enhances transparency, reduces fraud, and allows easy auditing by regulatory bodies.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: CheckCircle,
      title: "Rating System",
      description: "Rate buyers and sellers, and view overall ratings to build trust.",
      extra: "Users can provide ratings and feedback on transactions, creating a transparent community-driven trust system. High-rated users enjoy more credibility and engagement, while low ratings prompt corrective measures. This ensures responsible behavior and accountability for all marketplace participants.",
      gradient: "from-accent to-primary",
    },
    {
      icon: CreditCard,
      title: "Secure Transactions",
      description: "Pay safely with our integrated digital wallet and payment gateway.",
      extra: "All payments are processed through encrypted gateways with multi-factor authentication. The system ensures that both farmers and buyers receive secure payment confirmations. Refunds, disputes, and transaction tracking are streamlined for complete financial security.",
      gradient: "from-sunshine to-agricultural",
    },
    {
      icon: Users,
      title: "User Verification",
      description: "All users go through a verification process to prevent fraud.",
      extra: "Every user must provide valid identification and undergo verification checks. Verified profiles display a badge, making it easy to identify trustworthy participants. This prevents fraudulent accounts and strengthens the overall integrity of the platform.",
      gradient: "from-earth to-accent",
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Receive notifications on suspicious activity or security updates.",
      extra: "The system sends instant alerts for unusual activities, login attempts, or pending disputes. Users are notified via email and in-app notifications, allowing rapid response to potential security threats. This proactive system safeguards both transactions and user data.",
      gradient: "from-agricultural-light to-primary",
    },
    {
      icon: Lock,
      title: "Dispute Resolution",
      description: "Submit and track disputes easily with our admin support team.",
      extra: "Users can submit disputes via a structured form and track their progress in real-time. Admins mediate conflicts, provide resolutions, and ensure fair treatment. Transparent tracking and prompt communication foster trust and confidence among all participants.",
      gradient: "from-primary-glow to-primary",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">🔒 Security & Trust</h1>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
        Our platform ensures transparency, trust, and secure transactions for farmers and buyers alike.
      </p>

      {/* Universal Show More / Less Button */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground
                     hover:bg-primary/90 transform transition-transform duration-500 ease-in-out
                     font-semibold cursor-pointer shadow-md hover:shadow-xl
                     animate-bounce-slow hover:scale-105"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {securityFeatures.map((feature, index) => (
          <Card
            key={index}
            className="relative group overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`}
            ></div>

            <CardHeader className="relative z-10 flex items-center space-x-4 mb-4">
              <div className={`p-4 rounded-xl shadow-lg bg-gradient-to-br ${feature.gradient} flex-shrink-0`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10">
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

              {/* Show extra description with gradient background */}
              <div
                className={`mt-3 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-primary-glow/10 transition-all duration-700 ease-in-out
                            ${showAll ? "opacity-100 max-h-96 translate-y-0" : "opacity-0 max-h-0 -translate-y-4 overflow-hidden"}`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.extra}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Custom slow bounce animation */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }
        `}
      </style>
    </div>
  );
}
