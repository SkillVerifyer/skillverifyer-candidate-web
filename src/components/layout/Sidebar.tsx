import { NavLink } from "react-router-dom";
import { useAuth } from "@/auth/AuthProvider";
import {
  LayoutDashboard,
  Upload,
  ClipboardCheck,
  Trophy,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = {
  candidate: [
    { to: "/candidate/upload", label: "Upload CV", icon: Upload },
    { to: "/candidate/assessments", label: "My Assessments", icon: ClipboardCheck },
  ],
  recruiter: [
    { to: "/recruiter/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/recruiter/leaderboard", label: "Leaderboard", icon: Trophy },
  ],
  admin: [
    { to: "/admin/users", label: "User Management", icon: Users },
    { to: "/admin/settings", label: "Settings", icon: Settings },
  ],
};

export function Sidebar() {
  const { user, logout } = useAuth();
  if (!user) return null;

  const items = navItems[user.role] ?? [];

  return (
    <aside className="flex w-64 flex-col border-r border-gray-200 bg-white">
      {/* Brand */}
      <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
          SV
        </div>
        <span className="text-lg font-semibold text-gray-900">SkillVerifyer</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {items.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary-50 text-primary-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* User section */}
      <div className="border-t border-gray-200 p-4">
        <div className="mb-2 text-sm font-medium text-gray-900">{user.name}</div>
        <div className="mb-3 text-xs text-gray-500 capitalize">{user.role}</div>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
