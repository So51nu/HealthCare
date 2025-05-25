import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, Heart, Thermometer, Bell } from "lucide-react"

const alerts = [
  {
    id: 1,
    type: "Critical",
    patient: "PQR",
    message: "Irregular heartbeat detected",
    time: "2 min ago",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    id: 2,
    type: "Warning",
    patient: "Sanu",
    message: "Blood pressure elevated",
    time: "15 min ago",
    icon: AlertTriangle,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
  {
    id: 3,
    type: "Info",
    patient: "Vedika",
    message: "Medication reminder due",
    time: "30 min ago",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 4,
    type: "Warning",
    patient: "Abhay",
    message: "Temperature spike recorded",
    time: "1 hour ago",
    icon: Thermometer,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
]

export function PatientAlerts() {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-red-500" />
          <span>Patient Alerts</span>
          <Badge variant="destructive" className="ml-auto">
            {alerts.filter((alert) => alert.type === "Critical").length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className={`p-3 rounded-lg border ${alert.bgColor} ${alert.borderColor}`}>
            <div className="flex items-start space-x-3">
              <div className={`p-1 rounded ${alert.bgColor}`}>
                <alert.icon className={`h-4 w-4 ${alert.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="text-sm font-medium text-gray-900">{alert.patient}</p>
                  <Badge
                    variant={
                      alert.type === "Critical" ? "destructive" : alert.type === "Warning" ? "secondary" : "outline"
                    }
                    className="text-xs"
                  >
                    {alert.type}
                  </Badge>
                </div>
                <p className="text-sm text-gray-700">{alert.message}</p>
                <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                View
              </Button>
            </div>
          </div>
        ))}

        <div className="pt-3 border-t">
          <Button variant="outline" className="w-full text-sm">
            View All Alerts
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
