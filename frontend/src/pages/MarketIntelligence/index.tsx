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
  // Get the current path to determine if we should show the dashboard
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
          <Link to={`/market-intel/${item.link}`} key={index} className="hover:opacity-80 transition-opacity">
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary-dark transition-colors">
                  <span>View details</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
