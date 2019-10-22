import React, { useEffect } from "react";
import './MyWishList.css'
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setWishes } from '../../actions';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MyWishList = ({ wishList, setWishes }) => {
  useEffect(() => {
    getMyWishes();
  }, []);

  const getMyWishes = () => {    
    fetch("http://localhost:5000/wishlist/1")
      .then(result => result.json())
      .then(wishes => {
        setWishes(wishes);
      });
  };

  return (
    <div>
      <Header/>
      <div className="container-mywishlist">
        <p className="title-mywishlist">My Wish List</p>
        <div className="add-btn-container-mywishlist">
          <NavLink to="/newWishForm">
            <button className="btn-addwish">Add a wish</button>
          </NavLink>
        </div>
        <table className="table-mywishlist">
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
                  <NavLink to={{
                    pathname: "/newWishForm", 
                    state: {wish}
                  }}>
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

const mapStateToProps = state => ({
  wishList: state.wishList
});
const mapDispatchToProps = dispatch => ({
  setWishes: (wishList) => dispatch(setWishes(wishList))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyWishList);
