import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { 
  Wheat, Tractor, TrendingUp, CreditCard, Users, Leaf, Shield,
  ArrowRight, Zap, Target, Globe
} from "lucide-react";

const FeaturesSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Wheat,
      title: "🌾 Crop Marketplace",
      description: "Direct farmer-to-buyer trading eliminating middlemen with transparent pricing and secure payments.",
      benefits: ["Real-time market rates", "AI price recommendations", "Secure digital payments", "Bulk trading options"],
      gradient: "from-agricultural to-agricultural-dark",
      path: "/marketplace" // Correct path for the marketplace page
    },
    {
      icon: Tractor,
      title: "🚜 Equipment Rentals",
      description: "Rent, buy, or sell farming equipment, seeds, and fertilizers at affordable rates.",
      benefits: ["Tractors & harvesters", "Drone technology", "Quality seeds & fertilizers", "Subscription models"],
      gradient: "from-earth to-agricultural",
      path: "/equipment-rentals"
    },
    {
      icon: TrendingUp,
      title: "📊 Market Intelligence",
      description: "Smart insights powered by AI for better decision making and profit maximization.",
      benefits: ["Weather updates", "Disease alerts", "Yield predictions", "Price forecasting"],
      gradient: "from-primary to-primary-glow",
      path: "/market-intel"
    },
    {
      icon: CreditCard,
      title: "💳 Financial Services",
      description: "Easy access to micro-loans, insurance, and government schemes with digital wallet integration.",
      benefits: ["Micro-loans", "Crop insurance", "Government schemes", "Digital payments"],
      gradient: "from-sunshine to-agricultural",
      path: "/sustainability"
    },
    {
      icon: Users,
      title: "👨‍👩‍👧‍👦 Community Hub",
      description: "Connect with fellow farmers, share knowledge, and learn from agricultural experts.",
      benefits: ["Discussion forums", "Expert consultation", "Video tutorials", "Local language support"],
      gradient: "from-accent to-primary",
      path: "/community" // ✅ Correct routing
    },
    {
      icon: Leaf,
      title: "🌍 Sustainability",
      description: "Promote eco-friendly farming with traceability and sustainability certifications.",
      benefits: ["Crop traceability", "Organic certification", "Sustainability badges", "Eco-friendly practices"],
      gradient: "from-agricultural-light to-agricultural",
      path: "/sustainability"
    },
    {
      icon: Shield,
      title: "🔒 Security & Trust",
      description: "Blockchain-powered transparency with ratings, reviews, and dispute resolution.",
      benefits: ["Blockchain records", "Rating system", "Secure transactions", "Dispute resolution"],
      gradient: "from-primary-glow to-primary",
      path: "/security" // create a placeholder page if not exists
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-gradient">Kisaan Mitra</span> Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A complete ecosystem designed to revolutionize agriculture through technology, 
            transparency, and community-driven innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`flex-shrink-0 p-3 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="agriconnect-button bg-primary text-primary-foreground hover:bg-primary/90 w-full group-hover:shadow-lg">
                  <Link to={feature.path} className="flex items-center justify-center">
                    <span>Explore Feature</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-4 p-8 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl border border-primary/20">
            <div className="flex items-center space-x-2">
              <Target className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">Ready to Transform Agriculture?</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="agriconnect-button bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Link to="/register" className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Join AgriConnect Today
                </Link>
              </Button>
              <Button asChild variant="outline" className="agriconnect-button border-primary text-primary hover:bg-primary/10">
                <Link to="/contact" className="flex items-center justify-center">
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
