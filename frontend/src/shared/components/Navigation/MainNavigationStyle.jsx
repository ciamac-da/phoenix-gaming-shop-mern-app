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
  MainNavigationHeaderTitle: {
    color: "white",
  },
  MainNavigationHeaderTitleLink: {
    textDecoration: "none",
    color: "white",
  },
}));

export default muiStyle;
