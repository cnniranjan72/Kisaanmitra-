import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import Footer from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SustainabilityPage from "@/pages/SustainabilityPage";
import EquipmentRentalsPage from "@/pages/EquipmentRentalsPage";
import Profile from "./pages/Profile";
import Security from './pages/Security';
import FinancialServicesPage from './pages/FinancialServices';
import LearnMorePage from './pages/LearnMore';

import MarketIntelligence from './pages/MarketIntelligence';
import WeatherUpdates from './pages/MarketIntelligence/WeatherUpdates';
import DiseaseAlerts from './pages/MarketIntelligence/DiseaseAlerts';
import YieldPredictions from './pages/MarketIntelligence/YieldPredictions';
import PriceForecasting from './pages/MarketIntelligence/PriceForecasting';

import CommunityHub from './pages/CommunityHub';
import DiscussionForums from './pages/CommunityHub/DiscussionForums';
import ExpertConsultation from './pages/CommunityHub/ExpertConsultation';
import VideoTutorials from './pages/CommunityHub/VideoTutorials';
import LocalLanguageSupport from './pages/CommunityHub/LocalLanguageSupport';
import VideoListPage from './pages/VideoListPage';
import Marketplace from './pages/Marketplace';
import VoiceAssistant from './components/VoiceAssistant';

import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            
            {/* Logo Header */}
            <header className="bg-white shadow py-2 px-4 flex items-center">
              <Link to="/">
                <img src="/assets/logo.jpg" alt="Kisaan Mitra Logo" className="h-12 w-auto" />
              </Link>
            </header>

            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/market-intel" element={<MarketIntelligence />}>
                  <Route index element={null} />
                  <Route path="weather" element={<WeatherUpdates />} />
                  <Route path="disease" element={<DiseaseAlerts />} />
                  <Route path="yield" element={<YieldPredictions />} />
                  <Route path="price" element={<PriceForecasting />} />
                </Route>

                <Route path="/financial" element={<FinancialServicesPage />} />
                <Route path="/security" element={<Security />} />
                <Route path="/learn-more" element={<LearnMorePage />} />

                <Route path="/community" element={<CommunityHub />}>
                  <Route index element={<Navigate to="discussions" replace />} />
                  <Route path="discussions" element={<DiscussionForums />} />
                  <Route path="experts" element={<ExpertConsultation />} />
                  <Route path="videos" element={<VideoTutorials />} />
                  <Route path="language" element={<LocalLanguageSupport />} />
                </Route>

                {/* Other Pages */}
                <Route path="/sustainability" element={<SustainabilityPage />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/equipment-rentals" element={<EquipmentRentalsPage />} />
                <Route path="/videos" element={<VideoListPage />} />
                <Route path="/profile" element={<Profile />} />

                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>

            {/* Footer is always visible */}
            <Footer />
            <VoiceAssistant />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
