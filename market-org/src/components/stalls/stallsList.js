import React, { useEffect, useState } from "react";
import axios from "../../axios-instance";
import Stall from "./stall.js";
import './Stalls.css';





const StallsList = (props) => {

    const [stalls, setStalls] = useState([]);
    const [market, setMarket] = useState({})
    // const [hasAStallChanged, setStallChangeStatus] = useState(false);

    // useEffect(() => {
    //     axios.get(`/stalls/market/${props.location.state.firebase_id}`)
    //     .then(res => {
    //         console.log("Stalls : ", res.data)
    //         let stallItems = res.data.stallData;
    //         // stalls = stalls.map(stall => JSON.parse(stall));
    //        setStalls(stallItems);
    //         console.log("stalls", stalls);
    //        setStallChangeStatus(false);
    //     }).catch(err => {
    //             console.log(err.message);
    //     })


    // }, [hasAStallChanged]);

    useEffect(() => {
        axios.get(`/stalls/market/${props.location.state.firebase_id}`)
        .then(res => {
            console.log("Stalls : ", res.data)
            let stallItems = res.data.stallData;
            const market = res.data.marketData
            setMarket(market)
            // stalls = stalls.map(stall => JSON.parse(stall));
            console.log("stalls",typeof stalls);
           setStalls(stallItems);
            
        //    setStallChangeStatus(false);
        }).catch(err => {
                console.log(err.message);
        })


    }, []);

    const addToCart = (stalls_id) => {
        const cart_id = localStorage.getItem('firebaseId')
        console.log(cart_id, 'vendor firebase id')
        axios.post(`cart/add-stall-to-cart/${cart_id}`, {stalls_id})
    }

 
    // const cart_id = localStorage.getItem('firebaseId')
    console.log("Getting stalls ", stalls);
    return(
        <div className='market-by-id-wrapper'>
           
            
            <div className='market-by-id-header'>
            <h2>Rent Your Stalls</h2>
            </div>
            <div className='market-by-id-info'>
            <h3>Selected Market:</h3>
            <h4>{market.market_name}</h4>
            <h4>{market.address}</h4>
            <h4>{market.city}</h4>
            <h4>{market.state}</h4>
            <h4>{market.phone_number}</h4>
            </div>
            
            
            
            <div className='stalls'>
            <h2>Available Stalls:</h2>
            {Object.keys(stalls).map((stall, index) => (
                
                
                <div className='stall'key ={index}>
                    {console.log(stalls[stall].id, 'stall id')}
                    <h3>Size:</h3>
                    <p> Length: {stalls[stall].size.length} ft. Width: {stalls[stall].size.width} ft.</p>
                    <h3>Price:</h3>
                    <p>${stalls[stall].price}</p>
                    <button onClick={() => addToCart(stalls[stall].id)}>Add To Cart</button>
                </div>
            ))}
            </div>
            </div>
           
            /* <h2> List of available stalls for {props.location.state.market_name}</h2>
            {stalls.map(stall_item => {
                console.log(stall_item, 'stall item')
                return (
                    <div>
                        {stall_item}
                    </div>
                )
                // return (<Stall stall={stall_item} setStallChangedStatus={setStallChangeStatus}/>)
            })} */
        
    )
}

export default StallsList;
