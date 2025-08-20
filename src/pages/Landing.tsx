import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Activity, FileText, Users, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import heroImage from "@/assets/hero-medical.jpg"

const features = [
  {
    icon: Heart,
    title: "Complete Health Records",
    description: "Access your complete medical history, lab reports, and prescriptions in one secure place."
  },
  {
    icon: Shield,
    title: "Privacy-First Consent",
    description: "You control who accesses your data. Grant or revoke permissions with blockchain-verified consent."
  },
  {
    icon: Activity,
    title: "Real-time Audit Logs",
    description: "Track every access to your medical data with transparent, immutable audit trails."
  },
  {
    icon: Users,
    title: "Seamless Doctor Collaboration",
    description: "Healthcare providers can securely access and update your records with your permission."
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Your health data is available anywhere, anytime, from any device."
  },
  {
    icon: FileText,
    title: "Smart Medical Records",
    description: "AI-powered insights and automated record organization for better healthcare decisions."
  }
]

const benefits = [
  "Secure blockchain-based data storage",
  "HIPAA compliant privacy protection",
  "Seamless doctor-patient communication",
  "Real-time health monitoring",
  "Automated prescription management",
  "Emergency access protocols"
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">MediChain</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/auth/patient">
                <Button variant="outline">Patient Login</Button>
              </Link>
              <Link to="/auth/doctor">
                <Button>Doctor Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <Badge className="bg-gradient-primary text-white border-0">
                  Blockchain-Powered Healthcare
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Your Health History,{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Anywhere. Anytime.
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Secure, patient-controlled medical records with blockchain-verified consent management. 
                  Take control of your healthcare data and enable seamless collaboration between you and your doctors.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth/patient">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started as Patient
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/auth/doctor">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Healthcare Provider Access
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-large">
                <img 
                  src={heroImage} 
                  alt="MediChain Healthcare Platform" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-hero/20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Revolutionizing Healthcare Data Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MediChain combines cutting-edge blockchain technology with intuitive design to create 
              the most secure and user-friendly health record platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold">
                Why Choose MediChain?
              </h2>
              <p className="text-xl text-muted-foreground">
                Built with privacy, security, and user experience at its core. 
                MediChain ensures your health data remains yours while enabling 
                better healthcare outcomes.
              </p>
              <div className="grid gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-gradient-card border-0 shadow-large p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-secondary mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Blockchain Security</h3>
                    <p className="text-muted-foreground">
                      Your data is protected by military-grade encryption and blockchain technology
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center pt-6 border-t">
                    <div>
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success">256-bit</div>
                      <div className="text-sm text-muted-foreground">Encryption</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">HIPAA</div>
                      <div className="text-sm text-muted-foreground">Compliant</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Take Control of Your Health Data?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of patients and healthcare providers who trust MediChain 
              with their most important health information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/patient">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start as Patient
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/auth/doctor">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Healthcare Provider
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-primary">MediChain</span>
              </div>
              <p className="text-muted-foreground">
                Secure, patient-controlled healthcare records powered by blockchain technology.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Patients</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Access Medical Records</div>
                <div>Manage Consent</div>
                <div>View Audit Logs</div>
                <div>Emergency Access</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Healthcare Providers</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Patient Records</div>
                <div>Secure Communication</div>
                <div>Prescription Management</div>
                <div>Appointment Scheduling</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Security & Privacy</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>HIPAA Compliance</div>
                <div>Blockchain Security</div>
                <div>End-to-End Encryption</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 MediChain. All rights reserved. Your health data, your control.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}