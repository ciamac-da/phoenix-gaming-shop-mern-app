import { makeStyles } from "@mui/styles";

const muiStyles = makeStyles(() => ({
  mainContainer: {
    listStyle: "none",
    margin: "auto",
  },
  userContainer: {
    color: "#05120a",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    width: "100px"
  },
  userImageContainer: {
      width:"100%",
      padding:"10px"
  },
  userNameContainer: {
    width:"100%",
  },
  usernameAndPlacesCount: {
    fontWeight: "bolder !important",
    fontSize: "14px !important",
    cursor:"pointer",
    transition: "0.3s",
    "&:hover": {
        transition: "0.3s",
        color: "#5c25a8",
      },
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
