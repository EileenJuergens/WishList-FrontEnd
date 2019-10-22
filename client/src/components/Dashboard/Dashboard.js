import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';
import Lottie from 'react-lottie';
import animationData from '../../assets/white-heart.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function Dashboard () {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    path: 'white-heart.json',
    animationData: animationData,
  };

  return (
    <div>
      <Header/>
      <div className="main-dashboard">
        <p className="title-dashboard">Do you have a wish?</p>
        <p className='subtext'>Organize your own wish list. Have a look at your friends wish list to give them always a nice present.</p>
        <Lottie options={defaultOptions} height={250} width={250}/>
        <div className="buttons-container-dashboard">
          <NavLink to="/myWishList">
            <button className="btn-dashboard">My Wish List</button>
          </NavLink>
          <NavLink to="/friends">
            <button className="btn-dashboard">My Friends</button>
          </NavLink>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

