import { makeStyles } from "@mui/styles";

const muiStyle = makeStyles(() => ({
  hamburgerMenuButtonMain: {
    width: "3rem",
    height: "3rem",
    background: "transparent",
    border: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginRight: "2rem",
    cursor: "pointer",
  },
  hamburgerMenuButtonMainIcon: {
    backgroundColor: "white",
    color: "#1c69d4",
  },
  MainNavigationDrawerNav: {
    height: "100%"
  }
}));

export default muiStyle;
