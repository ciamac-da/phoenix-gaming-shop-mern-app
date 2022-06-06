import React from "react";
import { Typography } from "@mui/material";
import muiStyles from "./UserStyle";
import Avatar from "../../shared/components/Avatar";

const UserItem = (props) => {
  const classes = muiStyles();

  return (
    <li>
      <div className={classes.userContainer}>
        <div className={classes.userImageContainer}>
          <Avatar
            image={props.image}
            alt={props.name}
          />
        </div>
        <div className={classes.userNameContainer}>
          <Typography className={classes.usernameAndPlacesCount}>
            {props.name}
          </Typography>
          <Typography className={classes.usernameAndPlacesCount}>
            {props.placeCount}
            &nbsp;
            {props.placeCount === 1 ? "Place" : "Places"}
          </Typography>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
