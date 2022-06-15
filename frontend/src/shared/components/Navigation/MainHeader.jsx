import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import muiStyle from "./MainHeaderStyle";

const MainHeader = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const classes = muiStyle();

  const Root = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
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
    <Root>
      <header className={classes.mainHeader}>{props.children}</header>
    </Root>
  );
};

export default MainHeader;
