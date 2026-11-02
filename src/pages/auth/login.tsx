import { ArrowRight, Lock, User, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const submit = () => {
    navigate("/candidate");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-app font-sans">
      {/* =========================================
          LEFT SIDE: Full-screen Blue Panel & Illustration
          ========================================= */}
      <div className="relative w-full lg:w-[55%] bg-linear-to-br from-[#0a1f44] via-[#143679] to-[#3b6cb5] flex items-center justify-center min-h-[50vh] lg:min-h-screen overflow-hidden">
        {/* Subtle background graphics (Triangles & Dots) */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full opacity-30"
          >
            {/* Triangle path */}
            <path d="M10,70 L35,35 L50,55" fill="none" stroke="#4fa8d1" strokeWidth="0.3" />
            <circle cx="35" cy="35" r="0.8" fill="#4fa8d1" />
            <circle cx="10" cy="70" r="0.8" fill="#4fa8d1" />
            <circle cx="50" cy="55" r="0.8" fill="#4fa8d1" />
          </svg>
        </div>

        {/* Illustration Container */}
        <div className="relative w-full max-w-125 h-112.5 ml-0 lg:-ml-12">
          {/* Back Faded Card */}
          <div className="absolute top-10 left-10 lg:left-20 w-60 h-80 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex flex-col gap-6">
            {/* Placeholder lines mimicking the PDF */}
            <div className="w-16 h-16 rounded-full bg-white/10" />
            <div className="w-full h-3 bg-white/10 rounded" />
            <div className="w-3/4 h-3 bg-white/10 rounded" />
            <div className="w-5/6 h-3 bg-white/10 rounded" />
          </div>

          {/* Front Solid Card with Shield */}
          <div className="absolute top-20 left-24 lg:left-40 w-70 h-90 bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center">
            {/* Card Header */}
            <div className="w-full flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-full bg-btn-inactive-border" />
              <div className="flex flex-col gap-2 flex-1">
                <div className="w-3/4 h-3.5 bg-btn-disabled rounded-full" />
                <div className="w-1/2 h-3 bg-[#64748b] rounded-full" />
              </div>
            </div>

            {/* Glowing Shield Graphic */}
            <div className="relative flex items-center justify-center w-full">
              {/* Horizontal Cyan Glow Line - Middle */}
              <div className="absolute top-1/2 -left-10 -right-10 h-4 bg-cyan-400 blur-md opacity-40 z-0" />
              <div className="absolute top-1/2 -left-10 -right-10 h-1 bg-cyan-400 blur-sm opacity-60 z-0" />

              {/* Faint horizontal grey lines behind the shield */}
              <div className="absolute top-1/4 -left-6 -right-6 h-2 bg-gray-200 z-0" />
              <div className="absolute bottom-1/4 -left-6 -right-6 h-2 bg-gray-200 z-0" />

              {/* Shield SVG */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-30 rounded-full" />
                <svg
                  width="140"
                  height="160"
                  viewBox="0 0 100 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                >
                  <path
                    d="M50 5 L90 20 V60 C90 85 50 115 50 115 C50 115 10 85 10 60 V20 L50 5 Z"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    fill="rgba(34, 211, 238, 0.05)"
                  />
                  <path
                    d="M50 15 L80 26 V60 C80 78 50 100 50 100 C50 100 20 78 20 60 V26 L50 15 Z"
                    stroke="#22d3ee"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M35 60 L45 70 L70 45"
                    stroke="#22d3ee"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Dashed Connecting Line */}
          <div className="absolute bottom-[20%] left-4 lg:left-12 w-40 lg:w-55 flex items-center z-20">
            {/* White Glowing Dot */}
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)] relative z-10" />
            {/* Dashed line */}
            <div className="w-full border-t-2 border-dashed border-[#4fa8d1] ml-1" />
          </div>
        </div>
      </div>

      {/* =========================================
          RIGHT SIDE: Form Area (White Background)
          ========================================= */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-8 lg:p-16 bg-white">
        <div className="w-full max-w-90">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="mx-auto w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center shadow-lg mb-6">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-main-title mb-2">Welcome Back</h1>
            <p className="text-sm font-medium text-subtitle">Company Dashboard</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Username */}
            <div>
              <label className="text-sm font-semibold text-body mb-2 block">Username</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-subtitle group-focus-within:text-primary-500 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full pl-10 pr-4 py-2.5 bg-input border border-border text-body text-sm rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-subtitle/60"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-body mb-2 block">Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-subtitle group-focus-within:text-primary-500 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 bg-input border border-border text-body text-sm rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-subtitle/60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-subtitle hover:text-body transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 px-4 bg-btn-primary hover:bg-btn-primary-hover text-inverse text-sm font-semibold rounded-lg mt-4 transition-colors shadow-md"
              onClick={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              Sign In
              <ArrowRight className="h-4 w-4" />
            </button>
            <span className="text-sm text-subtitle">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-primary-500 hover:underline">
                Sign Up
              </a>
            </span>
          </form>

          {/* Security Notice Box */}
          <div className="mt-10 p-4 bg-security-bg border-l-4 border-security-border rounded-lg">
            <p className="text-[11px] text-security-sub-text leading-relaxed">
              <span className="font-semibold text-security-main-text">Security Notice:</span> This
              is a secure admin portal. All activities are monitored and logged for security
              purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}