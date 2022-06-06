import { makeStyles } from "@mui/styles";

const muiStyles = makeStyles(() => ({
  mainContainer: {
    listStyle: "none",
    margin: "10% auto",
  },
  userContainer: {
    color: "#05120a",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  userImageContainer: {},
  userImage: {
    maxWidth: "40vw",
  },
  userNameContainer: {},
  userName: {
    fontWeight: "bolder !important",
  },
  placesCount: {
    fontWeight: "bolder !important",
  },
  noUserContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  noUser: {
    color: "#fc2003",
    margin: "10% auto",
  },
}));

export default muiStyles;
