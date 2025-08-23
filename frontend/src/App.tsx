import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SustainabilityPage from "./pages/SustainabilityPage";
import EquipmentRentalsPage from "./pages/EquipmentRentalsPage";
import CommunityHub from "./pages/CommunityHub";
import MarketIntelligence from './pages/MarketIntelligence';
import WeatherUpdates from './pages/MarketIntelligence/WeatherUpdates';
import DiseaseAlerts from './pages/MarketIntelligence/DiseaseAlerts';
import YieldPredictions from './pages/MarketIntelligence/YieldPredictions';
import PriceForecasting from './pages/MarketIntelligence/PriceForecasting';
import VoiceAssistant from './components/VoiceAssistant';

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

              {/* Market Intelligence */}
              <Route path="/market-intel">
                <Route index element={<MarketIntelligence />} />
                <Route path="weather" element={<WeatherUpdates />} />
                <Route path="disease" element={<DiseaseAlerts />} />
                <Route path="yield" element={<YieldPredictions />} />
                <Route path="price" element={<PriceForecasting />} />
              </Route>

              {/* Other Features */}
              <Route path="/features/sustainability" element={<SustainabilityPage />} />
              <Route path="/equipment-rentals" element={<EquipmentRentalsPage />} />
              <Route path="/community-hub" element={<CommunityHub />} />

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
