import React from 'react';
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from '@material-ui/styles';
import Expand from '@material-ui/icons/ExpandMore';
import Profile from '@material-ui/icons/AccountCircle';

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
                   <IconButton
                      onClick={handleClick}
                      aria-controls="profile" 
                      color="inherit"
                      aria-label="profile"
                    >
                      <Profile />
                    </IconButton>

                    <IconButton
                        onClick={handleClick}
                        color="inherit"
                        aria-label='profile'
                    >
                        <Expand />
                     </IconButton> 
           
               
                    <StyledMenu
                        id="profile"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem className={classes.menuItem} onClick={props.handleRegOpen}>View Profile</MenuItem>
                        <MenuItem className={classes.menuItem} onClick={props.handleRegOpen}>{props.user === 'vendor' ? 'My Stalls' : 'My Orders'}</MenuItem>
                        <MenuItem className={classes.menuItem} onClick={props.toAllVendors}>Account Settings</MenuItem>
                        <MenuItem className={classes.menuItem} onClick={props.logout}>Logout</MenuItem>
                    </StyledMenu>
             
              </Typography>
    </div>
  )
}



export default VendorMenu;