import React, { useState, useContext } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
  Snackbar,
  SnackbarContent
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import withStyles from "@material-ui/core/styles/withStyles";

import { auth, googleProvider } from "../../firebase";
import { Link, withRouter, Redirect } from "react-router-dom";

import MySnackbarContentWrapper from "../customizesnackbar/CustomizeSnackbar";

import { AuthContext } from "../authContext/authState";
import axios from "../../axios-instance";
import './SignUp.css'

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme
      .spacing(3)}px`
  },
  avatar: {
    margin: theme.spacing,
    backgroundColor: "#38212E"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing
  },
  submit: {
    marginTop: theme.spacing(3)
  }
});

function Register(props) {
  const { classes } = props;


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [market, setMarket] = useState("market");
  const [vendor, setVendor] = useState("vendor");
  const [userType, setUserType] = useState(null);
  const [background, setBackground] = useState("");
  const [marketBg, setMarketBg] = useState("");
  const [user, setUser] = useState("");
  const [errorMsg, setErrorMsg] = useState(null)
  const [acctTypeError, setAcctType] = useState(null)

 


  const signUpWithGoogle = () => {
    if (userType === null) {
      // alert("Choose your account type");
      setAcctType("Choose your account type")
    } else {
      auth
        .signInWithPopup(googleProvider)
        .then(({ user }) => {
          console.log("user:", user);
          if (user) {
            const { uid, ra, email } = user;
            localStorage.setItem("token", ra);
            localStorage.setItem("firebaseId", uid);
            console.log("getting uId :", uid);
            if (user.email) {
              const { email } = user;
              console.log("emailuser", user);
              const userObj = {
                email,
                uid,
                user_type: `${userType}`
              };
              console.log("setUsertype", userType);
              console.log("userra", user.ra);
              console.log(userObj);

              axios.defaults.headers.common["Authorization"] = user.ra;
              axios
                .post("/users/register", { ...userObj })
                .then(res => {
                  console.log("res:", res);
                  setUser(res.data.user_type);
                  let userTypes = res.data.user_type;
                  console.log(userTypes, "user types");
                  localStorage.setItem("userType", userTypes);

                  if (res.data.user_type === "vendor") {
                    console.log(res.data.user_type, "from res");
                    props.history.push("/vendor");
                  } else {
                    props.history.push("/create-market");
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
      props.history.push("/create-market");
      console.log("user type:", userType);
    }
  };

  // using firebase auth method to register new user via email password

  const signUpWithEmailAndPassword = () => {
    // let userTypes
    if (userType === null) {
      setAcctType("Choose your account type")
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          if (user) {
            const { uid, ra, email } = user;
            console.log("incoming user", user);
            localStorage.setItem("token", ra);
            localStorage.setItem("firebaseId", uid);
            if (user.email && userType) {
              const { email } = user;
              console.log("emailuser", user);
              const userObj = {
                email,
                uid,
                user_type: `${userType}`
              };
              axios.defaults.headers.common["Authorization"] = user.ra;
              axios
                .post("/users/register", { ...userObj })
                .then(res => {
                  // console.log("res user type:", );
                  localStorage.setItem("firebaseId", res.data.firebase_id);
                  let loggedin_userTypes = res.data.user_type;
                  localStorage.setItem("userTypes", loggedin_userTypes);
                  // setUser(res.data.user_type)
                  // console.log(userTypes, 'from top of if')
                  // console.log("Create firebaseId :",  res.data.firebase_id);
                  if (res.data.user_type === "vendor") {
                    console.log(res.data.user_type, "from res");
                    props.history.push("/vendor");
                  } else {
                    props.history.push("/create-market");
                  }
                })
                .catch(err => {
                  console.log(err);
                });
            }
          }
        })
        .catch(err => {
          console.log("err", err)
          setErrorMsg(err.message)
        });
    }
  };


  const { currentUser } = useContext(AuthContext);
  console.log("user type:", userType);

  return (
    <div className="sign-up-wrapper">
      <div className="sign-up-left" />
      <div className="sign-up-right">
        
          
            
            <form
              
              onSubmit={e => e.preventDefault() && false}
            >
              <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>
              Register Account
            </h2>
              
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  className="input-field"
                  id="email"
                  name="email"
                  autoComplete="off"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onClick={e => setErrorMsg(null)}
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
                  onClick={e => setErrorMsg(null)}
                />
             
              <div style={{ textAlign: "center", marginTop: "20px" }}>
               
                  {acctTypeError ?
                    <MySnackbarContentWrapper
                      className='sign-in-error'
                      variant="error"
                      message={acctTypeError}
                    /> : "Choose your account type"
                  }
                
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "10px"
                }}
              >
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    value={market}
                    onClick={e => {
                      setUserType(e.currentTarget.value);
                      setMarketBg("lightBlue");
                      setBackground("white");
                    }}
                    style={{ backgroundColor: `${marketBg}` }}
                  >
                    Market
                  </Button>
                </div>
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    value={vendor}
                    onClick={e => {
                      setUserType(e.currentTarget.value);
                      setBackground("lightBlue");
                      setMarketBg("white");
                    }}
                    style={{ backgroundColor: `${background}` }}
                  >
                    Vendor
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
               
                onClick={signUpWithEmailAndPassword}
                className='sign-up-button'
              >
                Register
              </Button>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                onClick={signUpWithGoogle}
                className='sign-up-button'
              >
                Sign up with Google
              </Button>
            </form>
          
      </div>
    </div>
  );
}

export default withRouter(withStyles(styles)(Register));
