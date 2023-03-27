import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Homepage = () => {
  const email = localStorage.getItem("email");

  const isToken = useSelector((state) => state.token.token);
  return (
    <Fragment>
      {!isToken && (
        <h1 style={{ textAlign: "center", marginTop: "20rem" }}>
          Welcome to Your Email
        </h1>
      )}
      {isToken && (
        <h1 style={{ textAlign: "center", marginTop: "20rem" }}>
          Welcome {email}
        </h1>
      )}
    </Fragment>
  );
};

export default Homepage;
