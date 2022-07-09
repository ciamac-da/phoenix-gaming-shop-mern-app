import React from "react";
import muiStyle from "./NavLinksSmallScreenStyle";
import { NavLink } from "react-router-dom";
import {
  List,
  ListItemText,
} from "@mui/material";



const NavLinksSmallScreen = (props) => {
  const classes = muiStyle();

  return (
    <div className={classes.navLinkContainer}>
      <List className={classes.navLinksList}>
        <ListItemText className={classes.navLinksListItems}>
          <NavLink 
          to="/" exact
          className={classes.navLinksLinkItemsNavLink}>
            ALL USERS
          </NavLink>
        </ListItemText>
        <ListItemText className={classes.navLinksListItems}>
          <NavLink 
          to="/u1/places"
          className={classes.navLinksLinkItemsNavLink}>
            MY PLACES
          </NavLink>
        </ListItemText>
        <ListItemText className={classes.navLinksListItems}>
          <NavLink 
          to="/places/new"
          className={classes.navLinksLinkItemsNavLink}>
            ADD PLACE
          </NavLink>
        </ListItemText>
        <ListItemText className={classes.navLinksListItems}>
          <NavLink 
          to="/auth"
          className={classes.navLinksLinkItemsNavLink}>
          AUTHENTICATION
          </NavLink>
        </ListItemText>
      </List>
    </div>
  );
};

export default NavLinksSmallScreen;
