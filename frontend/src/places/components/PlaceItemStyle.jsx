import { makeStyles } from "@material-ui/core/styles";

const muiStyle = makeStyles((theme) => ({
  placeItem: {
    margin: "1rem 0",
  },
  placeItem__content: {
    padding: "0",
  },
  placeItem__image: {
    width: "100%",
    height: "12.5rem",
    marginRight: "1.5rem",
    [theme.breakpoints.up("sm")]: {
        height: "20rem",
    }
  },
  placeItem__image__img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  placeItem__info: {
    padding: "1rem",
    textAlign: "center",
  },
  placeItem__info__sub: {
    margin: "0 0 0.5rem 0",
  },
  placeItem__actions: {
    padding: "1rem",
    textAlign: "center",
    borderTop: "1px solid #ccc",
  },
  placeItem__actions__sub: {
      margin: "0.5rem !important",
      transition: ".7s !important",
      transform: "translateY(0px)",
    "&:hover": {
        opacity: "0.7",
        transition: ".7s",
        transform:  "translateY(10px)"
    }
  },
}));

export default muiStyle;
