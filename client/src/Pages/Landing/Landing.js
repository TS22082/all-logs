import React, { useState } from "react";
import Auth from "../../Components/Auth/Auth";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Register from "../../Components/Register/Register";
import Login from "../../Components/Login/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Landing = (props) => {
  const classes = useStyles();
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Auth>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {showLogin ? (
            <Login
              toast={props.toast}
              classes={classes}
              setShowLogin={setShowLogin}
              showLogin={showLogin}
            />
          ) : (
            <Register
              toast={props.toast}
              classes={classes}
              setShowLogin={setShowLogin}
              showLogin={showLogin}
            />
          )}
        </Grid>
      </Grid>
    </Auth>
  );
};

export default Landing;
