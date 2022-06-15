import { makeStyles } from "@mui/styles";

const muiStyle = makeStyles(() => ({
  mainContainer: {
    marginTop: "5rem",
  },
  userContainer: {
    color: "white",
    textDecoration:"none",
    fontWeight:"bolder",
    backgroundColor: "#1c69d4",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    textAlign: "center",
    width:"200px",
    padding:"1.2rem",
    borderRadius:"0.8rem",
    transition: "0.4s",
    "&:hover": {
      backgroundColor: "#0653b6",
    }
  },
  userImageContainer: {
      width: "3rem",
      height: "3rem"
  },
  userNameContainer: {
    width: "7rem"
    },
  usernameAndPlacesCount: {
    fontWeight: "bolder !important",
    fontSize: "14px !important",
    cursor:"pointer",
    transition: "0.4s",
    "&:hover": {
        color: "rgba(169, 166, 166, 1)",
      },
  },
  noUserContainer: {
    display: "flex",
    marginTop:"5rem",
    justifyContent: "center",
    textAlign: "center",
  },
  noUser: {
    color: "#1c69d4",
    fontWeight:"bolder !important",
    margin: "10% auto",
  },
}));

export default muiStyle;
