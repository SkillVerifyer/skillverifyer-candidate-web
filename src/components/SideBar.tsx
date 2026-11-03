import {
  Briefcase,
  Building2,
  ChevronRight,
  FileText,
  Settings,
  User,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useLocation, useNavigate } from "react-router-dom"

const navItems = [
  { title: "My Profile", href: "/profile", icon: User },
  { title: "Job Board", href: "/jobs", icon: Briefcase },
  { title: "Assessment", href: "/assessment", icon: FileText },
  { title: "Setting", href: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <Sidebar>
      <SidebarHeader className="h-16 justify-center border-b px-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
            <Building2 className="size-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">SkillVerifyer</p>
            <p className="text-xs font-medium text-muted-foreground">
              CANDIDATE NAME
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={pathname.startsWith(item.href)}
                    className="h-10 data-[active=true]:bg-blue-100 data-[active=true]:font-medium data-[active=true]:text-blue-600"
                    onClick={() => navigate(item.href)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto size-4 opacity-60" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}