import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import AnimatedButton from "@/components/AnimatedButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Header/Navbar */}
      <header className="w-full bg-background shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
        {/* Left side - Logo */}
        <h1 className="text-2xl font-bold text-primary">KisaanMitra</h1>

        {/* Right side - Buttons */}
        <div className="flex space-x-4">
          <Link to="/login">
            <AnimatedButton
              bgColor="bg-white"
              textColor="text-primary"
              hoverTextColor="hover:text-green-500"
              className="px-6 py-3"
            >
              Login
            </AnimatedButton>
          </Link>
          <Link to="/register">
            <AnimatedButton
              bgColor="bg-primary"
              textColor="text-white"
              hoverTextColor="hover:text-white"
              className="px-6 py-3"
            >
              Register
            </AnimatedButton>
          </Link>
          
        </div>
      </header>

      {/* 🔹 Page Content */}
      <main className="pt-20">
        <HeroSection />
        <FeaturesSection />
        <ProblemSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
