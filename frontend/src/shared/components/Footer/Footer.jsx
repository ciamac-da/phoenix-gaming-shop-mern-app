import React from "react";
import myStyle from "./FooterStyle";
import { Typography } from "@mui/material";

const Footer = () => {
  const classes = myStyle();
  return (
    <div>
      <footer className={classes.footer}>
        <Typography className={classes.typo}>
          Copyright &copy; {new Date().getFullYear()}
          &nbsp; Ciamac Davoudi All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};
export default Footer;