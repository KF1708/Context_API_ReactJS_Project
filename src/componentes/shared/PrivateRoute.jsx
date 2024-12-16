import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component }) => {
  const token = localStorage.getItem("myToken");

  return token ? component : <Navigate to="/sign-in"></Navigate>;
};

export default PrivateRoute;
