import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";

import { VendorContext } from "../context/vendor";

import UpdateVendorForm from "./UpdateVendorForm";
import UpdateVendorImage from "./UpdateVendorImage";
import ProductByVendor from "../product/ProductByVendor";

import {
  withStyles,
  Typography,
  TextField,
  Button,
  CardContent,
  Menu,
  MenuItem,
  Container,
  Card,
  Paper,
  Grid,
  ButtonBase,
  Breadcrumbs,
  Avatar
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutline from "@material-ui/icons/AddCircleOutlined";
import InsertPhoto from "@material-ui/icons/InsertPhoto";

import axios from "../../axios-instance";

import market3 from "../../images/market3.jpg";

const styles = theme => ({
  root: {
    display: "flex",
    margin: "0 auto"
  },
  appBar: {
    //   marginLeft: drawerWidth,
    backgroundColor: "#38212E",
    zIndex: theme.zIndex.drawer + 1
  },

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },

  text: {
    color: "#008BC9",
    fontWeight: "500"
  },

  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto"
    // maxWidth: 800,
  },
  image: {
    width: 350,
    height: 350
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32
  }
});

const OneVendorPrivate = props => {
  const { classes } = props;

  const { firebase_id } = props.match.params;

  // const [aPrivateVendor, setAPrivateVendor] = useState([]);
  const [aPrivateVendor, setAPrivateVendor] = useContext(VendorContext);
  const [delVendor, setDelVendor] = useState("");

  useEffect(() => {
    axios
      .get(`vendor/${firebase_id}`)
      .then(res => {
        // console.log(res, "vendor by Id");
        setAPrivateVendor(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
    // console.log(delVendor, 'Deleted Vendor')
  }, [aPrivateVendor]);

  const deleteVendor = (e, vendorId) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    axios
      .delete(`vendor/${vendorId}`, {
        "Content-Type": "application/json",
        headers: { Authorization: token }
      })
      .then(res => {
        console.log(res);
        setDelVendor(res.data);
        props.history.replace("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <Container
        maxWidth="lg"
        key={aPrivateVendor.firebase_id}
        style={{ marginTop: "50px" }}
      >
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase
                className={classes.image}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              >
                <img
                  className={classes.img}
                  alt="vendor picture"
                  src={aPrivateVendor.image}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={1}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    style={{ padding: 3, fontSize: "28px", fontWeight: "bold" }}
                  >
                    {aPrivateVendor.company_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ padding: 3, fontSize: "22px" }}
                  >
                    {aPrivateVendor.contact_fullname}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ padding: 3, fontSize: "18px" }}
                  >
                    {aPrivateVendor.address}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ padding: 3, fontSize: "18px" }}
                  >
                    {aPrivateVendor.city}, {aPrivateVendor.state}{" "}
                    {aPrivateVendor.zip_code}
                  </Typography>

                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ padding: 3, fontSize: "18px" }}
                  >
                    {aPrivateVendor.phone_number}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ padding: 3, fontSize: "18px" }}
                  >
                    {aPrivateVendor.company_url}
                  </Typography>
                </Grid>
                <Grid item style={{ margin: "10px" }}>
                  <Link to={`/productForm`}>
                    <AddCircleOutline
                      className={classes.icon}
                      style={{
                        margin: "auto",
                        width: "100%",
                        textAlign: "center"
                      }}
                    />
                    <Typography
                      variant="body2"
                      style={{
                        cursor: "pointer",
                        fontSize: "16px",
                        textAlign: "center"
                      }}
                    >
                      ADD PRODUCT
                    </Typography>
                  </Link>
                </Grid>
              </Grid>

              <Grid item style={{ padding: 5, margin: 8 }}>
                <Link to={`/oneVendorPrivate/${firebase_id}/editForm`}>
                  <EditIcon className={classes.icon} />
                  <Typography
                    variant="body2"
                    style={{
                      cursor: "pointer",
                      fontSize: "11px",
                      textAlign: "center"
                    }}
                  >
                    EDIT PROFILE
                  </Typography>
                </Link>

                <Link to={`/oneVendorPrivate/${firebase_id}/editImage`}>
                <InsertPhoto className={classes.icon} />
                  <Typography
                    variant="body2"
                    style={{
                      cursor: "pointer",
                      fontSize: "11px",
                      textAlign: "center"
                    }}
                  >                    
                    EDIT Image
                  </Typography>
                </Link>
                {/* </Grid>
                <Grid item style={{ padding: 5, margin: 8 }}> */}
                <DeleteIcon
                  className={classes.icon}
                  onClick={e => deleteVendor(e, firebase_id)}
                />
                <Typography
                  variant="body2"
                  style={{
                    cursor: "pointer",
                    fontSize: "11px",
                    textAlign: "center"
                  }}
                >
                  DELETE PROFILE
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Switch>
        <Route
          path="/oneVendorPrivate/:firebase_id/editForm"
          render={props => (
            <UpdateVendorForm {...props} aPrivateVendor={aPrivateVendor} />
          )}
        />

        <Route
          path="/oneVendorPrivate/:firebase_id/editImage"
          render={props => (
            <UpdateVendorImage {...props} aPrivateVendor={aPrivateVendor} />
          )}
        />
      </Switch>
      <ProductByVendor {...props} />
    </>
  );
};

export default withRouter(withStyles(styles)(OneVendorPrivate));
