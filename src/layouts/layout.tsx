// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/SideBar";
import HeaderSection from "@/components/headerSection";

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="bg-app w-full max-w-7xl mx-auto">
        {/* <SidebarTrigger className="z-50 absolute text-black" /> */}
        <HeaderSection />
        <div className="p-10">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default Layout;