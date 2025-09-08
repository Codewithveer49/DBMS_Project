import { Shield, Eye, Clock, User, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AuditLogs() {
  const auditLogs = [
    {
      id: 1,
      action: "Medical Record Viewed",
      user: "Dr. Sarah Johnson",
      userType: "Doctor",
      timestamp: "2024-09-08 14:30:15",
      details: "Viewed blood test results from 2024-09-05",
      ipAddress: "192.168.1.100"
    },
    {
      id: 2,
      action: "Prescription Added",
      user: "Dr. Emily Davis",
      userType: "Doctor",
      timestamp: "2024-09-07 11:15:42",
      details: "Added Lisinopril 10mg prescription",
      ipAddress: "192.168.1.105"
    },
    {
      id: 3,
      action: "Medical Record Downloaded",
      user: "You",
      userType: "Patient",
      timestamp: "2024-09-06 16:45:23",
      details: "Downloaded X-ray report from 2024-08-22",
      ipAddress: "192.168.1.110"
    },
    {
      id: 4,
      action: "Consent Granted",
      user: "You",
      userType: "Patient",
      timestamp: "2024-09-05 09:20:18",
      details: "Granted access to Dr. Michael Chen for X-ray results",
      ipAddress: "192.168.1.110"
    }
  ]

  const getActionIcon = (action) => {
    if (action.includes("Viewed") || action.includes("Downloaded")) return Eye
    if (action.includes("Added") || action.includes("Prescription")) return FileText
    if (action.includes("Consent")) return Shield
    return Clock
  }

  const getActionColor = (userType) => {
    return userType === "Doctor" ? "bg-blue-500/10 text-blue-400" : "bg-primary/10 text-primary"
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Audit Logs</h1>
          <p className="text-muted-foreground">Track who accessed your medical data and when</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          Blockchain Secured
        </div>
      </div>

      <div className="grid gap-4">
        {auditLogs.map((log) => {
          const ActionIcon = getActionIcon(log.action)
          return (
            <Card key={log.id} className="border border-border bg-card hover:bg-accent/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getActionColor(log.userType)}`}>
                      <ActionIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{log.action}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {log.timestamp}
                      </div>
                    </div>
                  </div>
                  <Badge variant={log.userType === "Doctor" ? "secondary" : "default"}>
                    {log.userType}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-foreground">{log.details}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      <span>{log.user}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>IP:</span>
                      <span className="font-mono">{log.ipAddress}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}