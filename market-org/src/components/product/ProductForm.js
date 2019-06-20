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
  CardContent
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";

import axios from "../../axios-instance";

const styles = theme => ({
  newgroup: {
    display: "flex",
    width: "500px",
    height: "500px",
    margin: "0px auto",
    marginTop: "200px",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#026440",
    fontSize: "40px",
    letterSpacing: "4px"
  },
  form: {
    width: "110%",
    height: "850px",
    margin: "0 auto",
    marginTop: "-240px"
  },
  textField: {
    width: "330px"
  },
  textColor: {
    borderWidth: "1px",
    color: "#026440",
    borderColor: "#026440 !important"
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#026440 !important",
    color: "#026440"
  },
  input: {
    color: "#026440"
  },
  card: {
    maxWidth: 800
  },
  media: {
    height: 300
  }
});

const ProductForm = props => {
  const { classes } = props;

  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  const [product, setProduct] = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  // useEffect(() => {
  //   const firebaseId = localStorage.getItem("firebaseId");
  //   axios
  //     .get(`vendor/${firebaseId}`)
  //     .then(res => {
  //       // console.log(res, "vendor by Id");
  //       setVendorProfile(res.data);
  //       // console.log(vendorProfile);
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     });
  // }, [vendorProfile]);

  const submitProductProfile = e => {
    e.preventDefault();

    const vendorId = localStorage.getItem("firebaseId");
    const token = localStorage.getItem("token");
    let currentProductName = "product-image-" + Date.now();
    let uploadImage = storage.ref(`images/${currentProductName}`).put(file);

    uploadImage.on(
      "state_changed",
      snapshot => {},
      error => {
        alert(error);
      },
      () => {
        storage
          .ref("images")
          .child(currentProductName)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setImage(url);

            const productObj = {
              vendors_id: vendorId,
              title: title,
              description: description,
              price: price,
              image: url
            };

            axios
              .post(
                `products/vendor/${vendorId}`,
                {
                  ...productObj
                },
                {
                  "Content-Type": "application/json",
                  headers: { Authorization: token }
                }
              )
              .then(res => {
                console.log("product res post", res);
              })
              .catch(err => {
                console.log(err);
              });
          });
      }
    );
    // props.history.push("/productsByVendor");
    props.history.push(`/oneVendorPrivate/${vendorId}`);
  };

  const fileHandler = e => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      {/* <Card className={classes.card}>
        <CardContent>
          <Typography
            component="p"
            style={{ fontWeight: "bold", fontSize: "40px" }}
          >
            Your Vendor information
          </Typography>
          <Typography component="p">
            Vendor Company name: {vendorProfile.company_name}
          </Typography>
          <Typography component="p">
            Vendor full name: {vendorProfile.contact_fullname}
          </Typography>
          <Typography component="p">
            Vendor address: {vendorProfile.address}
          </Typography>
          <Typography component="p">
            Vendor City : {vendorProfile.city}
          </Typography>
          <Typography component="p">
            Vendor State: {vendorProfile.state}
          </Typography>
          <Typography component="p">
            Vendor Zip code: {vendorProfile.zip_code}
          </Typography>
          <Typography component="p">
            Vendor Phone number: {vendorProfile.phone_number}
          </Typography>
          <Typography component="p">
            Vendor company url: {vendorProfile.company_url}
          </Typography>
        </CardContent>
        <Link to={`/oneVendorPrivate/${vendorProfile.firebase_id}`}>
          <Typography component="p">My Profile Settings</Typography>
        </Link>
      </Card> */}

      <Typography component="p">Product form:</Typography> */}

<div className="vendor-form-wrapper">
        <div className='vendor-form-left'>  
        
        </div>
    <div className='vendor-form-right'>
      <h2>Add A Product</h2>
      <form>
      <h4>Product Name</h4>
        <TextField
          className="input-field"
          id="outlined-name"
          type="search"
          name="title"
          onChange={e => setTitle(e.target.value)}
          value={title}
          margin="normal"
        />
        <h4>Description</h4>
        <TextField
          className="input-field"
          id="outlined-name"
          type="search"
          name="description"
          onChange={e => setDescription(e.target.value)}
          value={description}
          margin="normal"
          
         
        />
        <h4>Price</h4>
        <TextField
          className="input-field"
          id="outlined-name"
          type="search"
          name="price"
          onChange={e => setPrice(e.target.value)}
          value={price}
          margin="normal"
          
       
        />
        <h4>Upload Image</h4>
        <TextField
          className="input-field"
          id="upload-button"
          accept="image/*"
          name="image"
          type="file"
          onChange={e => fileHandler(e)}
          value={image}
          margin="normal"
          
          
        />
        <div className='submit-section-vendor'>
        <Button
        className='submit-button-vendor'
        type="submit"
        fullWidth
        onClick={submitProductProfile}
        
      >
        Submit 
      </Button>
      </div>
      </form>
      </div>
      </div>
      
    </>
  );
};

export default withRouter(withStyles(styles)(ProductForm));