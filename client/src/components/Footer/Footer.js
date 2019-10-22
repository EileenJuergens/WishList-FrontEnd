import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className='footer'>
      <NavLink to='/dashboard'>
        <FiHome className='footer-item'/>
      </NavLink>
      <NavLink to='/friends'>
        <FiUsers className='footer-item'/>
      </NavLink>
      <NavLink to='/myWishList'>
        <FiHeart className='footer-item'/>
      </NavLink>     
      <FiMenu className='footer-item'/>
    </div>
  );
};