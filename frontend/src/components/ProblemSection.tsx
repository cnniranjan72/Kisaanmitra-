import { useState } from "react";
import { AlertTriangle, TrendingDown, BarChart, CreditCard, Users } from "lucide-react";

const ProblemSection = () => {
  const [expanded, setExpanded] = useState(false);

  const problems = [
    {
      icon: "₹",
      title: "Unfair Pricing",
      description: "Lack of transparent pricing leading to farmer exploitation.",
      impact: "₹40% loss in potential income",
      details:
        "Many farmers are forced to sell crops below cost. This reduces long-term profitability. Fair market prices remain inaccessible. Farmers lose bargaining power. Exploitation cycles continue year after year.",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-green-600" />,
      title: "Middlemen Dependency",
      description: "Heavy reliance on intermediaries reducing profit margins.",
      impact: "₹30-50% profit reduction",
      details:
        "Middlemen take unfair cuts from farmer earnings. Farmers lack direct buyers. This reduces bargaining power and long-term sustainability. Farmers cannot reinvest profits. Supply chain remains broken.",
    },
    {
      icon: <BarChart className="w-8 h-8 text-green-600" />,
      title: "Limited Market Access",
      description: "Poor access to equipment, seeds, and fertilizers.",
      impact: "Reduced productivity",
      details:
        "Farmers cannot reach better marketplaces. They face lack of digital presence. Equipment and seeds cost higher. Fertilizers remain limited. This lowers agricultural output drastically.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-green-600" />,
      title: "No Market Intelligence",
      description: "Absence of real-time market insights and predictions.",
      impact: "Missed opportunities",
      details:
        "Without market trends, farmers cannot plan better. They miss opportunities to sell crops at high prices. Forecasting is difficult. Data-driven decisions are absent. This keeps them vulnerable.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Financial Barriers",
      description: "Difficulty accessing loans and government schemes.",
      impact: "Limited growth potential",
      details:
        "Farmers cannot access easy credit. Loan processes are lengthy. Schemes remain underutilized. High interest rates burden them. Growth and expansion get restricted.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Isolated Communities",
      description: "Lack of digital platforms for knowledge sharing.",
      impact: "Slower innovation adoption",
      details:
        "Farmers remain disconnected. New technologies spread slowly. Knowledge sharing platforms are rare. Localized solutions are missed. Innovation adoption lags behind global standards.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            The Agricultural <span className="text-gradient">Crisis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Farmers across India face systemic challenges that prevent them from
            achieving fair returns and sustainable growth in the agricultural
            sector.
          </p>
        </div>

        {/* See More / See Less Button */}
        <div className="text-center mb-10">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-green-600 animate-bounce-slow focus:outline-none"
          >
            {expanded ? "See Less" : "See More"}
          </button>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card bg-gradient-to-b from-green-50 to-white rounded-xl shadow-md p-6 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl flex flex-col"
            >
              {/* Card Header */}
              <div className="problem-card__header flex items-start justify-between w-full">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-green-100 rounded-lg flex items-center justify-center">
                    {typeof problem.icon === "string" ? (
                      <span className="text-2xl font-bold text-green-600">
                        {problem.icon}
                      </span>
                    ) : (
                      problem.icon
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full inline-block">
                      {problem.impact}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanding Content */}
              <div
                className="problem-card__content overflow-hidden transition-all duration-500 ease-in-out mt-4"
                style={{
                  maxHeight: expanded ? "500px" : "0px",
                  opacity: expanded ? 1 : 0,
                }}
              >
                {expanded && (
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    {problem.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-100 text-green-700 rounded-full font-semibold">
            <AlertTriangle className="w-5 h-5" />
            <span>These challenges cost farmers billions annually</span>
          </div>
        </div>
      </div>

      {/* Custom bounce animation */}
      <style>
        {`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 1.5s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ProblemSection;
