import React, { useState, useEffect, useContext } from "react";
import { MarketProfilesContext } from "../context/GlobalContext.js";
import { withStyles, Typography, TextField, Button } from "@material-ui/core";
import MarketProfileCard from "./marketProfileCard";
import styled from "styled-components";
import { Route, NavLink, Switch } from "react-router-dom";
import StallsList from "../stalls/stallsList";
import axios from "../../axios-instance";
import "./marketLandingPage.css";
import LinearProgress from '@material-ui/core/LinearProgress';

const MarketLandingPage = props => {
  const [markets, setMarkets] = useState([]);
  const [marketProfiles] = useContext(MarketProfilesContext);
  const [isLoading, setIsLoading] = useState(true)
  console.log("check marketProfiles:", marketProfiles);

  useEffect(() => {
    axios
      .get("/markets/")
      .then(res => {
        console.log(res.data);
        setMarkets(res.data);
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <React.Fragment>
    
       {/* isLoading ?
      // <LinearProgress color="secondary"/> : */}
      <div className="landing-page-wrapper">
          <div className='market-list-page-header'>
              <h2>Available Markets</h2>
          </div>
        <div className='list-title'>
        
        </div>
        {markets.map(market => {

        return (<MarketProfileCard className='market-card' profile={market} key={market.firebase_id} />)

        })}
      </div>
    
    </React.Fragment>
  );
};

export default MarketLandingPage;