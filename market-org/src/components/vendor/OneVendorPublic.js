import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import "./OneVendorPublic.css";
import ProductByVendorCard from "../product/ProductByVendorCard";
import vendorProfileIcon from "../../images/stallicon.png";

import {
  withStyles,
  Typography,
  TextField,
  Button,
  CardContent,
  Menu,
  MenuItem,
  Container,
  CssBaseline,
  AppBar,
  Toolbar
} from "@material-ui/core";
import Card from "@material-ui/core/Card";

import axios from "../../axios-instance";

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
  }
});

const OneVendorPublic = props => {
  const { classes } = props;

  const { firebase_id } = props.match.params;

  const [aPublicVendor, setAPublicVendor] = useState([]);

  useEffect(() => {
    axios
      .get(`vendor/${firebase_id}`)
      .then(res => {
        console.log(res, "vendor by Id");
        setAPublicVendor(res.data);
        // console.log(aPublicVendor);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="vendor-profile-wrapper">
        <div className="vendor-profile-header">
          <h2>Vendor Profile</h2>
        </div>
        <div className="vendor-profile-icon">
          <img src={vendorProfileIcon} alt="logo" />
        </div>
        
        <div className="product-wrapper">
          <div className="product-left">
          <p>Company: {aPublicVendor.company_name}</p>
          <p>Full Name: {aPublicVendor.contact_fullname}</p>
          <p>Address: {aPublicVendor.address}</p>
          <p>City: {aPublicVendor.city}</p>
          <p>State: {aPublicVendor.state}</p>
          <p>Zip Code: {aPublicVendor.zip_code}</p>
          <p>Phone: {aPublicVendor.phone_number}</p>
          <p>Company website: {aPublicVendor.company_url}</p>
          </div>
          
          <div className="product-right">
            <ProductByVendorCard {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(withStyles(styles)(OneVendorPublic));
