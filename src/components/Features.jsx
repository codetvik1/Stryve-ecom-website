import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Features.css';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const imageStyle = {
    maxWidth: '400px',  // Set maximum width
    height: 'auto',     // Maintain aspect ratio
    width: '100%',      // Make it responsive
    objectFit: 'cover'  // Ensure image covers the area without distortion
  };



  return (
    <div className="container-fluid p-0">
      {/* First Feature Section */}
      <div className="row align-items-center g-0">
        <div className="col-md-8 p-5 bg-dark text-white" data-aos="fade-right">
          <h1 className="display-4 fw-bold mb-4">
            Unbreakable Strength 
          </h1>
          <h2>– Built to Last Years!</h2>
          <p className="lead mb-4">
            Made with heavy-duty 240 GSM fabric. Stryve offers the best oversized gym t-shirts for men with unmatched durability, comfort, and premium feel.
          </p>
        </div>
        <div className="col-md-4" data-aos="fade-left">
          <div className="p-5 bg-light text-center">
            <img 
              src="assets/Feautres/Stryve-Oversized-Mock-1.jpg" 
              alt="Stryve T-shirts Collection" 
              className="img-fluid shadow-lg hover-scale"
              style={imageStyle}
            />
          </div>
        </div>
      </div>

      {/* Second Feature Section */}
      <div className="row align-items-center g-0">
        <div className="col-md-4" data-aos="fade-right">
          <div className="p-5 text-center">
            <img 
              src="assets/Feautres/Stryve-Oversized-Mock-4.jpg" 
              alt="Premium Fabric Texture" 
              className="img-fluid rounded-3 shadow-lg hover-scale"
              style={imageStyle}
            />
          </div>
        </div>
        <div className="col-md-8 p-5 bg-dark text-white" data-aos="fade-left">
          <h1 className="display-4 fw-bold mb-4">
            Feather-Light Feel 
          </h1>
          <h2>– Move Without Limits</h2>
          <p className="lead mb-4">
          Stryve is the best place to buy oversized gym t-shirts for men online in India. Because they're designed to let you fully enjoy every flex, making your training sessions and progress feel even more rewarding.
          </p>
        </div>
      </div>

      {/* Third Feature Section */}
      <div className="row align-items-center g-0">
        <div className="col-md-8 p-5 bg-dark text-white" data-aos="fade-right">
          <h1 className="display-4 fw-bold mb-4">
            Premium Style
          </h1>
          <h2>– Flex with Confidence </h2>
          <p className="lead mb-4">
            Designed for the modern athlete. Our oversized fit and premium styling ensure you look as good as you perform, making every workout a statement.
          </p>
        </div>
        <div className="col-md-4" data-aos="fade-left">
          <div className="p-5 bg-light text-center">
            <img 
              src="assets/Feautres/Stryve-Oversized-Mock-3.jpg" 
              alt="Stylish Gym Wear" 
              className="img-fluid shadow-lg hover-scale"
              style={imageStyle}
            />
          </div>
        </div>
      </div>

      {/* Fourth Feature Section */}
      <div className="row align-items-center g-0">
        <div className="col-md-4" data-aos="fade-right">
          <div className="p-5 text-center">
            <img 
              src="/assets/logo_tshirt/red.jpg" 
              alt="Sustainable Fashion" 
              className="img-fluid rounded-3 shadow-lg hover-scale"
              style={imageStyle}
            />
          </div>
        </div>
        <div className="col-md-8 p-5 bg-dark text-white" data-aos="fade-left">
          <h1 className="display-4 fw-bold mb-4">
            Sustainable Comfort – Eco-Friendly Excellence
          </h1>
          <p className="lead mb-4">
            Committed to sustainability without compromising on quality. Each t-shirt is crafted with care for both your performance and the planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
