import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Zap, 
  Shield,
  Cpu,
  Globe,
  Blocks,
  Palette
} from "lucide-react";

const TechStackSection = () => {
  const techCategories = [
    {
      category: "Frontend",
      icon: Palette,
      color: "from-blue-500 to-blue-600",
      technologies: [
        { name: "React.js", description: "Modern UI framework" },
        { name: "TailwindCSS", description: "Utility-first styling" },
        { name: "TypeScript", description: "Type-safe development" }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      color: "from-green-500 to-green-600",
      technologies: [
        { name: "Node.js", description: "Server runtime" },
        { name: "Express.js", description: "Web framework" },
        { name: "MongoDB", description: "NoSQL database" }
      ]
    },
    {
      category: "Authentication",
      icon: Shield,
      color: "from-purple-500 to-purple-600", 
      technologies: [
        { name: "JWT", description: "Token-based security" },
        { name: "OAuth", description: "Social login integration" }
      ]
    },
    {
      category: "Payments",
      icon: Zap,
      color: "from-orange-500 to-orange-600",
      technologies: [
        { name: "Razorpay", description: "Payment gateway" },
        { name: "UPI", description: "Unified payments" },
        { name: "Digital Wallet", description: "Secure transactions" }
      ]
    },
    {
      category: "Intelligence",
      icon: Cpu,
      color: "from-red-500 to-red-600",
      technologies: [
        { name: "AI/ML", description: "Price predictions" },
        { name: "Weather API", description: "Real-time weather" },
        { name: "Market Data", description: "Live mandi rates" }
      ]
    },
    {
      category: "Infrastructure",
      icon: Cloud,
      color: "from-teal-500 to-teal-600",
      technologies: [
        { name: "Cloud Hosting", description: "Scalable infrastructure" },
        { name: "CDN", description: "Fast content delivery" },
        { name: "Mobile PWA", description: "App-like experience" }
      ]
    }
  ];

  const advancedFeatures = [
    { 
      icon: Blocks, 
      title: "Blockchain Integration", 
      description: "Optional transparency with Hyperledger/Ethereum for immutable transaction records" 
    },
    { 
      icon: Smartphone, 
      title: "Voice Interface", 
      description: "Voice-enabled support for non-literate farmers in local languages" 
    },
    { 
      icon: Globe, 
      title: "PWA Technology", 
      description: "Mobile-first progressive web app for seamless cross-platform experience" 
    },
    { 
      icon: Code, 
      title: "OCR Integration", 
      description: "Smart receipt scanning and expense tracking for better financial management" 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Cutting-Edge <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built with modern, scalable technologies to ensure reliability, security, 
            and exceptional performance for farmers worldwide.
          </p>
        </div>

        {/* Core Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <div 
              key={index} 
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className={`inline-flex p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-foreground">{tech.name}</div>
                      <div className="text-sm text-muted-foreground">{tech.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Advanced <span className="text-gradient">Capabilities</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advancedFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card group flex items-start space-x-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary to-primary-glow rounded-xl shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlight */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-4 p-8 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <div className="flex items-center space-x-2">
              <Blocks className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Scalable Architecture</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-center">
              Our microservices architecture ensures 99.9% uptime, handles millions of transactions, 
              and scales seamlessly to support farmers across India and beyond.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10M+</div>
                <div className="text-muted-foreground">Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">&lt;100ms</div>
                <div className="text-muted-foreground">Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;