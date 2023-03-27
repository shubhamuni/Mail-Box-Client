import React, { Fragment } from "react";
import Header from "./Header";

export const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};
