import React, { useContext, useState } from 'react';
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { NavLink } from 'react-router-dom';
import { auth } from "../../firebase";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ProfileMenu from './ProfileMenu'
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from '@material-ui/styles';
import MenuBars from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import Profile from '@material-ui/icons/AccountCircle';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Expand from '@material-ui/icons/ExpandMore';
import Clear from '@material-ui/icons/Clear';
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import axios from "../../axios-instance";
import Slide from '@material-ui/core/Slide';
import './navbar.css'
import SignIn from '../login/SignIn';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1, 
    display: 'none',
// border: '1px solid red',
['@media (max-width: 750px)']: {
    display: 'block',
   }
  },
 
  title: {
    flexGrow: 1,
    display: 'flex',
  justify: 'flex-start',
  color: 'white',
    // border: '1px solid green',
  },

  link: {
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    textDecoration: 'none',  
  },


  closed: {
    display: 'none'
  },

  closeButton: {
    position: 'absolute',
    right: '5px'
  },

  menuItem: {
    color: 'white',
    textDecoration: 'none'
  },
  shoppingCart: {
    position: 'absolute',
    right: '25px',
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    // border: '1px solid red',
  },
  profileLink: {
    // color: 'white',
    // fontSize: '1.2rem',
    // cursor: 'pointer',
    // position: 'absolute',
    // right: '75px',
    border: '1px solid red',
  },
  home: {
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    position: 'absolute',
    right: '110px',
    // border: '1px solid red',
  }
}));

const StyledMenu = withStyles({
  paper: {
    marginTop: '3rem',
    backgroundColor: '#b42d5ae8',
    height: '170px',
    width: '10%',
    ['@media (max-width: 660px)']: {
     width: '40%',
    //   border: '2px solid red',
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
  const [openNav, setOpenNav] = useState(false)
  const { currentUser } = useContext(AuthContext);
  const { vendor } = useContext(VendorContext);

  const handleClick = (event) => {
      setOpenNav(true)
    // setAnchorEl(event.currentTarget);
    console.log('clicked')
  }

  const handleClose = ()  => {
    setOpenNav(false)
  }
  
  const toHome = () => {
      props.history.push('/')
      setOpenNav(false)
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

  const toCart = () => {
    let firebase_id = localStorage.getItem('firebaseId')
      props.history.push(`/cart/${firebase_id}`)
  }

  const toAllMarkets = () => {
    props.history.push('/markets')
    setOpenNav(false)
  }

  const toAllVendors = () => {
    props.history.push("/allVendors")
    setOpenNav(false)
  }

  const register = () => {
    props.history.push("/signup")
    setOpenNav(false)
  };

  const login = () => {
    props.history.push('/signin')
  }
  const logout = () => {
    auth.signOut();
    localStorage.clear();
    props.history.push("/");
  };

  const classes = useStyles();
  const user_type = localStorage.getItem('userTypes')
  // console.log(vendor, 'vendor from mobile nav')

  return (
    <div className={classes.root} >
      <Typography variant="h6" className={classes.title} />
               <Typography variant="h6"  className={classes.title}>
                   
                   <IconButton
                      onClick={handleClick}
                      aria-controls="open menu" 
                      color="inherit"
                      aria-label="open menu"
                      className={classes.link}
                    >
                      <MenuBars className={classes.icon} />
                    </IconButton>
                    <IconButton
                      onClick={toHome}
                      aria-controls="home" 
                      color="inherit"
                      aria-label="home"
                      className={classes.home}
                    >
                      <Home />
                    </IconButton>
                   
            <ProfileMenu className={classes.profileLink}/>
                    <IconButton
                        edge="end"
                        className={user_type === 'vendor' ? classes.shoppingCart : classes.closed}
                        color="inherit"
                        aria-label="Shopping cart"
                    >
              <ShoppingCart onClick={toCart} />
            </IconButton>
                       {/* <Slide direction="down" in={handleClick} mountOnEnter unmountOnExit> */}
                        <div className={openNav ? 'mobile-nav' : classes.closed}>
                        <Typography variant="h4"  >
                        <span style={{borderBottom: '1.5px solid lightgreen', margin: ' 2rem 1rem', textTransform: 'uppercase', letterSpacing: '7.5px' }}>Market Organizer</span>

                        </Typography>
                            <IconButton 
                            onClick={handleClose}
                            aria-controls="close" 
                            color="inherit"
                            aria-label="close"
                            className={classes.closeButton}
                            >
                                <Clear/>
                            </IconButton>
                            
                            <div className='links'>
                            <NavLink className='nav-link'  activeClassName='selected' onClick={toHome} exact to='/'>Home  
                                <IconButton 
                                    // onClick={handleClose}
                                    aria-controls="expand" 
                                    color="inherit"
                                    aria-label="expand"
                                    className={classes.expand}
                                >
                                    <Expand/>
                                </IconButton>
                            </NavLink>
                            <NavLink className='nav-link' activeClassName='selected' exact to='/markets' onClick={toAllMarkets}>
                                View Our Markets 
                                    <IconButton 
                                        onClick={handleClose}
                                        aria-controls="expand" 
                                        color="inherit"
                                        aria-label="expand"
                                        className={classes.expand}
                                    >
                                        <Expand/>
                                </IconButton>
                            </NavLink>
                            <NavLink className='nav-link' activeClassName='selected' exact to='/allVendors' onClick={toAllVendors}>
                                View Our Vendors
                                <IconButton 
                                        onClick={handleClose}
                                        aria-controls="expand" 
                                        color="inherit"
                                        aria-label="expand"
                                        className={classes.expand}
                                    >
                                        <Expand/>
                                </IconButton>
                            </NavLink>
                            <NavLink className='nav-link' activeClassName='selected' exact to='/signup' onClick={register}>
                                Register
                                <IconButton 
                                    onClick={handleClose}
                                    aria-controls="expand" 
                                    color="inherit"
                                    aria-label="expand"
                                    className={classes.expand}
                                >
                                    <Expand/>
                                </IconButton>
                            </NavLink>
                            {/* <NavLink className='nav-link' activeClassName='selected' exact to='/signup'>Become A Vendor</NavLink> */}
                            <NavLink className='nav-link' activeClassName='selected' exact to='/signin' onClick={SignIn}>
                            {currentUser ? 'Logout' : 'Login'}
                                <IconButton 
                                        onClick={handleClose}
                                        aria-controls="expand" 
                                        color="inherit"
                                        aria-label="expand"
                                        className={classes.expand}
                                    >
                                        <Expand/>
                                </IconButton>
                            </NavLink>
                            <NavLink className='nav-link' activeClassName='selected' exact to='/contact'>
                                Contact
                                <IconButton 
                                        onClick={handleClose}
                                        aria-controls="expand" 
                                        color="inherit"
                                        aria-label="expand"
                                        className={classes.expand}
                                    >
                                        <Expand/>
                                </IconButton>
                            </NavLink>
                            <NavLink className='nav-link' activeClassName='selected' exact to='/about'>
                                About
                                <IconButton 
                                        onClick={handleClose}
                                        aria-controls="expand" 
                                        color="inherit"
                                        aria-label="expand"
                                        className={classes.expand}
                                    >
                                        <Expand/>
                                </IconButton>
                            </NavLink>
                            </div>
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