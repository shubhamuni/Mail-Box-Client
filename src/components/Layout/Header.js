import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authAction } from "../../store/Auth";
import { loginAction } from "../../store/login";

import classes from "./Header.module.css";
const Header = () => {
  const dispatch = useDispatch();
  const isToken = useSelector((state) => state.token.token);

  const logoutHandler = () => {
    dispatch(loginAction.removeToken(null));
    localStorage.removeItem("email");
    dispatch(authAction.logout());
  };
  return (
    <Fragment>
      <div>
        <ul className={classes.header}>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="home">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/mails"
            >
              Mails
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/sent">
              Sent Mails
            </Link>
          </li>
          {isToken && (
            <li onClick={logoutHandler} style={{ paddingInlineStart: "30rem" }}>
              Logout
            </li>
          )}
          <li>
            {!isToken && (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to="/login"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
