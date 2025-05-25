"use client"

import { Search, Bell, MessageSquare, Settings, User, Menu, Globe, Shield, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AdvancedHeaderProps {
  activeSection: string
  toggleSidebar: () => void
}

export function AdvancedHeader({ activeSection, toggleSidebar }: AdvancedHeaderProps) {
  const getSectionTitle = (section: string) => {
    const titles: Record<string, string> = {
      overview: "Healthcare Overview",
      patients: "Patient Management",
      appointments: "Appointment Center",
      medical_records: "Medical Records",
      prescriptions: "Prescription Management",
      lab_results: "Laboratory Results",
      vital_signs: "Vital Signs Monitor",
      billing: "Billing & Insurance",
      telemedicine: "Telemedicine Hub",
      analytics: "Health Analytics",
      inventory: "Medical Inventory",
      staff: "Staff Management",
      emergency: "Emergency Center",
      reports: "Reports & Documents",
    }
    return titles[section] || "Healthcare Dashboard"
  }

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-4 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MediCore Pro
              </h1>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Shield className="h-3 w-3 mr-1" />
              HIPAA Compliant
            </Badge>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search patients, appointments, records..."
              className="pl-10 bg-gray-50/50 border-gray-200 focus:bg-white focus:border-blue-300 transition-all duration-200"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Badge variant="outline" className="text-xs">
                ⌘K
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Globe className="h-5 w-5 text-gray-600" />
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <MessageSquare className="h-5 w-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-500 text-xs p-0 flex items-center justify-center">
              3
            </Badge>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs p-0 flex items-center justify-center">
              7
            </Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 px-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div className="text-left hidden md:block">
                  <p className="text-sm font-medium">Dr. XYZ</p>
                  <p className="text-xs text-gray-500">Chief Medical Officer</p>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Preferences
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mt-3">
        <h2 className="text-lg font-semibold text-gray-800">{getSectionTitle(activeSection)}</h2>
      </div>
    </header>
  )
}
