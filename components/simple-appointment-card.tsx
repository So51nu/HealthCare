import { Card, CardContent } from "@/components/ui/card"
import { Clock, Stethoscope, Heart, Brain } from "lucide-react"

interface SimpleAppointmentCardProps {
  title: string
  time: string
  type: "checkup" | "specialist"
}

export function SimpleAppointmentCard({ title, time, type }: SimpleAppointmentCardProps) {
  const getIcon = () => {
    if (title.toLowerCase().includes("cardiologist")) return Heart
    if (title.toLowerCase().includes("neurologist")) return Brain
    if (title.toLowerCase().includes("ophthalmologist")) return Stethoscope
    return Clock
  }

  const Icon = getIcon()

  const getIconColor = () => {
    if (title.toLowerCase().includes("cardiologist")) return "text-red-500"
    if (title.toLowerCase().includes("neurologist")) return "text-purple-500"
    if (title.toLowerCase().includes("ophthalmologist")) return "text-blue-500"
    return "text-green-500"
  }

  return (
    <Card className="bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors">
      <CardContent className="p-3">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white rounded-lg">
            <Icon className={`h-4 w-4 ${getIconColor()}`} />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">{title}</h4>
            <p className="text-xs text-gray-500">{time}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
