import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const tokenLS: string | null = localStorage.getItem("@TOKEN");
  return tokenLS ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoutes;
