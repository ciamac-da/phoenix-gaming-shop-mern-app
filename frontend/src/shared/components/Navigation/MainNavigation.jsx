import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import muiStyle from "./MainHeaderStyle";
import MenuIcon from '@mui/icons-material/Menu';

const MainNavigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const classes = muiStyle();

  const Root = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <MainHeader>
      <Root>
        <button className={classes.hamburgerMenuButtonMain}>
          <MenuIcon />
        </button>
      </Root>
      <Typography className={classes.MainNavigationHeaderTitle}>
        <Link className={classes.MainNavigationHeaderTitleLink} to="/">
          Phoenix Places
        </Link>
      </Typography>
      {windowWidth} px
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
