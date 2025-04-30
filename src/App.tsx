
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

// Main pages
import Landing from "./pages/Landing";
import SmartMapping from "./pages/SmartMapping";
import SmartServices from "./pages/SmartServices";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Dashboards for different roles
import BupatiDashboard from "./pages/dashboards/bupati/Statistics";
import OPDDashboard from "./pages/dashboards/opd/Statistics";
import CamatDashboard from "./pages/dashboards/camat/Statistics";
import AdminDashboard from "./pages/dashboards/admin/Statistics";

// Bupati Dashboard Pages
import BupatiPengangguran from "./pages/dashboards/bupati/Pengangguran";
import BupatiKesehatan from "./pages/dashboards/bupati/Kesehatan";
import BupatiPendidikan from "./pages/dashboards/bupati/Pendidikan";
import BupatiKemiskinan from "./pages/dashboards/bupati/Kemiskinan";
import BupatiInfrastruktur from "./pages/dashboards/bupati/Infrastruktur";
import BupatiLingkungan from "./pages/dashboards/bupati/Lingkungan";
import BupatiRekomendasi from "./pages/dashboards/bupati/Rekomendasi";
import BupatiSettings from "./pages/dashboards/bupati/Settings";
import BupatiHelp from "./pages/dashboards/bupati/Help";

// OPD Dashboard Pages
import OpdFaskes from "./pages/dashboards/opd/Faskes";
import OpdImunisasi from "./pages/dashboards/opd/Imunisasi";
import OpdPenyakit from "./pages/dashboards/opd/Penyakit";
import OpdVaksinasi from "./pages/dashboards/opd/Vaksinasi";
import OpdBansos from "./pages/dashboards/opd/Bansos";
import OpdSettings from "./pages/dashboards/opd/Settings";
import OpdHelp from "./pages/dashboards/opd/Help";

// Camat Dashboard Pages
import CamatPengangguran from "./pages/dashboards/camat/Pengangguran";
// Comment out imports for files that don't exist yet
import CamatKesehatan from "./pages/dashboards/camat/Kesehatan";
import CamatPendidikan from "./pages/dashboards/camat/Pendidikan";
import CamatKemiskinan from "./pages/dashboards/camat/Kemiskinan";
import CamatInfrastruktur from "./pages/dashboards/camat/Infrastruktur";
import CamatLingkungan from "./pages/dashboards/camat/Lingkungan";


// Admin Dashboard Pages
import AdminPengangguran from "./pages/dashboards/admin/Pengangguran";
// Comment out imports for files that don't exist yet
// import AdminKesehatan from "./pages/dashboards/admin/Kesehatan";
// import AdminPendidikan from "./pages/dashboards/admin/Pendidikan";
// import AdminKemiskinan from "./pages/dashboards/admin/Kemiskinan";
// import AdminInfrastruktur from "./pages/dashboards/admin/Infrastruktur";
// import AdminLingkungan from "./pages/dashboards/admin/Lingkungan";
// import AdminSettings from "./pages/dashboards/admin/Settings";
// import AdminHelp from "./pages/dashboards/admin/Help";

// Auth provider
import { AuthProvider } from "./components/auth-provider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="smart-lamongan-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Landing />} />
              <Route path="/smart-mapping" element={<SmartMapping />} />
              <Route path="/smart-services" element={<SmartServices />} />
              <Route path="/login" element={<Login />} />
              
              {/* Bupati Dashboard Routes */}
              <Route path="/dashboard/bupati/statistik" element={<BupatiDashboard />} />
              <Route path="/dashboard/bupati/pengangguran" element={<BupatiPengangguran />} />
              <Route path="/dashboard/bupati/kesehatan" element={<BupatiKesehatan />} />
              <Route path="/dashboard/bupati/pendidikan" element={<BupatiPendidikan />} />
              <Route path="/dashboard/bupati/kemiskinan" element={<BupatiKemiskinan />} />
              <Route path="/dashboard/bupati/infrastruktur" element={<BupatiInfrastruktur />} />
              <Route path="/dashboard/bupati/lingkungan" element={<BupatiLingkungan />} />
              <Route path="/dashboard/bupati/rekomendasi" element={<BupatiRekomendasi />} />
              <Route path="/dashboard/bupati/settings" element={<BupatiSettings />} />
              <Route path="/dashboard/bupati/help" element={<BupatiHelp />} />
              
              {/* OPD Dashboard Routes */}
              <Route path="/dashboard/opd/statistik" element={<OPDDashboard />} />
              <Route path="/dashboard/opd/faskes" element={<OpdFaskes />} />
              <Route path="/dashboard/opd/imunisasi" element={<OpdImunisasi />} />
              
              {/* Comment out routes for components that don't exist yet */}
              
              <Route path="/dashboard/opd/penyakit" element={<OpdPenyakit />} />
              <Route path="/dashboard/opd/vaksinasi" element={<OpdVaksinasi />} />
              <Route path="/dashboard/opd/bansos" element={<OpdBansos />} />
              <Route path="/dashboard/opd/settings" element={<OpdSettings />} />
              <Route path="/dashboard/opd/help" element={<OpdHelp />} />
             
              
              {/* Camat Dashboard Routes */}
              <Route path="/dashboard/camat/statistik" element={<CamatDashboard />} />
              <Route path="/dashboard/camat/pengangguran" element={<CamatPengangguran />} />
              
              {/* Comment out routes for components that don't exist yet */}
              
              <Route path="/dashboard/camat/kesehatan" element={<CamatKesehatan />} />
              <Route path="/dashboard/camat/pendidikan" element={<CamatPendidikan />} />
              <Route path="/dashboard/camat/kemiskinan" element={<CamatKemiskinan />} />
              <Route path="/dashboard/camat/infrastruktur" element={<CamatInfrastruktur />} />
              <Route path="/dashboard/camat/lingkungan" element={<CamatLingkungan />} />
              
             
              
              {/* Admin Dashboard Routes */}
              <Route path="/dashboard/admin/statistik" element={<AdminDashboard />} />
              <Route path="/dashboard/admin/pengangguran" element={<AdminPengangguran />} />
              
              {/* Comment out routes for components that don't exist yet */}
              {/*
              <Route path="/dashboard/admin/kesehatan" element={<AdminKesehatan />} />
              <Route path="/dashboard/admin/pendidikan" element={<AdminPendidikan />} />
              <Route path="/dashboard/admin/kemiskinan" element={<AdminKemiskinan />} />
              <Route path="/dashboard/admin/infrastruktur" element={<AdminInfrastruktur />} />
              <Route path="/dashboard/admin/lingkungan" element={<AdminLingkungan />} />
              <Route path="/dashboard/admin/settings" element={<AdminSettings />} />
              <Route path="/dashboard/admin/help" element={<AdminHelp />} />
              */}
              
              {/* Catch All Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
