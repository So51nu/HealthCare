import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Calendar, Activity, AlertTriangle, DollarSign } from "lucide-react"
import { AdvancedAnatomySection } from "@/components/advanced-anatomy-section"
import { RealTimeVitals } from "@/components/real-time-vitals"
import { AppointmentCalendar } from "@/components/appointment-calendar"
import { PatientAlerts } from "@/components/patient-alerts"
import { PerformanceMetrics } from "@/components/performance-metrics"

const overviewStats = [
  {
    title: "Total Patients",
    value: "1,247",
    change: "+12%",
    changeType: "positive",
    icon: Users,
    color: "blue",
  },
  {
    title: "Today's Appointments",
    value: "23",
    change: "+5%",
    changeType: "positive",
    icon: Calendar,
    color: "green",
  },
  {
    title: "Critical Alerts",
    value: "7",
    change: "-2%",
    changeType: "negative",
    icon: AlertTriangle,
    color: "red",
  },
  {
    title: "Revenue (Month)",
    value: "$124,500",
    change: "+18%",
    changeType: "positive",
    icon: DollarSign,
    color: "purple",
  },
]

export function OverviewDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat) => (
          <Card key={stat.title} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    <Badge variant={stat.changeType === "positive" ? "default" : "destructive"} className="text-xs">
                      {stat.change}
                    </Badge>
                    <span className="text-xs text-gray-500 ml-2">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <AdvancedAnatomySection />
          <PatientAlerts />
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          <AppointmentCalendar />
          <RealTimeVitals />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <PerformanceMetrics />
          <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-blue-600" />
                <span>System Health</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Server Performance</span>
                  <span>94%</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Database Health</span>
                  <span>98%</span>
                </div>
                <Progress value={98} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Network Status</span>
                  <span>99%</span>
                </div>
                <Progress value={99} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
