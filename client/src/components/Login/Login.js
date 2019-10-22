import React from 'react';
import { NavLink } from "react-router-dom";
import './Login.css';
import wishListLogo from '../../assets/Finished-Logo.png';


export default function Login () {
  return(
    <div>
      <img src={wishListLogo} alt="wishListLogo" className="wishListLogo"/>
      <NavLink to="/dashboard">
        <button className='login-btn'>Login with Google</button>
      </NavLink>
    </div>
  );
};
