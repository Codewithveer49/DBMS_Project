import { Users, FileText, Calendar, Pill, TrendingUp, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DoctorDashboard() {
  const stats = [
    { title: "Total Patients", value: "1,234", icon: Users, change: "+12%" },
    { title: "Today's Appointments", value: "8", icon: Calendar, change: "+2" },
    { title: "Pending Records", value: "23", icon: FileText, change: "-5%" },
    { title: "Prescriptions", value: "156", icon: Pill, change: "+8%" }
  ]

  const todayAppointments = [
    { time: "09:00 AM", patient: "Sarah Johnson", type: "Consultation", status: "Confirmed" },
    { time: "10:30 AM", patient: "Michael Chen", type: "Follow-up", status: "Confirmed" },
    { time: "11:15 AM", patient: "Emily Davis", type: "Checkup", status: "Confirmed" },
    { time: "02:00 PM", patient: "Robert Wilson", type: "Consultation", status: "Pending" }
  ]

  const recentRecords = [
    { patient: "Alice Brown", type: "Lab Results", date: "2024-09-08", status: "Reviewed" },
    { patient: "David Lee", type: "X-Ray", date: "2024-09-07", status: "Pending" },
    { patient: "Maria Garcia", type: "Blood Test", date: "2024-09-06", status: "Reviewed" }
  ]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Doctor Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Dr. Smith</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border border-border bg-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-primary">{stat.change} from last week</p>
                </div>
                <div className="p-2 rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Appointments */}
        <Card className="border border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Today's Appointments
            </CardTitle>
            <Button size="sm" variant="outline">View All</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {todayAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {appointment.time}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{appointment.patient}</p>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                  </div>
                </div>
                <Badge variant={appointment.status === "Confirmed" ? "default" : "secondary"}>
                  {appointment.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Records */}
        <Card className="border border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Recent Records
            </CardTitle>
            <Button size="sm" variant="outline">View All</Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentRecords.map((record, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-foreground">{record.patient}</p>
                  <p className="text-sm text-muted-foreground">{record.type} - {record.date}</p>
                </div>
                <Badge variant={record.status === "Reviewed" ? "default" : "secondary"}>
                  {record.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border border-border bg-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="bg-gradient-primary text-primary-foreground">
              <Users className="h-4 w-4 mr-2" />
              Add New Patient
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Create Record
            </Button>
            <Button variant="outline">
              <Pill className="h-4 w-4 mr-2" />
              Write Prescription
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}