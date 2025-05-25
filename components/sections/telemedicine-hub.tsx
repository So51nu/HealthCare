import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Video, Phone, MessageSquare, Calendar, Clock, Users, Plus } from "lucide-react"

const activeConsultations = [
  {
    id: "TM001",
    patient: "XYZ",
    doctor: "Dr. Saras",
    startTime: "10:30 AM",
    duration: "15 min",
    type: "Video Call",
    status: "In Progress",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "TM002",
    patient: "PQR",
    doctor: "Dr. Sonu",
    startTime: "11:00 AM",
    duration: "30 min",
    type: "Phone Call",
    status: "Waiting",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const upcomingConsultations = [
  {
    id: "TM003",
    patient: " Abhay",
    doctor: "Dr. Vedika",
    scheduledTime: "2:00 PM",
    type: "Video Call",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "TM004",
    patient: "Ashish ",
    doctor: "Dr. Vandana",
    scheduledTime: "3:30 PM",
    type: "Phone Call",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export function TelemedicineHub() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Telemedicine Hub</h2>
          <p className="text-gray-600">Manage virtual consultations and remote care</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Start Consultation
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Active Sessions</p>
                <p className="text-3xl font-bold">5</p>
              </div>
              <Video className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Today's Total</p>
                <p className="text-3xl font-bold">23</p>
              </div>
              <Users className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Scheduled</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Avg Duration</p>
                <p className="text-3xl font-bold">25m</p>
              </div>
              <Clock className="h-8 w-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Consultations */}
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Video className="h-5 w-5 text-green-500" />
              <span>Active Consultations</span>
              <Badge variant="secondary" className="ml-auto">
                Live
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeConsultations.map((consultation) => (
              <div
                key={consultation.id}
                className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200"
              >
                <Avatar>
                  <AvatarImage src={consultation.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {consultation.patient
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{consultation.patient}</p>
                  <p className="text-sm text-gray-600">with {consultation.doctor}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {consultation.type}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {consultation.startTime} • {consultation.duration}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={consultation.status === "In Progress" ? "default" : "secondary"}>
                    {consultation.status}
                  </Badge>
                  <div className="flex space-x-1 mt-2">
                    <Button size="sm" variant="outline">
                      <Video className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Consultations */}
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              <span>Upcoming Consultations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingConsultations.map((consultation) => (
              <div
                key={consultation.id}
                className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200"
              >
                <Avatar>
                  <AvatarImage src={consultation.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {consultation.patient
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{consultation.patient}</p>
                  <p className="text-sm text-gray-600">with {consultation.doctor}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {consultation.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{consultation.scheduledTime}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Button size="sm">Start</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex-col space-y-2">
              <Video className="h-6 w-6" />
              <span>Start Video Call</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Phone className="h-6 w-6" />
              <span>Start Phone Call</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <MessageSquare className="h-6 w-6" />
              <span>Send Message</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
