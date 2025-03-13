import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
            <Link to="/products" className="btn btn-outline-dark mt-3">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.map((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
      return item;
    });

    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <p className="mx-5">{item.qty}</p>

                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    addItem(item);
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>₹ {item.price.toFixed(2)}</strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-white">
                  <div className="card-header py-3 border-bottom border-light">
                    <h5 className="mb-0 text-white">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center border-bottom border-light px-0 pb-3">
                        <div>
                          Products ({totalItems})
                        </div>
                        <span>₹ {subtotal.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center border-bottom border-light px-0 py-3">
                        <div>
                          Shipping
                        </div>
                        <span>₹ {shipping.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center px-0 py-3">
                        <div>
                          <strong>Total amount</strong>
                          <p className="mb-0 text-muted">(Including GST)</p>
                        </div>
                        <span>
                          <strong>₹ {(subtotal + shipping).toFixed(2)}</strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/checkout"
                      className="btn btn-light btn-lg w-100 mt-4"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <small className="text-muted">
                    <i className="fas fa-lock me-2"></i>
                    Secure Checkout | All prices include GST
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      <Footer />
    </>
  );
};

export default Cart;
