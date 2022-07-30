import { Fragment } from "react";
import { Helmet } from "react-helmet";
import UserList from "../components/UserList";

const Users = () => {
  const UsersTitle = "Phoenix Places Explorer App/Users";

  const USERS = [
    {
      id: "u1",
      image: "https://via.placeholder.com/600/771796",
      name: "Johnny Depp",
      places: 3,
    },
  ];
  return (
    <Fragment>
      <Helmet>
        <title>{UsersTitle}</title>
      </Helmet>
      <UserList items={USERS} />
    </Fragment>
  );
};

export default Users;
