import { makeStyles } from "@material-ui/core/styles";


const muiStyle = makeStyles((theme) => ({
    navLinkContainer: {
        height:"100vh",
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
        [theme.breakpoints.down("sm")]: {
            display: "flex !important",
            flexDirection: "column !important",
            marginTop: "3rem !important"
        }
    },
    navLinksLinkItems: {
        margin: "0.5rem"
    },
    navLinksLinkItemsNavLink: {
        border: "1px solid transparent",
        color: "#1c69d4",
        textDecoration: "none",
        padding: "0rem",
        fontSize: "1.4rem",
        fontWeight: "bolder !important",
        transition: ".8s",
        "&:hover, &:focus, &:active": {
            fontSize: "1.5rem",
            color: "rgba(212, 0, 0, 0.8) !important",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "1.4rem",
            "&:hover, &:focus, &:active": {
                fontSize: "1.5rem",
                letterSpacing:".2rem !important"
            },
        }

    }
}));

export default muiStyle;
