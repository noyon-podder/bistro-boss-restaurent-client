import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import loadingImage from "../assets/others/loader3.gif";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth;
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <img src={loadingImage} alt="" />
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
