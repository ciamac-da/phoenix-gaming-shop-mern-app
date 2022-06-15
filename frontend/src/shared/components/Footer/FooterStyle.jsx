import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
  footer: {
    marginTop: "auto",
    background: "#1c69d4",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    display: "block",
    width: "100vw",
    marginBottom: "0px",
    height: "33px",
  },
  typo: {
    color: "#fff",
    fontWeight: "bolder",
  },
}));
export default useStyles;