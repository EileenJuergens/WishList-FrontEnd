import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import MyWishList from './components/MyWishList/MyWishList';
import NewWishForm from './components/NewWishForm/NewWishForm';
import Friends from './components/Friends/Friends';
import OthersWishList from './components/OthersWishList/OthersWishList';
import WishDetails from './components/WishDetails/WishDetails';

function App() {
  return (
    <div className='App'>
      <Router>
          <Route path='/' component={Login} exact/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path="/myWishList" component={MyWishList}/>
          <Route path="/newWishForm" component={NewWishForm}/>
          <Route path="/friends" component={Friends}/>
          <Route path="/friendsWishList/:id" component={OthersWishList}/>
          <Route path="/details/:userId/:id" component={WishDetails}/>
      </Router>
    </div>
  );
}

export default App;
