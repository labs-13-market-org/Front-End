import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useRouter, Link } from "react-router-dom";
import MarketProfilePage from "../markets/marketProfile";
import axios from "../../axios-instance";

const ProfileCard = styled.div`
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: black;
  margin: 3%;
  width: 90%;
  display: flex;
  flex-direction: row;
`;

const ProfileMiniCard = styled.div`
  width: 33%;
`;

const MarketProfileCard = props => {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    console.log("Error");
    axios
      .get(`/vendor/market/${props.profile.firebase_id}/vendor`)
      .then(res => {
        console.log(res.data);
        let vendors = res.data.vendors;
        setVendors(vendors);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <ProfileCard>
      <ProfileMiniCard>Insert Market Image Here</ProfileMiniCard>

      <ProfileMiniCard>
        <div>
          <h2>{props.profile.market_name}</h2>
        </div>

        <div>
          {props.profile.address}
          {props.profile.city}
          {props.profile.state}
          {props.profile.zipcode}

          {/* <NavLink to={`/markets/${props.profile.firebase_id}`}>See Market Profile</NavLink> */}
          <Link
            to={{
              pathname: `/markets/marketProfile`,
              search: `?firebase_id=${props.profile.firebase_id}`,
              state: { firebase_id: this.props.firebase_id }
            }}
          />
        </div>

        <div>
          {props.profile.contact_first_name}
          {props.profile.contact_last_name}

          {props.profile.phone_number}
        </div>
      </ProfileMiniCard>

      <ProfileMiniCard>Insert market description here.</ProfileMiniCard>
    </ProfileCard>
  );
};

export default MarketProfileCard;
