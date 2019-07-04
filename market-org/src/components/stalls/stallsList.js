import React, { useEffect, useState, useContext } from "react";
import axios from "../../axios-instance";
import Stall from "./stall.js";

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import "./stallsList.css"
import './Stalls.css';
import { VendorContext, VendorProvider } from "../context/vendor";
import rentIcon from "../../images/stallicon.png";

const StallsList = (props) => {

    const [stalls, setStalls] = useState([]);
    const [market, setMarket] = useState({})
    const [hasAStallChanged, setStallChangeStatus] = useState(false);

    const [vendorProfile, setVendorProfile] = useContext(VendorContext);

    console.log("Vendor Profile:", vendorProfile)

    useEffect(() => {
        axios.get(`/stalls/market/${props.location.state.firebase_id}`)
        .then(res => {
            console.log("Stalls : ", res.data)
            let stallItems = res.data.stallData;
            const market = res.data.marketData;
            setMarket(market)
            console.log("stalls",typeof stalls);
           setStalls(stallItems);
           setStallChangeStatus(false);
        }).catch(err => {
                console.log(err.message);
        })

    }, [hasAStallChanged]);

    const addToCart = (stalls_id, market_id) => {
        const cart_id = localStorage.getItem('firebaseId')
        console.log(cart_id, 'vendor firebase id')
        console.log(market_id, "our market id");
        if(localStorage.getItem("userTypes") != "vendor") {
            alert("You must be a vendor to rent a stall")
        }

            axios.request({
              method: "POST",
              url: `cart/add-stall-to-cart/${cart_id}`, 
              data: {stalls_id: stalls_id, market_id: market_id}
            }).then(res => {
              console.log("res:", res);

              }).catch(err => {
                console.log(err.message);
                alert("You already have stalls in your cart from an existing market. Please remove that stall from your cart, if you wish to rent from us");
            }

            )

      }

    const useStyles = makeStyles(theme => ({
        
      }));
 
    const classes = useStyles();

    console.log("Getting stalls ", stalls);
    
    return(
      
      <div className="rent-page-wrapper">
      <div className="rent-page-header">
        <h2>Rent Stalls</h2>
      </div>
      <div className="rent-icon">
      <img src={rentIcon} alt="logo" />
      </div>
          <div className='stall-wrapper'>
  
            
            <div className='rent-market-info'>
            <h2>Selected Market:</h2>
            <h4>{market.market_name}</h4>
            <h4>{market.address}</h4>
            <h4>{market.city}</h4>
            <h4>{market.state}</h4>
            <h3>{market.phone_number}</h3>
            </div>
            
          <div className='stalls'>
            <h2>Available Stalls:</h2>
            {Object.keys(stalls).map((stall, index) => (
              <div className={stalls[stall].available  == true ? "stall" : "closed"} key ={index}>
                {console.log(stalls[stall].id, 'stall id')}
                <h3>Size:</h3>
                <p> Length: {stalls[stall].size.length} ft. Width: {stalls[stall].size.width} ft.</p>
                <h3>Price:</h3>
                <p>${stalls[stall].price}</p>
                <Button variant="contained" className='rent-add-button' onClick={() => addToCart(stalls[stall].id, stalls[stall].market_id)}>Add To Cart</Button>
              </div>
            ))}
          </div>
        </div> */}

        <Grid container spacing={3}>
          <Grid item  >
            <Paper className={classes.paper}>
              <h3>Selected Market:</h3>
              <h4>{market.market_name}</h4>
              <h4>{market.address}</h4>
              <h4>{market.city}</h4>
              <h4>{market.state}</h4>
              <h4>{market.phone_number}</h4>
            </Paper>
          </Grid>
          <Grid item  >
            <Paper className={classes.paper}>
            <h2>Available Stalls:</h2>
              {Object.keys(stalls).map((stall, index) => (
                <div className={stalls[stall].available  == true ? "stall" : "closed"} key ={index}>
                  {console.log(stalls[stall].id, 'stall id')}
                  <h3>Size:</h3>
                  <p> Length: {stalls[stall].size.length} ft. Width: {stalls[stall].size.width} ft.</p>
                  <h3>Price:</h3>
                  <p>${stalls[stall].price}</p>
                  <Button variant="contained" className='rent-add-button' onClick={() => addToCart(stalls[stall].id, stalls[stall].market_id)}>Add To Cart</Button>
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )

    
}

export default StallsList;
