import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activityData = {
  weeklyAppointments: 3,
  chartData: [
    { day: "Mon", value: 2 },
    { day: "Tue", value: 1 },
    { day: "Wed", value: 0 },
    { day: "Thu", value: 3 },
    { day: "Fri", value: 1 },
    { day: "Sat", value: 2 },
    { day: "Sun", value: 0 },
  ],
}

export function ActivityFeed() {
  const maxValue = Math.max(...activityData.chartData.map((d) => d.value))

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-blue-600">{activityData.weeklyAppointments} appointments</span> on this
            week
          </p>
        </div>

        {/* Simple Bar Chart */}
        <div className="space-y-3">
          <div className="flex items-end justify-between h-24 px-2">
            {activityData.chartData.map((item, index) => (
              <div key={item.day} className="flex flex-col items-center space-y-2">
                <div
                  className="w-6 bg-blue-500 rounded-t-sm transition-all duration-300"
                  style={{
                    height: `${(item.value / (maxValue || 1)) * 60}px`,
                    minHeight: item.value > 0 ? "8px" : "2px",
                    backgroundColor: item.value > 0 ? "#3b82f6" : "#e5e7eb",
                  }}
                ></div>
                <span className="text-xs text-gray-500">{item.day}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
