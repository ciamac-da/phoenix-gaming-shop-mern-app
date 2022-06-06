import React from "react";
import { Typography } from "@mui/material";
import muiStyles from "./UserStyle";

const UserItem = (props) => {
  const classes = muiStyles();

  return (
    <li>
      <div className={classes.userContainer}>
        <div className={classes.userImageContainer}>
          <img
            className={classes.userImage}
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className={classes.userNameContainer}>
          <Typography className={classes.userName}>
            User Name :&nbsp;
            {props.name}
          </Typography>
          <Typography className={classes.placesCount}>
            Places: &nbsp;
            {props.placeCount}
            {props.placeCount === 1 ? "Place" : "Places"}
          </Typography>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
