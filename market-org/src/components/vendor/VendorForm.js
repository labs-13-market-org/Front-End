import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { storage } from "../../firebase";
import { AuthContext } from "../authContext/authState";
import { VendorContext } from "../context/vendor";
import {
  withStyles,
  Typography,
  TextField,
  Button,
  Input
} from "@material-ui/core";
import axios from "../../axios-instance";
import "./VendorForm.css";
const styles = theme => ({
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#026440 !important",
    color: "#000000"
  }
});

const VendorForm = props => {
  const { classes } = props;
  const [vendorProfile, setVendorProfile] = useContext(VendorContext);
  const { currentUser } = useContext(AuthContext);

  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);

  const photoInp = React.createRef();

  const submitVendorProfile = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    let currentVendorImageName = "vendor-image-" + Date.now();
    let uploadImage = storage.ref(`images/${currentVendorImageName}`).put(file);

    uploadImage.on(
      "state_changed",
      snapshot => {},
      error => {
        alert(error);
      },
      () => {
        storage
          .ref("images")
          .child(currentVendorImageName)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            setImage(url);

    const VendorObj = {
      firebase_id: localStorage.getItem("firebaseId"),
      company_name: companyName,
      contact_fullname: fullName,
      address,
      city,
      state,
      zip_code: zipcode,
      phone_number: phone,
      company_url: companyUrl,
      image: url
    };

    axios
    .post(
      `vendor/${VendorObj.firebase_id}`,
      { ...VendorObj },
      {
        "Content-Type": "application/json",
        headers: { Authorization: token }
      }
    )
    .then(res => {
      console.log("res:", res);
    })
    .catch(err => {
      console.log(err);
    });
  });
}
);
    // props.history.replace("/productForm");
    props.history.replace("/markets")
  }

  const fileHandler = e => {
    e.persist();
    if (e.target.files[0]) {
      setFile(() => e.target.files[0]);
    }
  };

  return (
    <>
      <div className="vendor-form-wrapper">
        <div className="vendor-form-left" />
        <div className="vendor-form-right">
          <h2>Register A Vendor</h2>
<<<<<<< HEAD
        <form>
          <TextField
            className="input-field"
            id="outlined-name"
            label="Company Name"
            type="search"
            name="companyName"
            onChange={e => setCompanyName(e.target.value)}
            margin="normal"
            
          />
          <TextField
            className="input-field"
            id="outlined-name"
            label="Full Name"
            type="search"
            name="fullName"
            onChange={e => setFullName(e.target.value)}
            margin="normal"
            
          />
          <TextField
            className="input-field"
            id="outlined-name"
            label="Address"
            type="search"
            name="address"
            onChange={e => setAddress(e.target.value)}
            margin="normal"
            
            
          />
          <TextField
            className="input-field"
            // id="outlined-name"
            label="City"
            type="search"
            name="city"
            onChange={e => setCity(e.target.value)}
            //   value={}
            margin="normal"
            
            
          />
          <TextField
            className="input-field"
            id="outlined-name"
            label="State"
            type="search"
            name="state"
            onChange={e => setState(e.target.value)}
            margin="normal"
           
            
          />
          <TextField
            className="input-field"
            id="outlined-name"
            label="Zipcode"
            type="search"
            name="zipcode"
            onChange={e => setZipcode(e.target.value)}
            margin="normal"
            
          />
          <TextField
            className="input-field"
            id="outlined-name"
            label="Phone number"
            type="search"
            name="phone"
            onChange={e => setPhone(e.target.value)}
            margin="normal" 
          />
          <TextField
            className="input-field"
            id="outlined-name"
            label="Company URL"
            type="search"
            name="companyUrl"
            onChange={e => setCompanyUrl(e.target.value)}
            margin="normal"
           
            
          />
        </form>
        <div className='submit-section-vendor'>
        <Button
          className="submit-button-vendor"
          type="submit"
          fullWidth
          onClick={submitVendorProfile}
          
        >
          Submit 
        </Button>
        </div>
=======
          <form>
            <TextField
              className="input-field"
              id="outlined-name"
              label="Company Name"
              type="search"
              name="companyName"
              onChange={e => setCompanyName(e.target.value)}
              margin="normal"
            />
            <TextField
              className="input-field"
              id="outlined-name"
              label="Full Name"
              type="search"
              name="fullName"
              onChange={e => setFullName(e.target.value)}
              margin="normal"
            />
            <TextField
              className="input-field"
              id="outlined-name"
              label="Address"
              type="search"
              name="address"
              onChange={e => setAddress(e.target.value)}
              margin="normal"
            />
            <TextField
              className="input-field"
              // id="outlined-name"
              label="City"
              type="search"
              name="city"
              onChange={e => setCity(e.target.value)}
              //   value={}
              margin="normal"
            />
            <TextField
              className="input-field"
              id="outlined-name"
              label="State"
              type="search"
              name="state"
              onChange={e => setState(e.target.value)}
              margin="normal"
            />
            <TextField
              className="input-field"
              id="outlined-name"
              label="Zipcode"
              type="search"
              name="zipcode"
              onChange={e => setZipcode(e.target.value)}
              margin="normal"
            />
            <TextField
              className="input-field"
              id="outlined-name"
              label="Phone number"
              type="search"
              name="phone"
              onChange={e => setPhone(e.target.value)}
              margin="normal"
            />
            <TextField
              className="input-field"
              id="outlined-name"
              label="Company URL"
              type="search"
              name="companyUrl"
              onChange={e => setCompanyUrl(e.target.value)}
              margin="normal"
            />
            <h4>Upload Your Profile Image</h4>
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
              style={{ display: "none" }}
            />
            <label
              htmlFor="upload-button"
              style={{
                cursor: "pointer"
              }}
            >
              Choose file
            </label>
            <Typography>{file ? file.name : ""}</Typography>
          </form>
          <div className="submit-section-vendor">
            <Button
              className="submit-button-vendor"
              type="submit"
              fullWidth
              onClick={submitVendorProfile}
            >
              Submit
            </Button>
          </div>
>>>>>>> 19363d862a396bc7ae1072da4dabcc2b8d15d4e7
        </div>
      </div>
    </>
  );
};

// export default VendorForm;
export default withRouter(withStyles(styles)(VendorForm));
