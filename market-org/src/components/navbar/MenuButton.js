import React from 'react';
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from '@material-ui/styles';

import Expand from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1, 
  },
 
  title: {
    flexGrow: 1,
  },

  appBar: { 
    backgroundColor: '#38212E',
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

  icons: {
    color: 'white',
    fontSize: '1.2rem',
    // margin: "10px",
    cursor: 'pointer',
  },

  dropDown: {
    // border: '1px solid red',
    height: '165px',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1rem',
    justifyContent: 'space-around',
  },


  closed: {
    display: 'none'
  },
  vendor: {
    border: '3px solid green'
  }, 
  menuItem: {
    color: 'white',
    textDecoration: 'none'
  },

  menuNav: {
    marginTop: '2rem',
   
    // background: '#b42d5ae8',
    // color: 'white'
    // border: '1px solid red',
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
    // getContentAnchorEl={null}
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


const VendorMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = ()  => {
    setAnchorEl(null);
  }

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Typography variant="h6" className={classes.title} />
          <Typography variant="h6"  className={classes.title}>
            <Link 
                className={classes.link}  
                underline='none'  
                aria-controls="vendor-menu" 
                aria-haspopup="true" 
                onClick={handleClick}
                color="inherit"
              >
                Vendors
              <IconButton
                  onClick={handleClick}
                  aria-controls="vendor-menu" 
                  color="inherit"
                  aria-label="vendor-menu"
                >
                  <Expand />
                </IconButton>
            
            </Link>
          
              <StyledMenu
                id="vendor-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                  <MenuItem onClick={props.signup} className={classes.menuItem}> Become A Vendor </MenuItem>
                  <MenuItem onClick={props.toAllVendors} className={classes.menuItem}> View Our Vendors </MenuItem>
                  <MenuItem className={classes.menuItem}> More Info</MenuItem>
              </StyledMenu>
              
          </Typography>
    </div>
  )
}



export default VendorMenu;