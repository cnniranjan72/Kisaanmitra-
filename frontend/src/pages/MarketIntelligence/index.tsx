import { Link, useLocation, Outlet } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  CloudRain, 
  AlertTriangle, 
  Leaf, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const intelItems = [
  {
    title: "Weather Updates",
    description: "Real-time weather data and forecasts for your farm location",
    icon: <CloudRain className="h-6 w-6" />,
    link: "weather"
  },
  {
    title: "Disease Alerts",
    description: "Early warnings about potential crop diseases in your area",
    icon: <AlertTriangle className="h-6 w-6" />,
    link: "disease"
  },
  {
    title: "Yield Predictions",
    description: "AI-powered yield forecasts based on various factors",
    icon: <Leaf className="h-6 w-6" />,
    link: "yield"
  },
  {
    title: "Price Forecasting",
    description: "Market price trends and future predictions",
    icon: <TrendingUp className="h-6 w-6" />,
    link: "price"
  }
];

export default function MarketIntelligence() {
  const location = useLocation();
  const isDashboard = location.pathname === '/market-intel';
  
  if (!isDashboard) {
    return <Outlet />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Market Intelligence</h1>
        <p className="text-muted-foreground">
          Smart insights powered by AI for better decision making and profit maximization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {intelItems.map((item, index) => (
          <Link
            to={`/market-intel/${item.link}`}
            key={index}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <Card className="h-full relative overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500">
              {/* Gradient overlay: light green to white */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-green-100 to-white opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary-dark transition-colors duration-300">
                  <span>View details</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
