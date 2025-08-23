import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import AnimatedButton from "@/components/AnimatedButton";
import UserProfile from "@/components/UserProfile";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

const Index = () => {
  const { user, loading } = useAuth();
  const [isClient, setIsClient] = useState(false);

  // This ensures we only render the correct UI after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="flex flex-col">
      {/* 🔹 Header/Navbar */}
      <header className="w-full bg-background shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
        {/* Left side - Logo */}
        <h1 className="text-2xl font-bold text-primary">KisaanMitra</h1>

        {/* Right side - Buttons */}
        <div className="flex items-center space-x-4">
          {!isClient || loading ? (
            // Show loading state or nothing during initial load
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
          ) : user ? (
            // Show user profile when logged in
            <UserProfile />
          ) : (
            // Show auth buttons when not logged in
            <>
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
            </>
          )}
        </div>
      </header>

      {/* 🔹 Page Content */}
      <main className="mt-[64px]"> {/* Exact height of header (py-4 + content ~64px) */}
        <HeroSection />
        <FeaturesSection />
        <ProblemSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
