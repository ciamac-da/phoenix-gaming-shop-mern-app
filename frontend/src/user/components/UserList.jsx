import React from "react";
import { Typography } from "@mui/material";
import muiStyles from "./UserStyle";
import UserItem from "./UserItem";

const UserList = (props) => {
  const classes = muiStyles();

  if (props.items.length === 0) {
    return (
      <div className={classes.noUserContainer}>
        <Typography className={classes.noUser}>No users found...!</Typography>
      </div>
    );
  }
  return (
    <div>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </div>
  );
};

export default UserList;
