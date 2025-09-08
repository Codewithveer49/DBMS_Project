import { Calendar, Clock, MapPin, User, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2024-09-15",
      time: "10:30 AM",
      location: "City General Hospital",
      type: "Follow-up",
      status: "Confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Emily Davis",
      specialty: "General Practitioner",
      date: "2024-09-22",
      time: "2:00 PM",
      location: "Health Plus Clinic",
      type: "Annual Checkup",
      status: "Confirmed"
    },
    {
      id: 3,
      doctor: "Dr. Michael Chen",
      specialty: "Radiologist",
      date: "2024-09-08",
      time: "9:00 AM",
      location: "Metro Medical Center",
      type: "Consultation",
      status: "Completed"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground">Manage your medical appointments</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" />
          Book Appointment
        </Button>
      </div>

      <div className="grid gap-4">
        {appointments.map((appointment) => (
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
                      {appointment.doctor} - {appointment.specialty}
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={appointment.status === "Confirmed" ? "default" : "secondary"}
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
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-foreground">{appointment.location}</span>
                  </div>
                </div>

                {appointment.status === "Confirmed" && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                    <Button size="sm" variant="destructive">
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}