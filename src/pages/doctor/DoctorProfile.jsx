import { useState } from "react"
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, X, Stethoscope, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function DoctorProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    firstName: "Dr. John",
    lastName: "Smith",
    email: "dr.smith@medichain.com",
    phone: "+1 (555) 123-4567",
    address: "456 Medical Center Dr, Healthcare City, HC 12345",
    specialty: "Cardiology",
    licenseNumber: "MD123456789",
    yearsOfExperience: "15",
    education: "Harvard Medical School, MD",
    certifications: "Board Certified Cardiologist, FACC",
    languages: "English, Spanish, French",
    about: "Experienced cardiologist specializing in interventional cardiology and heart disease prevention. Committed to providing comprehensive cardiovascular care."
  })

  const handleSave = () => {
    setIsEditing(false)
    // Save logic would go here
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset to original values logic would go here
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground">Manage your professional information</p>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)} className="bg-gradient-primary text-primary-foreground">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button onClick={handleSave} className="bg-primary text-primary-foreground">
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button onClick={handleCancel} variant="outline">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          </div>
        )}
      </div>

      <div className="grid gap-6">
        {/* Personal Information */}
        <Card className="border border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={profile.firstName}
                  onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                  disabled={!isEditing}
                  className="bg-input"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={profile.lastName}
                  onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                  disabled={!isEditing}
                  className="bg-input"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  disabled={!isEditing}
                  className="bg-input"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  disabled={!isEditing}
                  className="bg-input"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={profile.address}
                onChange={(e) => setProfile({...profile, address: e.target.value})}
                disabled={!isEditing}
                className="bg-input"
              />
            </div>
            <div>
              <Label htmlFor="about">About</Label>
              <Textarea
                id="about"
                value={profile.about}
                onChange={(e) => setProfile({...profile, about: e.target.value})}
                disabled={!isEditing}
                className="bg-input"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Professional Information */}
        <Card className="border border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-primary" />
              Professional Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="specialty">Specialty</Label>
                <Input
                  id="specialty"
                  value={profile.specialty}
                  onChange={(e) => setProfile({...profile, specialty: e.target.value})}
                  disabled={!isEditing}
                  className="bg-input"
                />
              </div>
              <div>
                <Label htmlFor="licenseNumber">License Number</Label>
                <Input
                  id="licenseNumber"
                  value={profile.licenseNumber}
                  onChange={(e) => setProfile({...profile, licenseNumber: e.target.value})}
                  disabled={!isEditing}
                  className="bg-input"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                <Input
                  id="yearsOfExperience"
                  value={profile.yearsOfExperience}
                  onChange={(e) => setProfile({...profile, yearsOfExperience: e.target.value})}
                  disabled={!isEditing}
                  className="bg-input"
                />
              </div>
              <div>
                <Label htmlFor="languages">Languages</Label>
                <Input
                  id="languages"
                  value={profile.languages}
                  onChange={(e) => setProfile({...profile, languages: e.target.value})}
                  disabled={!isEditing}
                  className="bg-input"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education & Certifications */}
        <Card className="border border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Education & Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="education">Education</Label>
              <Textarea
                id="education"
                value={profile.education}
                onChange={(e) => setProfile({...profile, education: e.target.value})}
                disabled={!isEditing}
                className="bg-input"
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="certifications">Certifications</Label>
              <Textarea
                id="certifications"
                value={profile.certifications}
                onChange={(e) => setProfile({...profile, certifications: e.target.value})}
                disabled={!isEditing}
                className="bg-input"
                rows={2}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}