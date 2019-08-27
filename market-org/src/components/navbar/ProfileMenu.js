import React, { useContext, useState } from 'react';
import { withRouter } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/styles';
import Expand from '@material-ui/icons/ExpandMore';
import Profile from '@material-ui/icons/AccountCircle';
import { AuthContext } from "../authContext/authState";
import axios from "../../axios-instance";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles(theme => ({
 dropdownIcon: {
    // border: '1px solid red', 
    display: 'flex', 
    justifyContent: 'center', 
    textAlign: 'center',  
    alignItems: 'center',
     color: 'white',
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
    height: 'auto',
    width: 'auto',
    color: 'white'
  },

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

const UserProfile = (props) => {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [stripe_acc_id, setStripeAccId] = useState(null)
  const { currentUser } = useContext(AuthContext);
  const usertype = localStorage.getItem("userTypes")

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = ()  => {
    setAnchorEl(null);
  }
  
  const routeToProfile = () => {
    
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

  const toMyStalls = (user_type) => {
    if (user_type == "vendor") {
      props.history.push('/vendorStall')
    }
    else if (user_type == "market") {
      props.history.push('/marketStall')
    }
    
  }

  const classes = useStyles();

  return (
    <div>
      <ListItem button onClick={handleClick} >
          <ListItemIcon className={classes.dropdownIcon} aria-controls="profile-menu" aria-haspopup="true">
          <Profile />
        </ListItemIcon>
          <Expand/>
      </ListItem>
        <StyledMenu
            id="profile"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
          <MenuItem className={classes.menuItem} onClick={routeToProfile}>View Profile</MenuItem>
          <MenuItem className={classes.menuItem} onClick={toMyStalls}>{usertype === 'vendor' ? 'My Stalls' : 'View Orders'}</MenuItem>
          { props.user === 'market' ? <MenuItem className={classes.menuItem} onClick={stripeDashboardLink}>Stripe Dashboard</MenuItem> : null}
          <MenuItem className={classes.menuItem} onClick={accountSettingRoute}>Account Settings</MenuItem>
          <MenuItem className={classes.menuItem} onClick={props.logout}>Logout</MenuItem>
        </StyledMenu>
    </div>
  )
}

export default withRouter(UserProfile);