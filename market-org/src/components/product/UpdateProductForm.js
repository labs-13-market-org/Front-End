import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import { storage } from "../../firebase";

import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import { ProductContext } from "../context/product";
import {
  withStyles,
  Typography,
  TextField,
  Button,
  FormControl,
  Paper
} from "@material-ui/core";

import axios from "../../axios-instance";

const styles = theme => ({
  // form: {
  //   width: "80%",
  //   height: "850px",
  //   margin: "0 auto",
  //   marginTop: "-240px",
  //   display: "flex",
  //   flexDirection: 'column'
  // },
  textField: {
    width: "330px"
  },
  textColor: {
    // borderWidth: "1px",
    color: "#026440"
    // borderColor: "#026440 !important"
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  input: {
    // color: "#026440"
  },
  card: {
    maxWidth: 800
  },
  media: {
    height: 300
  }
});

const UpdateProductForm = props => {
  const { classes } = props;
  const { id } = props.match.params;

  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  const [product, setProduct] = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);

  const [title, setTitle] = useState(props.eachProduct.title);
  const [description, setDescription] = useState(props.eachProduct.description);
  const [price, setPrice] = useState(props.eachProduct.price);
  const [image, setImage] = useState(props.eachProduct.image);
  // const [file, setFile] = useState(props.eachProduct.file);

  // const [editProduct, setEditedProduct] = useState(props.eachProduct);

  // const [currentProduct, setCurrentProduct] = useState([]);

  const updateProduct = (e, id, updatedProduct) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const firebaseId = localStorage.getItem("firebaseId");
    // let currentProductName = "product-image-" + Date.now();
    // let uploadImage = storage.ref(`images/${currentProductName}`).put(file);

    // uploadImage.on(
    //   "state_changed",
    //   snapshot => {},
    //   error => {
    //     alert(error);
    //   },
    //   () => {
    //     storage
    //       .ref("images")
    //       .child(currentProductName)
    //       .getDownloadURL()
    //       .then(url => {
    //         console.log(url);
    //         setImage(url);

      // const storageRef = storage.ref(
      //     `images/updated-product-images@${new Date().toISOString()}`
      //   );
      // let uploadImage = storageRef.put(updatedProduct);
      // return uploadImage.then(() => {
      //   return uploadImage.snapshot.ref.getDownloadURL().then(downloadURL => {
      //     const data = {
      //       updatedProduct: {
      //         image: downloadURL
      //       }
      //     };
      //     // this.props.initUsrUpdate(this.props.user, data);
      //     axios
      //     .put(`products/${id}`, updatedProduct, {
      //       "Content-Type": "application/json",
      //       headers: { Authorization: token }
      //     })
      //     .then(res => {
      //       console.log("product res put", res);           
      //       setProduct(res.data);
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });

      //   });
      // });


    updatedProduct = {
      // vendors_id: vendorId,
      title: title,
      description: description,
      price: price
      // image: url
    };

    axios
      .put(`products/${id}`, updatedProduct, {
        "Content-Type": "application/json",
        headers: { Authorization: token }
      })
      .then(res => {
        console.log("product res put", res);

        // setEditedProduct(res.data)
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // });
    // }
    // );
    // props.history.push("/productsByVendor");
    props.history.push(`/oneVendorPrivate/${firebaseId}`);
  };

  // const fileHandler = e => {
  //   setFile(e.target.files[0]);
  // };

  return (
    <>
      {/* <Typography component="p">Update your product here:</Typography>
      <Typography component="p">
        Global product context check: {product.id}
      </Typography>
      <Typography component="p">params check: {id}</Typography> */}
      <Paper className={classes.paper}>
        <form
          style={{
            width: "80%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <TextField
            id="outlined-name"
            label="Title"
            type="search"
            name="title"
            style={{ width: "200px" }}
            multiline={true}
            rows={2}
            rowsMax={2}
            className={classes.textField}
            onChange={e => setTitle(e.target.value)}
            value={title}
            margin="normal"
            // variant="outlined"
            InputProps={{
              classes: {          
                input: classes.input
              }
            }}
            InputLabelProps={{
              style: {
                color: "#026440"
              }
            }}
          />
          <TextField
            id="outlined-name"
            label="Description"
            type="search"
            name="description"
            style={{ width: "200px" }}
            multiline={true}
            rows={2}
            rowsMax={2}
            className={classes.textField}
            onChange={e => setDescription(e.target.value)}
            value={description}
            margin="normal"
            // variant="outlined"
            InputProps={{
              classes: {            
                input: classes.input
              }
            }}
            InputLabelProps={{
              style: {
                color: "#026440"
              }
            }}
          />
          <TextField
            id="outlined-name"
            label="Price"
            type="search"
            name="price"
            style={{ width: "200px" }}
            multiline={true}
            rows={2}
            rowsMax={2}
            className={classes.textField}
            onChange={e => setPrice(e.target.value)}
            value={price}
            margin="normal"
            // variant="outlined"
            InputProps={{
              classes: {         
                input: classes.input
              }
            }}
            InputLabelProps={{
              style: {
                color: "#026440"
              }
            }}
          />
          {/* <TextField
          id="upload-button"
          accept="image/*"
          label="Upload Image"
          name="image"
          type="file"
          className={classes.textField}
          onChange={e => fileHandler(e)}
          value={image}
          margin="normal"
          variant="outlined"
          InputProps={{
            classes: {              
              input: classes.input
            }
          }}
          InputLabelProps={{
            shrink: true,
            style: {
              color: "#026440"
            }
          }}
        /> */}
          <Button
            type="submit"
            variant="contained"
            // onClick={e => updateProduct(e, id, editProduct)}
            onClick={e => updateProduct(e, id, setProduct)}
            className={classes.submit}
          >
            Update your product
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default withRouter(withStyles(styles)(UpdateProductForm));
