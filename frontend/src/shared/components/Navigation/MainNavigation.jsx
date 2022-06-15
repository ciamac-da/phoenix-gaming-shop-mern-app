import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import muiStyle from "./MainHeaderStyle";

const MainNavigation = () => {
  const classes = muiStyle();

  return (
    <MainHeader>
      <button className={classes.hamburgerMenuButton}>
        <span />
        <span />
        <span />
      </button>
      <Typography className={classes.headerTitle}>
        <Link to="/">Phoenix Places</Link>
      </Typography>
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
