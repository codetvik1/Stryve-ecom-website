import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingBag, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> STRYVE</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <FontAwesomeIcon icon={faHome} className="me-1" />
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">
                                <FontAwesomeIcon icon={faShoppingBag} className="me-1" />
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/wishlist" className="btn btn-outline-dark m-2">
                            <FontAwesomeIcon icon={faHeart} className="me-1" />
                            <span className="badge bg-dark">0</span>
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2">
                            <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                            <span className="badge bg-dark">{state.length}</span>
                        </NavLink>
                        <NavLink to="/login" className="btn btn-outline-dark m-2">
                            <FontAwesomeIcon icon={faUser} className="me-1" />
                        </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar