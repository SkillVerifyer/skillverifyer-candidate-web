import { Navigate, Outlet } from "react-router-dom";
import { Toaster } from "../components/ui/toast";
// import { useAuthStore } from "../store/userAuthStore";

const AuthLayout = () => {
  // const { user, loading } = useAuthStore();
  const user = false; 
  const loading = false;
  if (loading)
    return (
      <div className="flex bg-background h-screen rounded-lg items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        </div>
      </div>
    );

  return (
    <div>
      {!user ? <Outlet /> : <Navigate to="/" replace />}
      <Toaster />
    </div>
  );
};

export default AuthLayout;