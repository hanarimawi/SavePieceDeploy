import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './screens/LoginPage'
import SignUpPage from './screens/SignUpPage'
import NPHomePage from './screens/NPHomePage'
import RHomePage from './screens/RHomePage'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import RestaurantSearchPage from './screens/RestaurantSearchPage'
import NonProfitReq from './screens/NonProfitReq';
import MenuPage from './screens/MenuPage';
import NPRegisterPage from './screens/NPRegisterPage';
import LoginChoicePage from './screens/LoginChoicePage';
import RRegisterPage from './screens/RRegisterPage';
import SettingsPage from './screens/SettingsPage';
import EditPage from './screens/EditPage';
import RestsNearMePage from './screens/RestsNearMePage';
const routes = (
    <div>
      <Route path="/home" component={App}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signupchoice" component={SignUpPage}/>
      <Route path="/loginchoice" component={LoginChoicePage}/>
      <Route path="/nphome" component={NPHomePage}/>
      <Route path="/rhome" component={RHomePage}/>
      <Route path="/np-req" component={NonProfitReq}/>
      <Route path="/menu" component={MenuPage}/>
      <Route path="/rest-search" component={RestaurantSearchPage}/>
      <Route path="/npreg" component={NPRegisterPage}/>
      <Route path="/restreg" component={RRegisterPage}/>
      <Route path="/settings" component={SettingsPage}/>
      <Route path="/editpage" component={EditPage}/>
      <Route path="/restsnearme" component={RestsNearMePage}/>
    </div>
      
);
ReactDOM.render(<BrowserRouter>{routes}</BrowserRouter>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
