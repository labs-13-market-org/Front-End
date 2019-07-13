import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Expand from '@material-ui/icons/ExpandMore';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MenuBars from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import { auth } from "../../firebase";
import { withRouter } from "react-router-dom";
import VendorMenu from './MenuButton';
import ProfileMenu from './ProfileMenu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import {whiteColor, container} from '../global-styles/global';
import logo from '../../images/logo-white.png'


const useStyles = makeStyles(theme => ({
  appBar: { 
    background: 'transparent',
    // display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: whiteColor,
    width: "100%",
    position: "absolute",
    boxShadow: 'none',
  },

  container: {
    ...container,
    minHeight: "50px",
    color: whiteColor,
    // border: '1px solid red',
  },

  logo: {
    border: '1px solid red',
    width: '5%',
  },

  list: {
    width: '100%',
    // border: '1px solid purple',
    display: 'flex',
  },
  listItem: {
    textDecorationColor: '#38212E',
  },

  caret: {
    display: "inline-block",
    width: "0",
    height: "0",
    marginLeft: "4px",
    verticalAlign: "middle",
    borderTop: "4px solid",
    borderRight: "4px solid transparent",
    borderLeft: "4px solid transparent"
  },

  dropdownIcon: {
    // border: '1px solid red', 
    display: 'flex', 
    justifyContent: 'center', 
    textAlign: 'center',  
    alignItems: 'center'
  },
  dropDown: {
    border: '1px solid green',
    backgroundColor: '#b42d5ae8'
  },

  navIcon: {
    color: 'white',
  },
  
  close: {
    display: 'none'
  },
}));

const StyledMenu = withStyles({
  
  paper: {
    marginTop: '3rem',
    backgroundColor: '#b42d5ae8',
    height: '170px',
    width: '10%',
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

const StyledMarketMenu = withStyles({
  
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

function ButtonAppBar(props) {
  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  const [open, setOpen] = React.useState(true);
  const [openReg, setOpenReg] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openNav, setOpenNav] = React.useState(false);

  const firebaseId = localStorage.getItem('firebaseId');

  const handleClick = (event) => {
    // setOpenNav(!open)
    console.log('clicked')
    setAnchorEl(event.currentTarget);
  }
  const handleMarketClick = (event) => {
    // setOpenNav(!open)
    console.log('clicked')
    setAnchorEl(event.currentTarget);
  }
  const openNavBar = () => {
    setOpenNav(true)
    console.log('clicked')
  }


  const closeNavBar = () => {
    setOpenNav(false)
  }
  const handleClose = ()  => {
    setAnchorEl(null);
  }
  const handleRegOpen = () => {
    setOpenReg(true);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const toHome = () => {
    props.history.push('/')
  }

  const toAbout = () => {
    props.history.push('/about')
  }

  const routetoCreate = () => {
    props.history.push("/create-market");
  };

  const toAllVendors = () => {
    props.history.push("/allVendors");
  };

  const toPrivateVendorProfile = () => {    
    props.history.push(`/oneVendorPrivate/${firebaseId}`);
  };

  const toAllMarkets = () => {
    props.history.push('/markets')
  }

  const toMyStalls = (user_type) => {
    if (user_type == "vendor") {
      props.history.push('/vendorStall')
    }
    else if (user_type == "market") {
      props.history.push('/marketStall')
    }
    
  }

  const toCart = () => {
    let firebase_id = localStorage.getItem('firebaseId')
      props.history.push(`/cart/${firebase_id}`)
  }

  const register = () => {
    props.history.push("/signup");
  };

  const createMarket = () => {
    props.history.push("/create-market")
  }

  const login = () => {
    props.history.push('/signin')
  }
  const logout = () => {
    auth.signOut();
    localStorage.clear();
    props.history.push("/");
  };

  const about = () => {
    props.history.push("/about");
  }


  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const user_type = localStorage.getItem('userTypes')
  const isOpen = Boolean(anchorEl);
console.log('props', props)
  return (
    <div>
     
      <AppBar className= {classes.appBar}>
        <Toolbar className={classes.container}>
          <List component="nav" className={classes.list}>
         
            <ListItem button component={Link} onClick={toHome}>
              <ListItemText primary='Home' />
            </ListItem>

            <ListItem button onClick={handleMarketClick} >
              <div className={classes.dropdownIcon} aria-controls="market-menu" aria-haspopup="true" >
                <ListItemText primary='Markets' />
                <Expand/>
              </div>
            </ListItem>
            <StyledMarketMenu
              id="market-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              
             >
              <MenuItem onClick={register} >Register A Market</MenuItem>
              <MenuItem onClick={toAllMarkets}>View Our Markets</MenuItem>
              <MenuItem onClick={handleClose}>More Info</MenuItem>
            </StyledMarketMenu>
            <VendorMenu />
            <ListItem component={Link} onClick={toAbout} key='About' button >
              <ListItemText primary='About' />
            </ListItem>
            <ListItem button component={Link} exact to='/contact'>
              <ListItemText primary='Contact Us' />
            </ListItem>
            <ListItem button component={Link} onClick={currentUser ? logout : login}>
              <ListItemText primary={currentUser ? 'Logout' : 'Login'} />
            </ListItem>
            <ListItem button onClick={toCart}>
              <ListItemIcon className={user_type === 'vendor' ? classes.navIcon : classes.close}>
                <ShoppingCart />
              </ListItemIcon>
            </ListItem>
            {currentUser ? <ProfileMenu /> : null}
            
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar);
