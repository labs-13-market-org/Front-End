import React, { useState, useEffect } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";
import axios from "../../axios-instance";
import "./vendorsPerMarket.css";

const VendorsPerMarket = props => {
  const { classes } = props;
  const { firebase_id } = props.match.params;
  const [perMarket, setPerMarket] = useState({});
  const [vendorsPerMarket, setVendorsPerMarket] = useState([]);
  const usertype = localStorage.getItem("userTypes")
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
      <div className="market-vendorpage-wrapper">
        <div className='market-vendorpage-left'>  
          
          <div className="market-vendorpage-info">
          <h2>{perMarket.market_name}</h2>
          <h3>Contact Info:</h3>
          <p>Address: {perMarket.address}</p>
          <p>City: {perMarket.city}</p>
          <p>State: {perMarket.state}</p>
          <p>Contact first name: {perMarket.contact_first_name}</p>
          <p>Contact Last name: {perMarket.contact_last_name}</p>
          <p>Phone number: {perMarket.phone_number}</p>
          { usertype === "market" ? null :
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
          }

        </div>
        </div>
        <div className='market-vendorpage-right'>
          
        <div className='market-vendorpage-vendor-wrapped'>
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
    </>
  );
};

export default withRouter(VendorsPerMarket);

// export default VendorsPerMarket
