import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import employeeAllowancesSalaried from '../../images/employeeAllowancesSalaried.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  logo: {
    maxWidth: 500,
    textAlign: 'center',
  },
  imgWrapper: {
    textAlign: 'center',
    // borderColor: 'green',
    // borderStyle: 'solid',
  },
  imageFrame: {
    padding: 10,
    width: 600,
    // borderColor: 'red',
    // borderStyle: 'solid',
  }
}));

export default function EmployeeAllowancesSalaried() {
  const classes = useStyles();

  return (
    <Grid xs={12} border={2} className={classes.imgWrapper}>
      <span className={classes.imageFrame}>
      <img
        src={employeeAllowancesSalaried}
        alt="Employee-Allowances-Salaried"
        className={classes.logo}
        height="300px"
      />
      </span>
    </Grid>
    
  );
}
