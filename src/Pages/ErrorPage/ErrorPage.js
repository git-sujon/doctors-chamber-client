import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const ErrorPage = () => {
  const error = useRouteError();
  const { user, logOut } = useContext(AuthContext);

  const logoutHandler = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <div className="text-center mt-44">
      <h1 className="text-error text-5xl mb-2">Something wrong</h1>
      <p className="text-2xl mb-2">{error.statusText || error.message}</p>
      <Link to = '/' className="btn btn-accent mr-5">
        Home
      </Link>
      <button className="btn btn-accent " onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default ErrorPage;
