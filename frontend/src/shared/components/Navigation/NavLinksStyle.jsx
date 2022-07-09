import { makeStyles } from "@material-ui/core/styles";


const muiStyle = makeStyles((theme) => ({
    navLinkContainer: {
        width: "65vw",
        position: "absolute",
        right: "0",
    },
    navLinksList: {
        linkStyle: "none",
        margin: "0",
        padding: "0",
        width: "100%",
        height: "100%",
        display: "none !important",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex !important",
            flexDirection: "row !important",
        }
    },
    navLinksLinkItems: {
        margin: "0.5rem"
    },
    navLinksLinkItemsNavLink: {
        border: "1px solid transparent",
        color: "white",
        textDecoration: "none",
        padding: "0.3rem",
        fontSize: ".7rem",
        fontWeight: "bolder",
        transition: ".8s",
        textShadow: ".2rem .1rem .1rem black",
        "&:hover, &:focus, &:active": {
            fontSize: ".8rem",
            color: "rgba(212, 0, 0, 0.8)",
            textShadow: ".1rem .1rem .1rem white",
            backgroundColor: "white",
            borderRadius: "1rem"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1rem",
            "&:hover, &:focus, &:active": {
                fontSize: "1.1rem",
                letterSpacing:".1rem"
            },
        }

    }
}));

export default muiStyle;
