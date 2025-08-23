import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CreditCard, Shield, Users, Zap, Wallet, PieChart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinanceServices() {
  const financeFeatures = [
    {
      icon: CreditCard,
      title: "Micro-loans",
      description:
        "Apply for loans tailored to farmers with minimal paperwork. Flexible repayment plans and low interest rates help sustain agricultural growth. Quick approval process ensures funds reach on time. Customize loan amounts based on your farm size and needs. Track repayment schedules easily through the app.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Shield,
      title: "Crop Insurance",
      description:
        "Protect your crops from unforeseen events like weather damage, pests, and disease. Get comprehensive coverage to ensure peace of mind. Claim processing is simple and fast. Supports a wide range of crops and farm sizes. Helps mitigate financial risks and losses efficiently.",
      gradient: "from-accent to-primary",
    },
    {
      icon: Users,
      title: "Government Schemes",
      description:
        "Access all relevant agricultural schemes, subsidies, and grants easily. Stay informed about eligibility criteria and deadlines. Submit applications directly through the platform. Ensure you receive support without delays. Learn about new schemes that can benefit your farm.",
      gradient: "from-sunshine to-agricultural",
    },
    {
      icon: Zap,
      title: "Digital Payments",
      description:
        "Make secure and instant digital transactions using integrated wallets. Track all incoming and outgoing payments efficiently. Reduce dependency on cash and improve transparency. Link bank accounts safely for direct transfers. Receive notifications for every transaction.",
      gradient: "from-agricultural-light to-primary",
    },
    {
      icon: Wallet,
      title: "Personal Finance Dashboard",
      description:
        "Monitor your farm's income and expenses in one place. Get insights into spending patterns and crop profitability. Generate monthly and yearly financial reports. Plan budgets for upcoming seasons. Helps make informed financial decisions for sustainable growth.",
      gradient: "from-primary-glow to-accent",
    },
    {
      icon: PieChart,
      title: "Investment Planning",
      description:
        "Get AI-powered suggestions for investments in agriculture. Compare returns from different crops, machinery, or savings schemes. Receive alerts about profitable investment opportunities. Track market trends and forecasts easily. Make strategic decisions to maximize farm profits.",
      gradient: "from-accent to-primary-glow",
    },
    {
      icon: FileText,
      title: "Loan & Insurance Documentation",
      description:
        "Store all loan and insurance documents securely in one place. Access documents anytime and share them when needed. Automatic reminders for renewals and submissions. Simplifies compliance and record-keeping. Helps reduce errors and misplacement of important files.",
      gradient: "from-primary to-accent",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">💳 Financial Services</h1>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
        Easy access to micro-loans, insurance, and government schemes with digital wallet integration. 
        Manage finances efficiently and make informed decisions to grow your farm business.
      </p>

      {/* Universal Show More Button */}
      <div className="flex justify-center mb-10">
        <Button
          variant="outline"
          className="px-8 py-2 rounded-full bg-primary/10 text-primary transition-all transform animate-bounce-slow-smooth hover:scale-105 hover:shadow-lg cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {financeFeatures.map((feature, index) => (
          <Card
            key={index}
            className={`relative group overflow-hidden hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl ${
              expanded ? "shadow-glow-expanded" : ""
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-700 rounded-xl`}
            ></div>

            <CardHeader className="relative z-10 flex items-center space-x-4 mb-4">
              <div className={`p-4 rounded-xl shadow-lg bg-gradient-to-br ${feature.gradient} flex-shrink-0`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                {feature.title}
              </CardTitle>
            </CardHeader>

            <CardContent
              className="relative z-10 overflow-hidden transition-all duration-1000 ease-in-out"
              style={{
                maxHeight: expanded ? "1000px" : "80px",
              }}
            >
              <p className={`text-sm text-muted-foreground leading-relaxed transition-opacity duration-700`}>
                {expanded ? feature.description : feature.description.substring(0, 100) + "..."}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <style>{`
        .animate-bounce-slow-smooth {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .shadow-glow-expanded {
          box-shadow: 0 0 20px rgba(99, 179, 237, 0.4), 0 0 40px rgba(99, 179, 237, 0.2);
        }
      `}</style>
    </div>
  );
}
