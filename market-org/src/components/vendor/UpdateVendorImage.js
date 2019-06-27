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
  Paper,
  Input
} from "@material-ui/core";

import axios from "../../axios-instance";

const styles = theme => ({
  textField: {
    width: "330px"
  },
  textColor: {
    color: "#026440"
  },
  input: {
    // color: "#026440"
  },
  card: {
    maxWidth: 800
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  }
});

const UpdateVendorImage = props => {
  const { classes } = props;
  const { firebase_id } = props.match.params;

  const [vendorProfile, setVendorProfile] = useContext(VendorContext);

  const [image, setImage] = useState('');
  const [file, setFile] = useState(null);

  const vendorPhotoInp = React.createRef();  

  const updateVendorImage = (e, firebase_id, image) => {
    e.preventDefault();

    const token = localStorage.getItem("token");  
    console.log("file", file); 

    const storageRef = storage.ref(
      `images/updated-vendor-images@${new Date().toISOString()}`
    );
    let uploadImage = storageRef.put(file);
    return uploadImage.then(() => {
      return uploadImage.snapshot.ref.getDownloadURL().then(downloadURL => {
        console.log('update downloadUrl', downloadURL);
        
    const updatedVendorImage = {      
      image: downloadURL
    };
        console.log('updated image', image);

        axios
          .put(`vendor/${firebase_id}`, updatedVendorImage, {
            "Content-Type": "application/json",
            headers: { Authorization: token }
          })
          .then(res => {
            console.log("product res put", res);
            setVendorProfile(res.data);
                
          })
          .catch(err => {
            console.log(err);
          });
          props.history.replace(`/oneVendorPrivate/${firebase_id}`);            
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
      <Paper className={classes.paper}>
        <form>
            <Input
              className="input-field"
              id="upload-button"
              accept="image/*"
              name="image"
              type="file"
              onChange={e => fileHandler(e)}
              value={image}
              margin="normal"
              ref={vendorPhotoInp}
              style={{ display: "none" }}
            />
            <label
              htmlFor="upload-button"
              style={{
                cursor: "pointer",
                fontSize: 16,
                margin: '5px' 
              }}
            >
              Choose file 
            </label>
            <Typography>{file ? file.name : ""}</Typography>
        </form>
        <Button
          type="submit"
          variant="contained"
          // onClick={e => updateVendor(e, firebase_id, editVendor)}
          onClick={e => updateVendorImage(e, firebase_id, setVendorProfile)}
          className={classes.submit}
        >
          CHANGE PICTURE
        </Button>
      </Paper>
    </>
  );
};

export default withRouter(withStyles(styles)(UpdateVendorImage));
