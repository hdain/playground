import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children } = props;
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return children;
};

export default ProtectedRoute;
