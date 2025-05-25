import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, Search, Filter, Download, Eye, Plus, Stethoscope, TestTube, Pill } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const medicalRecords = [
  {
    id: "MR001",
    patient: "XYZ",
    patientId: "P001",
    type: "Consultation",
    doctor: "Dr. XYZ",
    date: "2025-05-15",
    diagnosis: "Hypertension",
    status: "Completed",
    attachments: 3,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "MR002",
    patient: "Abhay",
    patientId: "P002",
    type: "Lab Results",
    doctor: "Dr. Sonu",
    date: "2025-05-14",
    diagnosis: "Blood Sugar Monitoring",
    status: "Reviewed",
    attachments: 5,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "MR003",
    patient: "Vedika Raut",
    patientId: "P003",
    type: "Surgery Report",
    doctor: "Dr. Abhay",
    date: "2025-05-13",
    diagnosis: "Appendectomy",
    status: "Final",
    attachments: 8,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "MR004",
    patient: "Sonu Yadav",
    patientId: "P004",
    type: "Prescription",
    doctor: "Dr. Jyoti Yadav",
    date: "2025-05-12",
    diagnosis: "Cardiac Medication",
    status: "Active",
    attachments: 2,
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const recordTypes = [
  { name: "Consultations", count: 156, icon: Stethoscope, color: "text-blue-600" },
  { name: "Lab Results", count: 89, icon: TestTube, color: "text-green-600" },
  { name: "Prescriptions", count: 234, icon: Pill, color: "text-purple-600" },
  { name: "Surgery Reports", count: 45, icon: FileText, color: "text-red-600" },
]

export function MedicalRecords() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Medical Records</h2>
          <p className="text-gray-600">Comprehensive patient medical documentation</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Record
          </Button>
        </div>
      </div>

      {/* Record Type Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {recordTypes.map((type) => (
          <Card key={type.name} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{type.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{type.count}</p>
                </div>
                <type.icon className={`h-8 w-8 ${type.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search records by patient, doctor, or diagnosis..." className="pl-10" />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                All Types
              </Button>
              <Button variant="outline" size="sm">
                Recent
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Records Table */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Recent Medical Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Record Type</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Diagnosis</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Attachments</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicalRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={record.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {record.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{record.patient}</p>
                        <p className="text-sm text-gray-500">{record.patientId}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{record.type}</Badge>
                  </TableCell>
                  <TableCell>{record.doctor}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.diagnosis}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        record.status === "Completed" || record.status === "Final"
                          ? "default"
                          : record.status === "Active"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {record.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{record.attachments}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Recent Record Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New consultation record added", patient: "Sarah Johnson", time: "2 hours ago", type: "added" },
              { action: "Lab results updated", patient: "Michael Chen", time: "4 hours ago", type: "updated" },
              {
                action: "Surgery report finalized",
                patient: "Emily Rodriguez",
                time: "6 hours ago",
                type: "completed",
              },
              { action: "Prescription renewed", patient: "David Wilson", time: "8 hours ago", type: "renewed" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div
                  className={`w-2 h-2 rounded-full ${
                    activity.type === "added"
                      ? "bg-green-500"
                      : activity.type === "updated"
                        ? "bg-blue-500"
                        : activity.type === "completed"
                          ? "bg-purple-500"
                          : "bg-orange-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">Patient: {activity.patient}</p>
                </div>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
