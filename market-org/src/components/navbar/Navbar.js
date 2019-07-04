import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Expand from '@material-ui/icons/ExpandMore';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Clear from '@material-ui/icons/Clear';
import MenuBars from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import { auth } from "../../firebase";
import { Route, withRouter } from "react-router-dom";
import VendorMenu from './MenuButton';
import ProfileMenu from './ProfileMenu';
import MenuDropdown from './MobileDropdown';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import SignUp from '../register/SignUp';
import './navbar.css'
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {whiteColor, container} from '../global-styles/global';



const useStyles = makeStyles(theme => ({
  
  // root: {
  //   flexGrow: 1,
     
  // },


  appBar: { 
    background: 'transparent',
    // display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: whiteColor,
    width: "100%",
    // transition: "all 150ms ease 0s",
    // alignItems: "center",
    // flexFlow: "row nowrap",
    // justifyContent: "flex-start",
    position: "absolute",
    boxShadow: 'none',
  },

  container: {
    ...container,
    minHeight: "50px",
    color: whiteColor,
    // border: '1px solid red',
  },

  list: {
    // maxWidth: 360,
    width: '100%',
    // border: '1px solid purple',
    display: 'flex',
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
    border: '1px solid red', 
    display: 'flex', 
    justifyContent: 'center', 
    textAlign: 'center',  
    alignItems: 'center'
  },
  link: {
    color: 'white',
    fontSize: '1.2rem',
    margin: "10px",
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      borderBottom: '1px solid #30cc32'
    }
    
  },
  icon: {
    // ['@media (max-width:800px)']: { 
    //   display: 'none',
    // }
  },

  clearIcon: {
    // display: 'none',
    ['@media (max-width:660px)']: {
      position: 'absolute',
      left: '20px',
      color: 'white',
    }
   
  },
  closed: {
    display: 'none'
  },
  menuItem: {
    color: 'white',
    textDecoration: 'none',
    width: "100%"
  },
  mobileNav: {
    display: 'none',
    ['@media (max-width:900px)']: {
     display: 'block',
     border: '1px solid red'
    }
  }
}));

const StyledMenu = withStyles({
  
  paper: {
    marginTop: '3rem',
    backgroundColor: '#b42d5ae8',
    height: '170px',
    width: '10%',
   ['@media (max-width: 900px)']: {
     display: 'none'
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

function ButtonAppBar(props) {
  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  const [open, setOpen] = React.useState(false);
  const [openReg, setOpenReg] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openNav, setOpenNav] = React.useState(false);

  const firebaseId = localStorage.getItem('firebaseId');

  const handleClick = (event) => {
    setOpenNav(!openNav)
    // setAnchorEl(event.currentTarget);
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
// console.log(vendorProfile, 'vendor profile')
console.log('is nav opened', openNav)
  return (
    
    <div >
     
      <AppBar className= {classes.appBar} >
      <Toolbar className={classes.container}>
       <List component="nav" className={classes.list}>
       <ListItem button component={Link} to='/'>
        <ListItemText primary='Home' />
      </ListItem>
      <ListItem button component={Link} to='/' >
        <div className={classes.dropdownIcon}>
        <ListItemText primary='Markets' />
        <span className={classes.caret}></span>
        </div>
        
        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
      </ListItem>
      <ListItem button component={Link} to='/vendors'>
        <ListItemText primary='Vendors' />
      </ListItem>
      <ListItem button component={Link} to='/about'>
        <ListItemText primary='About' />
      </ListItem>
      <ListItem button component={Link} exact to='/contact'>
        <ListItemText primary='Contact Us' />
      </ListItem>
      <ListItem button component={Link} onClick={currentUser ? logout : login}>
        <ListItemText primary={currentUser ? 'Logout' : 'Login'} />
      </ListItem>
       </List>
         
       
      </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar);
