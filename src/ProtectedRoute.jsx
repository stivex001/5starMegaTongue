/* eslint-disable react/prop-types */
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  // Function to check if a token is expired using the 'expires_at' field
  function isTokenExpired(tokenData) {
    if (!tokenData || !tokenData.expires_at) return true;

    // Parse the 'expires_at' timestamp into a Date object
    const expirationTime = new Date(tokenData.expires_at);

    // Compare the expiration time with the current time
    const currentTime = new Date();

    return currentTime >= expirationTime;
  }

  if (!user || isTokenExpired(user?.data)) {
    return (
      <Navigate
        to="/"
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
