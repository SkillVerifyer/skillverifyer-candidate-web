import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import type { UserRole } from "@/types";

interface RoleGuardProps {
  allowedRoles: UserRole[];
}

export function RoleGuard({ allowedRoles }: RoleGuardProps) {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-500 border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Redirect to the user's own home based on role
    const roleHome: Record<UserRole, string> = {
      candidate: "/candidate/upload",
      recruiter: "/recruiter/dashboard",
      admin: "/admin/users",
    };
    return <Navigate to={roleHome[user.role]} replace />;
  }

  return <Outlet />;
}
