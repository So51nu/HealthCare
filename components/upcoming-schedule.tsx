import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SimpleAppointmentCard } from "@/components/simple-appointment-card"

const scheduleData = [
  {
    day: "On Thursday",
    appointments: [
      {
        title: "Health checkup complete",
        time: "09:00 AM",
        type: "checkup",
      },
      {
        title: "Ophthalmologist",
        time: "11:30 AM",
        type: "specialist",
      },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      {
        title: "Cardiologist",
        time: "10:00 AM",
        type: "specialist",
      },
      {
        title: "Neurologist",
        time: "02:30 PM",
        type: "specialist",
      },
    ],
  },
]

export function UpcomingSchedule() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">The Upcoming Schedule</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {scheduleData.map((daySchedule, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-gray-600 mb-3">{daySchedule.day}</h3>
            <div className="space-y-3">
              {daySchedule.appointments.map((appointment, appointmentIndex) => (
                <SimpleAppointmentCard
                  key={appointmentIndex}
                  title={appointment.title}
                  time={appointment.time}
                  type={appointment.type}
                />
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
