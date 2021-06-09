import React, { useState } from "react";
import axios from "axios";

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
import Copyright from "../Copyright/Copyright";

const Register = (props) => {
  const [form, setForm] = useState({
    email: "",
    displayName: "",
    password: "",
    passwordCheck: "",
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log("sent from frontend");
    try {
      const response = await axios.post("/users/register", form);
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className={props.classes.paper}>
      <Avatar className={props.classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <form onSubmit={submit} className={props.classes.form} noValidate>
        <TextField
          onChange={onChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          onChange={onChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="displayName"
          label="Display Name"
        />
        <TextField
          onChange={onChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
        />
        <TextField
          onChange={onChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="passwordCheck"
          label="Confirm Password"
          type="password"
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
              style={{ cursor: "pointer" }}
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
