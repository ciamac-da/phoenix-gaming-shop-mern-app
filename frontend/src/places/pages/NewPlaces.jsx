import { Fragment } from "react";
import { Typography } from "@mui/material";
import { Helmet } from "react-helmet";

const NewPlaces = () => {
  const NewPlacesTitle = "Phoenix Places Explorer App/New Places";

  return (
    <Fragment>
      <Helmet>
        <title>{NewPlacesTitle}</title>
      </Helmet>
      <Typography>New places works</Typography>
    </Fragment>
  );
};

export default NewPlaces;
