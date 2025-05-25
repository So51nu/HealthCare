import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pill, Search, Filter, Plus, Clock, AlertTriangle, RefreshCw, Calendar } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const prescriptions = [
  {
    id: "RX001",
    patient: "XYZ",
    patientId: "P001",
    medication: "Lisinopril 10mg",
    dosage: "Once daily",
    prescribedBy: "Dr. XYZ",
    prescribedDate: "2025-01-15",
    expiryDate: "2025-07-15",
    status: "Active",
    refillsLeft: 3,
    totalRefills: 5,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "RX002",
    patient: "PQR",
    patientId: "P002",
    medication: "Metformin 500mg",
    dosage: "Twice daily",
    prescribedBy: "Dr. XYZ",
    prescribedDate: "2025-01-10",
    expiryDate: "2025-06-10",
    status: "Expiring Soon",
    refillsLeft: 1,
    totalRefills: 6,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "RX003",
    patient: " XYZ",
    patientId: "P003",
    medication: "Albuterol Inhaler",
    dosage: "As needed",
    prescribedBy: "Dr. Hey",
    prescribedDate: "2025-01-08",
    expiryDate: "2025-01-20",
    status: "Expired",
    refillsLeft: 0,
    totalRefills: 3,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "RX004",
    patient: "Daddy",
    patientId: "P004",
    medication: "Atorvastatin 20mg",
    dosage: "Once daily",
    prescribedBy: "Dr. Son",
    prescribedDate: "2025-01-12",
    expiryDate: "2025-08-12",
    status: "Active",
    refillsLeft: 4,
    totalRefills: 6,
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

const prescriptionStats = [
  { title: "Active Prescriptions", value: 234, icon: Pill, color: "text-green-600", bgColor: "bg-green-100" },
  { title: "Expiring Soon", value: 12, icon: Clock, color: "text-yellow-600", bgColor: "bg-yellow-100" },
  { title: "Expired", value: 8, icon: AlertTriangle, color: "text-red-600", bgColor: "bg-red-100" },
  { title: "Renewed Today", value: 15, icon: RefreshCw, color: "text-blue-600", bgColor: "bg-blue-100" },
]

export function PrescriptionManagement() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Prescription Management</h2>
          <p className="text-gray-600">Monitor and manage patient prescriptions</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Prescription
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {prescriptionStats.map((stat) => (
          <Card key={stat.title} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
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
                <Input placeholder="Search by patient, medication, or prescription ID..." className="pl-10" />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                All Status
              </Button>
              <Button variant="outline" size="sm">
                Active
              </Button>
              <Button variant="outline" size="sm">
                Expiring
              </Button>
              <Button variant="outline" size="sm">
                Expired
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prescriptions Table */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Current Prescriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Dosage</TableHead>
                <TableHead>Prescribed By</TableHead>
                <TableHead>Prescribed Date</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Refills</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prescriptions.map((prescription) => (
                <TableRow key={prescription.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={prescription.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {prescription.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{prescription.patient}</p>
                        <p className="text-sm text-gray-500">{prescription.patientId}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-gray-900">{prescription.medication}</p>
                      <p className="text-xs text-gray-500">{prescription.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>{prescription.dosage}</TableCell>
                  <TableCell>{prescription.prescribedBy}</TableCell>
                  <TableCell>{prescription.prescribedDate}</TableCell>
                  <TableCell>{prescription.expiryDate}</TableCell>
                  <TableCell>
                    <div className="text-center">
                      <p className="text-sm font-medium">
                        {prescription.refillsLeft}/{prescription.totalRefills}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                        <div
                          className="bg-blue-600 h-1 rounded-full"
                          style={{ width: `${(prescription.refillsLeft / prescription.totalRefills) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        prescription.status === "Active"
                          ? "default"
                          : prescription.status === "Expiring Soon"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {prescription.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Calendar className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Medication Reminders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-orange-500" />
              <span>Upcoming Renewals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { patient: "Michael Chen", medication: "Metformin 500mg", daysLeft: 5 },
              { patient: "Sarah Johnson", medication: "Lisinopril 10mg", daysLeft: 12 },
              { patient: "David Wilson", medication: "Atorvastatin 20mg", daysLeft: 18 },
            ].map((renewal, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200"
              >
                <div>
                  <p className="font-medium text-gray-900">{renewal.patient}</p>
                  <p className="text-sm text-gray-600">{renewal.medication}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-orange-600">{renewal.daysLeft} days</p>
                  <Button size="sm" variant="outline" className="mt-1">
                    Renew
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span>Drug Interactions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { patient: "Emily Rodriguez", interaction: "Albuterol + Beta Blockers", severity: "Moderate" },
              { patient: "David Wilson", interaction: "Atorvastatin + Warfarin", severity: "High" },
            ].map((interaction, index) => (
              <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">{interaction.patient}</p>
                  <Badge variant="destructive" className="text-xs">
                    {interaction.severity}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{interaction.interaction}</p>
                <Button size="sm" variant="outline" className="mt-2">
                  Review
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
