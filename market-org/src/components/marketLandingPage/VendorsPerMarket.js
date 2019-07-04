import React, { useState, useEffect } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import axios from "../../axios-instance";
import "./vendorsPerMarket.css";
import marketIcon from "../../images/stallicon.png";

import market3 from "../../images/market3.jpg";

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'     

const VendorsPerMarket = props => {
  const { classes } = props;
  const { firebase_id } = props.match.params;
  const [perMarket, setPerMarket] = useState({});
  const [vendorsPerMarket, setVendorsPerMarket] = useState([]);
  const usertype = localStorage.getItem("userTypes");
  useEffect(() => {
    axios
      .get(`vendor/market/${firebase_id}/vendor`)
      .then(res => {
        console.log(res.data, "Market by firbaseId and its vendors");
        setPerMarket(res.data);
        setVendorsPerMarket(res.data.vendors);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
    {/* <div className="market-profile-page-wrapper">
          <div className="market-profile-page-header">
            <h2>Market Profile</h2>
          </div>
          <div className="market-icon">
            <img src={marketIcon} alt="logo" />
          </div>
     */}
      {/* <div className='market-profile-wrapper'>
        <div className="market-vendorpage-left">
          <h2>{perMarket.market_name}</h2>
            {perMarket.image 
              ? <img
                  alt="Market profile picture"
                  src={perMarket.image}
                  style={{ width: 300, height: 300 }}
                /> 
              : <img
                alt="Market profile picture"
                src={market3}
                style={{ width: 300, height: 300 }}
              /> 
            }

            
            <h3>Contact Info:</h3>
            <p>Address: {perMarket.address}</p>
            <p>City: {perMarket.city}</p>
            <p>State: {perMarket.state}</p>
            <p>Name: {perMarket.contact_first_name} {perMarket.contact_last_name}</p>
            
<<<<<<< HEAD
            <p>Phone number: {perMarket.phone_number}</p>
            
=======
            <h4>Phone number: {perMarket.phone_number}</h4>
>>>>>>> 505ab7f59d8bfe59283a3505da23dfccf9d0654a
            {usertype === "market" ? null : (
              <Link
                to={{
                  pathname: "/stalls/",
                  search: `?firebase_id=${firebase_id}`,
                  state: {
                    firebase_id: firebase_id,
                    market_name: perMarket.market_name
                  }
                }}
              >
                Rent a stall from us
              </Link>
            )}
          
        </div>
        
        <div className="market-vendorpage-right">
          <div className="market-vendorpage-vendor-wrapped">
            <h3>Our Vendors</h3>

            {vendorsPerMarket &&
              vendorsPerMarket.map(eachVendor => {
                return (
                  <>
                    <div className="market-vendorpage-vendor-card">
                      <div>
                        <p>Company: {eachVendor.company_name}</p>
                        <p>Full Name: {eachVendor.contact_fullname}</p>
                        <p>Address: {eachVendor.address}</p>
                        <p>City: {eachVendor.city}</p>
                        <p> State: {eachVendor.state}</p>
                        <p>Zip Code: {eachVendor.zip_code}</p>
                        <p>Phone: {eachVendor.phone_number}</p>
                        <p>Company website: {eachVendor.company_url}</p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        </div>
      </div> */}
      
      {/* <div className={classes.root}> */}
        <Grid container spacing={3}>
        {/* //Grid Left */}
          <Grid item xs={4}>
            
            <Paper className={classes.paper}>
              <h2>{perMarket.market_name}</h2>
              {perMarket.image 
                ? <img
                    alt="Market profile picture"
                    src={perMarket.image}
                    style={{ width: 300, height: 300 }}
                  /> 
                : <img
                  alt="Market profile picture"
                  src={market3}
                  style={{ width: 300, height: 300 }}
                /> 
              }
            </Paper>
            
            <Paper>
              <h3>Contact Info:</h3>
              <p>Address: {perMarket.address}</p>
              <p>City: {perMarket.city}</p>
              <p>State: {perMarket.state}</p>
              <p>Name: {perMarket.contact_first_name} {perMarket.contact_last_name}</p>
              <p>Phone number: {perMarket.phone_number}</p>
            </Paper>
            
            <Paper className={classes.paper}>
            {usertype === "market" ? null : (
              <Link
                to={{
                  pathname: "/stalls/",
                  search: `?firebase_id=${firebase_id}`,
                  state: {
                    firebase_id: firebase_id,
                    market_name: perMarket.market_name
                  }
                }}
              >
                Rent a stall from us
              </Link>
            )}
            </Paper>

          </Grid>

          {/* Grid Right */}
          <Grid item xs={8}>
            <h3>Our Vendors</h3>

            {vendorsPerMarket &&
              vendorsPerMarket.map(eachVendor => {
                return (
                  <Paper>
                    <div>
                      <p>Company: {eachVendor.company_name}</p>
                      <p>Full Name: {eachVendor.contact_fullname}</p>
                      <p>Address: {eachVendor.address}</p>
                      <p>City: {eachVendor.city}</p>
                      <p> State: {eachVendor.state}</p>
                      <p>Zip Code: {eachVendor.zip_code}</p>
                      <p>Phone: {eachVendor.phone_number}</p>
                      <p>Company website: {eachVendor.company_url}</p>
                    </div>
                  </Paper>
                );
              })
            }
          </Grid>
        </Grid>
      {/* </div> */}
    </>
  );
};

export default withRouter(VendorsPerMarket);

// export default VendorsPerMarket
