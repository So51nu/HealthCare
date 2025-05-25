import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Clock, DollarSign } from "lucide-react"

const metrics = [
  {
    title: "Patient Satisfaction",
    value: 94,
    target: 95,
    icon: Users,
    color: "text-green-600",
    trend: "+2.5%",
  },
  {
    title: "Average Wait Time",
    value: 12,
    target: 15,
    unit: "min",
    icon: Clock,
    color: "text-blue-600",
    trend: "-8%",
  },
  {
    title: "Revenue Growth",
    value: 18,
    target: 20,
    unit: "%",
    icon: DollarSign,
    color: "text-purple-600",
    trend: "+12%",
  },
  {
    title: "Efficiency Score",
    value: 87,
    target: 90,
    icon: TrendingUp,
    color: "text-orange-600",
    trend: "+5.2%",
  },
]

export function PerformanceMetrics() {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-green-500" />
          <span>Performance Metrics</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {metrics.map((metric) => (
          <div key={metric.title}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <metric.icon className={`h-4 w-4 ${metric.color}`} />
                <span className="text-sm font-medium text-gray-700">{metric.title}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-gray-900">
                  {metric.value}
                  {metric.unit || "%"}
                </span>
                <span className="text-xs text-green-600 ml-2">{metric.trend}</span>
              </div>
            </div>
            <Progress value={(metric.value / metric.target) * 100} className="h-2" />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>
                Current: {metric.value}
                {metric.unit || "%"}
              </span>
              <span>
                Target: {metric.target}
                {metric.unit || "%"}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
