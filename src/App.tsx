import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/auth/AuthProvider";
import { RoleGuard } from "@/auth/RoleGuard";
import { AppLayout } from "@/components/layout/AppLayout";

// Auth pages
import { LoginPage } from "@/auth/LoginPage";

// Candidate pages
import { CvUploadPage } from "@/features/candidate/CvUpload/CvUploadPage";
import { AssessmentPage } from "@/features/candidate/Assessment/AssessmentPage";

// Recruiter pages
import { DashboardPage } from "@/features/recruiter/Dashboard/DashboardPage";
import { LeaderboardPage } from "@/features/recruiter/Leaderboard/LeaderboardPage";

// Admin pages
import { UserManagementPage } from "@/features/admin/UserManagement/UserManagementPage";

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage />} />

        {/* Candidate routes */}
        <Route element={<RoleGuard allowedRoles={["candidate"]} />}>
          <Route element={<AppLayout />}>
            <Route path="/candidate/upload" element={<CvUploadPage />} />
            <Route path="/candidate/assessment/:id" element={<AssessmentPage />} />
          </Route>
        </Route>

        {/* Recruiter routes */}
        <Route element={<RoleGuard allowedRoles={["recruiter"]} />}>
          <Route element={<AppLayout />}>
            <Route path="/recruiter/dashboard" element={<DashboardPage />} />
            <Route path="/recruiter/leaderboard/:jobId" element={<LeaderboardPage />} />
          </Route>
        </Route>

        {/* Admin routes */}
        <Route element={<RoleGuard allowedRoles={["admin"]} />}>
          <Route element={<AppLayout />}>
            <Route path="/admin/users" element={<UserManagementPage />} />
          </Route>
        </Route>

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
