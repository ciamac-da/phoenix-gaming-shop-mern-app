import { makeStyles } from '@mui/styles';

const muiStyle = makeStyles(() => ({
      container: {
            marginTop: "200px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
      },
      errorNumber: {
            fontSize: "60px",
            color: "#1c69d4",
            fontWeight: "bolder",
            textShadow: "2px 2px 2px black",
            fontFamily: '"Titillium Web", sans-serif !important',
            fontFamily: "'Open Sans', sans-serif !important",
      },
      errorText: {
            fontSize: "2rem !important",
            color: "white",
            fontWeight: "bolder",
            textShadow: ".2rem .2rem .2rem black",
      },
      errorUrl: {
            fontSize: "1.7rem !important",
            color: "white",
            fontWeight: "bolder !important",
            textShadow: ".2rem .2rem .2rem black",
            marginBottom: "1rem !important",
      },
      backButton: {
            backgroundColor: "#1c69d4 !important",
            fontWeight: "bolder !important",
            textDecoration:"inherit !important",
            "&:hover":{
                  backgroundColor: "#0653b6 !important",
                  color:"white",
                  fontWeight:"bolder"
            }
      },
      link:{
            textDecoration:"none !important",
      }
}));

export default muiStyle;