import React, { useState, useContext } from "react";
import UserContext from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
import axios from "axios";

const Login = (props) => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginRes = await axios.post("/users/login", login);

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  return (
    <div className={props.classes.paper}>
      <Avatar className={props.classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form onSubmit={onSubmit} className={props.classes.form} noValidate>
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
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={props.classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              onClick={() => props.setShowLogin(!props.showLogin)}
              variant="body2"
              style={{ cursor: "pointer" }}
            >
              {"Don't have an account? Sign Up"}
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

export default Login;
