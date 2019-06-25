import React, { useEffect } from "react";
import { Route, NavLink, Link, Switch } from "react-router-dom";
import StallsList from "../stalls/stallsList";
import MarketLandingPage from "../markets/marketProfile";
import "./marketLandingPage.css";

import fruitstand from "../../images/fruit-stand.jpg";

const firebase_id = null;

const MarketProfileCard = props => {
  return (
    <div className="market-card-wrapper">
      <div className="market-info">
        <h2>{" " + props.profile.market_name}</h2>

        {props.profile.image ? <img
          alt="Market profile picture"
          src={props.profile.image}
          style={{ maxWidth: 250, maxHeight: 250 }}
        /> : <img
            alt="Market profile picture"
            src={fruitstand}
            style={{ width: 250, height: 300 }}
          /> }
        {/* <img
          alt="Market profile picture"
          src={props.profile.image}
          style={{ maxWidth: 200, maxHeight: 200 }}
        /> */}
        <h4>
          Address:
          {" " + props.profile.address}
        </h4>
        <h4>
          Location:
          {" " + props.profile.city}
          {" " + props.profile.state}
        </h4>
        <h4>
          Contact Info:
          {" " + props.profile.phone_number}
        </h4>
      </div>
      <div className="market-card-link">
        <Link
          to={{
            pathname: "/stalls/",
            search: `?firebase_id=${props.profile.firebase_id}`,
            state: {
              firebase_id: props.profile.firebase_id,
              market_name: props.profile.market_name
            }
          }}
        >
          <h4>Rent Stalls</h4>
        </Link>
      </div>
      <div className="market-card-link">
        <Link to={`/vendorsByMarket/${props.profile.firebase_id}`}>
          <h4>See Profile & Vendors</h4>
        </Link>
      </div>
    </div>
  );
};

export default MarketProfileCard;
