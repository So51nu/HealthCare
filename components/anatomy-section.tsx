import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HealthStatusCards } from "@/components/health-status-cards"

const healthIndicators = [
  { name: "Healthy Heart", status: "healthy", color: "bg-green-500", position: "top-1/3 left-1/2" },
  { name: "Lungs", status: "warning", color: "bg-red-500", position: "top-1/4 left-1/3" },
  { name: "Teeth", status: "healthy", color: "bg-green-500", position: "top-1/6 left-1/2" },
  { name: "Bone", status: "healthy", color: "bg-green-500", position: "top-2/3 left-1/2" },
]

export function AnatomySection() {
  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Health Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Human Body Illustration */}
            <div className="relative mx-auto w-48 h-80 bg-gradient-to-b from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
              <div className="w-32 h-64 bg-blue-200 rounded-full relative">
                {/* Health Indicators */}
                {healthIndicators.map((indicator, index) => (
                  <div
                    key={indicator.name}
                    className={`absolute w-3 h-3 ${indicator.color} rounded-full ${indicator.position} transform -translate-x-1/2 -translate-y-1/2`}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <Badge variant={indicator.status === "healthy" ? "default" : "destructive"} className="text-xs">
                        {indicator.name}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <HealthStatusCards />
    </div>
  )
}
