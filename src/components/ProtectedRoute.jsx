import { Navigate } from "react-router-dom";
import { auth } from "../assets/firebase/config";

function ProtectedRoute({ children }) {
  return auth.currentUser ? children : <Navigate to="/" />;
}

export default ProtectedRoute;