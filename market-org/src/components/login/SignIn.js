import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  withStyles
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, withRouter } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";
import axios from "../../axios-instance";
import "./SignIn.css";

import { AuthContext } from "../authContext/authState";
import MySnackbarContentWrapper from "../customizesnackbar/CustomizeSnackbar";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function SignIn(props) {
  const { classes } = props;
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrMsg] = useState(null);

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(({ user }) => {
        console.log("user:", user);
        if (user) {
          const { uid, ra, email } = user;
          localStorage.setItem("token", ra);
          localStorage.setItem("firebaseId", uid);
          if (user.email) {
            const { email } = user;
            console.log("emailuser", user);
            const userObj = {
              email,
              uid
            };
            console.log("userra", user.ra);
            console.log(userObj);

            axios.defaults.headers.common["Authorization"] = user.ra;
            axios
              .post("/users/register", { ...userObj })
              .then(res => {
                console.log("res:", res);

                axios
                  .get(`users/${uid}`)
                  .then(res => {
                    localStorage.setItem("userTypes", res.data.user_type);
                    if (res.data.user_type === "vendor") {
                      console.log(res.data.user_type, "from res");
                      props.history.push(
                        `/oneVendorPrivate/${localStorage.getItem(
                          "firebaseId"
                        )}`
                      );
                    } else {
                      props.history.push(
                        `/vendorsByMarketId/${localStorage.getItem(
                          "firebaseId"
                        )}`
                      );
                    }
                  })
                  .catch(err => {
                    console.log(err);
                  });
              })
              .catch(err => {
                console.log(err);
              });
            props.history.push("/");
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const signInWithEmailAndPassword = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("user:", user);
        if (user) {
          const { uid, ra, email } = user;
          localStorage.setItem("token", ra);
          localStorage.setItem("firebaseId", uid);
          if (user.email) {
            const { email } = user;
            console.log("emailuser", user);
            const userObj = {
              email,
              uid
            };
            console.log("userra", user.ra);
            console.log(userObj);

            axios.defaults.headers.common["Authorization"] = user.ra;
            axios
              .post("/users/register", { ...userObj })
              .then(res => {
                console.log("res:", res);

                axios
                  .get(`users/${uid}`)
                  .then(res => {
                    localStorage.setItem("userTypes", res.data.user_type);
                    console.log("hello");
                    routeToMarketorVendor(uid);
                  })
                  .catch(err => {
                    console.log(err);
                  });
              })
              .catch(err => {
                console.log(err);
              });
          }
        }
      })
      .catch(err => {
        setErrMsg(err.message);
      });
  };

  const routeToMarketorVendor = uid => {
    const usertype = localStorage.getItem("userTypes");
    console.log("routetomarket");
    if (usertype === "market") {
      props.history.push(`/vendorsByMarket/${uid}`);
    } else {
      props.history.push(`/oneVendorPrivate/${uid}`);
    }
  };

  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-left" />
      <div className="sign-in-right">
        {/* <main className={classes.main}> */}
        {/* <Paper className={classes.paper}> */}

        <form onSubmit={e => e.preventDefault() && false}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>

          {errorMsg ? (
            <MySnackbarContentWrapper  className='sign-in-error'variant="error" message={errorMsg} />
          ) : null}

          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            className="input-field"
            id="email"
            name="email"
            autoComplete="off"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
            onClick={e => setErrMsg(null)}
          />

          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            className="input-field"
            name="password"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onClick={e => setErrMsg(null)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={signInWithEmailAndPassword}
            className="sign-in-button"
          >
            Sign in
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            onClick={signInWithGoogle}
            className="sign-in-button"
          >
            Sign in with Google
          </Button>
        </form>
        {/* </Paper> */}
        {/* </main> */}
      </div>
    </div>
  );
}

export default withRouter(withStyles(styles)(SignIn));
