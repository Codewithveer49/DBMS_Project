import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sidebarVariants = cva(
  "flex h-full flex-col border-r bg-card text-card-foreground transition-all duration-300",
  {
    variants: {
      variant: {
        default: "w-64",
        collapsed: "w-16",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface SidebarContextValue {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

interface SidebarProviderProps {
  children: React.ReactNode
  defaultCollapsed?: boolean
}

export function SidebarProvider({ children, defaultCollapsed = false }: SidebarProviderProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {
  collapsed?: boolean
}

export function Sidebar({ className, variant, collapsed, children, ...props }: SidebarProps) {
  return (
    <div
      className={cn(sidebarVariants({ variant: collapsed ? "collapsed" : "default" }), className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function SidebarHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center justify-between px-4 py-4 border-b", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex-1 overflow-auto py-2", className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarNav({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("space-y-1 px-2", className)} {...props}>
      {children}
    </nav>
  )
}

interface SidebarNavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  collapsed?: boolean
  icon?: React.ReactNode
  label: string
  badge?: string
}

export function SidebarNavItem({ 
  className, 
  isActive, 
  collapsed, 
  icon, 
  label, 
  badge,
  children, 
  ...props 
}: SidebarNavItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
        isActive 
          ? "bg-primary text-primary-foreground shadow-soft" 
          : "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      {icon && <div className="flex-shrink-0">{icon}</div>}
      {!collapsed && (
        <>
          <span className="flex-1">{label}</span>
          {badge && (
            <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-xs">
              {badge}
            </span>
          )}
        </>
      )}
      {children}
    </div>
  )
}

export function SidebarTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { collapsed, setCollapsed } = useSidebar()
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring",
        className
      )}
      onClick={() => setCollapsed(!collapsed)}
      {...props}
    >
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  )
}