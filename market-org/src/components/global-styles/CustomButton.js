import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        minHeight: "auto",
        minWidth: "auto",
        border: "none",
        borderRadius: "3px",
        fontSize: "15px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "5px",
        cursor: "pointer",
        backgroundColor: '#b42d5ae8',
        color: 'white',
        height: '54px',
        verticalAlign: 'middle',
        '&:hover': {
            backgroundColor: '#b42d5ae8',
        },
    },
    
}))
const CustomButton = (props) => {
    const {children} = props
    const classes = useStyles();
    return (
        <Button size='large' className={classes.button}>
            {children}
        </Button>
    )
   
}

export default CustomButton