import {
  useContext,
} from "react";

import {
  Navigate,
  useLocation,
} from "react-router-dom";

import { AuthContext } from "../providers/AuthProvider";

import LoadingSpinner from "../shared/Loading/LoadingSpinner";

const PrivateRoute = ({
  children,
}) => {

  const {
    user,
    loading,
  } = useContext(AuthContext);

  const location =
    useLocation();

  // loading state
  if (loading) {
    return <LoadingSpinner />;
  }

  // not logged in
  if (!user) {

    return (
      <Navigate
        to="/login"
        state={location.pathname}
        replace
      />
    );
  }

  // logged in
  return children;
};

export default PrivateRoute;