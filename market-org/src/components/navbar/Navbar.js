import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';
import SignIn from '../login/SignIn';
import SignUp from '../register/SignUp';
import { auth } from '../../firebase';
import { Route, withRouter } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

    appBar: {
        backgroundColor: 'lightgreen',
    }


}));

function ButtonAppBar(props) {
    const [open, setOpen] = React.useState(false);
    const [openReg, setOpenReg] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
      };
    const handleRegOpen = () => {
        setOpenReg(true);
    }
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleRegClose = () => {
          setOpenReg(false)
      }

    
  const logout = () => {
    auth.signOut();
    props.history.push('/')
  }
    

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <Button color="inherit" onClick={logout} style={{ backgroundColor: '#30cc32', margin: '10px' }}>Log Out</Button>
                    <Button color="inherit" onClick={handleRegOpen} style={{ backgroundColor: '#30cc32', margin: '10px' }}>Sign Up</Button>
                    <Button color="inherit" onClick={handleOpen} style={{ backgroundColor: '#30cc32', margin: '10px' }}>Login</Button>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={open}
                        onClose={handleClose}
                    >
                    <SignIn />
                    </Modal>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={openReg}
                        onClose={handleRegClose}
                    >
                    <SignUp />
                    </Modal>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(ButtonAppBar);