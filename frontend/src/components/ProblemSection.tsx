import { AlertTriangle, TrendingDown, DollarSign, BarChart, CreditCard, Users } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Unfair Pricing",
      description: "Lack of transparent pricing leading to farmer exploitation",
      impact: "40% loss in potential income"
    },
    {
      icon: TrendingDown,
      title: "Middlemen Dependency", 
      description: "Heavy reliance on intermediaries reducing profit margins",
      impact: "30-50% profit reduction"
    },
    {
      icon: BarChart,
      title: "Limited Market Access",
      description: "Poor access to equipment, seeds, and fertilizers",
      impact: "Reduced productivity"
    },
    {
      icon: AlertTriangle,
      title: "No Market Intelligence",
      description: "Absence of real-time market insights and predictions",
      impact: "Missed opportunities"
    },
    {
      icon: CreditCard,
      title: "Financial Barriers",
      description: "Difficulty accessing loans and government schemes",
      impact: "Limited growth potential"
    },
    {
      icon: Users,
      title: "Isolated Communities",
      description: "Lack of digital platforms for knowledge sharing",
      impact: "Slower innovation adoption"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            The Agricultural <span className="text-gradient">Crisis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Farmers across India face systemic challenges that prevent them from achieving 
            fair returns and sustainable growth in the agricultural sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="feature-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-8 h-8 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="px-3 py-1 bg-destructive/10 text-destructive text-sm rounded-full inline-block">
                    {problem.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-destructive/10 text-destructive rounded-full font-semibold">
            <AlertTriangle className="w-5 h-5" />
            <span>These challenges cost farmers billions annually</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;