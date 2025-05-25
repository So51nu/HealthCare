import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Activity, Heart, Thermometer, Droplets, Wind, Plus, TrendingUp } from "lucide-react"

const vitalSignsData = [
  {
    patient: "Saras",
    patientId: "P001",
    heartRate: { value: 72, unit: "BPM", status: "Normal", trend: "stable" },
    bloodPressure: { value: "120/80", unit: "mmHg", status: "Normal", trend: "stable" },
    temperature: { value: 98.6, unit: "°F", status: "Normal", trend: "stable" },
    oxygenSat: { value: 98, unit: "%", status: "Normal", trend: "stable" },
    respiratoryRate: { value: 16, unit: "/min", status: "Normal", trend: "stable" },
    lastUpdate: "2 min ago",
  },
  {
    patient: "Sonu ",
    patientId: "P002",
    heartRate: { value: 88, unit: "BPM", status: "Elevated", trend: "increasing" },
    bloodPressure: { value: "140/90", unit: "mmHg", status: "High", trend: "increasing" },
    temperature: { value: 99.2, unit: "°F", status: "Elevated", trend: "increasing" },
    oxygenSat: { value: 96, unit: "%", status: "Low", trend: "decreasing" },
    respiratoryRate: { value: 20, unit: "/min", status: "Elevated", trend: "increasing" },
    lastUpdate: "5 min ago",
  },
]

const vitalCategories = [
  { name: "Heart Rate", icon: Heart, color: "text-red-500", bgColor: "bg-red-50" },
  { name: "Blood Pressure", icon: Activity, color: "text-blue-500", bgColor: "bg-blue-50" },
  { name: "Temperature", icon: Thermometer, color: "text-orange-500", bgColor: "bg-orange-50" },
  { name: "Oxygen Saturation", icon: Droplets, color: "text-cyan-500", bgColor: "bg-cyan-50" },
  { name: "Respiratory Rate", icon: Wind, color: "text-green-500", bgColor: "bg-green-50" },
]

export function VitalSigns() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Vital Signs Monitor</h2>
          <p className="text-gray-600">Real-time patient vital signs monitoring</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <TrendingUp className="h-4 w-4 mr-2" />
            Trends
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Record Vitals
          </Button>
        </div>
      </div>

      {/* Vital Categories Overview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {vitalCategories.map((category) => (
          <Card key={category.name} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <div className={`p-3 rounded-full ${category.bgColor} mx-auto mb-3 w-fit`}>
                <category.icon className={`h-6 w-6 ${category.color}`} />
              </div>
              <h3 className="font-medium text-gray-900 text-sm">{category.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Patient Vital Signs */}
      <div className="space-y-6">
        {vitalSignsData.map((patient) => (
          <Card key={patient.patientId} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{patient.patient}</CardTitle>
                  <p className="text-sm text-gray-500">{patient.patientId}</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary">Live</Badge>
                  <p className="text-xs text-gray-500 mt-1">Updated {patient.lastUpdate}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Heart Rate */}
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <Heart className="h-6 w-6 text-red-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{patient.heartRate.value}</p>
                  <p className="text-sm text-gray-600">{patient.heartRate.unit}</p>
                  <Badge variant={patient.heartRate.status === "Normal" ? "default" : "destructive"} className="mt-2">
                    {patient.heartRate.status}
                  </Badge>
                </div>

                {/* Blood Pressure */}
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Activity className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{patient.bloodPressure.value}</p>
                  <p className="text-sm text-gray-600">{patient.bloodPressure.unit}</p>
                  <Badge
                    variant={patient.bloodPressure.status === "Normal" ? "default" : "destructive"}
                    className="mt-2"
                  >
                    {patient.bloodPressure.status}
                  </Badge>
                </div>

                {/* Temperature */}
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Thermometer className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{patient.temperature.value}</p>
                  <p className="text-sm text-gray-600">{patient.temperature.unit}</p>
                  <Badge variant={patient.temperature.status === "Normal" ? "default" : "destructive"} className="mt-2">
                    {patient.temperature.status}
                  </Badge>
                </div>

                {/* Oxygen Saturation */}
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <Droplets className="h-6 w-6 text-cyan-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{patient.oxygenSat.value}</p>
                  <p className="text-sm text-gray-600">{patient.oxygenSat.unit}</p>
                  <Badge variant={patient.oxygenSat.status === "Normal" ? "default" : "destructive"} className="mt-2">
                    {patient.oxygenSat.status}
                  </Badge>
                </div>

                {/* Respiratory Rate */}
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Wind className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{patient.respiratoryRate.value}</p>
                  <p className="text-sm text-gray-600">{patient.respiratoryRate.unit}</p>
                  <Badge
                    variant={patient.respiratoryRate.status === "Normal" ? "default" : "destructive"}
                    className="mt-2"
                  >
                    {patient.respiratoryRate.status}
                  </Badge>
                </div>
              </div>

              {/* Trend Chart */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-3">24-Hour Trend</h4>
                <div className="h-24 flex items-end justify-between">
                  {Array.from({ length: 24 }).map((_, index) => {
                    const height = Math.random() * 60 + 20
                    return (
                      <div key={index} className="w-2 bg-blue-400 rounded-t" style={{ height: `${height}%` }}></div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
