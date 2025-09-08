import { useState } from "react"
import { Users, Search, Plus, Eye, FileText, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("")
  
  const patients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 34,
      gender: "Female",
      lastVisit: "2024-09-05",
      condition: "Hypertension",
      status: "Active"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 45,
      gender: "Male", 
      lastVisit: "2024-09-03",
      condition: "Diabetes",
      status: "Active"
    },
    {
      id: 3,
      name: "Emily Davis",
      age: 28,
      gender: "Female",
      lastVisit: "2024-08-30",
      condition: "Regular Checkup",
      status: "Active"
    },
    {
      id: 4,
      name: "Robert Wilson",
      age: 52,
      gender: "Male",
      lastVisit: "2024-08-25",
      condition: "Heart Disease",
      status: "Under Treatment"
    },
    {
      id: 5,
      name: "Maria Garcia",
      age: 39,
      gender: "Female",
      lastVisit: "2024-08-22",
      condition: "Migraine",
      status: "Active"
    }
  ]

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Patients</h1>
          <p className="text-muted-foreground">Manage your patient records</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Add Patient
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search patients by name or condition..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-input"
        />
      </div>

      {/* Patients Grid */}
      <div className="grid gap-4">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="border border-border bg-card hover:bg-accent/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{patient.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{patient.age} years old</span>
                      <span>•</span>
                      <span>{patient.gender}</span>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={patient.status === "Active" ? "default" : "secondary"}
                  className={patient.status === "Active" ? "bg-primary text-primary-foreground" : ""}
                >
                  {patient.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Last Visit:</span>
                    <p className="text-foreground">{patient.lastVisit}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Condition:</span>
                    <p className="text-foreground">{patient.condition}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-3 w-3 mr-2" />
                    View Profile
                  </Button>
                  <Button size="sm" variant="outline">
                    <FileText className="h-3 w-3 mr-2" />
                    Medical Records
                  </Button>
                  <Button size="sm" className="bg-primary text-primary-foreground">
                    <Calendar className="h-3 w-3 mr-2" />
                    Schedule Appointment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPatients.length === 0 && (
        <Card className="border border-border bg-card">
          <CardContent className="p-12 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No patients found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}