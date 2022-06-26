import { makeStyles } from "@material-ui/core/styles";


const muiStyle = makeStyles((theme) => ({
    navLinksLink: {
        linkStyle: "none",
        margin: "0",
        padding: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row !important",
        }
    },
    navLinksLinkItems: {
        margin: "1rem"
    },
    navLinksLinkItemsNavLink: {
        border: "1px solid transparent",
        color: "#292929",
        textDecoration: "none",
        padding: "0.5rem"
    }
}));

export default muiStyle;
