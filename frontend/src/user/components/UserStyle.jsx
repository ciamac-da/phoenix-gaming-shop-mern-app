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
    fontSize: "0.9rem !important",
    cursor:"pointer",
    transition: "0.8s",
    "&:hover": {
        color: "rgba(212, 0, 0, 0.8)",
        backgroundColor:"white",
        textShadow: ".1rem .1rem .1rem white",
        letterSpacing:".1rem",
        borderRadius:"1rem"
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
    transition: ".8s",
    "&:hover": {
      color: "rgba(212, 0, 0, 0.8)",
      textShadow: ".2rem .1rem .1rem white",
      letterSpacing:".1rem"
    },
  },
}));

export default muiStyle;
