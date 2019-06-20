import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter, Route, Switch } from "react-router-dom";

import UpdateVendorForm from "./UpdateVendorForm";
import ProductByVendor from '../product/ProductByVendor'

import {
  withStyles,
  Typography,
  TextField,
  Button,
  CardContent,
  Menu,
  MenuItem,
  Container,
  CssBaseline,
  AppBar,
  Toolbar, 
  Paper,
  Grid,
  ButtonBase
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';

import axios from '../../axios-instance'


const styles = theme => ({
  root: {
    display: "flex",
    margin: "0 auto"
  },
  appBar: {
    //   marginLeft: drawerWidth,
    backgroundColor: '#38212E',
    zIndex: theme.zIndex.drawer + 1
  },

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },

  text: {
    color: "#008BC9",
    fontWeight: "500"
  },

  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    // maxWidth: 800,
  },
  image: {
    width: 350,
    height: 350,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
  },
});

const OneVendorPrivate = props => {
  const { classes } = props;

  const { firebase_id } = props.match.params;

  const [aPrivateVendor, setAPrivateVendor] = useState([]);
  const [delVendor, setDelVendor] = useState('');

  useEffect(() => {
    axios
      .get(`vendor/${firebase_id}`)
      .then(res => {
        // console.log(res, "vendor by Id");
        setAPrivateVendor(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
      // console.log(delVendor, 'Deleted Vendor')
  }, [aPrivateVendor]);

  const deleteVendor = (e, vendorId) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    axios
      .delete(`vendor/${vendorId}`, {
        "Content-Type": "application/json",
        headers: { Authorization: token }
      })
      .then(res => {
        console.log(res);
        setDelVendor(res.data);
        props.history.replace('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <Container
        maxWidth="lg"
        key={aPrivateVendor.firebase_id}
        style={{ marginTop: "50px" }}
      >

<Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="vendor picture" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" style={{ padding: 5, fontSize: "28px", fontWeight: 'bold'}} >
                {aPrivateVendor.company_name}
                </Typography>
                <Typography variant="body2" gutterBottom style={{ padding: 3, fontSize: "18px" }}>
                {aPrivateVendor.contact_fullname}
                </Typography>
                <Typography variant="body2" gutterBottom style={{ padding: 3, fontSize: "18px" }}>
                {aPrivateVendor.address}
                </Typography>
                <Typography variant="body2" gutterBottom style={{ padding: 3, fontSize: "18px" }}>
                {aPrivateVendor.city}, {' '} {aPrivateVendor.state} {' '} {aPrivateVendor.zip_code}
                </Typography>

                <Typography variant="body2" gutterBottom style={{ padding: 3, fontSize: "18px" }}>
                {aPrivateVendor.phone_number}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ padding: 3, fontSize: "18px" }}>
                {aPrivateVendor.company_url}
                </Typography>
              </Grid>
              <Grid item>
              <Link to={`/productForm`}>
              <Typography variant="body2" style={{ cursor: 'pointer', fontSize: '22px' }}>Add more Products</Typography>
            </Link>

              </Grid>
            </Grid>
            <Grid item>              
              <DeleteIcon className={classes.icon} onClick={e => deleteVendor(e, firebase_id)} />
              <Link to={`/oneVendorPrivate/${firebase_id}/editForm`}>
              <EditIcon className={classes.icon} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper> 

{/* 
        <Card className={classes.card}>
          <CardContent> */}
            {/* <Typography component="p">
              Company: {aPrivateVendor.company_name}
            </Typography> */}
            {/* <Typography component="p">
              Full Name: {aPrivateVendor.contact_fullname}
            </Typography>
            <Typography component="p">
              Address: {aPrivateVendor.address}
            </Typography>
            <Typography component="p">City: {aPrivateVendor.city}</Typography>
            <Typography component="p">State: {aPrivateVendor.state}</Typography>
            <Typography component="p">
              Zip Code: {aPrivateVendor.zip_code}
            </Typography>
            <Typography component="p">
              Phone: {aPrivateVendor.phone_number}
            </Typography>
            <Typography component="p">
              Company website: {aPrivateVendor.company_url}
            </Typography> */}
            {/* <Link to={`/productForm`}>
              <Typography component="p">Add more Products</Typography>
            </Link> */}
            {/* <Button
              onClick={e => deleteVendor(e, firebase_id)}
              color="inherit"
              style={{ margin: "10px" }}
            >
              Delete My Profile
            </Button>

            <Link to={`/oneVendorPrivate/${firebase_id}/editForm`}>
              <Typography component="p">Edit My Profile</Typography>
            </Link>
          </CardContent>
          <CardContent />
        </Card> */}
      </Container>

      <Switch>
        <Route
          path="/oneVendorPrivate/:firebase_id/editForm"
          render={props => (
            <UpdateVendorForm {...props} aPrivateVendor={aPrivateVendor} />
          )}
        />
      </Switch>
      <ProductByVendor {...props} />
    </>
  );
};

export default withRouter(withStyles(styles)(OneVendorPrivate));
