import React from 'react'
import { Footer, Navbar } from "../components"
import ProductList from "../components/ProductList"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addWishlist } from '../redux/action';

const Products = () => {
  return (
    <>
      <Navbar />
      <ProductList />
      <Footer />
    </>
  )
}

export default Products