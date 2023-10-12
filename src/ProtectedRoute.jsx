/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));
  if (!user?.user) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
