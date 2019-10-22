import React from 'react';
import './Header.css';
import { FaSignal } from 'react-icons/fa';
import { IoIosWifi } from 'react-icons/io';
import { IoIosBatteryFull } from 'react-icons/io';

export default function Header () {
  return (
    <div className='header'>
      <div className='apple-mockup'>
        <p className='apple-left-items'>10:15</p>
        <div>
          <FaSignal className='apple-right-items signal'/>
          <IoIosWifi className='apple-right-items'/>
          <IoIosBatteryFull className='apple-right-items'/>
        </div>

      </div>
      <p className='header-title'>List it. Don't forget it.</p>
    </div>
  );
};