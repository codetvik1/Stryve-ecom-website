import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, removeFromWishlist } from '../redux/action';
import { Navbar, Footer } from '../components';

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.handleWishlist) || [];
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    dispatch(removeFromWishlist(product));
  };

  const removeProduct = (product) => {
    dispatch(removeFromWishlist(product));
  };

  const EmptyWishlist = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Wishlist is Empty</h3>
            <NavLink to="/products" className="btn btn-outline-dark mt-3">
              Continue Shopping
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  const WishlistItems = () => {
    return (
      <>
        {wishlistItems.map((product) => (
          <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
            <div className="container py-4">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="col-md-4">
                  <h3>{product.title}</h3>
                  <p className="lead fw-bold">₹ {product.price.toFixed(2)}</p>
                  <button
                    className="btn btn-outline-dark me-2"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-dark"
                    onClick={() => removeProduct(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Wishlist</h1>
        <hr />
        {wishlistItems.length > 0 ? <WishlistItems /> : <EmptyWishlist />}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist; 