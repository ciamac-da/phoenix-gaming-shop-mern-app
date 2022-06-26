import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import muiStyle from "./MainHeaderStyle";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NavLinks from "./NavLinks";


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
          <MenuOutlinedIcon className={classes.hamburgerMenuButtonMainIcon} />
        </button>
      </Root>
      <Typography  style={{ padding: "1rem" }}>
        <Link
          style={{
            textDecoration: "auto",
            color: "white",
            fontWeight: "bolder",
            fontSize:"1rem",
          }}
        >
          Phoenix Places Explorer
        </Link>
      </Typography>
        <NavLinks />
    </MainHeader>
  );
};

export default MainNavigation;
