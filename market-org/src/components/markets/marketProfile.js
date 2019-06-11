import React, { useState } from 'react'
import VendorList from './VendorList'
import styled from 'styled-components';
import axios from '../../axios-instance';

const MarketProfileContainer = styled.div`
    width: 850px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MarketProfilePage = (props) => {
    console.log(props)
    

    

    return(
        <div><h1>{props.MarketProfilePage}</h1></div>
    )
}

export default MarketProfilePage







