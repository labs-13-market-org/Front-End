import React, {useContext } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withRouter } from 'react-router'
import Navbar from './components/navbar/Navbar';

import About from './components/about/about';
import SignIn from './components/login/SignIn';
import SignUp from './components/register/SignUp';
import LandingPage from './components/landingpage/landingpage';
import CreateMarket from './components/createmarket/CreateMarket';

import Homepage2 from './components/homepage/Homepage2';
import PrivateRoute from './components/privateroute/PrivateRoute';
import StallsList from './components/stalls/stallsList';

import VendorForm from "./components/vendor/VendorForm";
import MyVendorStalls from "./components/myStalls/vendorStalls";
import MyMarketStalls from "./components/myStalls/marketStalls";

import VendorLandingPage from "./components/vendor/VendorLandingPage";
import ProductForm from "./components/product/ProductForm";
import UpdateProductForm from "./components/product/UpdateProductForm";
// import ProductByVendorCard from './components/product/ProductByVendorCard';
import ProductByVendor from './components/product/ProductByVendor';
import OneVendorPublic from './components/vendor/OneVendorPublic';
import OneVendorPrivate from './components/vendor/OneVendorPrivate';
import MarketProfilePage from './components/markets/marketProfile';
import VendorCart from './components/cart/cart';
import CartTest from "./components/cart/cart-test.js";
import MarketLandingPage from "./components/marketLandingPage/marketLandingPage";
import VendorsPerMarket from "./components/marketLandingPage/VendorsPerMarket";

import { ContextProvider } from './components/context/state';
import "./App.css";
import EditMarket from './components/createmarket/EditMarket2';
import NoMatchingRoutes from './components/nomatchingroutes/NoMatchingRoutes';


function App() {
  
  return (
      <React.Fragment>
        <div className='app-wrapper'>
        <CssBaseline />
        <ContextProvider>
        <Navbar className='nav-bar' />
        <Switch>
          <Route exact exact path="/" component={Homepage2} />
          <PrivateRoute exact path="/create-market" component={CreateMarket} />
          <PrivateRoute exact path="/edit-market/:firebase_id" component={EditMarket} />
          <Route path="/vendor" component={VendorForm} />
          <Route path="/vendorStall" component={MyVendorStalls} />
          <Route path="/marketStall" component={MyMarketStalls} />
          <Route path="/cart-test" component={CartTest}/>
          <Route path="/productForm" component={ProductForm} />
          <Route path='/signup' component={SignUp}/>
          <Route path='/signin' component={SignIn}/>
          <Route path="/about" component={About}/>
          {/* <Route path="/updateProductForm" component={UpdateProductForm} /> */}
          <Route path="/productsByVendor" component={ProductByVendor} />
          {/* <Route path="/oneVendorPublic/:firebase_id/product" component={ProductByVendorCard} /> */}
          <Route path="/productsByVendor/:id/updateProductForm" component={UpdateProductForm} />
          <Route exact path="/markets" component={MarketLandingPage} />
          <Route path="/vendorsByMarket/:firebase_id" component={VendorsPerMarket} />
          <Route path="/markets/marketProfile/" component={MarketProfilePage} />
          <Route path="/landing-page" component={LandingPage}/>
          <Route exact path="/stalls/" component={StallsList}/>  
          <Route path="/allVendors" component={VendorLandingPage} />
          <Route path="/oneVendorPublic/:firebase_id" component={OneVendorPublic} />
          <Route path="/oneVendorPrivate/:firebase_id" component={OneVendorPrivate} />        
          <Route exact path='/cart/:id' component={VendorCart}/>
          <Route component={NoMatchingRoutes} />
        </Switch>
        </ContextProvider>
        </div>
      </React.Fragment>
  )
}

export default withRouter(App);
