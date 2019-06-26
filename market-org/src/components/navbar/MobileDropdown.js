import React, { useContext, useState } from 'react';
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { NavLink } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from '@material-ui/styles';
import MenuBars from '@material-ui/icons/Menu';
import Profile from '@material-ui/icons/AccountCircle';
import { AuthContext } from "../authContext/authState";
import axios from "../../axios-instance";
import Slide from '@material-ui/core/Slide';
import './navbar.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1, 
//     position: 'absolute',
//    left: '0',
//    marginTop: '2rem',

  },
 
  title: {
    flexGrow: 1,
  
    // border: '1px solid green',
  },

//   appBar: { 
//     backgroundColor: '#38212E',
//   },

  link: {
    color: 'white',
    fontSize: '1.2rem',
      position: 'absolute',
    left: '0',
    
    // marginTop: '2rem',
    border: '1px solid red',
    // margin: "10px",
    cursor: 'pointer',
    textDecoration: 'none',
    // '&:hover': {
    //   borderBottom: '1px solid #30cc32'
    // }
    
  },


  closed: {
    display: 'none'
  },
  menuItem: {
    color: 'white',
    textDecoration: 'none'
  },
 
}));

const StyledMenu = withStyles({
  paper: {
    marginTop: '3rem',
    backgroundColor: '#b42d5ae8',
    height: '170px',
    width: '10%',
    ['@media (max-width: 660px)']: {
     width: '40%',
      border: '2px solid red',
     backgroundColor: 'green'
    }
  },

  close: {
    display: 'none'
  }
})(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
    
  />
));

const MobileDropdown = (props) => {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [stripe_acc_id, setStripeAccId] = useState(null)
  const [OpenNav, setOpenNav] = useState(false)
  const { currentUser } = useContext(AuthContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log('clicked')
  }

  const handleClose = ()  => {
    setAnchorEl(null);
  }
  
  const routeToProfile = () => {
    const usertype = localStorage.getItem("userTypes")
    console.log("userType", usertype)
    if(usertype === "market") {
      props.history.push(`/vendorsByMarket/${currentUser.uid}`)
    } else {
      props.history.push(`/oneVendorPrivate/${currentUser.uid}`)
    }
    
  }

  const accountSettingRoute = () => {
    const usertype = localStorage.getItem("userTypes")
    if(usertype === "market") {
      props.history.push(`/edit-market/${currentUser.uid}`)
    } else {
      props.history.push(`/oneVendorPrivate/${currentUser.uid}`)
    }
  }

  const stripeDashboardLink = () => {  
    if(stripe_acc_id === null) {
      console.log("hello")
      axios.get(`/markets/${currentUser.uid}`).then(res => {
        console.log(res)
        const stripe_id = res.data.stripeAccountId
        console.log("stripeid0",stripe_id)
        return axios.post('/stripe/stripe-dashboard', {stripe_acc_id: stripe_id}).then(res => {
          console.log('link:', res.data)
          window.open(res.data.url)
        })
      })
    }
  }

  const classes = useStyles();
  console.log(props, 'props from mobile nav')

  return (
    <div className={classes.root} >
      <Typography variant="h6" className={classes.title} />
               <Typography variant="h6"  className={classes.title}>
                   <IconButton
                      onClick={handleClick}
                      aria-controls="profile" 
                      color="inherit"
                      aria-label="profile"
                      className={classes.link}
                    >
                      <MenuBars className={classes.icon} />
                    </IconButton>

                    {/* <IconButton
                        onClick={handleClick}
                        color="inherit"
                        aria-label='profile'
                    >
                        <Expand />
                     </IconButton>  */}
           
                       {/* <Slide direction="down" in={handleClick} mountOnEnter unmountOnExit> */}
                        <div className='mobile-nav'>
                            <NavLink>Home</NavLink>
                            <NavLink>View Our Markets</NavLink>
                            <NavLink>View Our Vendors</NavLink>
                            <NavLink>Become A Market</NavLink>
                            <NavLink>Become A Vendor</NavLink>
                            <NavLink>Login</NavLink>
                            <NavLink>Contact</NavLink>
                            <NavLink>About</NavLink>
                    {/* <StyledMenu
                        id="profile"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        className='mobile-nav'
                    >
                        <MenuItem className={classes.menuItem} onClick={routeToProfile}>View Profile</MenuItem>
                        <MenuItem className={classes.menuItem} onClick={props.handleRegOpen}>{props.user === 'vendor' ? 'My Orders' : 'My Stalls'}</MenuItem>
                        {
                          props.user === 'market' ? <MenuItem className={classes.menuItem} onClick={stripeDashboardLink}>Stripe Dashboard</MenuItem> : null
                        }
                        <MenuItem className={classes.menuItem} onClick={accountSettingRoute}>Account Settings</MenuItem>
                        <MenuItem className={classes.menuItem} onClick={props.logout}>Logout</MenuItem>
                    </StyledMenu> */}
                    </div>
             {/* </Slide> */}
              </Typography>
    </div>
  )
}

export default withRouter(MobileDropdown);