import React, { useEffect, useState} from 'react'
import axios from '../../axios-instance';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StripeCheckout from "react-stripe-checkout";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: '2rem',
    // marginBottom: '4rem',
    // height: '100vh'
  },
  cartItems: {
    display: 'flex',
    // marginTop: '3rem',
    justifyContent: 'center'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    padding: '2rem'
  },

  headers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '75%',
    margin: '0 auto'

  },
  priceHeader: {
      marginRight: '20rem',
      fontSize: '1.3rem',
      fontWeight: "fontWeightBold"
  },
  qtyHeader: {
    marginRight: '7rem',
    fontSize: '1.3rem',
    fontWeight: "fontWeightBold"

  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-around',
    // textAlign: 'justify',
    // color: theme.palette.text.secondary,
    color: 'black',
  },
  subtotal: {
      fontSize: '2rem',
      textAlign: 'right',
      marginRight: '10rem',
      marginTop: '3rem',
  },
  checkout: {
      
      display: 'flex',
      justifyContent: 'center',
      // marginTop: '3rem',
    // '&:hover': {
    //     backgroundColor: "#F5885F",
    //     textDecoration: 'underline'
    //  },
  },
  checkoutButton: {
    backgroundColor: '#F5885F',
    color: 'white',
     '&:hover': {
        backgroundColor: "lightgreen",
        color: 'white',
        border: '1px solid #F5885F'
     },
  }
}));

const MyVendorStalls = () => {
    const [orders, setOrders] = useState([])
    // const [stripe_id, setStripe_id] = useState('')

    useEffect(() => {
        let firebase_id = localStorage.getItem('firebaseId')
        console.log(firebase_id)
        axios.get(`/orders/vendor/${firebase_id}`)
            .then(res => {
                let ordersPerVendor = res.data
                console.log("Orders :", ordersPerVendor)
                setOrders(ordersPerVendor);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Typography className={classes.title}> <center>My Currently Purchased Stalls: </center></Typography>

            <Grid container spacing={4} className={classes.cartItems}>
            <Grid item xs={10}>
                    <Paper className={classes.paper}>
                    <Typography className={classes.priceHeader}><h3>Market Name</h3></Typography>
                    <Typography className={classes.priceHeader}><h3>Quantity</h3></Typography>
                    <Typography className={classes.qtyHeader}><h3>Price</h3></Typography>
                    </Paper>
            </Grid>
            </Grid>
            {Object.keys(orders).map((item, i) => (
                <div key={i}>
                <Grid container spacing={6} className={classes.cartItems}>
                    <Grid item xs={10}>
                    
                        <Paper className={classes.paper}>
                            <Typography variant="h6" component="h5">
                               {orders[item].market_name}
                            </Typography>

                            <Typography variant="h6" component="h5">
                                {orders[item].size.length} ft. by {orders[item].size.width} ft.
                            </Typography>
                            <Typography variant="h6" component="h5">
                            
                                 ${orders[item].price} 
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                </div>
            ))}
        </div>       
    )}
    
export default MyVendorStalls;