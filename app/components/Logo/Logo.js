import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../images/logo.png';

const useStyles = makeStyles(theme => ({
  logo: {
    maxWidth: 160,
  },
}));

export default function Logo() {
  const classes = useStyles();

  return <img src={logo} alt="logo" className={classes.logo} />;
}
