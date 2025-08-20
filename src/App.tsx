import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PatientAuth from "./pages/auth/PatientAuth";
import DoctorAuth from "./pages/auth/DoctorAuth";
import PatientDashboard from "./pages/patient/PatientDashboard";
import ConsentManager from "./pages/patient/ConsentManager";
import { AppLayout } from "./components/layout/AppLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/auth/patient" element={<PatientAuth />} />
          <Route path="/auth/doctor" element={<DoctorAuth />} />
          
          {/* Protected Routes with Layout */}
          <Route path="/patient" element={<AppLayout />}>
            <Route index element={<PatientDashboard />} />
            <Route path="consent" element={<ConsentManager />} />
            <Route path="history" element={<div className="p-6">Medical History Page</div>} />
            <Route path="prescriptions" element={<div className="p-6">Prescriptions Page</div>} />
            <Route path="appointments" element={<div className="p-6">Appointments Page</div>} />
            <Route path="audit" element={<div className="p-6">Audit Logs Page</div>} />
          </Route>
          
          <Route path="/doctor" element={<AppLayout />}>
            <Route index element={<div className="p-6">Doctor Dashboard</div>} />
            <Route path="patients" element={<div className="p-6">Patients Page</div>} />
            <Route path="records" element={<div className="p-6">Records Page</div>} />
            <Route path="prescriptions" element={<div className="p-6">Doctor Prescriptions Page</div>} />
            <Route path="appointments" element={<div className="p-6">Doctor Appointments Page</div>} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
