import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, TreesIcon as Lungs, Brain, Bone, Eye, Ear } from "lucide-react"

const healthIndicators = [
  {
    name: "Heart",
    status: "Excellent",
    score: 95,
    icon: Heart,
    color: "text-green-600",
    bgColor: "bg-green-100",
    details: "Normal rhythm, 72 BPM",
  },
  {
    name: "Lungs",
    status: "Good",
    score: 88,
    icon: Lungs,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    details: "Clear airways, normal capacity",
  },
  {
    name: "Brain",
    status: "Excellent",
    score: 92,
    icon: Brain,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    details: "Normal cognitive function",
  },
  {
    name: "Bones",
    status: "Warning",
    score: 75,
    icon: Bone,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    details: "Slight density decrease",
  },
  {
    name: "Vision",
    status: "Good",
    score: 85,
    icon: Eye,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    details: "20/20 vision, no issues",
  },
  {
    name: "Hearing",
    status: "Excellent",
    score: 98,
    icon: Ear,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    details: "Perfect hearing range",
  },
]

export function AdvancedAnatomySection() {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Heart className="h-5 w-5 text-red-500" />
          <span>Health Overview</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* 3D Body Visualization */}
        <div className="relative mb-6">
          <div className="mx-auto w-48 h-80 bg-gradient-to-b from-blue-50 to-purple-50 rounded-3xl flex items-center justify-center relative overflow-hidden">
            <div className="w-32 h-64 bg-gradient-to-b from-blue-100 to-blue-200 rounded-full relative">
              {/* Animated health indicators */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Health Metrics */}
        <div className="space-y-4">
          {healthIndicators.map((indicator) => (
            <div key={indicator.name} className="flex items-center space-x-4 p-3 bg-white rounded-lg border">
              <div className={`p-2 rounded-lg ${indicator.bgColor}`}>
                <indicator.icon className={`h-5 w-5 ${indicator.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900">{indicator.name}</span>
                  <Badge
                    variant={
                      indicator.status === "Excellent"
                        ? "default"
                        : indicator.status === "Good"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {indicator.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <Progress value={indicator.score} className="flex-1 h-2" />
                  <span className="text-sm font-medium text-gray-600">{indicator.score}%</span>
                </div>
                <p className="text-xs text-gray-500">{indicator.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Health Score */}
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Overall Health Score</p>
            <p className="text-3xl font-bold text-green-600">89%</p>
            <p className="text-xs text-gray-500">Excellent condition</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
