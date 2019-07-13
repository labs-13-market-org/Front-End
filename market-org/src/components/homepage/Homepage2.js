import React, { useEffect, useContext, useState } from "react";
import "./Homepage.css";
import { AuthContext } from "../authContext/authState";
import { Grid, } from "@material-ui/core";
import { withRouter, Link } from 'react-router-dom';
import axios from "../../axios-instance";
import market1 from '../../images/market1.jpg';
import market2 from '../../images/market2.jpg';
import market3 from '../../images/market3.jpg'
import market4 from '../../images/market4.jpg'
import market5 from '../../images/market5.jpg'
import stallIcon from '../../images/stallicon.png'
import farmerIcon from '../../images/farmer.png'
import moneyIcon from '../../images/money.png'
import flowerIcon from '../../images/flowerIcon.png'
import vegetables from '../../images/vegetables.png'
import team from '../../images/team.png'
import queryString from 'query-string';
import homePageStyle from './homepage-styles.js'
import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from '../global-styles/parallex.js';
import classNames from "classnames";
import { grayBackgroundColor, purpleBackgroundColor } from "../global-styles/global";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import mainLogo from '../../images/logo-white.png';
import Custombutton from '../global-styles/CustomButton';



const style = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  },
  griditem: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
  },
  media: {
    height: 0,
    paddingTop: '56.25%' 
 },
}

const Homepage2 =  (props) => {  
  
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [stripe_acc_id, setStripeAccId] = useState(null)
  const firebase_id = localStorage.getItem('firebaseId')
  const [markets1, setMarkets1] = useState([])
  const [markets2, setMarkets2] = useState([])
  const [markets3, setMarkets3] = useState([])
  const [markets4, setMarkets4] = useState([])
  const [markets5, setMarkets5] = useState([])

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
    
      axios
      .get("/markets/")
      .then(res => {
        console.log("array 4", res.data[4])
        setMarkets1(res.data[0])
        setMarkets2(res.data[1])
        setMarkets3(res.data[2])
        setMarkets4(res.data[3])
        setMarkets5(res.data[4])
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [props]);

  console.log("curr", currentUser);

  const vendorFormPage = () => {
    props.history.push(`/vendor`);
  };

   const register = () => {
    props.history.push("/signup");
  };
  const { classes, ...rest } = props
  console.log('first market 1, ', markets1.id)
  return (
   
    <React.Fragment>
      <div>
      <Parallax image={require('../../images/homeBG.jpg')} filter="dark">
          <div className={classes.container}>
            <Grid container className={classes.grid}>
              <Grid className={classes.griditem}>
                <h1 className={classes.title}>Welcome To Market Organizer</h1>
                <h4 >
                  
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                {/* TODO: ADD SMOOTH SCROLL TO BUTTON*/}
                <Custombutton>
                  Take a look <div className={classes.caret}></div>
                </Custombutton>
              </Grid>
            </Grid>
          </div>
        </Parallax> 
        <div className={classNames(classes.main, classes.mainRaised)} >
          <div className={classes.container} style={{paddingBottom: '2rem'}}>
            <Grid className={classes.section}>
                <Grid className={classes.sectionContent} xs={12} sm={8} md={8} justify='center'  >
                    <h2 className={classes.headerTitle} style={{textAlign: 'center'}}>What is Market Organizer?</h2>
                    <h5 className={classes.description}>
                      This is the paragraph where you can write more details about your
                      product. Keep you user engaged by providing meaningful
                      information. Remember that by this time, the user is curious,
                      otherwise he wouldn't scroll to get here. Add a button if you want
                      the user to see more.
                    </h5>
              </Grid>
            </Grid>
            <div>
              <Grid container className={classes.gradient} >
                <Grid className={classes.infoArea} xs={12} sm={4} md={4} >
                  <div className={classes.sectionContent} >
                    <img className={classes.infoIcon} src={farmerIcon} alt='money icon'/> 
                    <div className={classes.descriptionWrapper}>
                      <h4 className={classes.iconTitle}>Advertise to Sellers</h4>
                      <h5 className={classes.iconDescription}>Register your market with our quick sign-up process, and start attracting sellers!</h5>
                  </div>
                </div>
              </Grid>
              <Grid className={classes.infoArea} xs={12} sm={4} md={4} >
                <div className={classes.sectionContent} >
                  <img className={classes.infoIcon} src={moneyIcon} alt='money icon'/>
                  <div className={classes.descriptionWrapper}>
                    <h4 className={classes.iconTitle}>Secure Transactions</h4>
                    <h5 className={classes.iconDescription}>Rest Assured, your payment is processed through Stripe and is very safe.</h5>
                  </div>
                </div>
              </Grid>
              <Grid className={classes.infoArea} xs={12} sm={4} md={4} >
                <div className={classes.sectionContent}>
                  <img className={classes.infoIcon} src={stallIcon} alt='money icon'/> 
                    <div className={classes.descriptionWrapper}>  
                      <h4 className={classes.iconTitle}>Rent Stalls</h4>
                      <h5 className={classes.iconDescription}>Do you have something to sell? Find your market and rent today!</h5>
                    </div>
                </div>
              </Grid>
              <Grid className={classes.infoArea} xs={12} sm={4} md={4} >
                <div className={classes.sectionContent} >
                    <img className={classes.infoIcon} src={flowerIcon} alt='money icon'/>
                    <div className={classes.descriptionWrapper}>
                      <h4 className={classes.iconTitle}>Marketing</h4>
                      <h5 className={classes.iconDescription}>We handle all the branding, user acquisition, and customer retention, so you can focus on selling the products you love.</h5>
                    </div>
                </div>
              </Grid>
              <Grid className={classes.infoArea} xs={12} sm={4} md={4} >
                <div className={classes.sectionContent}>
                  <img className={classes.infoIcon} src={vegetables} alt='money icon'/>
                  <div className={classes.descriptionWrapper}>
                    <h4 className={classes.iconTitle}>A Network of Trusted Vendors</h4>
                    <h5 className={classes.iconDescription}>You're not just connecting with your customers, you're also connected with a network of experienced vendors from all walks of life.</h5>
                  </div>
                </div>
              </Grid>
              <Grid className={classes.infoArea} xs={12} sm={4} md={4} >
                <div className={classes.sectionContent} >
                  <img className={classes.infoIcon} src={team} alt='money icon'/> 
                  <div className={classes.descriptionWrapper}>
                    <h4 className={classes.iconTitle}>Facilities Management</h4>
                    <h5 className={classes.iconDescription}>From stall set up, stall organization, operations: we will help ensure your vendor operations will be the most seamless ever.</h5>
                 </div>
                </div>
              </Grid>
            </Grid>
            </div>
            <br />
            <div >
              <h2 className={classes.headerTitle}>Featured Markets</h2>
               {/*TODO: CLEAN THIS UP SO CODE IS DRY */}
              <Grid  container spacing={3} className={classes.feauturedMarket} >
                  <Card className={classes.card} >
                      <div className={classes.overlay}></div>
                      <div style={{
                        backgroundImage: `url(${markets1.image})`, 
                        height: '380px',  
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center, center',
                        maegin: 'auto',
                        padding: '0',
                      }}> </div>
                      <Typography className={classes.cardBodyBackground}  variant="body2" color="textSecondary" component="p">
                          <div className={classes.descriptionWrapper} style={{marginTop: '2rem'}}>
                            <h3 className={classes.iconTitle}>{markets1.market_name}</h3>
                            <h4 className={classes.iconTitle}>{markets1.phone_number}</h4>
                            <h5 className={classes.iconDescription}>{markets1.address} {markets1.city} {markets1.state}</h5>
                        </div>
                      </Typography>
        
                  </Card>
                  <Card className={classes.card} >
                      <div className={classes.overlay}></div>
                      <div style={{ 
                        backgroundImage: `url(${markets2.image})`, 
                        height: '380px',  
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center, center',
                        maegin: 'auto',
                        padding: '0',
                      }}></div>   
                      <Typography className={classes.cardBodyBackground}  variant="body2" color="textSecondary" component="p">
                          <div className={classes.descriptionWrapper} style={{marginTop: '2rem'}}>
                            <h3 className={classes.iconTitle}>{markets2.market_name}</h3>
                            <h4 className={classes.iconTitle}>{markets2.phone_number}</h4>
                            <h5 className={classes.iconDescription}>{markets2.address} {markets2.city} {markets2.state}</h5>
                        </div>
                    </Typography>
                  </Card>
                  <Card className={classes.card} >
                      <div className={classes.overlay}></div>
                      <div style={{ 
                        backgroundImage: `url(${markets3.image})`, 
                        height: '380px',  
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center, center',
                        maegin: 'auto',
                        padding: '0', 
                      }}></div>
                      <Typography className={classes.cardBodyBackground}  variant="body2" color="textSecondary" component="p">
                          <div className={classes.descriptionWrapper} style={{marginTop: '2rem'}}>
                              <h3 className={classes.iconTitle}>{markets3.market_name}</h3>
                              <h4 className={classes.iconTitle}>{markets3.phone_number}</h4>
                              <h5 className={classes.iconDescription}>{markets3.address} {markets3.city} {markets3.state}</h5>
                        </div>
                      </Typography>
                  </Card>
              </Grid>

              <Grid className={classes.feauturedMarketBottom}>
                 {/*TODO: CHANGE THE IMAGES SO THAT THEY MATCH THE INFORMATION*/}
                <Card className={classes.card} style={{width: '80%', height: '280px'}}>
                      <div className={classes.overlay}></div>
                      <div style={{ 
                        backgroundImage: `url(${markets3.image})`, 
                        height: '380px',  
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center, center',
                        maegin: 'auto',
                        padding: '0', 
                      }}></div>
                      <Typography className={classes.cardBodyBackground}  variant="body2" color="textSecondary" component="p">
                          <div className={classes.descriptionWrapper} style={{marginTop: '2rem'}}>
                              <h3 className={classes.iconTitle}>{markets4.market_name}</h3>
                              <h4 className={classes.iconTitle}>{markets4.phone_number}</h4>
                              <h5 className={classes.iconDescription}>{markets4.address} {markets4.city} {markets4.state}</h5>
                        </div>
                      </Typography>
                  </Card>
                    <Card className={classes.card} style={{width: '80%', height: '280px'}}>
                      <div className={classes.overlay}></div>
                      <div style={{ 
                        backgroundImage: `url(${markets3.image})`, 
                        height: '380px',  
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center, center',
                        maegin: 'auto',
                        padding: '0', 
                      }}></div>
                      <Typography className={classes.cardBodyBackground}  variant="body2" color="textSecondary" >
                          <div className={classes.descriptionWrapper} style={{marginTop: '2rem'}}>
                              <h3 className={classes.iconTitle}>{markets5.market_name}</h3>
                              <h4 className={classes.iconTitle}>{markets5.phone_number}</h4>
                              <h5 className={classes.iconDescription}>{markets5.address}, {markets5.city}, {markets5.state}, {markets5.zipcode}</h5> 
                        </div>
                      </Typography>
                  </Card>
              </Grid>
          </div> 
          <br />     
          <Grid container spacing={3} style={{backgroundColor: grayBackgroundColor, marginBottom: '1rem', padding: '0',}}>
            <Grid item xs={6} style={{padding: '0',}}>
              <div style={{
                backgroundImage: `url(${market2})`, 
                height: '455px',  
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center, center',
                margin: 'auto',
                padding: '0',
              }}>
                </div>
            </Grid>
            <Grid item xs={6} style={{padding: '0',}}>
                <Grid item  className={classes.section} style={{color: purpleBackgroundColor, marginLeft: '1rem', marginRight: '1rem'}}>
                  <h3 className={classes.headerTitle}>A Bridge Between Customers and Their Products</h3>
                  <p className={classes.iconDescription} style={{color: purpleBackgroundColor}}>No more searching endlessly for the right market to sell your products. <br/>Let us take care of it!</p>
                  <br/>
                  <Custombutton>
                  <Link to="/signup" style={{color: 'white', textDecoration: 'none'}}>
                    Register Today
                  </Link>
                  </Custombutton>
                </Grid>
            </Grid>
          </Grid>
          <br/>
           <Grid container spacing={3} style={{backgroundColor: purpleBackgroundColor, marginBottom: '1rem', padding: '0',}}>
              <Grid item xs={6} style={{padding: '0',}}>
                    <Grid item  className={classes.section} style={{color: grayBackgroundColor, marginLeft: '1rem', marginRight: '1rem'}}>
                      <h3 className={classes.headerTitle} style={{color: grayBackgroundColor,}}>Diverse selection of goods & services waiting for your customers</h3>
                      <p className={classes.iconDescription} style={{color: grayBackgroundColor, }}>From  produce, fresh seafood, poltury, vegetables, boutique handcrafted <br/>goods, our markets have it all!</p>
                      <br/>
                      <Custombutton >
                      <Link to="/signup" style={{color: 'white', textDecoration: 'none'}}>
                          Register Today
                      </Link>
                      </Custombutton>
                    </Grid>
                </Grid>
                <Grid item xs={6} style={{padding: '0'}}>
                  <div style={{
                    backgroundImage: `url(${market4})`, 
                    height: '455px',  
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', 
                    backgroundPosition: 'center, center',
                    margin: 'auto',
                  }}>
                    </div>
                </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
  
};

export default withRouter(withStyles(homePageStyle)(Homepage2));
