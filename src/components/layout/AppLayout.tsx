import { Outlet } from "react-router-dom"
import { AppSidebar } from "./AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar-medical"
import { Toaster } from "@/components/ui/toaster"

export function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
        <Toaster />
      </div>
    </SidebarProvider>
  )
}