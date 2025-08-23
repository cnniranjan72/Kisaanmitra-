
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CloudRain, Thermometer, Droplets, Wind } from 'lucide-react';

export default function WeatherUpdates() {

  const weatherData = {
    temperature: 28,
    condition: "Sunny",
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: "Mon", temp: 28, icon: "☀️" },
      { day: "Tue", temp: 26, icon: "⛅" },
      { day: "Wed", temp: 25, icon: "🌧️" },
      { day: "Thu", temp: 27, icon: "⛅" },
      { day: "Fri", temp: 29, icon: "☀️" },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Weather Updates</h1>
        <p className="text-muted-foreground">
          Real-time weather data and forecasts for your location
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Current Weather</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-5xl font-bold">
                {weatherData.temperature}°C
              </div>
              <div className="text-4xl">☀️</div>
            </div>
            <p className="text-lg mt-2">{weatherData.condition}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                <span>Humidity: {weatherData.humidity}%</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-blue-500" />
                <span>Wind: {weatherData.windSpeed} km/h</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5-Day Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{day.day}</span>
                  <span className="text-2xl">{day.icon}</span>
                  <span className="font-medium">{day.temp}°C</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Add more weather cards/components as needed */}
      </div>
    </div>
  );
}