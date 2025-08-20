import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { 
  Shield, 
  Users, 
  Building2, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertTriangle,
  Plus,
  Search,
  Filter
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const consentRequests = [
  {
    id: 1,
    provider: "Dr. Sarah Johnson",
    organization: "General Hospital",
    specialty: "Family Medicine",
    requestedDate: "2024-01-18",
    expiryDate: "2024-07-18",
    dataTypes: ["Medical History", "Lab Results", "Prescriptions"],
    purpose: "Routine care and follow-up treatment",
    status: "pending",
    urgent: false
  },
  {
    id: 2,
    provider: "Dr. Michael Chen",
    organization: "Heart Center",
    specialty: "Cardiology",
    requestedDate: "2024-01-15",
    expiryDate: "2024-06-15",
    dataTypes: ["Cardiovascular Records", "Imaging Results"],
    purpose: "Specialist consultation for chest pain evaluation",
    status: "pending",
    urgent: true
  },
  {
    id: 3,
    provider: "Emergency Department",
    organization: "City Medical Center",
    specialty: "Emergency Medicine",
    requestedDate: "2024-01-12",
    expiryDate: "2024-01-19",
    dataTypes: ["Complete Medical History", "Allergies", "Current Medications"],
    purpose: "Emergency treatment authorization",
    status: "pending",
    urgent: true
  }
]

const activeConsents = [
  {
    id: 1,
    provider: "Dr. Emily Rodriguez",
    organization: "Skin Care Clinic",
    specialty: "Dermatology",
    grantedDate: "2024-01-10",
    expiryDate: "2024-07-10",
    dataTypes: ["Dermatology Records", "Allergy Information"],
    lastAccessed: "2024-01-16",
    accessCount: 3,
    status: "active"
  },
  {
    id: 2,
    provider: "LabCorp",
    organization: "LabCorp Diagnostics",
    specialty: "Laboratory Services",
    grantedDate: "2024-01-05",
    expiryDate: "2024-12-31",
    dataTypes: ["Lab Results", "Test History"],
    lastAccessed: "2024-01-17",
    accessCount: 12,
    status: "active"
  },
  {
    id: 3,
    provider: "Dr. Robert Kim",
    organization: "Metro Pharmacy",
    specialty: "Pharmacy",
    grantedDate: "2023-12-20",
    expiryDate: "2024-06-20",
    dataTypes: ["Prescription History", "Drug Allergies"],
    lastAccessed: "2024-01-14",
    accessCount: 8,
    status: "active"
  }
]

export default function ConsentManager() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filter, setFilter] = useState("all")

  const handleApprove = (id: number) => {
    console.log(`Approved consent request ${id}`)
  }

  const handleDeny = (id: number) => {
    console.log(`Denied consent request ${id}`)
  }

  const handleRevoke = (id: number) => {
    console.log(`Revoked consent ${id}`)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          Consent Manager
        </h1>
        <p className="text-muted-foreground">
          Control who can access your medical data and monitor data usage with blockchain-verified consent.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Requests</p>
                <p className="text-2xl font-bold text-warning">3</p>
              </div>
              <Clock className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Consents</p>
                <p className="text-2xl font-bold text-success">3</p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Data Accesses Today</p>
                <p className="text-2xl font-bold">7</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Expired This Month</p>
                <p className="text-2xl font-bold text-destructive">2</p>
              </div>
              <XCircle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Pending Consent Requests */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Pending Consent Requests
                </CardTitle>
                <CardDescription>Healthcare providers requesting access to your medical data</CardDescription>
              </div>
              <Badge variant="outline" className="text-warning border-warning">
                {consentRequests.length} Pending
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {consentRequests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`p-4 rounded-lg border-2 ${
                  request.urgent 
                    ? 'border-warning bg-warning/5' 
                    : 'border-border bg-card/50'
                } hover:shadow-soft transition-all`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{request.provider}</h3>
                        {request.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            URGENT
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {request.organization}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {request.specialty}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-destructive border-destructive hover:bg-destructive/10"
                        onClick={() => handleDeny(request.id)}
                      >
                        <XCircle className="h-4 w-4 mr-1" />
                        Deny
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-success hover:bg-success/90"
                        onClick={() => handleApprove(request.id)}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm"><strong>Purpose:</strong> {request.purpose}</p>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-sm font-medium">Data Requested:</span>
                      {request.dataTypes.map((type, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Requested: {request.requestedDate}</span>
                      <span>Expires: {request.expiryDate}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>

      {/* Active Consents */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="shadow-medium">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  Active Consents
                </CardTitle>
                <CardDescription>Healthcare providers with current access to your data</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search consents..."
                    className="pl-8 w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeConsents.map((consent, index) => (
              <motion.div
                key={consent.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{consent.provider}</h3>
                        <Badge variant="outline" className="text-success border-success">
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          {consent.organization}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {consent.specialty}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch defaultChecked />
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-destructive border-destructive hover:bg-destructive/10"
                        onClick={() => handleRevoke(consent.id)}
                      >
                        Revoke Access
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      <span className="text-sm font-medium">Data Access:</span>
                      {consent.dataTypes.map((type, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
                      <span>Granted: {consent.grantedDate}</span>
                      <span>Expires: {consent.expiryDate}</span>
                      <span>Last Access: {consent.lastAccessed}</span>
                      <span>Total Accesses: {consent.accessCount}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}