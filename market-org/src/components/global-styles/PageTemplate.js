import React from 'react';
import Parallax from '../global-styles/parallex.js';
import classNames from "classnames";
import { grayBackgroundColor, purpleBackgroundColor } from "../global-styles/global";


//ADD THESE STYLES TO THE PAGE YOU'RE WORKING ON
// container: {
//     color: whiteColor,
//     ...container,
//     zIndex: "2"
//   },

//   main: {
//     ...main
//   },
//   mainRaised: {
//     ...mainRaised
//   },

const PageTemplate = () => {
    return (
        <div>
            {/*CHANGE THE IMAGE AND ADD <small> as a variable to the Parallax component */}
            <Parallax image={require('../../images/homeBG.jpg')} filter="dark">
                <div className={classes.container}>
                    <Grid container className={classes.grid}>
                    <Grid className={classes.griditem}>
                        <h1 className={classes.title}>Welcome To Market Organizer</h1>
                        <br />
                        {/* TODO: ADD SMOOTH SCROLL TO BUTTON*/}
                        <Custombutton>
                        Take a look <div className={classes.caret}></div>
                        </Custombutton>
                    </Grid>
                    </Grid>
                </div>
            </Parallax> 
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container} style={{paddingBottom: '2rem'}}>
                        <div className={classes.container} style={{paddingBottom: '2rem'}}>
                            {/*ADD CONTENT HERE */}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PageTemplate