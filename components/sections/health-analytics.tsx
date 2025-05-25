import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, TrendingDown, Users, Calendar, Download } from "lucide-react"

export function HealthAnalytics() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Health Analytics</h2>
          <p className="text-gray-600">Comprehensive health data analysis and insights</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <BarChart3 className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Patient Satisfaction</p>
                <p className="text-3xl font-bold">94%</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+3.5%</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Treatment Success</p>
                <p className="text-3xl font-bold">87%</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+5.2%</span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Readmission Rate</p>
                <p className="text-3xl font-bold">8%</p>
                <div className="flex items-center mt-1">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-sm">-1.8%</span>
                </div>
              </div>
              <Calendar className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Avg Wait Time</p>
                <p className="text-3xl font-bold">12m</p>
                <div className="flex items-center mt-1">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-sm">-8%</span>
                </div>
              </div>
              <TrendingDown className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Patient Volume Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between p-4">
              {Array.from({ length: 12 }).map((_, index) => {
                const height = Math.random() * 200 + 50
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-8 bg-blue-500 rounded-t" style={{ height: `${height}px` }}></div>
                    <span className="text-xs text-gray-500 mt-2">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index]}
                    </span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Department Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { dept: "Cardiology", score: 95, patients: 234 },
              { dept: "Neurology", score: 92, patients: 189 },
              { dept: "Orthopedics", score: 88, patients: 156 },
              { dept: "Pediatrics", score: 96, patients: 298 },
            ].map((dept) => (
              <div key={dept.dept} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{dept.dept}</p>
                  <p className="text-sm text-gray-500">{dept.patients} patients</p>
                </div>
                <div className="text-right">
                  <Badge variant="default">{dept.score}%</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
