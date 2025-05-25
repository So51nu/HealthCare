import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TreesIcon as Lungs, Smile, Bone } from "lucide-react"

const healthStatusData = [
  {
    name: "Lungs",
    icon: Lungs,
    status: "Issue detected",
    date: "May 23, 2025",
    statusColor: "destructive" as const,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    name: "Teeth",
    icon: Smile,
    status: "Healthy",
    date: "May 24, 2025",
    statusColor: "default" as const,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    name: "Bone",
    icon: Bone,
    status: "Healthy",
    date: "May 23, 2025",
    statusColor: "default" as const,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
]

export function HealthStatusCards() {
  return (
    <div className="space-y-3">
      {healthStatusData.map((item) => (
        <Card key={item.name} className="bg-white shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${item.bgColor}`}>
                <item.icon className={`h-5 w-5 ${item.iconColor}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
              <Badge variant={item.statusColor} className="text-xs">
                {item.status}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
