/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = true;
  if (!user) {
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
