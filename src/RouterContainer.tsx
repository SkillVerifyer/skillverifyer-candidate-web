import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layout";
import AuthLayout from "./layouts/AuthLayout";

const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));
const Profile = lazy(() => import("./pages/profile"));
const JobBoard = lazy(() => import("./pages/jobBoard"));

export default function RouterContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job-board" element={<JobBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
