import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import "./VendorLandingPage.css";
import { VendorContext } from "../context/vendor";
import { ProductContext } from "../context/product";
import { AuthContext } from "../authContext/authState";
import LinearProgress from '@material-ui/core/LinearProgress';
import vendorIcon from '../../images/stallicon.png';
// import ProductByVendorCard from "../product/ProductByVendorCard";

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
    backgroundColor: '#38212E',
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

const VendorLandingPage = props => {
  const { classes } = props;
  const [isLoading, setIsLoading] = useState(true)
  const [allVendors, setAllVendors] = useState([]);

  useEffect(() => {
    axios
      .get(`vendor/`)
      .then(res => {
        console.log(res, "vendor by Id");
        setAllVendors(res.data);
        // console.log(allVendors);
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
    {
      isLoading ?
      <LinearProgress color="secondary"/> :
      <div className="vendor-landing-page-wrapper">
        <div className="vendor-list-page-header">
          <h2>Vendors</h2>
        </div>
        <div className="vendor-icon">
        <img src={vendorIcon} alt="logo" />
        </div>
        <div className="vendor-card-wrapper" >
        {allVendors &&
          allVendors.map(eachVendor => {
            return (
              <>
              
                <div className='sidebar-info'>
                  
                </div>

                <div className='vendor-card-wrapper-right'>

                  <div className="vendor-card" key={eachVendor.firebase_id}>
                    <h4>Company: {eachVendor.company_name}</h4>
                    <h4>Full Name: {eachVendor.contact_fullname}</h4>
                    <div className='vendor-card-link'>
                    <Link to={`/oneVendorPublic/${eachVendor.firebase_id}`}>
                      More Info
                    </Link>
                    </div>
                  </div>
                  </div>
                
              </>
            );
          })}
          </div>
      </div>
    }
      {/* <Switch>
        <Route
          path="/allVendors/:firebase_id"
          render={props => (
            <ProductByVendorCard {...props} vendor={allVendors} />
          )}
        />
      </Switch> */}
    </>
  );
};

export default withRouter(withStyles(styles)(VendorLandingPage));
// export default withStyles(styles)(VendorLandingPage);
