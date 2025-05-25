import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TestTube, Search, Filter, Download, Eye, Plus, TrendingUp, TrendingDown } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const labResults = [
  {
    id: "LAB001",
    patient: "Sarah",
    patientId: "P001",
    testType: "Complete Blood Count",
    orderedBy: "Dr. ABC",
    orderDate: "2025-05-15",
    resultDate: "2025-05-16",
    status: "Completed",
    priority: "Routine",
    results: [
      { parameter: "Hemoglobin", value: "13.5", unit: "g/dL", range: "12.0-15.5", status: "Normal" },
      { parameter: "White Blood Cells", value: "7.2", unit: "K/uL", range: "4.5-11.0", status: "Normal" },
    ],
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "LAB002",
    patient: "XYZ",
    patientId: "P002",
    testType: "Lipid Panel",
    orderedBy: "Dr. Sonu",
    orderDate: "2025-05-14",
    resultDate: "2025-05-15",
    status: "Abnormal",
    priority: "Urgent",
    results: [
      { parameter: "Total Cholesterol", value: "245", unit: "mg/dL", range: "<200", status: "High" },
      { parameter: "HDL Cholesterol", value: "38", unit: "mg/dL", range: ">40", status: "Low" },
    ],
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export function LabResults() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Laboratory Results</h2>
          <p className="text-gray-600">Monitor and review patient lab test results</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Order Test
          </Button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Tests</p>
                <p className="text-3xl font-bold">156</p>
              </div>
              <TestTube className="h-8 w-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Normal Results</p>
                <p className="text-3xl font-bold">134</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100">Abnormal Results</p>
                <p className="text-3xl font-bold">22</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-200" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-100">Pending</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <TestTube className="h-8 w-8 text-yellow-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search by patient, test type, or lab ID..." className="pl-10" />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                All Results
              </Button>
              <Button variant="outline" size="sm">
                Abnormal
              </Button>
              <Button variant="outline" size="sm">
                Pending
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lab Results Table */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Recent Lab Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Test Type</TableHead>
                <TableHead>Ordered By</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Result Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {labResults.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={result.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {result.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{result.patient}</p>
                        <p className="text-sm text-gray-500">{result.patientId}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-gray-900">{result.testType}</p>
                      <p className="text-xs text-gray-500">{result.id}</p>
                    </div>
                  </TableCell>
                  <TableCell>{result.orderedBy}</TableCell>
                  <TableCell>{result.orderDate}</TableCell>
                  <TableCell>{result.resultDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        result.status === "Completed"
                          ? "default"
                          : result.status === "Abnormal"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {result.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={result.priority === "Urgent" ? "destructive" : "outline"}>{result.priority}</Badge>
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
    </div>
  )
}
