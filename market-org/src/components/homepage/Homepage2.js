import React, { useEffect, useContext, useState } from "react";
//import styles
import "./Homepage.css";
import Navbar from '../navbar/Navbar';
import Searchbar from "../navbar/Searchbar";
import { AuthContext } from "../authContext/authState";
import { Container, Grid, Paper, makeStyles, Button } from "@material-ui/core";
import Footer from '../footer/footer.js'
// import VendorForm from '../vendor/VendorForm';
import axios from "../../axios-instance";
import logo from "../../images/logo.png";
import market1 from '../../images/market1.jpg';
import market2 from '../../images/market2.jpg';
import market3 from '../../images/market3.jpg'
import market4 from '../../images/market4.jpg'
import market5 from '../../images/market5.jpg'
import stallIcon from '../../images/stallicon.png'
import farmerIcon from '../../images/farmer.png'
import moneyIcon from '../../images/money.png'
import flowerIcon from '../../images/flowerIcon.png'
import strawberry from '../../images/strawberry.jpg'
import veggies from '../../images/veggies.jpg'
import salad from '../../images/salad.jpg'
import logo2 from '../../images/logo2.png'
import mainLogo from '../../images/logo-white.png'
import vegetables from '../../images/vegetables.png'
import team from '../../images/team.png'
// import StallsList from './components/stalls/stallsList';
import queryString from 'query-string';


const Homepage2 = props => {  
  
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [stripe_acc_id, setStripeAccId] = useState(null)
  const firebase_id = localStorage.getItem('firebaseId')

 useEffect(() => {

    let params = queryString.parse(props.location.search)
    console.log('params:', params)
      axios.get(`/stripe/token/?code=${params['code']}&state=${params['state']}`)
      .then(res => {
        console.log('homepage:', res.data)
        setStripeAccId(res.data.body.stripe_user_id)
        return axios.put(`/markets/${firebase_id}`, {stripeAccountId: res.data.body.stripe_user_id})
        .then(res => {
          console.log("put", res)
        })
      })
      .catch(err => {
        console.log(err)
      })
    
    
  }, [props]);

  console.log("curr", currentUser);

  const vendorFormPage = () => {
    props.history.push(`/vendor`);
  };

  return (
    <React.Fragment>
      <section className="home-page">
        {/* <div className='search-bar'>
          <Searchbar />
        </div> */}
          <div className="home-wrapper">
            <div className="welcome">
              <div>
                <div className="logo">
                  <img src={mainLogo} alt="logo" />
                </div>
                <div className="message">
                  <h1>Welcome to Market Organizer</h1>
                </div>
              </div>
            </div>
            
              
                <div className="info-header-section">
                 
                  <div className='info'>
                  <h3> What is Market Organizer?</h3>
                  <p>Market Organizer is a platform that was built to connect markets
                  with their vendors. Markets can be created and, then vendors can rent stalls.</p>
                  </div>
            

                  <div class="img-row">
                  {/* <img src={veggies} /> */}
                  
                </div>
                </div>
                
            
            <div className='row-stagger-wrapper-left'>
            <div class="section-one">
                <div id="pic">
                  <img src={market2} alt="market-image-1" />
                </div>
                <div id="content" class="content-1">
                  <h3>A Bridge Between Customers and Their Products</h3>
                  <p>No more searching endlessly for the right market to sell your products. Let us take care of it!</p>
                  <a href="">
                    <button>Register Today</button>
                  </a>

                </div>
              </div>
            </div>
            <div className='row-stagger-wrapper-right'>
            <div class="section-one">
                
                <div id="content" class="content-1">
        
                  <h3>Diverse selection of goods & services waiting for your customers</h3>
                  <p>From farmer's market produce, fresh seafood, poltury, vegetables, boutique handcrafted goods, our markets have it all!</p>
                  <a href="">
                    <button>Register Today</button>
                  </a>
                </div>
                <div id="pic">
                  <img src={market4} alt="market-image-2" />
                </div>
              </div>
              

            </div>
            <div className='bullet-points-wrapper'>
                
                <div className='bullet-section'>
                <h1>What Does Market Organizer Offer?</h1> 
                <div className='bullet'>
                    <img src={farmerIcon} alt=''/>
                    <h3>Advertise to Sellers</h3>
                    <p>Register your market with our quick sign-up process, and start attracting sellers!</p>
                </div>
                <div className='bullet'>
                    <img src={moneyIcon} alt=''/> 
                    <h3>Secure Transactions</h3>
                    <p>Rest Assured, your payment is processed through Stripe and is very safe.</p>
                </div>
                <div className='bullet'>
                    <img src={stallIcon} alt=''/> 
                    <h3>Rent Stalls</h3>
                    <p>Do you have something to sell? Find your market and rent today!</p>
                </div>
                <div className='bullet'>
                    <img src={flowerIcon} alt=''/>
                    <h3>Marketing</h3>
                    <p>We handle all the branding, user acquisition, and customer retention, so you can focus on selling the products you love.</p>
                </div>
                <div className='bullet'>
                    <img src={vegetables} alt=''/> 
                    <h3>A Network of Trusted Vendors</h3>
                    <p>You're not just connecting with your customers, you're also connected with a network of experienced vendors from all walks of life.</p>
                </div>
                <div className='bullet'>
                    <img src={team} alt=''/>
                    <h3> Facilities Management </h3>
                    <p>From stall set up, stall organization, operations: we will help ensure your vendor operations will be the most seamless ever. </p>
                </div>
                </div>
              

            </div>
            <div className='call-to-action'>
              <div className='title'>
              <h3>Are you Ready to Get Started?</h3>
              </div>
              
              <div className='cta-button'>
              <button>Register Today</button>
              </div>
              
              
            </div>
            <div className='footer-wrapper'>
            <div className='footer-logo'>
              <img src={logo} alt=''/>
              </div>
            </div>
            <Footer />
          </div>
          
          
        
      </section>
    </React.Fragment>
  )
  
};

export default Homepage2;
