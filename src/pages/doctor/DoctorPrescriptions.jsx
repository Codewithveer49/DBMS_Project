import { useState } from "react"
import { Pill, Search, Plus, Calendar, User, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DoctorPrescriptions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  
  const prescriptions = [
    {
      id: 1,
      patient: "Sarah Johnson",
      medication: "Lisinopril 10mg",
      dosage: "Once daily",
      duration: "30 days",
      date: "2024-09-01",
      status: "Active",
      refillsLeft: 2
    },
    {
      id: 2,
      patient: "Michael Chen",
      medication: "Metformin 500mg",
      dosage: "Twice daily with meals",
      duration: "90 days",
      date: "2024-08-28",
      status: "Active",
      refillsLeft: 1
    },
    {
      id: 3,
      patient: "Emily Davis",
      medication: "Amoxicillin 250mg",
      dosage: "Three times daily",
      duration: "7 days",
      date: "2024-08-25",
      status: "Completed",
      refillsLeft: 0
    },
    {
      id: 4,
      patient: "Robert Wilson",
      medication: "Atorvastatin 20mg",
      dosage: "Once daily before bed",
      duration: "60 days",
      date: "2024-08-20",
      status: "Active",
      refillsLeft: 3
    },
    {
      id: 5,
      patient: "Maria Garcia",
      medication: "Sumatriptan 50mg",
      dosage: "As needed for migraine",
      duration: "30 days",
      date: "2024-08-15",
      status: "Active",
      refillsLeft: 1
    }
  ]

  const filteredPrescriptions = prescriptions.filter(prescription => {
    const matchesSearch = prescription.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prescription.medication.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || prescription.status.toLowerCase() === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Prescriptions</h1>
          <p className="text-muted-foreground">Manage patient prescriptions and medications</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Write Prescription
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by patient name or medication..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-input"
          />
        </div>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-full sm:w-48 bg-input">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prescriptions</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Prescriptions Grid */}
      <div className="grid gap-4">
        {filteredPrescriptions.map((prescription) => (
          <Card key={prescription.id} className="border border-border bg-card hover:bg-accent/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Pill className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{prescription.medication}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      Prescribed on {prescription.date}
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={prescription.status === "Active" ? "default" : "secondary"}
                  className={prescription.status === "Active" ? "bg-primary text-primary-foreground" : ""}
                >
                  {prescription.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Dosage:</span>
                    <p className="text-foreground">{prescription.dosage}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <p className="text-foreground">{prescription.duration}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Refills Left:</span>
                    <p className="text-foreground">{prescription.refillsLeft}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-3 w-3" />
                  <span>Patient: {prescription.patient}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    Edit Prescription
                  </Button>
                  {prescription.status === "Active" && (
                    <Button size="sm" className="bg-primary text-primary-foreground">
                      Approve Refill
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPrescriptions.length === 0 && (
        <Card className="border border-border bg-card">
          <CardContent className="p-12 text-center">
            <Pill className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No prescriptions found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}