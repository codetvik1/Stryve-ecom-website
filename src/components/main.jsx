import React from "react";
import '/Users/ritvik/Desktop/React_E-Commerce-main/src/index.css';

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img"
            src="./assets/main.png.jpg"
            alt="Card"
            height={700}
            style={{
              objectFit: 'cover',
              width: '100%'
            }}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Buy oversized gym t-shirts for men online in India and experience unmatched comfort and style. Crafted with high-quality 240 GSM cotton, our oversized gym t-shirts provide a relaxed fit for ultimate freedom during workouts. Sweat-wicking and pre-shrunk, these tees maintain their shape and freshness even after multiple washes. Shop our mens oversized gym t-shirts and blend fashion and functionality together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
