import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, addWishlist } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import toast from "react-hot-toast";
import { products } from "../data/products";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const addToWishlist = (product) => {
    dispatch(addWishlist(product));
    toast.success("Added to wishlist");
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setData(products);
      setFilter(products);
      setLoading(false);
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's T-Shirts
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's T-Shirts
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt={product.title}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title}
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">₹ {product.price.toFixed(2)}</li>
                </ul>
                <div className="card-body d-flex justify-content-center gap-2">
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => addToWishlist(product)}
                    title="Add to Wishlist"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;