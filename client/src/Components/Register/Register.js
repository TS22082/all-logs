import React from "react";

import {
  Avatar,
  TextField,
  Grid,
  Button,
  Box,
  Link,
  Typography,
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">All Logs</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Register = (props) => {
  return (
    <div className={props.classes.paper}>
      <Avatar className={props.classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <form className={props.classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password2"
          label="Confirm Password"
          type="password"
          id="password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={props.classes.submit}
        >
          Register
        </Button>
        <Grid container>
          <Grid item>
            <Link
              onClick={() => props.setShowLogin(!props.showLogin)}
              variant="body2"
            >
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
};

export default Register;
