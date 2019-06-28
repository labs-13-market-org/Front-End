

import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
// core components
import headerStyle from './navbar-styles';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    const { classes, color, links, brand, fixed, absolute } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          <Button className={classes.title}>
            <Link to="/">{brand}</Link>
          </Button>
          <Hidden smDown implementation="css" className={classes.hidden}>
            <div className={classes.collapse}>{links}</div>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.closeButtonDrawer}
            >
              <Close />
            </IconButton>
            <div className={classes.appResponsive}>{links}</div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  links: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default withStyles(headerStyle)(Header);





// import React, { useContext } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Expand from '@material-ui/icons/ExpandMore';
// import ShoppingCart from '@material-ui/icons/ShoppingCart';
// import Clear from '@material-ui/icons/Clear';
// import MenuBars from '@material-ui/icons/Menu';
// import Link from '@material-ui/core/Link';
// import { auth } from "../../firebase";
// import { Route, withRouter } from "react-router-dom";
// import VendorMenu from './MenuButton';
// import ProfileMenu from './ProfileMenu';
// import MenuDropdown from './MobileDropdown';
// import { AuthContext } from "../authContext/authState";
// import { VendorContext } from "../context/vendor";
// import SignUp from '../register/SignUp';
// import './navbar.css'
// import Slide from '@material-ui/core/Slide';



// const useStyles = makeStyles(theme => ({
  
//   root: {
//     flexGrow: 1,
     
//   },
 
//   title: {
//     flexGrow: 1,
//     ['@media (max-width: 750px)']: {
//       display: 'none'
//     }
//   },

//   appBar: { 
//     backgroundColor: '#38212E',
//     ['@media (max-width:800px)']: { 
//       height: '70px'
//     },
//     // ['@media (max-width: 660px)']: {
//     //   display: 'none'
//     // }
//   },

//   openAppBar: {
//     // backgroundColor: '#38212E',
//     display: 'none',
//     ['@media (max-width: 660px)']: {
//       backgroundColor: '#38212E',
//       display: 'block',
//       // opacity: '.5',
//     }
//   },

//   closeItem: {
//     ['@media (max-width: 660px)']: {
//       display: 'none'
//     }
//   },
//   toolbar: {
  
    
//     // ['@media (max-width:660px)']: {
  
//     //   display: 'flex',
//     //   flexDirection: 'column',
//     //   alignItems: 'center',
//     //   height: '250px',
//     //   animation: `ripple-effect 550ms `,
//     //   // backgroundColor: '#38212e75',
//     //   backgroundColor: '#38212E',
//       // opacity: '.5',
    
//       // border: '2px solid green',

//     // "@keyframes ripple-effect": {
//     //   "0%": {
//     //       transform: "scale(0)",
//     //       opacity: 0.1
//     //   },
//     //   "100%": {
//     //       transform: "scale(1)",
//     //       opacity: 0.9
//     //   }
//     // }
//     //},

//   },

//   menubar: {
//     display: 'none',
//     ['@media (max-width: 660px)']: {
//       display: 'block',
//       color: 'white',
//     }
//   },
//   link: {
//     color: 'white',
//     fontSize: '1.2rem',
//     margin: "10px",
//     cursor: 'pointer',
//     textDecoration: 'none',
//     '&:hover': {
//       borderBottom: '1px solid #30cc32'
//     }
    
//   },
//   icon: {
//     // ['@media (max-width:800px)']: { 
//     //   display: 'none',
//     // }
//   },

//   clearIcon: {
//     // display: 'none',
//     ['@media (max-width:660px)']: {
//       position: 'absolute',
//       left: '20px',
//       color: 'white',
//     }
   
//   },
//   closed: {
//     display: 'none'
//   },
//   menuItem: {
//     color: 'white',
//     textDecoration: 'none',
//     width: "100%"
//   },
//   mobileNav: {
//     display: 'none',
//     ['@media (max-width:900px)']: {
//      display: 'block',
//      border: '1px solid red'
//     }
//   }
// }));

// const StyledMenu = withStyles({
  
//   paper: {
//     marginTop: '3rem',
//     backgroundColor: '#b42d5ae8',
//     height: '170px',
//     width: '10%',
//    ['@media (max-width: 900px)']: {
//      display: 'none'
//    }
//   },

//   close: {
//     display: 'none'
//   }
// })(props => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'center',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'center',
//     }}
//     {...props}
    
//   />
// ));

// function ButtonAppBar(props) {
//   const [vendorProfile, setVendorProfile] = useContext(VendorContext);
//   const [open, setOpen] = React.useState(false);
//   const [openReg, setOpenReg] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [openNav, setOpenNav] = React.useState(false);

//   const firebaseId = localStorage.getItem('firebaseId');

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   }

//   const openNavBar = () => {
//     setOpenNav(true)
//     console.log('clicked')
//   }


//   const closeNavBar = () => {
//     setOpenNav(false)
//   }
//   const handleClose = ()  => {
//     setAnchorEl(null);
//   }
//   const handleRegOpen = () => {
//     setOpenReg(true);
//   };

//   const handleCloseMenu = () => {
//     setOpen(false);
//   };

//   const toHome = () => {
//     props.history.push('/')
//   }

//   const routetoCreate = () => {
//     props.history.push("/create-market");
//   };

//   const toAllVendors = () => {
//     props.history.push("/allVendors");
//   };

//   const toPrivateVendorProfile = () => {    
//     props.history.push(`/oneVendorPrivate/${firebaseId}`);
//   };

//   const toAllMarkets = () => {
//     props.history.push('/markets')
//   }

//   const toMyStalls = (user_type) => {
//     if (user_type == "vendor") {
//       props.history.push('/vendorStall')
//     }
//     else if (user_type == "market") {
//       props.history.push('/marketStall')
//     }
    
//   }

//   const toCart = () => {
//     let firebase_id = localStorage.getItem('firebaseId')
//       props.history.push(`/cart/${firebase_id}`)
//   }

//   const register = () => {
//     props.history.push("/signup");
//   };

//   const createMarket = () => {
//     props.history.push("/create-market")
//   }

//   const login = () => {
//     props.history.push('/signin')
//   }
//   const logout = () => {
//     auth.signOut();
//     localStorage.clear();
//     props.history.push("/");
//   };

//   const about = () => {
//     props.history.push("/about");
//   }


//   const { currentUser } = useContext(AuthContext);
//   const classes = useStyles();
//   const user_type = localStorage.getItem('userTypes')
//   const isOpen = Boolean(anchorEl);
// // console.log(vendorProfile, 'vendor profile')
// console.log('is nav opened', openNav)
//   return (
    
//     <div className= {classes.root}>
     
//       <AppBar position="static" className= {classes.appBar} >
//       <IconButton >
//         <MenuDropdown className={classes.mobileNav}/>
//       </IconButton>
//         <Toolbar  >
//           {/* <Typography variant="h6" className={classes.title} /> */}
//             <Typography variant="h6"  className={classes.title }>
//                 <Link onClick={toHome} className={classes.link} underline='none'>Home</Link>
//             </Typography>
           
         
//             {/* <Typography variant="h6"  className={classes.title}>
             
//                 <Link 
//                     className={classes.link}  
//                     underline='none'  
//                     aria-controls='market-menu'
//                     aria-haspopup='true'
//                     onClick={handleClick}
//                     color="inherit"
//                   >
//                    Markets
                 
//                   <IconButton
//                       onClick={handleClick}
//                       aria-controls='market-menu'
//                       color='inherit'
//                       aria-label='market-menu'
//                       className={classes.icon}
//                     >
//                       <Expand />
//                     </IconButton>
//                 </Link>
//               </Typography> */}
//                 {/* <StyledMenu
//                    id="vendor-menu"
//                    anchorEl={anchorEl}
//                    keepMounted
//                    open={Boolean(anchorEl)}
//                    onClose={handleClose}
//                 >       
//                   <MenuItem className={classes.menuItem} onClick={createMarket} ><Typography>Register A Market</Typography></MenuItem>
//                   <MenuItem className={classes.menuItem} onClick={() => toMyStalls(user_type)}><Typography>View My Stalls</Typography></MenuItem>
//                   <MenuItem className={classes.menuItem} onClick={toAllMarkets}><Typography>View All Markets</Typography></MenuItem>
//                   <MenuItem className={classes.menuItem} onClick={handleClose}><Typography>More Info</Typography></MenuItem>               
//                 </StyledMenu> */}
           
//           {/* <VendorMenu signup={register} toAllVendors={toAllVendors} toMyStalls={() => toMyStalls(user_type)}/> */}


//           <Typography ariant="h6"  className={openNav ? classes.closed : classes.title}>
//               <Link className={classes.link}   underline='none' exact to='/about'>About</Link>
//           </Typography>

//           <Typography ariant="h6"  className={openNav ? classes.closed : classes.title} >
//             <Link className={classes.link}  underline='none' exact to='/contact'>Contact Us</Link>
//           </Typography>

//           <Typography ariant="h6"  className={currentUser ? classes.closed : classes.title} >
//               <Link 
//                 // className={classes.link}
//                 color="inherit"
//                 onClick={register}
//                 className={ classes.link }
//                 underline='none'
//               >
//                   Sign Up
//               </Link>
//           </Typography>

//           <Typography ariant="h6"  className={classes.title}>
//             <Link 
//                 className={classes.link}
//                 color="inherit"
//                 onClick={currentUser ? logout : login}
//                 underline='none'
//               >
//                {currentUser ? 'Logout' : 'Login'}
//             </Link>
//           </Typography>
          
//           <Typography ariant="h6"  className={user_type === 'vendor' ? classes.title : classes.closed}>
//             <IconButton
//               edge="end"
//               className={classes.icons}
//               color="inherit"
//               aria-label="Shopping cart"
//             >
//               <ShoppingCart onClick={toCart} className={classes.shoppingCart}/>
//             </IconButton>
//           </Typography>
//           <Typography ariant="h6"  className={ currentUser ? classes.title : classes.closed}>
//            <ProfileMenu handleRegOpen={SignUp} user={user_type} toAllVendors={toAllVendors} logout={logout} />
      
//           </Typography>
          
//         </Toolbar>
//         {/* </Slide> */}
//       </AppBar>
//     </div>
//   );
// }

// export default withRouter(ButtonAppBar);
