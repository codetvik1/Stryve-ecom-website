import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, addWishlist } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import toast from "react-hot-toast";
import { products } from "../data/products";
import Marquee from "react-fast-marquee"; 

import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      
      // Find the specific product based on the ID from URL
      const productData = products.find(p => p.id === parseInt(id));
      setProduct(productData);
      setLoading(false);

      // Get similar products (excluding current product)
      const similarProductsData = products
        .filter(p => p.id !== parseInt(id))
        .map(p => ({
          id: p.id,
          title: p.title,
          price: p.price,
          image: p.image,
          description: p.description,
          category: p.category
        }));
      
      setSimilarProducts(similarProductsData);
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    if (!product) return <div>Product not found</div>;

    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6 my-4">₹ {product.price.toFixed(2)}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="d-flex">
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
            <div className="mx-4">
              <Skeleton height={400} width={250} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="col-md-3 col-sm-6 col-xs-8 col-12 mb-4">
                  <div className="card">
                    <img
                      className="card-img-top p-3"
                      src={item.image}
                      alt="Card"
                      height={300}
                      width={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {item.title.substring(0, 15)}...
                      </h5>
                    </div>
                    {/* <ul className="list-group list-group-flush">
                      <li className="list-group-item lead">${product.price}</li>
                    </ul> */}
                    <div className="card-body">
                      <Link
                        to={"/product/" + item.id}
                        className="btn btn-dark m-1"
                      >
                        Buy Now
                      </Link>
                      <button
                        className="btn btn-dark m-1"
                        onClick={() => addProduct(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container py-4" style={{ maxWidth: '1000px' }}>
        <div className="row">
          <div className="col-12">
            {loading ? <Loading /> : <ShowProduct />}
          </div>
        </div>
        
        {/* You may also like section */}
        <div className="row my-5">
          <div className="col-12">
            <h2 className="mb-4">You may also Like</h2>
            <div className="similar-products-container" style={{ 
              maxWidth: '1000px', 
              margin: '0 auto',
              overflow: 'hidden'
            }}>
              <Marquee 
                pauseOnHover={true} 
                pauseOnClick={true} 
                speed={50}
                gradient={false}
              >
                <div className="d-flex gap-4">
                  {loading2 ? (
                    <Loading2 />
                  ) : (
                    similarProducts.map((item) => (
                      <div key={item.id} style={{ minWidth: '250px', maxWidth: '250px' }}>
                        <div className="card">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="card-img-top p-3"
                            style={{ height: '200px', objectFit: 'contain' }}
                          />
                          <div className="card-body">
                            <h5 className="card-title text-truncate">
                              {item.title}
                            </h5>
                            <div className="d-flex gap-2 justify-content-center">
                              <Link
                                to={"/product/" + item.id}
                                className="btn btn-dark btn-sm"
                              >
                                Buy Now
                              </Link>
                              <button
                                className="btn btn-dark btn-sm"
                                onClick={() => addProduct(item)}
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
