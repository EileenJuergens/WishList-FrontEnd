import React, { useState } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { addWish } from '../../actions';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './NewWishForm.css';

const NewWishForm = ({addWish, history, location}) => {

  const wishLocation = location.state && location.state.wish
  const initialState = wishLocation || {
    description: '',
    price: '',
    link: '',
    notes: ''
  };

  const [wish, setWish] = useState(initialState);

  const handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:5000/wishlist/1", {
      method: 'POST',
      body: JSON.stringify({...wish}),
      headers: {
        'content-type': 'application/json'
      }})
      .then(res => res.json())
      .then(() => {
        history.push("/myWishList")
      })
  }

  const handleInput = (event,key) => {
    const { value } = event.target;
    const updatedState = {...wish,[key]: value} 
    setWish(updatedState);
  }

  return (
    <div>
      <Header/>
      <div className="container-form">
        <p className="title-form">My New Wish</p>
        <form className="form-input-btn">
          <div className="form-group">
            <label>Description</label>
            <input type="text" value={wish.description}
              onChange={(e)=> handleInput(e,'description')}/>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="text" value={wish.price}
              onChange={(e)=> handleInput(e,'price')}/>
          </div>
          <div className="form-group">
            <label>Link</label>
            <input type="text" value={wish.link}
              onChange={(e)=> handleInput(e,'link')}/>
          </div>
          <div className="form-group">
            <label>Notes</label>
            <input type="text" value={wish.notes} className="notes" 
              onChange={(e)=> handleInput(e,'notes')}/>
          </div>
          <div className="container-btn-form">
            <NavLink to="/myWishList">
              <button className="btn-form">Cancel</button>
            </NavLink>
            <button className="btn-form" onClick={handleSubmit} type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

const mapStateToProps = (state) => ({
	wishList: state.wishList
});

const mapDispatchToProps = (dispatch) => ({
	addWish: (wish) => dispatch(addWish(wish))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewWishForm));
