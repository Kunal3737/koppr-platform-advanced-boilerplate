import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EmployeeAllowancesSalaried from '../EmployeeAllowancesSalaried/EmployeeAllowancesSalaried';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// import { connect } from 'react-redux';
// import sampleReducer from '../../reducers/sampleReducer';
// import sampleAction from '../../actions/sampleAction';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 35,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  signUpKopprAccount: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold

  },
  manage: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.primary.main,
    marginBottom: 40
  },
  formWrapper: {
    textAlign: 'center',
  },
  signUpForm: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70ch',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 210,
    marginRight: 0,
  },
  phoneNumber: {
    width: '42.5ch',
  },
  nextButton: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  nextButtonWrapper: {
    textAlign: 'center',
  },
  imageWrapper: {
    textAlign: 'center',
  },
  customerCareContactDetails: {
    textAlign: 'center',
    paddingLeft: 100,
    paddingRight: 100,
    justifyContent: 'space-between',
    color: theme.palette.primary.main,
    
  },
  freeText: {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold
  },
  qwerty: {
    
  }
}));

export default function MainContent(props) {
  const classes = useStyles();
  const [isNextButton, setIsNextButton] = useState(false);
  const [email, setEmail] = useState(""); 

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Typography variant="h1" className={classes.paper}>
            Koppr for HR Admins & Business Leaders
          </Typography>
          <Typography variant="h2" gutterBottom className={classes.manage}>
            Manage employees, salaries & tax benefits with Koppr
          </Typography>
          <Grid xs={12} className={classes.paper}>
            <EmployeeAllowancesSalaried />
          </Grid>
          <Grid xs={12} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              Need help with your Koppr Account? Get in touch
            </Typography>
          </Grid>
          <Grid className={classes.customerCareContactDetails} container >
            <Typography variant="h4" display="inline">(+91) 8879600206</Typography>
            <Typography variant="h4" display="inline">care@koppr.in</Typography>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h2" className={classes.signUpKopprAccount}>
            Sign up for your <span className={classes.freeText}>FREE</span> Koppr Corporate account
          </Typography>
          {!isNextButton ? (
            <div className={classes.formWrapper}>
              <form
                className={classes.signUpForm}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  placeholder="Company Name *"
                  size="small"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  placeholder="First Name *"
                  size="small"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Last Name *"
                  size="small"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  placeholder="Corporate Email Id *"
                  size="small"
                  variant="outlined"
                />

                <FormControl
                  variant="outlined"
                  size="small"
                  className={classes.formControl}
                >
                  <InputLabel htmlFor="outlined-countryCode-native-simple">
                    Country Code
                  </InputLabel>
                  <Select
                    native
                    classes={{root: classes.qwerty}}
                    // value={state.age}
                    // onChange={handleChange}
                    label="countryCode"
                    inputProps={{
                      name: 'countryCode',
                      id: 'outlined-countryCode-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={+91}>+91</option>
                  </Select>
                </FormControl>

                <TextField
                  id="outlined-basic"
                  placeholder="Phone Number *"
                  size="small"
                  variant="outlined"
                  className={classes.phoneNumber}
                />

                <FormControl variant="outlined" size="small">
                  <InputLabel htmlFor="outlined-gender-native-simple">
                    Gender
                  </InputLabel>
                  <Select
                    native
                    // value={state.age}
                    // onChange={handleChange}
                    label="Gender"
                    inputProps={{
                      name: 'gender',
                      id: 'outlined-gender-native-simple',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Male</option>
                    <option value={20}>Female</option>
                    <option value={30}>Other</option>
                  </Select>
                </FormControl>
                <div className={classes.nextButtonWrapper}>
                  <div className={classes.nextButton}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setIsNextButton(true);
                      }}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className={classes.formWrapper}>
              <form
                className={classes.signUpForm}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  placeholder="CIN"
                  size="small"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  placeholder="PAN"
                  size="small"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  placeholder="GSTIN"
                  size="small"
                  variant="outlined"
                />
                <div className={classes.nextButtonWrapper}>
                  <div className={classes.nextButton}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setIsNextButton(false);
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}
          <Grid xs={12} className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Already have a Koppr Account? Sign in <span>here</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
                      <button >For Saga Testing</button>
      {/* <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
        onError={errors => console.log(errors)}
      >
        <TextValidator
          label="Email"
          onChange={this.handleChange}
          name="email"
          value={email}
          validators={['required', 'isEmail']}
          errorMessages={['this field is required', 'email is not valid']}
        />
        <Button type="submit">Submit</Button>
      </ValidatorForm> */}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     isNextButton: state.sampleReducer.isNextButton,
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   sampleAction: () => dispatch(sampleAction()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
