import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "History", icon: History, active: false },
  { name: "Calendar", icon: Calendar, active: false },
  { name: "Appointments", icon: Clock, active: false },
  { name: "Statistics", icon: BarChart3, active: false },
  { name: "Tests", icon: TestTube, active: false },
  { name: "Chat", icon: MessageCircle, active: false },
  { name: "Support", icon: HelpCircle, active: false },
  { name: "Setting", icon: Settings, active: false },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">General</h2>
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                item.active ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
