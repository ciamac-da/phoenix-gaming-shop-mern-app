import React from "react";
import { Typography } from "@mui/material";
import muiStyle from "./UserStyle";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UserList = (props) => {
  const classes = muiStyle();

  if (props.items.length === 0) {
    return (
      <div className={classes.noUserContainer}>
      <Card>
        <Typography className={classes.noUser}>No users found...!</Typography>
      </Card>
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
