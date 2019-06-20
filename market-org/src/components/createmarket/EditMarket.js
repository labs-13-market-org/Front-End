import React, { useContext, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import axios from "../../axios-instance";
import "./CreateMarket.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import TextMaskCustom from '../phonenumberformat/PhoneNumberFormat';
import {
  Container,
  Paper,
  Button,
  Input,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import queryString from "query-string";
import { AuthContext } from "../authContext/authState";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = theme => ({
  textColor: {
    borderWidth: "1px",
    color: "#ffffff !important",
    borderColor: "#026440 !important"
  },
  notchedOutline: {
    borderWidth: "3px",
    borderColor: "rgba(180, 45, 90, 0.911) !important",
    color: "#ffffff",
    borderRadius: "25px"
  }
});

const CreateMarket = props => {
  const { classes } = props;
  const { currentUser } = useContext(AuthContext);
  const [quantity, setQuantity] = useState("");

  const [price, setPrice] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [available, setAvailable] = useState(true);

  const [open, setOpen] = useState(false);
  const [market_name, setMarketName] = useState("");
  const [contact_first_name, setFirstName] = useState("");
  const [contact_last_name, setLastName] = useState("");
  const [address, setAddres] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [phone_number, setPhoneNumber] = useState({textmask: '(  )    -    '});
  // const [stalls, setStalls] = useState([])

  const routeToHome = () => {
    props.history.push(`/vendorsByMarket/${currentUser.uid}`);
  };

//   const initStripeConnection = () => {
//     const populateInputs = {
//       market_name,
//       contact_first_name,
//       contact_last_name,
//       address,
//       city,
//       state,
//       zipcode,
//       phone_number,
//       email: currentUser.email
//     };
//     console.log("initstripe", populateInputs);
//     axios.post('stripe/authorize', populateInputs)
//       .then(res => {
//         console.log("createmarket res data:", res.data);
//         window.location.href = res.data;
//         addMarket();
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
const handleChange = name => event => {
    setPhoneNumber({
      [name]: event.target.value,
    });
  };

  const editMarket = () => {
    const { textmask } = phone_number;
    const market = {
      market_name,
      contact_first_name,
      contact_last_name,
      address,
      city,
      state,
      zipcode,
      phone_number: textmask,
      
    };
    console.log("text", textmask)
    console.log("edit",market)
    console.log(currentUser.uid);
    axios
      .put(`/markets/${currentUser.uid}`, market)
      .then(res => {
        console.log("Update", res.data);
        
      })
      .catch(err => {
        console.log(err);
      });
  };

//   const addStall = () => {
//     const stall = {
//       size: {
//         length: length,
//         width: width
//       },
//       price,
//       available
//     };
//     for (let i = 0; i < quantity; i++) {
//       console.log(currentUser);
//       axios
//         .post(`/stalls/market/${currentUser.uid}`, stall)
//         .then(res => {
//           console.log(res);
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <React.Fragment>
      <div className="market-form-wrapper">
      <div className='market-form-left'>  
      </div>
      <div className='market-form-right'>
        <h1>Update Your Market</h1>
        <form>
          <TextField
            required
            className="input-field"
            id="marketName"
            name="marketName"
            label="Market Name"
            value={market_name}
            onChange={e => setMarketName(e.target.value)}
            fullWidth
            autoComplete="fname"
            margin="normal"
          />
          
          <TextField
            required
            className="input-field"
            id="firstName"
            name="firstName"
            label="First Name"
            value={contact_first_name}
            onChange={e => setFirstName(e.target.value)}
            fullWidth
            autoComplete="fname"
            margin="normal"
          />

          <TextField
            required
            className="input-field"
            id="lastName"
            name="lastName"
            label="last Name"
            value={contact_last_name}
            onChange={e => setLastName(e.target.value)}
            fullWidth
            autoComplete="fname"
            margin="normal"
          />

          <TextField
            required
            className="input-field"
            id="address"
            name="address"
            label="Adress"
            value={address}
            onChange={e => setAddres(e.target.value)}
            fullWidth
            autoComplete="fname"
            margin="normal"
          />
          <TextField
            required
            className="input-field"
            id="city"
            name="city"
            label="City"
            value={city}
            onChange={e => setCity(e.target.value)}
            fullWidth
            autoComplete="fname"
            margin="normal"
          />
          <TextField
            required
            className="input-field"
            id="state"
            name="state"
            label="State"
            value={state}
            onChange={e => setState(e.target.value)}
            fullWidth
            autoComplete="fname"
            margin="normal"
         
           
          />
          <TextField
            required
            className="input-field"
            id="zipCode"
            name="zipCode"
            label="Zip Code"
            value={zipcode}
            onChange={e => setZipCode(e.target.value)}
            fullWidth
            autoComplete="fname"
            margin="normal"
            
          />
          {/* <TextField
            required
            className="input-field"
            id="phone_number"
            name="phone_number"
            label="Phone Number"
            value={phone_number}
            onChange={e => setPhoneNumber(e.target.value)}
            fullWidth
            autoComplete="fname"
            margin="normal"
            
          /> */}
           <InputLabel>Phone Number</InputLabel>
            <Input
            required
            className="input-field"
            id="phone_number"
            name="phone_number"
            label="Phone Number"
            value={phone_number.textmask}
            onChange={handleChange('textmask')}
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
          />

          {/* <div style={{ width: "100%", marginTop: "25px" }}>
            <Typography
              variant="h6"
              gutterBottom
              style={{ textAlign: "center", fontSize: "16px" }}
            >
              Available Stalls
            </Typography>
          </div> */}
          {/* <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly"
            }}
          >
            <TextField
              style={{ width: "20%" }}
              id="outlined-number"
              label="quantity"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              variant="outlined"
            />
            <TextField
              style={{ width: "20%" }}
              id="outlined-bare"
              label="width(ft)"
              value={width}
              type="number"
              className={classes.textField}
              onChange={e => setWidth(e.target.value)}
              margin="normal"
              variant="outlined"
              inputProps={{ "aria-label": "bare" }}
            />
            <TextField
              style={{ width: "20%" }}
              id="outlined-bare"
              label="length(ft)"
              value={length}
              type="number"
              className={classes.textField}
              onChange={e => setLength(e.target.value)}
              margin="normal"
              variant="outlined"
              inputProps={{ "aria-label": "bare" }}
            />
            <TextField
              id="outlined-adornment-amount"
              style={{ width: "20%" }}
              className={classes.textField}
              variant="outlined"
              margin="normal"
              label="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                )
              }}
            />
          </div> */} 

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px"
            }}
          >
            <Button
              className="button-market-register"
              variant="contained"
              color="primary"
              onClick={routeToHome}
            >
              Back
            </Button>

            <Button
              className="button-market-register"
              variant="contained"
              color="primary"
              onClick={editMarket}
            >
              Submit
            </Button>
          </div>
        </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default withRouter(withStyles(styles)(CreateMarket));