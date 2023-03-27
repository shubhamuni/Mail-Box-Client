import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div>
      <ul className={classes.header}>
        <li>Home</li>
        <li>About</li>
        <li>Inbox</li>
        <li>
          <Link>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
