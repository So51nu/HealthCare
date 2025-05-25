import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const calendarData = {
  month: "October",
  year: "2021",
  appointments: {
    15: ["09:00", "11:00"],
    22: ["13:00", "15:00"],
    28: ["10:00"],
  },
}

const appointmentDetails = [
  {
    type: "Dentist",
    doctor: "Dr. PQR",
    time: "09:00 AM",
    date: "May 23",
    color: "bg-blue-100 text-blue-800",
  },
  {
    type: "Physiotherapy",
    doctor: "Dr. XYZ",
    time: "02:00 PM",
    date: "May 22",
    color: "bg-green-100 text-green-800",
  },
]

export function CalendarView() {
  const daysInMonth = 31
  const firstDayOfWeek = 5 // October 1, 2021 was a Friday
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900">
              {calendarData.month} {calendarData.year}
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 mb-4">
            {days.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: firstDayOfWeek }).map((_, index) => (
              <div key={`empty-${index}`} className="h-10"></div>
            ))}

            {/* Days of the month */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1
              const hasAppointments = calendarData.appointments[day as keyof typeof calendarData.appointments]

              return (
                <div key={day} className="h-10 flex flex-col items-center justify-center relative">
                  <span className={`text-sm ${hasAppointments ? "font-semibold text-blue-600" : "text-gray-700"}`}>
                    {day}
                  </span>
                  {hasAppointments && (
                    <div className="absolute -bottom-1 flex space-x-1">
                      {hasAppointments.map((time, timeIndex) => (
                        <div key={timeIndex} className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Appointment Details */}
      <div className="space-y-3">
        {appointmentDetails.map((appointment, index) => (
          <Card key={index} className="bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{appointment.type}</h3>
                  <p className="text-sm text-gray-500">{appointment.doctor}</p>
                </div>
                <div className="text-right">
                  <Badge className={appointment.color}>{appointment.time}</Badge>
                  <p className="text-xs text-gray-500 mt-1">{appointment.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
