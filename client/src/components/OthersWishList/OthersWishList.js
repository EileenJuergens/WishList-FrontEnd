import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './OthersWishList.css'


export default ({ match }) => {

  useEffect(() => {
    getFriendsWishes();
  }, []);

  const [wishList, setwishList] = useState([]);
  const userId = match.params.id;

  const getFriendsWishes = () => {
    fetch("http://localhost:5000/wishlist/" + userId)
      .then(result => result.json())
      .then(friendsWish => {
        setwishList(friendsWish);
      });
  };

  return (
    <div>
      <Header/>
      <div className="container-friendswishlist">
        <p className="title-friendswishlist">Wish List</p>
        <table className="table-friendswishlist">
          <thead>
            <tr>
              <th>Description</th>
              <th>Price (€)</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {wishList.map(wish => (
              <tr key={wish.id}>
                <td>{wish.description}</td>
                <td>{wish.price}</td>
                <td>
                  <NavLink to={`/details/${userId}/${wish.id}`}>
                    <button className='btn-see-details'>See Details</button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
};
