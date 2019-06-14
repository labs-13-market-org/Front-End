import React, { useEffect, useState, useContext, useReducer, createContext } from "react";
import styled from 'styled-components';
import axios from "../../axios-instance";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useButtonStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));


const usePaperStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(1, 50),
      display: "flex",
      flexdirection: "row",
      justifyContent: "center"
    },
  }));

const useGridStyle = makeStyles(theme => ({
    root: {
      width: "100%"
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2),
    },
  }));


const useStyles = makeStyles((theme, props) => ({
    root: {
      flexGrow: 3,
    },
    paper: {
      padding: theme.spacing(2),
      width: "100%",
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const ProfileCard = styled.div`
    background-color: ${props => props.toggled ? "red" : "blue"}
`

// https://medium.com/trabe/passing-callbacks-down-with-react-hooks-4723c4652aff


const Rent = (payload) => {
    const dispatch = useContext(CartDispatch);
    const classes = useButtonStyles();

    return (
      <div className="action-rent">
        <button onClick={() => dispatch({ type: "rent", payload: {stalls_id: payload.payload.stall_id, cart_id: payload.payload.cart_id }})}>Rent</button>
      </div>
    );
  };

const UnRent = (payload) => {
    const dispatch = useContext(CartDispatch);
    const classes = useButtonStyles();

    return (
      <div className="action-unrent">
        <button onClick={() => dispatch({ type: "unrent", payload: {stalls_id: payload.payload.stall_id, cart_id: payload.payload.cart_id }})}>Unrent</button>
      </div>
    );
  };


const MainButtons = (payload) => {
    if (payload.rentStatus) {
        return(
            <div className="rent">
            <Rent payload={payload}/>
            </div>
        )
    }
    else{
        return(
            <div className="unrent">
            <UnRent payload={payload}/>
            </div>
        )
    }
}

const CartDispatch = createContext(null);

const Stall = (props) => {

    const [isAvailable, setAvailableStatus] = useState(props.stall.available);
    const [buttonState, setButtonState] = useState(false);
    console.log("Current stall:", props.stall);


    const reducer = (state, action) => {
          switch (action.type) {
            case "rent":
                axios.post(`cart/add-stall-to-cart/${action.payload.cart_id}`, {stalls_id: action.payload.stalls_id}).then( 
                res => {

                    console.log("Rent: ", res);

                    axios.request({
                        method: 'PUT',
                        url: `stalls/${action.payload.stalls_id}`, 
                        data: {available: false}})
                    .then((res) => {
                        console.log("Update unavailable:" , res);
                        // setRentStatus(false);
                        // setAvailableStatus(false);
                        // setButtonState(false);
                        props.setStallChangedStatus(true);
                        // setAvailableStatus(false);
                    })
                    .catch(err => console.log(err))



                }).catch(err => console.log(err))

             
            case "unrent":
                axios.request({
                    method: 'DELETE',
                    url: `/cart/delete-stall-from-cart/${action.payload.cart_id}`, 
                    data: {stalls_id: action.payload.stalls_id}
                    }).then(res => {

                        console.log("Unrent: ", res);


                        axios.request({
                            method: 'PUT',
                            url: `stalls/${action.payload.stalls_id}`, 
                            data: {available: true}})
                        .then((res) => {
                        console.log("Update available:", res);
                    // setRentStatus(true);
                    // setAvailableStatus(true);
                        // setButtonState(true);
                        props.setStallChangedStatus(true);
                        // setAvailableStatus(true);

                    })
                    .catch(err => console.log(err))

                    }).catch(err => console.log(err))

            default:
              return state;
          }
    }; 

    useEffect(() => {
        setAvailableStatus(props.stall.available)
    }, []);

    const [state, dispatch] = useReducer(reducer);

    const cart_id = localStorage.getItem("firebaseId");

    // const classes = usePaperStyles();
    // const GridClasses = useGridStyle();
    const classes = useStyles();

    return(
        <Paper className={classes.root}>
        <Grid container spacing={10}>
        <Grid item xs={2}>
        <h2>Available to rent:</h2>
        <h3>{props.stall.available ? "Available" : "Unavailable"}</h3>
        </Grid>
        <CartDispatch.Provider value={dispatch}>

            <Grid item xs={2}>
            <h3>Stall Id:</h3>

            {props.stall.id}
            </Grid>

            <Grid item xs={2}>
            <h3>Quantity</h3>
            {props.stall.qty}
            </Grid>

            <Grid item xs={2}>
                <h3> Size </h3>
                <ul>
                <li><b>Length:</b>{props.stall.size.length} inches</li>
                <li><b>Width:</b> {props.stall.size.width} inches</li>
                </ul>
            </Grid>

            <Grid item xs={2}>
                <MainButtons stall_id={props.stall.id} cart_id={cart_id} rentStatus={props.stall.available} />
            </Grid>
        
        </CartDispatch.Provider>
        </Grid>
        </Paper>
    )
}

export default Stall;