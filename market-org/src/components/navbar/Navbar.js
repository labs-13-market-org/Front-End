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
import MenuBars from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import { auth } from "../../firebase";
import { Route, withRouter } from "react-router-dom";
import VendorMenu from './MenuButton';
import ProfileMenu from './ProfileMenu';
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import SignUp from '../register/SignUp';
import './navbar.css'
import Slide from '@material-ui/core/Slide';
import Clear from '@material-ui/core/Clear';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1, 
    position: 'absolute',
    width: '100%',
    // border: '1px solid red',
    // ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
    //   border: '5px solid red'
    // },
    
  },
 
  title: {
    flexGrow: 1,
  },

  appBar: { 
    backgroundColor: '#38212E',
    ['@media (max-width: 660px)']: {
      display: 'none'
    }
  },

  openAppBar: {
    backgroundColor: '#38212E',
    displsy: 'none',
    ['@media (max-width: 660px)']: {
      backgroundColor: '#38212E',
      display: 'block',
      // opacity: '.5',
    }
  },
  toolbar: {
  
    
    ['@media (max-width:660px)']: {
  
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '250px',
      // backgroundColor: '#38212e75',
      backgroundColor: '#38212E',
      // opacity: '.5',
    
      border: '2px solid green',
    }
  },

  menubar: {
    display: 'none',
    ['@media (max-width: 660px)']: {
      display: 'block',
      color: 'white',
    }
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
    ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
      display: 'none',
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
 
}));

const StyledMenu = withStyles({
  paper: {
    marginTop: '3rem',
    backgroundColor: '#b42d5ae8',
    height: '170px',
    width: '10%'
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
    setAnchorEl(event.currentTarget);
  }

  const openNavBar = () => {
    setOpenNav(true)
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


  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const user_type = localStorage.getItem('userTypes')
  const isOpen = Boolean(anchorEl);
// console.log(vendorProfile, 'vendor profile')
  return (
    
    <div className= {classes.root}>
      <IconButton className={openNav ? classes.closed : classes.menubar} onClick={openNavBar}>
        <MenuBars/>
      </IconButton>
      <AppBar position="static" className= {openNav ? classes.OpenAppBar :  classes.appBar} >
        <Slide direction="down" in={openNav} mountOnEnter unmountOnExit>
        <Toolbar className={classes.toolbar } >
          
          <Typography variant="h6" className={classes.title} />
            <Typography variant="h6"  className={classes.title}>
                <Link onClick={toHome} className={openNav ? classes.closed : classes.link} underline='none'>Home</Link>
            </Typography>
            <>
            <Typography variant="h6"  className={classes.title}>
              {/* changebe to navlink after styling completed */}
                <Link 
                    className={classes.link}  
                    underline='none'  
                    aria-controls='market-menu'
                    aria-haspopup='true'
                    onClick={handleClick}
                    color="inherit"
                  >
                   Markets
                 
                  <IconButton
                      onClick={handleClick}
                      aria-controls='market-menu'
                      color='inherit'
                      aria-label='market-menu'
                      className={classes.icon}
                    >
                      <Expand />
                    </IconButton>
                </Link>
              </Typography>
                <StyledMenu
                   id="vendor-menu"
                   anchorEl={anchorEl}
                   keepMounted
                   open={Boolean(anchorEl)}
                   onClose={handleClose}
                >       
                  <MenuItem className={classes.menuItem} onClick={createMarket} ><Typography>Register A Market</Typography></MenuItem>
                  <MenuItem className={classes.menuItem} onClick={() => toMyStalls(user_type)}><Typography>View My Stalls</Typography></MenuItem>
                  <MenuItem className={classes.menuItem} onClick={toAllMarkets}><Typography>View All Markets</Typography></MenuItem>
                  <MenuItem className={classes.menuItem} onClick={handleClose}><Typography>More Info</Typography></MenuItem>               
                </StyledMenu>
           
          <VendorMenu signup={register} toAllVendors={toAllVendors} toMyStalls={() => toMyStalls(user_type)}/>

          <Typography ariant="h6"  className={openNav ? classes.closed : classes.title}>
              <Link className={classes.link}   underline='none'>About</Link>
          </Typography>

          <Typography ariant="h6"  className={openNav ? classes.closed : classes.link} >
            <Link className={classes.link}  underline='none'>Contact Us</Link>
          </Typography>

          <Typography ariant="h6"  className={classes.title} >
              <Link 
                // className={classes.link}
                color="inherit"
                onClick={register}
                className={currentUser ? classes.closed : classes.link }
                underline='none'
              >
                  Sign Up
              </Link>
          </Typography>

          <Typography ariant="h6"  className={classes.title}>
            <Link 
                className={classes.link}
                color="inherit"
                onClick={currentUser ? logout : login}
                underline='none'
              >
               {currentUser ? 'Logout' : 'Login'}
            </Link>
          </Typography>
          
          <Typography ariant="h6"  className={user_type === 'vendor' ? classes.title : classes.closed}>
            <IconButton
              edge="end"
              className={classes.icons}
              color="inherit"
              aria-label="Shopping cart"
            >
              <ShoppingCart onClick={toCart} className={classes.shoppingCart}/>
            </IconButton>
          </Typography>
          <Typography ariant="h6"  className={ currentUser ? classes.title : classes.closed}>
           <ProfileMenu handleRegOpen={SignUp} user={user_type} toAllVendors={toAllVendors} logout={logout} />
            {/* <IconButton
              edge="end"
              className={classes.icons}
              color="inherit"
              aria-label="profile"
              // onClick={handleClick}
            >
               
              <Profile />
            </IconButton>
            <IconButton
            onClick={handleClick}
                      // edge="end"
              // className={classes.profile}
              color="inherit"
              aria-label='profile'
            >
              <Expand />
            </IconButton> */}
          </Typography>
          {/* <StyledMenu
            id="profile"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={ currentUser ? null : classes.closed}
           >         
           <StyledMenuItem className={classes.menuItem} onClick={handleRegOpen}>View Profile</StyledMenuItem>
            <StyledMenuItem className={classes.menuItem} onClick={() => toMyStalls(user_type)}>{user_type === 'vendor' ? 'My Purchased Orders' : 'My Stalls'}</StyledMenuItem>
            <StyledMenuItem className={classes.menuItem} onClick={toAllVendors}>Account Settings</StyledMenuItem>
            <StyledMenuItem className={classes.menuItem} onClick={logout}>Logout</StyledMenuItem>
          </StyledMenu> */}
              {/* <Button
                color="inherit"
                onClick={toHome}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Home
              </Button> */}
              {/* <button onClick={props.history.push('/cart/:id')}>cart</button> */}
              {/* <Button
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
                color="inherit"
                  // onClick={toAllMarkets}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                  Markets  <IconButton
                        edge="end"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="simple-menu"
                    >
                        <Expand />
                    </IconButton>
              </Button> */}
  
              {/* <Button
                color="inherit"
                onClick={toAllVendors}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Vendors
              </Button>
              <Button
                color="inherit"
                // onClick={logout}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                About
              </Button>
              <Button
                color="inherit"
                // onClick={logout}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Contact Us
              </Button> */}
              
              {/* <Button
                color="inherit"
                onClick={routetoCreate}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Register A Market
              </Button> */}
            </>
          {/* ) : ( */}
            <>
              {/* <Button
                color="inherit"
                onClick={handleRegOpen}
                className={currentUser ? classes.closed : classes.button }
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Sign Up
              </Button> */}

              {/* <Button
                color="inherit"
                onClick={logout}
                className={classes.button}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                {currentUser ? 'Logout' : 'Login'}
              </Button> */}
              {/* <Button
                color="inherit"
                onClick={handleOpen}
                // style={{ backgroundColor: "#30cc32", margin: "10px" }}
              >
                Log In
              </Button> */}
            </>
          {/* )} */}
        </Toolbar>
        </Slide>
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar);
