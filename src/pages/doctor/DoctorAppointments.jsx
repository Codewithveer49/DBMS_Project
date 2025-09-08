import { useState } from "react"
import { Calendar, Clock, MapPin, User, Plus, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DoctorAppointments() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  
  const appointments = [
    {
      id: 1,
      patient: "Sarah Johnson",
      date: "2024-09-15",
      time: "10:30 AM",
      type: "Follow-up",
      status: "Confirmed",
      duration: "30 min",
      notes: "Blood pressure check"
    },
    {
      id: 2,
      patient: "Michael Chen",
      date: "2024-09-15",
      time: "11:00 AM",
      type: "Consultation",
      status: "Confirmed",
      duration: "45 min",
      notes: "Diabetes management discussion"
    },
    {
      id: 3,
      patient: "Emily Davis",
      date: "2024-09-16",
      time: "9:00 AM",
      type: "Annual Checkup",
      status: "Confirmed",
      duration: "60 min",
      notes: "Complete physical examination"
    },
    {
      id: 4,
      patient: "Robert Wilson",
      date: "2024-09-16",
      time: "2:00 PM",
      type: "Consultation",
      status: "Pending",
      duration: "30 min",
      notes: "Heart condition follow-up"
    },
    {
      id: 5,
      patient: "Maria Garcia",
      date: "2024-09-17",
      time: "11:30 AM",
      type: "Follow-up",
      status: "Confirmed",
      duration: "30 min",
      notes: "Migraine treatment review"
    },
    {
      id: 6,
      patient: "David Lee",
      date: "2024-09-12",
      time: "3:00 PM",
      type: "Consultation",
      status: "Completed",
      duration: "45 min",
      notes: "Lab results discussion"
    }
  ]

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || appointment.status.toLowerCase() === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground">Manage your patient appointments</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Appointment
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by patient name or appointment type..."
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
            <SelectItem value="all">All Appointments</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Appointments Grid */}
      <div className="grid gap-4">
        {filteredAppointments.map((appointment) => (
          <Card key={appointment.id} className="border border-border bg-card hover:bg-accent/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{appointment.type}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      {appointment.patient}
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={
                    appointment.status === "Confirmed" ? "default" : 
                    appointment.status === "Pending" ? "secondary" : 
                    "outline"
                  }
                  className={appointment.status === "Confirmed" ? "bg-primary text-primary-foreground" : ""}
                >
                  {appointment.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-foreground">{appointment.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span className="text-foreground">{appointment.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="text-foreground">{appointment.duration}</span>
                  </div>
                </div>

                <div>
                  <span className="text-muted-foreground text-sm">Notes:</span>
                  <p className="text-foreground">{appointment.notes}</p>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  {appointment.status === "Confirmed" && (
                    <>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                      <Button size="sm" className="bg-primary text-primary-foreground">
                        Start Consultation
                      </Button>
                    </>
                  )}
                  {appointment.status === "Pending" && (
                    <>
                      <Button size="sm" className="bg-primary text-primary-foreground">
                        Confirm
                      </Button>
                      <Button size="sm" variant="destructive">
                        Decline
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAppointments.length === 0 && (
        <Card className="border border-border bg-card">
          <CardContent className="p-12 text-center">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No appointments found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}