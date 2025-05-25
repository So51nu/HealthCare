import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronLeft, ChevronRight, Plus } from "lucide-react"

const calendarData = {
  month: "January",
  year: "2024",
  appointments: {
    15: { count: 3, types: ["Consultation", "Follow-up", "Surgery"] },
    18: { count: 2, types: ["Checkup", "Therapy"] },
    22: { count: 4, types: ["Consultation", "Lab", "Follow-up", "Emergency"] },
    25: { count: 1, types: ["Surgery"] },
    28: { count: 2, types: ["Consultation", "Checkup"] },
  },
}

export function AppointmentCalendar() {
  const daysInMonth = 31
  const firstDayOfWeek = 1 // January 1, 2024 was a Monday
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span>
              {calendarData.month} {calendarData.year}
            </span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Calendar Header */}
        <div className="grid grid-cols-7 gap-1 mb-4">
          {days.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before month starts */}
          {Array.from({ length: firstDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} className="h-16"></div>
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1
            const dayAppointments = calendarData.appointments[day as keyof typeof calendarData.appointments]
            const isToday = day === 15 // Mock today

            return (
              <div
                key={day}
                className={`h-16 p-1 border rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                  isToday ? "bg-blue-50 border-blue-300" : "bg-white border-gray-200"
                }`}
              >
                <div className="flex flex-col h-full">
                  <span className={`text-sm font-medium ${isToday ? "text-blue-600" : "text-gray-700"}`}>{day}</span>
                  {dayAppointments && (
                    <div className="flex-1 flex flex-col justify-center">
                      <Badge variant="secondary" className="text-xs px-1 py-0 h-4 w-full justify-center">
                        {dayAppointments.count}
                      </Badge>
                      <div className="flex justify-center mt-1">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Today's Appointments Summary */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Today's Appointments</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-700">09:00 AM - Consultation</span>
              <Badge variant="outline" className="text-xs">
                Room 101
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-700">11:30 AM - Follow-up</span>
              <Badge variant="outline" className="text-xs">
                Room 203
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-700">02:00 PM - Surgery Prep</span>
              <Badge variant="outline" className="text-xs">
                OR 1
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
