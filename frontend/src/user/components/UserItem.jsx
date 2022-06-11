import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import muiStyle from "./UserStyle";
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

const UserItem = (props) => {
  const classes = muiStyle();

  return (
    <div className={classes.mainContainer}>
      <Card>
        <Link to={`/${props.id}/places`} className={classes.userContainer}>
          <div className={classes.userImageContainer}>
            <Avatar image={props.image} alt={props.name} />
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
        </Link>
      </Card>
    </div>
  );
};

export default UserItem;
