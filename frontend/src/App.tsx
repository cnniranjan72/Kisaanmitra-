import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Footer from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SustainabilityPage from "./pages/SustainabilityPage";
import EquipmentRentalsPage from "./pages/EquipmentRentalsPage";

// Market Intelligence
import MarketIntelligence from './pages/MarketIntelligence';
import WeatherUpdates from './pages/MarketIntelligence/WeatherUpdates';
import DiseaseAlerts from './pages/MarketIntelligence/DiseaseAlerts';
import YieldPredictions from './pages/MarketIntelligence/YieldPredictions';
import PriceForecasting from './pages/MarketIntelligence/PriceForecasting';

// Community Hub
import CommunityHub from './pages/CommunityHub';
import DiscussionForums from './pages/CommunityHub/DiscussionForums';
import ExpertConsultation from './pages/CommunityHub/ExpertConsultation';
import VideoTutorials from './pages/CommunityHub/VideoTutorials';
import LocalLanguageSupport from './pages/CommunityHub/LocalLanguageSupport';
import VideoListPage from './pages/VideoListPage';
import VoiceAssistant from './components/VoiceAssistant'; // Add this line

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          {/* Market Intelligence Routes */}

              {/* Market Intelligence */}
              <Route path="/market-intel" element={<MarketIntelligence />}>
                <Route index element={null} />
                <Route path="weather" element={<WeatherUpdates />} />
                <Route path="disease" element={<DiseaseAlerts />} />
                <Route path="yield" element={<YieldPredictions />} />
                <Route path="price" element={<PriceForecasting />} />
              </Route>

              {/* Other Features */}
    
          {/* Community Hub Routes */}
          <Route path="/community" element={<CommunityHub />}>
            <Route index element={<Navigate to="discussions" replace />} />
            <Route path="discussions" element={<DiscussionForums />} />
            <Route path="experts" element={<ExpertConsultation />} />
            <Route path="videos" element={<VideoTutorials />} />
            <Route path="language" element={<LocalLanguageSupport />} />
          </Route>

          {/* Other Pages */}
          <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/equipment-rentals" element={<EquipmentRentalsPage />} />
              <Route path="/videos" element={<VideoListPage />} />
          
          {/* 404 Route - Keep this at the bottom */}

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* Footer is always visible */}
          <Footer />
          <VoiceAssistant />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
