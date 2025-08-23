import { FC } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import { Leaf, Globe, Zap, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const sustainabilityFeatures = [
  { icon: Leaf, title: "Crop Traceability", description: "Track crops from farm to fork ensuring transparency and quality." },
  { icon: Globe, title: "Organic Certification", description: "Support certified organic practices for sustainable farming." },
  { icon: Zap, title: "Sustainability Badges", description: "Reward eco-friendly practices and sustainable farming efforts." },
  { icon: Shield, title: "Eco-Friendly Practices", description: "Encourage reduced pesticide use and responsible resource management." },
];

const SustainabilityPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white hero-gradient"
        style={{
          backgroundImage: `url("/assets/pic1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">🌍 Sustainability</h1>
          <p className="text-lg md:text-xl mb-6">
            Promote eco-friendly farming with traceability and sustainability certifications.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Key Sustainability Features</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Implement practices that ensure long-term ecological balance, fair trade, 
              and better quality produce for a healthier planet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityFeatures.map((feature, idx) => (
              <div key={idx} className="feature-card group flex flex-col items-start p-6">
                <div className="flex items-center justify-center p-3 rounded-xl bg-primary/80 mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Join KisaanMitra for Sustainable Farming</h3>
          <p className="text-muted-foreground mb-6">
            Be part of a community that values eco-friendly practices and supports farmers in adopting sustainable solutions.
          </p>
          <AnimatedButton
            onClick={() => navigate("/register")}
            bgColor="bg-primary"
            textColor="text-white"
            hoverTextColor="hover:text-white"
          >
            Get Started
          </AnimatedButton>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityPage;
