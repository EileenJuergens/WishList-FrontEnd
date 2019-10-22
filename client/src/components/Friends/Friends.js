import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Friends.css';

export default function Friends () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("http://localhost:5000/user")
      .then(result => result.json())
      .then(user => {
        setUsers(user);
      });
  };

  return (
    <div>
      <Header/>
      <div className="container-myFriends">
        <p className="title-myFriends">My friends</p>
        <div className="buttons-container-myFriends">
          {users.slice(1).map(user => (
            <NavLink key={user.id} to={`/friendsWishList/${user.id}`}>
              <button className="btn-name-myFriends">{user.username}</button>
            </NavLink>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};
