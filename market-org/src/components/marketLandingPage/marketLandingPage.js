import React, { useState, useEffect, useContext } from "react";
import { MarketProfilesContext } from "../context/GlobalContext.js";
import { withStyles, Typography, TextField, Button } from "@material-ui/core";
import MarketProfileCard from "./marketProfileCard";
import styled from "styled-components";
import { Route, NavLink, Switch } from "react-router-dom";
import StallsList from "../stalls/stallsList";
import axios from "../../axios-instance";
import "./marketLandingPage.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import marketIcon from "../../images/stallicon.png";

const MarketLandingPage = props => {
  const [markets, setMarkets] = useState([]);
  const [marketProfiles] = useContext(MarketProfilesContext);
  const [isLoading, setIsLoading] = useState(true);
  console.log("check marketProfiles:", marketProfiles);
  console.log("props: ", props);

  useEffect(() => {
    axios
      .get("/markets/")
      .then(res => {
        console.log(res.data);
        setMarkets(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <LinearProgress color="secondary" />
      ) : (
        <div className="market-landing-page-wrapper">
          <div className="market-list-page-header">
            <h2>Available Markets</h2>
          </div>
          <div className="market-landing-icon">
            <img src={marketIcon} alt="logo" />
          </div>
        
            <div className="market-card">
              {markets.map(market => {
                return (
                  <MarketProfileCard
                    
                    profile={market}
                    key={market.firebase_id}
                  />
                );
              })}
            </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MarketLandingPage;
