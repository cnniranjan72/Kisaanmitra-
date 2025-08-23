import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, ShieldAlert, Activity, Droplets } from 'lucide-react';

export default function DiseaseAlerts() {
  const alerts = [
    {
      id: 1,
      disease: "Tomato Blight",
      severity: "High",
      affectedCrops: ["Tomatoes", "Potatoes"],
      description: "Fungal disease causing leaf spots and fruit rot",
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />
    },
    {
      id: 2,
      disease: "Powdery Mildew",
      severity: "Medium",
      affectedCrops: ["Cucumbers", "Squash", "Grapes"],
      description: "White powdery spots on leaves and stems",
      icon: <Droplets className="h-5 w-5 text-blue-500" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Disease Alerts</h1>
        <p className="text-muted-foreground">
          Early warnings about potential crop diseases in your area
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {alerts.map((alert) => (
          <Card key={alert.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-red-50 dark:bg-red-900/20">
                  {alert.icon}
                </div>
                <CardTitle>{alert.disease}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{alert.description}</p>
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Severity: {alert.severity}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="text-sm font-medium">Affected Crops:</span>
                  {alert.affectedCrops.map((crop, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}