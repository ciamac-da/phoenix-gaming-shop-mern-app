import { makeStyles } from "@mui/styles";

const muiStyle = makeStyles(() => ({
  mainHeader: {
    width: "100%",
    height: "4rem",
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: "0",
    left: "0",
    background: "#1c69d4",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.26)",
    padding: "0 1rem",
    zIndex: "5",
  },
}));

export default muiStyle;
