import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Heart, Thermometer, Droplets } from "lucide-react"

const vitalSigns = [
  {
    name: "Heart Rate",
    value: "72",
    unit: "BPM",
    status: "Normal",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50",
    trend: "stable",
    lastUpdate: "2 min ago",
  },
  {
    name: "Blood Pressure",
    value: "120/80",
    unit: "mmHg",
    status: "Normal",
    icon: Activity,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    trend: "stable",
    lastUpdate: "5 min ago",
  },
  {
    name: "Temperature",
    value: "98.6",
    unit: "°F",
    status: "Normal",
    icon: Thermometer,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    trend: "stable",
    lastUpdate: "1 min ago",
  },
  {
    name: "Oxygen Saturation",
    value: "98",
    unit: "%",
    status: "Normal",
    icon: Droplets,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
    trend: "stable",
    lastUpdate: "3 min ago",
  },
]

export function RealTimeVitals() {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-green-500" />
          <span>Real-time Vitals</span>
          <Badge variant="secondary" className="ml-auto">
            Live
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {vitalSigns.map((vital) => (
            <div key={vital.name} className={`p-4 rounded-lg ${vital.bgColor} border`}>
              <div className="flex items-center justify-between mb-2">
                <vital.icon className={`h-5 w-5 ${vital.color}`} />
                <Badge variant="outline" className="text-xs">
                  {vital.status}
                </Badge>
              </div>
              <div className="mb-1">
                <span className="text-2xl font-bold text-gray-900">{vital.value}</span>
                <span className="text-sm text-gray-600 ml-1">{vital.unit}</span>
              </div>
              <p className="text-sm font-medium text-gray-700 mb-1">{vital.name}</p>
              <p className="text-xs text-gray-500">Updated {vital.lastUpdate}</p>
            </div>
          ))}
        </div>

        {/* Vital Signs Chart */}
        <div className="mt-6 p-4 bg-white rounded-lg border">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Heart Rate Trend (24h)</h4>
          <div className="h-24 flex items-end justify-between">
            {Array.from({ length: 24 }).map((_, index) => {
              const height = Math.random() * 60 + 20
              return <div key={index} className="w-2 bg-red-400 rounded-t" style={{ height: `${height}%` }}></div>
            })}
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>00:00</span>
            <span>12:00</span>
            <span>24:00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
