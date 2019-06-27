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
  Input,
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

const UpdateProductImage = props => {
  const { classes } = props;
  const { id } = props.match.params;

  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  const [product, setProduct] = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);

   const [image, setImage] = useState('');
  const [file, setFile] = useState(null);

  const photoInp = React.createRef();

    // Update Image only
    const updateImage = (e, id, image) => {
      e.preventDefault();
  
      const token = localStorage.getItem("token");
      const firebaseId = localStorage.getItem("firebaseId"); 
      // console.log('file', file)  
  
      const storageRef = storage.ref(
        `images/updated-product-images@${new Date().toISOString()}`
      );
      let uploadImage = storageRef.put(file);
      return uploadImage.then(() => {
        return uploadImage.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('update downloadUrl', downloadURL);
          
          const updatedImage = {
            image: downloadURL
          };
          console.log('updated image', image);
  
          axios
            .put(`products/${id}`, updatedImage, {
              "Content-Type": "application/json",
              headers: { Authorization: token }
            })
            .then(res => {
              console.log("product res put", res);
              setProduct(res.data);
                  
            })
            .catch(err => {
              console.log(err);
            });
      props.history.push(`/oneVendorPrivate/${firebaseId}`);                
        });      
      });
  };

  const fileHandler = e => {
    e.persist();
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
    // setFile(e.target.files[0]);
  };

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
            <Input
              className="input-field"
              id="upload-button"
              accept="image/*"
              name="image"
              type="file"
              onChange={e => fileHandler(e)}
              value={image}
              margin="normal"
              ref={photoInp}
              style={{ display: "none", color: 'white' }}
            />
            <label
              htmlFor="upload-button"
              style={{
                cursor: "pointer",
                fontSize: 14,
                margin: '10px',
                background: 'rgba(180, 45, 90)',
                color: 'white',
                padding: '5px',
                borderRadius: '5px'                 
              }}
            >
              Choose file 
            </label>
            <Typography>{file ? file.name : ""}</Typography>
            <Button
            type="submit"
            variant="contained"            
            onClick={e => updateImage(e, id, setProduct)}
            className={classes.submit}
          >
            Update Picture
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default withRouter(withStyles(styles)(UpdateProductImage));
