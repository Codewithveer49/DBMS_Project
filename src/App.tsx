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
import MedicalHistory from "./pages/patient/MedicalHistory";
import Prescriptions from "./pages/patient/Prescriptions";
import Appointments from "./pages/patient/Appointments";
import AuditLogs from "./pages/patient/AuditLogs";
import PatientProfile from "./pages/patient/PatientProfile";
import PatientSettings from "./pages/patient/PatientSettings";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import Patients from "./pages/doctor/Patients";
import Records from "./pages/doctor/Records";
import DoctorPrescriptions from "./pages/doctor/DoctorPrescriptions";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import DoctorProfile from "./pages/doctor/DoctorProfile";
import DoctorSettings from "./pages/doctor/DoctorSettings";
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
            <Route path="history" element={<MedicalHistory />} />
            <Route path="prescriptions" element={<Prescriptions />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="audit" element={<AuditLogs />} />
            <Route path="profile" element={<PatientProfile />} />
            <Route path="settings" element={<PatientSettings />} />
          </Route>
          
          <Route path="/doctor" element={<AppLayout />}>
            <Route index element={<DoctorDashboard />} />
            <Route path="patients" element={<Patients />} />
            <Route path="records" element={<Records />} />
            <Route path="prescriptions" element={<DoctorPrescriptions />} />
            <Route path="appointments" element={<DoctorAppointments />} />
            <Route path="profile" element={<DoctorProfile />} />
            <Route path="settings" element={<DoctorSettings />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
