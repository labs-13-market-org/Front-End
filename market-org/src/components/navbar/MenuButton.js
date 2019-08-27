import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Expand from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
 dropdownIcon: {
    // border: '1px solid red', 
    display: 'flex', 
    justifyContent: 'center', 
    textAlign: 'center',  
    alignItems: 'center'
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
    <div >
      <ListItem button onClick={handleClick} >
        <div className={classes.dropdownIcon} aria-controls="market-menu" aria-haspopup="true" >
          <ListItemText primary='Vendors' />
          <Expand/>
        </div>
      </ListItem>
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
    </div>
  )
}



export default VendorMenu;