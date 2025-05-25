"use client"

import { AdvancedHeader } from "@/components/advanced-header"
import { AdvancedSidebar } from "@/components/advanced-sidebar"
import { DashboardRouter } from "@/components/dashboard-router"
import { useState } from "react"

export default function AdvancedHealthcareDashboard() {
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="flex h-screen">
        <AdvancedSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
        <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <AdvancedHeader activeSection={activeSection} toggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
          <DashboardRouter activeSection={activeSection} />
        </div>
      </div>
    </div>
  )
}
