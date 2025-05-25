import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertTriangle, Phone, Ambulance, Clock, MapPin, Plus } from "lucide-react"

const emergencyCases = [
  {
    id: "EM001",
    patient: "ABC",
    age: 45,
    condition: "Chest Pain",
    severity: "Critical",
    arrivalTime: "10:30 AM",
    location: "ER Bay 1",
    assignedTo: "Dr. Smith",
    status: "In Treatment",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "EM002",
    patient: "PQR",
    age: 32,
    condition: "Severe Allergic Reaction",
    severity: "High",
    arrivalTime: "11:15 AM",
    location: "ER Bay 3",
    assignedTo: "Dr. Wilson",
    status: "Waiting",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export function EmergencyCenter() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Emergency Center</h2>
          <p className="text-gray-600">Monitor and manage emergency cases</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Phone className="h-4 w-4 mr-2" />
            Call 911
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Emergency
          </Button>
        </div>
      </div>

      {/* Emergency Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100">Critical Cases</p>
                <p className="text-3xl font-bold">2</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">High Priority</p>
                <p className="text-3xl font-bold">5</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">In Treatment</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <Ambulance className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Avg Response</p>
                <p className="text-3xl font-bold">4m</p>
              </div>
              <Clock className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Emergency Cases */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <span>Active Emergency Cases</span>
            <Badge variant="destructive" className="ml-auto">
              Live
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {emergencyCases.map((emergency) => (
            <div
              key={emergency.id}
              className={`p-4 rounded-lg border ${
                emergency.severity === "Critical"
                  ? "bg-red-50 border-red-200"
                  : emergency.severity === "High"
                    ? "bg-orange-50 border-orange-200"
                    : "bg-yellow-50 border-yellow-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={emergency.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {emergency.patient
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-medium text-gray-900">{emergency.patient}</p>
                      <Badge
                        variant={
                          emergency.severity === "Critical"
                            ? "destructive"
                            : emergency.severity === "High"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {emergency.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{emergency.condition}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{emergency.arrivalTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{emergency.location}</span>
                      </div>
                      <span>Assigned to: {emergency.assignedTo}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={emergency.status === "In Treatment" ? "default" : "secondary"}>
                    {emergency.status}
                  </Badge>
                  <div className="flex space-x-2 mt-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-3 w-3" />
                    </Button>
                    <Button size="sm">View</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Emergency Response Team */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Emergency Response Team</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Dr. Emergency Lead", role: "Emergency Physician", status: "Available" },
              { name: "Nurse Critical Care", role: "Emergency Nurse", status: "Busy" },
              { name: "Dr. Trauma Specialist", role: "Trauma Surgeon", status: "Available" },
            ].map((member, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
                <Badge variant={member.status === "Available" ? "default" : "secondary"}>{member.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Emergency Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { resource: "ER Beds", available: 3, total: 12 },
              { resource: "Ambulances", available: 2, total: 5 },
              { resource: "OR Rooms", available: 1, total: 4 },
            ].map((resource, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{resource.resource}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(resource.available / resource.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm font-medium">
                  {resource.available}/{resource.total}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
