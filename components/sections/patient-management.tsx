import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Plus, MoreHorizontal, Phone, Mail, Calendar, Heart, AlertCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const patients = [
  {
    id: "P001",
    name: "XYZ",
    age: 34,
    gender: "Female",
    phone: "+91 8797969375",
    email: "xyz@email.com",
    lastVisit: "2025-05-15",
    condition: "Hypertension",
    status: "Active",
    riskLevel: "Low",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "P002",
    name: "PQR",
    age: 45,
    gender: "Male",
    phone: "+91 9058659696",
    email: "pqr@email.com",
    lastVisit: "2025-05-14",
    condition: "Diabetes Type 2",
    status: "Active",
    riskLevel: "Medium",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "P003",
    name: "ABC",
    age: 28,
    gender: "Female",
    phone: "+91 8679795757",
    email: "abc@email.com",
    lastVisit: "2025-01-13",
    condition: "Asthma",
    status: "Active",
    riskLevel: "High",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "P004",
    name: "Vedika",
    age: 52,
    gender: "Female",
    phone: "+91 8089797979",
    email: "vedika@email.com",
    lastVisit: "2025-01-12",
    condition: "Heart Disease",
    status: "Critical",
    riskLevel: "High",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function PatientManagement() {
  return (
    <div className="p-6 space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Patient Management</h2>
          <p className="text-gray-600">Manage and monitor all patient records</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Patient
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search patients by name, ID, or condition..." className="pl-10" />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                All Patients
              </Button>
              <Button variant="outline" size="sm">
                Active
              </Button>
              <Button variant="outline" size="sm">
                Critical
              </Button>
              <Button variant="outline" size="sm">
                High Risk
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Patient Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Patients</p>
                <p className="text-3xl font-bold">1,247</p>
              </div>
              <Heart className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Active Today</p>
                <p className="text-3xl font-bold">89</p>
              </div>
              <Calendar className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100">High Risk</p>
                <p className="text-3xl font-bold">23</p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100">Critical</p>
                <p className="text-3xl font-bold">7</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Patient Table */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Patient Records</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={patient.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{patient.name}</p>
                        <p className="text-sm text-gray-500">
                          {patient.age}y, {patient.gender}
                        </p>
                        <p className="text-xs text-gray-400">{patient.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">{patient.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">{patient.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{patient.condition}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={patient.status === "Critical" ? "destructive" : "default"}>{patient.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        patient.riskLevel === "High"
                          ? "destructive"
                          : patient.riskLevel === "Medium"
                            ? "secondary"
                            : "default"
                      }
                    >
                      {patient.riskLevel}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
