import React from "react";
import { Button, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import muiStyle from "./NotFoundStyle";

const NotFound = () => {
  const classes = muiStyle();
  const WrongPathPageTitle = "Phoenix Places Explorer App/Page not found!";

  return (
    <div>
      <Helmet>
        <title>{WrongPathPageTitle}</title>
      </Helmet>
      <Flip left>
        <div className={classes.container}>
          <Typography>
            <span className={classes.errorNumber}>404.</span>

            <span className={classes.errorText}>
              Oops! An error has occurred!
            </span>
          </Typography>
          <Typography className={classes.errorUrl}>
          The requested URL was not found on this server!
          </Typography>
          <Link to="/" className={classes.link}>
            <Button variant="contained" className={classes.backButton}>
              <NavigateBeforeIcon />
              Back
            </Button>
          </Link>
        </div>
      </Flip>
    </div>
  );
};

export default NotFound;
