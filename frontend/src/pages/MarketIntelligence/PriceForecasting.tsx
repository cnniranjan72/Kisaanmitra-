import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown } from 'lucide-react';

const priceData = [
  { month: 'Jan', price: 45 },
  { month: 'Feb', price: 52 },
  { month: 'Mar', price: 48 },
  { month: 'Apr', price: 60 },
  { month: 'May', price: 55 },
  { month: 'Jun', price: 65 },
  { month: 'Jul', price: 70 },
];

export default function PriceForecasting() {
  const currentPrice = priceData[priceData.length - 1].price;
  const previousPrice = priceData[priceData.length - 2].price;
  const priceChange = ((currentPrice - previousPrice) / previousPrice * 100).toFixed(1);
  const isUp = currentPrice > previousPrice;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Price Forecasting</h1>
        <p className="text-muted-foreground">
          Market price trends and future predictions
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Wheat Price Trend</CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">₹{currentPrice}/kg</span>
              <span className={`flex items-center text-sm ${
                isUp ? 'text-green-500' : 'text-red-500'
              }`}>
                {isUp ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                {priceChange}%
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  dot={{ r: 4 }} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Price Forecast
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Based on current market trends, prices are expected to {isUp ? 'continue rising' : 'stabilize'} in the coming months.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-red-500" />
              Best Time to Sell
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {isUp 
                ? "Consider selling in the next 2-3 weeks for optimal returns."
                : "Prices are currently low. Consider waiting for better market conditions."
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}