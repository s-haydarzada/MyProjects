import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";


export default function ProtectedRoute({ children }) {
  const { user, setUser } = useContext(AuthContext);

  if (user) return children;
  else if (user === false) return <Navigate to={"/login"} />;
  else return <Spinner />;
}

