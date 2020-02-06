import React from "react";
import { Typography, makeStyles, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(4),
  },
}));
  
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant={'caption'}>
        Created by {' '}
        <Link component="a" href="http://ankad.io" target="blank">
        Nitin Ankad & &nbsp;
        </Link>
        <Link component="a" href="http://alfredorafael.com" target="blank">
        Alfredo R. Pabon 
        </Link>
      </Typography>
    </div>
  );
};

export default Footer;