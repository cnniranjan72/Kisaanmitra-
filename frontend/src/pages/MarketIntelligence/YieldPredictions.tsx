import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart3, TrendingUp, Calendar, Package } from 'lucide-react';

export default function YieldPredictions() {
  const predictions = [
    {
      crop: "Wheat",
      predictedYield: "4.2 tons/ha",
      confidence: "High",
      lastUpdated: "2 days ago",
      icon: <BarChart3 className="h-5 w-5 text-green-500" />
    },
    {
      crop: "Rice",
      predictedYield: "6.8 tons/ha",
      confidence: "Medium",
      lastUpdated: "1 day ago",
      icon: <TrendingUp className="h-5 w-5 text-blue-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Yield Predictions</h1>
        <p className="text-muted-foreground">
          AI-powered yield forecasts based on various factors
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {predictions.map((prediction, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{prediction.crop}</CardTitle>
                <div className="p-2 rounded-lg bg-primary/10">
                  {prediction.icon}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Predicted Yield</span>
                  <span className="font-medium">{prediction.predictedYield}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Confidence</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    prediction.confidence === 'High' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                  }`}>
                    {prediction.confidence}
                  </span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  Updated {prediction.lastUpdated}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}