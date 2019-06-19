import React, { useState, useEffect, useContext } from "react";
import { MarketProfilesContext } from "../context/GlobalContext.js";
import { withStyles, Typography, TextField, Button } from "@material-ui/core";
import MarketProfileCard from "./marketProfileCard";
import styled from "styled-components";
import { Route, NavLink, Switch } from "react-router-dom";
import StallsList from "../stalls/stallsList";
import axios from "../../axios-instance";
import "./marketLandingPage.css";

const MarketLandingPage = props => {
  const [markets, setMarkets] = useState([]);
  const [marketProfiles] = useContext(MarketProfilesContext);
  console.log("check marketProfiles:", marketProfiles);

  useEffect(() => {
    console.log("Error");
    axios
      .get("/markets/")
      .then(res => {
        console.log(res.data);
        let markets = res.data;
        setMarkets(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  console.log("Rendering");

  return (
    <React.Fragment>
      <div className="landing-page-wrapper">
          <div className='market-list-page-header'>
              <h2>Available Markets</h2>
          </div>
        <div className='list-title'>
        
        </div>
        {markets.map(market => {
          return (
            <div className="market-card">
              <MarketProfileCard profile={market} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default MarketLandingPage;
