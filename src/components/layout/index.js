import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./styles/Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation
        setSearchValue={props.setSearchValue}
        searchValue={props.searchValue}
      />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
