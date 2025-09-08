import { FileText, Download, Eye, Calendar, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function MedicalHistory() {
  const medicalRecords = [
    {
      id: 1,
      date: "2024-09-05",
      type: "Lab Report",
      doctor: "Dr. Sarah Johnson",
      hospital: "City General Hospital",
      status: "Completed",
      description: "Blood work and cholesterol check"
    },
    {
      id: 2,
      date: "2024-08-22",
      type: "X-Ray",
      doctor: "Dr. Michael Chen",
      hospital: "Metro Medical Center",
      status: "Completed",
      description: "Chest X-ray examination"
    },
    {
      id: 3,
      date: "2024-08-10",
      type: "Consultation",
      doctor: "Dr. Emily Davis",
      hospital: "Health Plus Clinic",
      status: "Completed",
      description: "Annual health checkup"
    },
    {
      id: 4,
      date: "2024-07-15",
      type: "MRI Scan",
      doctor: "Dr. Robert Wilson",
      hospital: "Advanced Imaging Center",
      status: "Completed",
      description: "Brain MRI scan"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Medical History</h1>
          <p className="text-muted-foreground">View and download your medical records</p>
        </div>
        <Button className="bg-gradient-primary text-primary-foreground">
          <Download className="h-4 w-4 mr-2" />
          Export All
        </Button>
      </div>

      <div className="grid gap-4">
        {medicalRecords.map((record) => (
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
                <Badge variant="secondary">{record.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-foreground">{record.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {record.doctor}
                  </div>
                  <div>{record.hospital}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-3 w-3 mr-2" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-3 w-3 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}