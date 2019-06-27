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
import Expand from '@material-ui/icons/ExpandMore';
import Clear from '@material-ui/icons/Clear';
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
// border: '1px solid red'
  },
 
  title: {
    flexGrow: 1,
    display: 'flex',
  justify: 'flex-start',
    // border: '1px solid green',
  },

//   appBar: { 
//     backgroundColor: '#38212E',
//   },

  link: {
    color: 'white',
    fontSize: '1.2rem',
    //   position: 'absolute',
    // left: '0',
    
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

  closeButton: {
    position: 'absolute',
    right: '5px'
  },

  expand: {
    // position: 'absolute',
    // right: '20px',
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
  const [openNav, setOpenNav] = useState(false)
  const { currentUser } = useContext(AuthContext);

  const handleClick = (event) => {
      setOpenNav(true)
    // setAnchorEl(event.currentTarget);
    console.log('clicked')
  }

  const handleClose = ()  => {
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

  const classes = useStyles();
  console.log(props, 'props from mobile nav')

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
                       {/* <Slide direction="down" in={handleClick} mountOnEnter unmountOnExit> */}
                        <div className={openNav ? 'mobile-nav' : classes.closed}>
                            <span style={{borderBottom: '1.5px solid lightgreen', margin: ' 1.5rem 1rem' }}>Market Organizer</span>
                            <IconButton 
                            onClick={handleClose}
                            aria-controls="profile" 
                            color="inherit"
                            aria-label="profile"
                            className={classes.closeButton}
                            >
                                <Clear/>
                            </IconButton>
                            
                            <div className='links'>
                            <NavLink className='nav-link'  activeClassName='selected' exact to='/'>Home  
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
                            <NavLink className='nav-link' activeClassName='selected' exact to='/markets'>
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
                            <NavLink className='nav-link' activeClassName='selected' exact to='/allVendors'>
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
                            <NavLink className='nav-link' activeClassName='selected' exact to='/signup'>
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
                            <NavLink className='nav-link' activeClassName='selected' exact to='/signin'>
                                Login
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