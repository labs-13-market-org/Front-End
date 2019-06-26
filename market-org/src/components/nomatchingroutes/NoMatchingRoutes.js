import React from 'react';
import { makeStyles, Paper, Container, Typography, Grid } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import emptycrates from '../../images/boxes-4171480_1280.jpg'

const useStyles = makeStyles(theme => ({
   
    mainFeaturedPost: {
        position: 'relative',
        height: '100vh',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        backgroundImage: `url(${emptycrates})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));


const NoMatchingRoutes = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src={emptycrates}
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container style={{justifyContent: 'center'}}>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" color="inherit" style={{fontSize: '145px', textAlign: 'center', lineHeight: '1.5', letterSpacing: ' 0.0938em',  textShadow: '2px 2px #000000'}} gutterBottom>
                    404
                  </Typography>
                  <Typography variant="h5" color="inherit" style={{fontSize: '40px', textAlign: 'center', lineHeight: '.33', textShadow: '2px 2px #000000'}} paragraph>
                    Page not found.
                  </Typography>
                </div>
              </Grid>
            </Grid>
            </Paper>
        </React.Fragment>
    )
}

export default NoMatchingRoutes
