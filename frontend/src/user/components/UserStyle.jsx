import { makeStyles } from "@mui/styles";

const muiStyle = makeStyles(() => ({
  mainContainer: {
    margin: "auto",
  },
  userContainer: {
    color: "#05120a",
    background: "#b5b5ae",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    textAlign: "center",
    width:"200px",
    padding:"20px",
    borderRadius:"10px",
    transition: "0.4s",
    "&:hover": {
    background: "#cfca3a",
    }
  },
  userImageContainer: {
      width: "50px",
      height: "50px"
  },
  userNameContainer: {
    width: "100px"
    },
  usernameAndPlacesCount: {
    fontWeight: "bolder !important",
    fontSize: "14px !important",
    cursor:"pointer",
    transition: "0.4s",
    "&:hover": {
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

export default muiStyle;
