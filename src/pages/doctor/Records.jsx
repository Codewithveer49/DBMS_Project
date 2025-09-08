import { useState } from "react"
import { FileText, Search, Plus, Download, Eye, Calendar, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Records() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  
  const records = [
    {
      id: 1,
      patient: "Sarah Johnson",
      type: "Lab Report",
      date: "2024-09-05",
      description: "Blood work and cholesterol check",
      status: "Completed",
      category: "lab"
    },
    {
      id: 2,
      patient: "Michael Chen",
      type: "X-Ray",
      date: "2024-09-03",
      description: "Chest X-ray examination",
      status: "Completed",
      category: "imaging"
    },
    {
      id: 3,
      patient: "Emily Davis",
      type: "Consultation Notes",
      date: "2024-08-30",
      description: "Annual health checkup findings",
      status: "Completed",
      category: "consultation"
    },
    {
      id: 4,
      patient: "Robert Wilson",
      type: "MRI Scan",
      date: "2024-08-25",
      description: "Brain MRI scan results",
      status: "Pending Review",
      category: "imaging"
    },
    {
      id: 5,
      patient: "Maria Garcia",
      type: "Lab Report",
      date: "2024-08-22",
      description: "Complete blood count test",
      status: "Completed",
      category: "lab"
    }
  ]

  const filteredRecords = records.filter(record => {
    const matchesSearch = record.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === "all" || record.category === filterType
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Medical Records</h1>
          <p className="text-muted-foreground">View and manage patient medical records</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Add Record
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search records by patient, type, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-input"
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full sm:w-48 bg-input">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Records</SelectItem>
            <SelectItem value="lab">Lab Reports</SelectItem>
            <SelectItem value="imaging">Imaging</SelectItem>
            <SelectItem value="consultation">Consultations</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Records Grid */}
      <div className="grid gap-4">
        {filteredRecords.map((record) => (
          <Card key={record.id} className="border border-border bg-card hover:bg-accent/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{record.type}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {record.date}
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={record.status === "Completed" ? "default" : "secondary"}
                  className={record.status === "Completed" ? "bg-primary text-primary-foreground" : ""}
                >
                  {record.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-foreground">{record.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-3 w-3" />
                  <span>Patient: {record.patient}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-3 w-3 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-3 w-3 mr-2" />
                    Download
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground">
                    Edit Record
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRecords.length === 0 && (
        <Card className="border border-border bg-card">
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No records found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}