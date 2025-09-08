import { Pill, Calendar, User, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Prescriptions() {
  const prescriptions = [
    {
      id: 1,
      medication: "Lisinopril 10mg",
      doctor: "Dr. Sarah Johnson",
      date: "2024-09-01",
      duration: "30 days",
      dosage: "Once daily",
      status: "Active",
      refillsLeft: 2
    },
    {
      id: 2,
      medication: "Metformin 500mg",
      doctor: "Dr. Emily Davis",
      date: "2024-08-15",
      duration: "90 days",
      dosage: "Twice daily with meals",
      status: "Active",
      refillsLeft: 1
    },
    {
      id: 3,
      medication: "Amoxicillin 250mg",
      doctor: "Dr. Michael Chen",
      date: "2024-08-22",
      duration: "7 days",
      dosage: "Three times daily",
      status: "Completed",
      refillsLeft: 0
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Prescriptions</h1>
          <p className="text-muted-foreground">Manage your medications and refills</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          Request Refill
        </Button>
      </div>

      <div className="grid gap-4">
        {prescriptions.map((prescription) => (
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
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Dosage:</span>
                    <p className="text-foreground">{prescription.dosage}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <p className="text-foreground">{prescription.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {prescription.doctor}
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {prescription.refillsLeft} refills left
                  </div>
                </div>

                {prescription.status === "Active" && (
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    <Button size="sm" className="bg-primary text-primary-foreground">
                      Request Refill
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