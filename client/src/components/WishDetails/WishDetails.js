import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './WishDetails.css'

const WishDetails = ({ match }) => {

  useEffect(() => {
    getWishDetails();
  }, []);

  const [wishDetails, setWishDetails] = useState({});

  const userId = match.params.userId;
  const wishId = match.params.id;

  const getWishDetails = () => {
    fetch(`http://localhost:5000/wishlist/${userId}/${wishId}`)
    .then(result => result.json())
    .then(details => {
      setWishDetails(details[0]);
    })
  }


  return (
    <div className="container-details">
      <h3 className="title-details">Details</h3>
      <div className="container-all">
        <div>
          <h3>Description</h3>
          <div>{wishDetails.description}</div>
        </div>
        <div>
          <h3>Price</h3>
          <div>{wishDetails.price}</div>
        </div>
        <div>
          <h3>Link</h3>
          <div>{wishDetails.link}</div>
        </div>
        <div>
          <h3>Notes</h3>
          <div>{wishDetails.notes}</div>
        </div>
      </div>
      <div className="footer-details">
        <NavLink to={`/friendsWishList/${userId}`}>
          <button className="btn-back-friends-wishlist">Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default WishDetails;