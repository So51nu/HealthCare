"use client"

import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Pill,
  TestTube,
  Activity,
  CreditCard,
  Video,
  BarChart3,
  Package,
  UserCheck,
  AlertTriangle,
  FileBarChart,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface AdvancedSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const navigationSections = [
  {
    title: "Main Dashboard",
    items: [
      { id: "overview", name: "Overview", icon: LayoutDashboard, badge: null },
      { id: "patients", name: "Patients", icon: Users, badge: "1,247" },
      { id: "appointments", name: "Appointments", icon: Calendar, badge: "23" },
    ],
  },
  {
    title: "Medical Management",
    items: [
      { id: "medical_records", name: "Medical Records", icon: FileText, badge: null },
      { id: "prescriptions", name: "Prescriptions", icon: Pill, badge: "45" },
      { id: "lab_results", name: "Lab Results", icon: TestTube, badge: "12" },
      { id: "vital_signs", name: "Vital Signs", icon: Activity, badge: null },
    ],
  },
  {
    title: "Operations",
    items: [
      { id: "billing", name: "Billing", icon: CreditCard, badge: null },
      { id: "telemedicine", name: "Telemedicine", icon: Video, badge: "5" },
      { id: "inventory", name: "Inventory", icon: Package, badge: null },
      { id: "staff", name: "Staff", icon: UserCheck, badge: null },
    ],
  },
  {
    title: "Analytics & Reports",
    items: [
      { id: "analytics", name: "Analytics", icon: BarChart3, badge: null },
      { id: "reports", name: "Reports", icon: FileBarChart, badge: null },
      { id: "emergency", name: "Emergency", icon: AlertTriangle, badge: "2" },
    ],
  },
]

export function AdvancedSidebar({ activeSection, setActiveSection, collapsed, setCollapsed }: AdvancedSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-full bg-white/90 backdrop-blur-md border-r border-gray-200/50 transition-all duration-300 z-50",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex flex-col h-full">
        {/* Collapse Toggle */}
        <div className="p-4 border-b border-gray-200/50">
          <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="ml-auto">
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              {!collapsed && (
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{section.title}</h3>
              )}
              <nav className="space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                      collapsed && "justify-center",
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left">{item.name}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        {!collapsed && (
          <div className="p-4 border-t border-gray-200/50">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">System Status</span>
              </div>
              <div className="text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Uptime:</span>
                  <span className="text-green-600 font-medium">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Users:</span>
                  <span className="text-blue-600 font-medium">247</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
