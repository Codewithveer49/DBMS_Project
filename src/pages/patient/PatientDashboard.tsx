import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Heart, 
  FileText, 
  Pill, 
  Calendar, 
  Download, 
  Plus,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp
} from "lucide-react"
import { motion } from "framer-motion"

const recentActivity = [
  {
    id: 1,
    type: "appointment",
    title: "Annual Physical Checkup",
    doctor: "Dr. Sarah Johnson",
    date: "2024-01-15",
    status: "completed",
    icon: Calendar
  },
  {
    id: 2,
    type: "prescription",
    title: "Blood Pressure Medication Renewed",
    doctor: "Dr. Sarah Johnson",
    date: "2024-01-10",
    status: "active",
    icon: Pill
  },
  {
    id: 3,
    type: "lab",
    title: "Blood Work Results",
    doctor: "LabCorp",
    date: "2024-01-08",
    status: "reviewed",
    icon: FileText
  },
  {
    id: 4,
    type: "appointment",
    title: "Cardiology Consultation",
    doctor: "Dr. Michael Chen",
    date: "2024-01-05",
    status: "completed",
    icon: Heart
  }
]

const vitalStats = [
  { label: "Blood Pressure", value: "120/80", status: "normal", trend: "stable" },
  { label: "Heart Rate", value: "72 bpm", status: "normal", trend: "stable" },
  { label: "Weight", value: "165 lbs", status: "normal", trend: "down" },
  { label: "BMI", value: "23.4", status: "normal", trend: "stable" }
]

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Family Medicine",
    date: "2024-01-22",
    time: "10:00 AM",
    type: "Follow-up"
  },
  {
    id: 2,
    doctor: "Dr. Emily Rodriguez",
    specialty: "Dermatology",
    date: "2024-01-28",
    time: "2:30 PM",
    type: "Consultation"
  }
]

export default function PatientDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold">Welcome back, John</h1>
        <p className="text-muted-foreground">
          Here's an overview of your health information and recent activity.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Prescriptions</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <Pill className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Upcoming Appointments</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-gradient-secondary flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Medical Records</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Health Score</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-success flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Your latest medical interactions and updates</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Record
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-4 p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <activity.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.doctor}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge variant={activity.status === 'completed' ? 'default' : 
                                  activity.status === 'active' ? 'secondary' : 'outline'}>
                      {activity.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Vital Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Vital Statistics
              </CardTitle>
              <CardDescription>Latest health metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {vitalStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{stat.label}</span>
                    <Badge variant="outline" className="text-xs">
                      {stat.trend === 'up' ? '↗' : stat.trend === 'down' ? '↘' : '→'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{stat.value}</span>
                    <div className="flex items-center gap-1">
                      {stat.status === 'normal' ? (
                        <CheckCircle className="h-4 w-4 text-success" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-warning" />
                      )}
                      <span className="text-xs text-muted-foreground">{stat.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={appointment.id} className="p-3 rounded-lg bg-muted/30">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{appointment.doctor}</p>
                      <Badge variant="outline">{appointment.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-3 w-3" />
                      <span>{appointment.date}</span>
                      <Clock className="h-3 w-3 ml-2" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Appointment
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Health Progress */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Health Progress Overview</CardTitle>
            <CardDescription>Track your wellness journey and goals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Fitness Goals</span>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground">3 of 4 weekly goals completed</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Medication Adherence</span>
                  <span className="text-sm text-muted-foreground">95%</span>
                </div>
                <Progress value={95} className="h-2" />
                <p className="text-xs text-muted-foreground">Excellent compliance this month</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Preventive Care</span>
                  <span className="text-sm text-muted-foreground">80%</span>
                </div>
                <Progress value={80} className="h-2" />
                <p className="text-xs text-muted-foreground">Annual checkup due soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}