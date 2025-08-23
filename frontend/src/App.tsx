import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MarketIntelligence from './pages/MarketIntelligence';
import WeatherUpdates from './pages/MarketIntelligence/WeatherUpdates';
import DiseaseAlerts from './pages/MarketIntelligence/DiseaseAlerts';
import YieldPredictions from './pages/MarketIntelligence/YieldPredictions';
import PriceForecasting from './pages/MarketIntelligence/PriceForecasting';
import VoiceAssistant from './components/VoiceAssistant'; // Add this line

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/market-intel">
            <Route index element={<MarketIntelligence />} />
            <Route path="weather" element={<WeatherUpdates />} />
            <Route path="disease" element={<DiseaseAlerts />} />
            <Route path="yield" element={<YieldPredictions />} />
            <Route path="price" element={<PriceForecasting />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <VoiceAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
