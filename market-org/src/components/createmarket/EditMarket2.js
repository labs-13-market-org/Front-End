import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../axios-instance";
import "./CreateMarket.css";
import TextMaskCustom from '../phonenumberformat/PhoneNumberFormat';
import {
  CssBaseline,
  TextField,
  Button,
  Input,
  InputBase,
  InputLabel,
  makeStyles,
  InputAdornment, 
  IconButton,
  Typography,
  Divider
} from "@material-ui/core";

import { 
  Edit
} from "@material-ui/icons"

import { AuthContext } from "../authContext/authState";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '0',
        marginBottom: '0'
    },
    layout: {
      width: 'auto',
      border: 'solid',
      borderWidth: 'thin',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    container: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
          padding: theme.spacing(1),
        },
      },
    marketsetting: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },

  }));

const EditMarket = props => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [quantity, setQuantity] = useState("");

  const [price, setPrice] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [available, setAvailable] = useState(true);

  const [edit, setEdit] = useState(false)
  const [data, setData ] = useState({})
  const [market_name, setMarketName] = useState("");
  const [contact_first_name, setFirstName] = useState("");
  const [contact_last_name, setLastName] = useState("");
  const [address, setAddres] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [phone_number, setPhoneNumber] = useState({textmask: '(  )    -    '});



 useEffect(() => {
     console.log("fetching")
     const fetch = async () => {
         const result = await axios.get(`/markets/${currentUser.uid}`)
         console.log(result.data)
         setData(result.data)
     };
     fetch()
 }, [])

  const routeToHome = () => {
    props.history.push(`/vendorsByMarket/${currentUser.uid}`);
  };

const handleChange = name => event => {
    setPhoneNumber({
      [name]: event.target.value,
    });
  };

  const editPage = () => {
      console.log("clicked!")
      setEdit(true)
      if(edit) {
          setEdit(false)
      }
  }

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
    console.log("market", market)
    axios
      .put(`/markets/${currentUser.uid}`, market)
      .then(res => {
        console.log("Update", res.data);
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
      });
      
    //   props.history.push(`/vendorsByMarket/${currentUser.uid}`)
  };

  return (
    <React.Fragment>
    <CssBaseline />
    { 
        edit ?

        <main className={classes.layout}>
        
        <div className={classes.container}>
        <div className={classes.marketsetting}>
            <h1>Market Settings</h1>
            <div style={{display: 'flex', alignItems: 'flex-end'}}>
            <IconButton onClick={editPage}>
            <Edit  />
            </IconButton>
            <h1 style={{fontSize: '1rem', fontWeight: 'normal'}}>Edit</h1>
            </div>
        </div>
        <form className={classes.root}>
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
          />
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
            fullWidth
          />
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
              Save
            </Button>
          </div>
        </form>
        </div>
        </main>
         :
         <main className={classes.layout}>
        
        <div className={classes.container}>
        <div className={classes.marketsetting}>
            <h1>Market Settings</h1>
            <div style={{display: 'flex', alignItems: 'flex-end'}}>
            <IconButton>
            <Edit onClick={editPage} />
            </IconButton>
            <h1 style={{fontSize: '1rem', fontWeight: 'normal'}}>Edit</h1>
            </div>
        </div>
        <form className={classes.root}>
        <div>
          <Typography style={{marginTop: '20px'}}>
          <span style={{float: 'left', width: '165px'}}>Market Name</span>
                 <Typography><span style={{opacity: '.5'}}>{data.market_name}</span></Typography>
          </Typography>
          <Divider/>
          <Typography style={{marginTop: '20px'}}>
          <span style={{float: 'left', width: '165px'}}>First Name</span>
                 <Typography><span style={{opacity: '.5'}}>{data.contact_first_name}</span></Typography>
          </Typography>
          <Divider/>
          <Typography style={{ display:'flex', justifyContent:'flex-start', alignItems:'base-line', marginTop: '20px'}}>
                 <span style={{float: 'left', width: '165px'}}>Last Name</span>
                 <Typography><span style={{opacity: '.5'}}>{data.contact_last_name}</span></Typography>
          </Typography>
          <Divider/>
          <Typography style={{marginTop: '20px'}}>
          <span style={{float: 'left', width: '165px'}}>Address</span>
                 <Typography><span style={{opacity: '.5'}}>{data.address}</span></Typography>
          </Typography>
          <Divider/>
          <Typography style={{marginTop: '20px'}}>
          <span style={{float: 'left', width: '165px'}}>City</span>
                 <Typography><span style={{opacity: '.5'}}>{data.city}</span></Typography>
          </Typography>
          <Divider/>
          <Typography style={{marginTop: '20px'}}> 
          <span style={{float: 'left', width: '165px'}}>State</span>
                 <Typography><span style={{opacity: '.5'}}>{data.state}</span></Typography>
          </Typography>
          <Divider/>
          <Typography style={{marginTop: '20px'}}>
          <span style={{float: 'left', width: '165px'}}>Zip Code</span>
                 <Typography><span style={{opacity: '.5'}}>{data.zipcode}</span></Typography>
          </Typography>
          <Divider/>
          <Typography style={{marginTop: '20px'}}>
          <span style={{float: 'left', width: '165px'}}>Phone Number</span>
                 <Typography><span style={{opacity: '.5'}}>{data.phone_number}</span></Typography>
          </Typography>
          <Divider/>
          </div>
        </form>
        </div>
        </main>
    
    }
    </React.Fragment>
  );
};
export default withRouter(EditMarket);