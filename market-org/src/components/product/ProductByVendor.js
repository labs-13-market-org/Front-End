import React, { useState, useEffect, useContext } from "react";
import { Route, Link, withRouter, Switch } from "react-router-dom";
import { storage } from "../../firebase";
import { auth } from "../../firebase";
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import { ProductContext } from "../context/product";

import UpdateProductForm from "./UpdateProductForm";
import {
  withStyles,
  Typography,
  TextField,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Menu,
  MenuItem,
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
  Grid,
  GridList,
  Paper
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import axios from "../../axios-instance";

const styles = theme => ({
  root: {
    display: "flex",
    margin: "0 auto"
    // flexWrap: 'wrap',
    // justifyContent: 'space-around'
  },
  appBar: {
    //   marginLeft: drawerWidth,
    backgroundColor: "#38212E",
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

  card: {
    width: 345,
    // heigt: 500,
    margin: "10px"
  },
  media: {
    height: 345,
    textAlign: 'center'
  },
  gridList: {
    margin: "0 auto"
    // height: '800px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text,
    fontWeight: "bold",
    fontSize: "40px"
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32
  }
});

const ProductByVendor = props => {
  const { classes } = props;

  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  // const [products, setProducts] = useContext(ProductContext);

  const [products, setProducts] = useState([]);
  const [delProduct, setDelProduct] = useState(0);

  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const firebaseId = localStorage.getItem("firebaseId");
    axios
      .get(`products/vendor/${firebaseId}`)
      .then(res => {
        // console.log(res, "products by vendor Id");
        setProducts(res.data);
        // console.log(product);
      })
      .catch(err => {
        console.log(err.message);
      });
    // console.log(delProduct);
  }, [products]);

  const toMarkets = () => {
    props.history.push("/markets");
  };

  const toCart = () => {
    props.history.push("/carts");
  };
  // console.log("vendor profile in product", vendorProfile);

  const backToProductForm = () => {
    props.history.push("/productForm");
  };

  const backToHome = () => {
    props.history.push("/");
  };

  const deleteProduct = (e, productId) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    axios
      .delete(`products/${productId}`, {
        "Content-Type": "application/json",
        headers: { Authorization: token }
      })
      .then(res => {
        console.log(res);
        setDelProduct(res.data);
        // props.history.replace('/productsByVendor');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const setProductUpdateForm = (e, updatedProduct) => {
    e.preventDefault();
    // setActiveItem(updatedProduct);
    props.history.push("/updateProductForm");
  };

  const logout = () => {
    auth.signOut();
    localStorage.clear();
    props.history.push("/");
  };

  return (
    <>
      <Container maxWidth="lg">
        <Paper className={classes.paper} style={{ marginTop: "20px" }}>
          My Products
        </Paper>

        <Typography>
          testing global context: {vendorProfile.company_name}
        </Typography>

        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={backToHome}
              color="inherit"
              style={{ margin: "10px" }}
            >
              Home
            </Button>
            <Button
              onClick={backToProductForm}
              color="inherit"
              style={{ margin: "10px" }}
            >
              Add more products
            </Button>
            <Button
              // onClick={toCart}
              color="inherit"
              style={{ margin: "10px" }}
            >
              Your cart
            </Button>
            <Button
              onClick={toMarkets}
              color="inherit"
              style={{ margin: "10px" }}
            >
              Markets
            </Button>
            <Button onClick={logout} color="inherit" style={{ margin: "10px" }}>
              Log Out
            </Button>
          </Toolbar>
        </AppBar>

        <GridList cellHeight={1000} className={classes.gridList} cols={3}>
          {products &&
            products.map(eachProduct => {
              return (
                <div>
                  {/* <Card className={classes.card} key={eachProduct.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={eachProduct.image}
          title="Vendor product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card> */}

                  <Card className={classes.card} key={eachProduct.id}>
                    <CardActionArea>
                      <CardContent className={classes.media}>
                        <img
                          src={eachProduct.image}
                          title="Vendor product"
                          // className="productImage"
                          style={{ maxWidth: "100%", maxHeight: "100%"}}
                        />
                      </CardContent>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {eachProduct.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {eachProduct.description}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                        >
                          ${eachProduct.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions style={{ display: "flex", flexWrap: "wrap" }}>
                      <DeleteIcon
                        className={classes.icon}
                        onClick={e => deleteProduct(e, eachProduct.id)}
                      />
                      {/* <Button size="small" color="primary"
                    onClick={e => deleteProduct(e, eachProduct.id)}                   
                    style={{  margin: "10px" }}
                  >
                    Delete Product
                  </Button> */}

                      <Link
                        to={`/oneVendorPrivate/productsByVendor/${
                          eachProduct.id
                        }/updateProductForm`}
                      >
                        <EditIcon className={classes.icon} />
                        {/* <Typography
                      color="primary"
                      // style={{ margin: "10px" }}
                    >
                      Edit Product
                    </Typography> */}
                      </Link>
                    </CardActions>
                  </Card>

                  <Switch>
                    <Route
                      path="/oneVendorPrivate/productsByVendor/:id/updateProductForm"
                      render={props => (
                        <UpdateProductForm
                          {...props}
                          eachProduct={eachProduct}
                        />
                      )}
                    />
                  </Switch>
                </div>
              );
            })}
        </GridList>
      </Container>
    </>
  );
};

export default withRouter(withStyles(styles)(ProductByVendor));
