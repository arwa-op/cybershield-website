import {
  Navigate,
} from "react-router-dom";

function ProtectedRoute({
  children,
}) {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  // Not Logged In

  if (!userInfo) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  // Logged In

  return children;
}

export default ProtectedRoute;