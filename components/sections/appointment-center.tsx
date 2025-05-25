import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Plus, Filter, Video, MapPin, Phone, CheckCircle, XCircle } from "lucide-react"

const todayAppointments = [
  {
    id: "A001",
    time: "09:00 AM",
    patient: "PQR",
    doctor: "Dr. ABC",
    type: "Consultation",
    status: "Confirmed",
    duration: "30 min",
    room: "Room 101",
    isTelemedicine: false,
  },
  {
    id: "A002",
    time: "10:30 AM",
    patient: "XYZ",
    doctor: "Dr. XYZ",
    type: "Follow-up",
    status: "In Progress",
    duration: "45 min",
    room: "Room 203",
    isTelemedicine: false,
  },
  {
    id: "A003",
    time: "11:15 AM",
    patient: "ABC",
    doctor: "PQR",
    type: "Telemedicine",
    status: "Waiting",
    duration: "30 min",
    room: "Virtual",
    isTelemedicine: true,
  },
  {
    id: "A004",
    time: "02:00 PM",
    patient: "Vedika",
    doctor: "Dr. Abhay",
    type: "Surgery Consultation",
    status: "Confirmed",
    duration: "60 min",
    room: "Room 305",
    isTelemedicine: false,
  },
]

const upcomingAppointments = [
  {
    date: "Tomorrow",
    count: 18,
    appointments: [
      { time: "09:00 AM", patient: "Sanu Raut", type: "Checkup" },
      { time: "10:30 AM", patient: "Abhay Sharma", type: "Follow-up" },
      { time: "02:00 PM", patient: "Ashish Kumbhar", type: "Consultation" },
    ],
  },
  {
    date: "Friday",
    count: 15,
    appointments: [
      { time: "08:30 AM", patient: "Hey", type: "Surgery" },
      { time: "11:00 AM", patient: "Hello", type: "Therapy" },
    ],
  },
]

export function AppointmentCenter() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Appointment Center</h2>
          <p className="text-gray-600">Manage all appointments and schedules</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Appointment
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Today's Total</p>
                <p className="text-3xl font-bold">13</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Completed</p>
                <p className="text-3xl font-bold">10</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100">Pending</p>
                <p className="text-3xl font-bold">5</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100">Cancelled</p>
                <p className="text-3xl font-bold">3</p>
              </div>
              <XCircle className="h-8 w-8 text-red-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>Today's Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
                <div className="text-center min-w-[80px]">
                  <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                  <p className="text-xs text-gray-500">{appointment.duration}</p>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="font-medium text-gray-900">{appointment.patient}</p>
                    {appointment.isTelemedicine && <Video className="h-4 w-4 text-blue-500" />}
                  </div>
                  <p className="text-sm text-gray-600">{appointment.doctor}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {appointment.type}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <MapPin className="h-3 w-3" />
                      <span>{appointment.room}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <Badge
                    variant={
                      appointment.status === "Confirmed"
                        ? "default"
                        : appointment.status === "In Progress"
                          ? "secondary"
                          : "outline"
                    }
                    className="mb-2"
                  >
                    {appointment.status}
                  </Badge>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline">
                      <Phone className="h-3 w-3" />
                    </Button>
                    {appointment.isTelemedicine && (
                      <Button size="sm" variant="outline">
                        <Video className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-purple-600" />
              <span>Upcoming Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {upcomingAppointments.map((day, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">{day.date}</h3>
                  <Badge variant="secondary">{day.count} appointments</Badge>
                </div>
                <div className="space-y-2">
                  {day.appointments.map((appointment, appointmentIndex) => (
                    <div key={appointmentIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{appointment.patient}</p>
                        <p className="text-xs text-gray-500">{appointment.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{appointment.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Calendar View */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Monthly Calendar View</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, index) => {
              const day = index - 5 + 1
              const isCurrentMonth = day > 0 && day <= 31
              const hasAppointments = [5, 12, 18, 23, 28].includes(day)

              return (
                <div
                  key={index}
                  className={`h-12 flex flex-col items-center justify-center rounded-lg border ${
                    isCurrentMonth ? "bg-white hover:bg-gray-50" : "bg-gray-100"
                  } ${hasAppointments ? "border-blue-300 bg-blue-50" : "border-gray-200"}`}
                >
                  {isCurrentMonth && (
                    <>
                      <span className={`text-sm ${hasAppointments ? "font-semibold text-blue-600" : "text-gray-700"}`}>
                        {day}
                      </span>
                      {hasAppointments && <div className="w-1 h-1 bg-blue-500 rounded-full mt-1"></div>}
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
