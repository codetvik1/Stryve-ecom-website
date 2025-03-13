import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        At Stryve, we believe fitness is more than a routine—it's a mindset. Our high-performance gym wear is designed for those who push past limits, embrace the grind, and strive for excellence in every rep. With premium-quality fabrics and cutting-edge designs, Stryve gym t-shirts for men and women empower you to train harder, move better, and achieve more.
        </p>

        <h2 className="text-center py-4">Comapnay Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
            <img className="card-img-top img-fluid" src="/assets/logo_tshirt/black(1).jpg" alt="Blue T-shirt" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Black T-shirt</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="/assets/logo_tshirt/blue.jpg" alt="Blue T-shirt" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Blue T-shirt</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
            <img className="card-img-top img-fluid" src="/assets/logo_tshirt/red.jpg" alt="Blue T-shirt" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Red T-shirt</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
            <img className="card-img-top img-fluid" src="/assets/logo_tshirt/green.jpg" alt="Blue T-shirt" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center"> Green T-shirt</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage