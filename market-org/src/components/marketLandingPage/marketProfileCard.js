import React, { useEffect } from "react";
import { Route, NavLink, Link, Switch } from "react-router-dom";
import StallsList from "../stalls/stallsList";
import MarketLandingPage from "../markets/marketProfile";
import "./marketLandingPage.css";

import fruitstand from "../../images/fruit-stand.jpg";

const firebase_id = null;

const MarketProfileCard = props => {
  return (
    <div className="market-card-wrapped">
      <div className="market-left">
        {props.profile.image ? (
          <img alt="Market profile picture" src={props.profile.image} />
        ) : (
          <img alt="Market profile picture" src={fruitstand} />
        )}
        
      </div>
      <div className="market-card-right">
        <h2>{" " + props.profile.market_name}</h2>
        <h3>
          {" " + props.profile.phone_number}
        </h3>
        <h4>
          Address:
          {" " + props.profile.address}
        </h4>
        <h4>
          Location:
          {" " + props.profile.city}
          {" " + props.profile.state}
        </h4>
        
        
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
            Rent Stalls
          </Link>
        
        
          <Link to={`/vendorsByMarket/${props.profile.firebase_id}`}>
            See Profile & Vendors
          </Link>
        
      </div>
    </div>
  );
};

export default MarketProfileCard;
