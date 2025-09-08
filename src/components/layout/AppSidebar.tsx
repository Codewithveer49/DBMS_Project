import { NavLink, useLocation } from "react-router-dom"
import { 
  Heart, 
  Users, 
  FileText, 
  Shield, 
  Activity, 
  Settings,
  Home,
  Calendar,
  Pill,
  ClipboardList,
  User,
  Menu,
  LogOut
} from "lucide-react"
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarNav, 
  SidebarNavItem, 
  SidebarTrigger,
  useSidebar 
} from "@/components/ui/sidebar-medical"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const patientNavItems = [
  { title: "Dashboard", url: "/patient", icon: Home },
  { title: "Medical History", url: "/patient/history", icon: FileText },
  { title: "Prescriptions", url: "/patient/prescriptions", icon: Pill },
  { title: "Appointments", url: "/patient/appointments", icon: Calendar },
  { title: "Consent Manager", url: "/patient/consent", icon: Shield },
  { title: "Audit Logs", url: "/patient/audit", icon: Activity },
]

const doctorNavItems = [
  { title: "Dashboard", url: "/doctor", icon: Home },
  { title: "Patients", url: "/doctor/patients", icon: Users },
  { title: "Records", url: "/doctor/records", icon: ClipboardList },
  { title: "Prescriptions", url: "/doctor/prescriptions", icon: Pill },
  { title: "Appointments", url: "/doctor/appointments", icon: Calendar },
]

export function AppSidebar() {
  const { collapsed } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  // Determine user type based on path
  const isDoctor = currentPath.startsWith('/doctor')
  const isPatient = currentPath.startsWith('/patient')
  const navItems = isDoctor ? doctorNavItems : patientNavItems
  const userType = isDoctor ? 'Doctor' : 'Patient'

  const isActive = (path: string) => currentPath === path

  return (
    <Sidebar collapsed={collapsed} className="shadow-medium">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <Heart className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">MediChain</span>
              <span className="text-xs text-muted-foreground">{userType} Portal</span>
            </div>
          )}
        </div>
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <SidebarNav>
          {navItems.map((item) => (
            <NavLink key={item.url} to={item.url} className="block">
              <SidebarNavItem
                isActive={isActive(item.url)}
                collapsed={collapsed}
                icon={<item.icon className="h-4 w-4" />}
                label={item.title}
              />
            </NavLink>
          ))}
          
          <div className="my-4 border-t" />
          
          <NavLink to={isPatient ? "/patient/profile" : "/doctor/profile"} className="block">
            <SidebarNavItem
              collapsed={collapsed}
              icon={<User className="h-4 w-4" />}
              label="Profile"
              isActive={currentPath === (isPatient ? "/patient/profile" : "/doctor/profile")}
            />
          </NavLink>
          
          <NavLink to={isPatient ? "/patient/settings" : "/doctor/settings"} className="block">
            <SidebarNavItem
              collapsed={collapsed}
              icon={<Settings className="h-4 w-4" />}
              label="Settings"
              isActive={currentPath === (isPatient ? "/patient/settings" : "/doctor/settings")}
            />
          </NavLink>
          
          <NavLink to="/" className="block">
            <SidebarNavItem
              collapsed={collapsed}
              icon={<LogOut className="h-4 w-4" />}
              label="Logout"
              className="text-destructive hover:bg-destructive/10"
            />
          </NavLink>
        </SidebarNav>
      </SidebarContent>
    </Sidebar>
  )
}