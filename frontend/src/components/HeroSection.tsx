import { Leaf, Tractor, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedButton from "@/components/AnimatedButton";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/10"></div>
      <div className="absolute top-20 left-20 animate-float">
        <Leaf className="w-16 h-16 text-primary-foreground/30" />
      </div>
      <div className="absolute top-32 right-32 animate-bounce-gentle">
        <Tractor className="w-12 h-12 text-primary-foreground/20" />
      </div>
      <div className="absolute bottom-40 left-40 animate-float" style={{ animationDelay: '1s' }}>
        <BarChart3 className="w-10 h-10 text-primary-foreground/25" />
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
        <Shield className="w-14 h-14 text-primary-foreground/30" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Kisaan<span className="text-gradient">Mitra</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering farmers with a transparent marketplace, fair trade opportunities, 
            and cutting-edge agricultural technology for sustainable farming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <AnimatedButton
              onClick={() => navigate("/learn-more")}
              bgColor="bg-white"
              textColor="text-primary"
              hoverTextColor="hover:text-primary" // fixes disappearing text on hover
              className="px-6 py-3"
            >
              📊 Learn More
            </AnimatedButton>
          </div>
        </div>
        
        {/* Statistics */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-foreground">10,000+</div>
            <div className="text-primary-foreground/80">Active Farmers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-foreground">₹50Cr+</div>
            <div className="text-primary-foreground/80">Trade Volume</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-foreground">500+</div>
            <div className="text-primary-foreground/80">Equipment Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-foreground">99%</div>
            <div className="text-primary-foreground/80">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
