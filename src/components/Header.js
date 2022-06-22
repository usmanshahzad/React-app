import React from "react";
import phone from "../images/Phone.png";
import vector from "../images/Vector.png";
import search from "../images/Search.png";
import heart from "../images/Heart.png";
import cart from "../images/Cart.png";
import user from "../images/User.png";
import bell from "../images/Bell.png";


const Header = () => {
    return (
        <><section className="logo-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="main-logo">
                            <h2>Dealerz</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="main-details">
                            <a href="tel:+971512345678">
                                <img src={phone} alt="phone" />
                                <span>Call Center</span>
                            </a>
                            <a href="shipping.html">
                                <img src={vector} alt="shipping" />
                                <span>Shipping & Returns</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="nav-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="main-navbar">
                            <ul>
                                <li className="nav-link d-inline-block"><a href="shop.html">Shop</a></li>
                                <li className="nav-link d-inline-block"><a href="promo.html">Promo</a></li>
                                <li className="nav-link d-inline-block"><a href="about.html">About</a></li>
                                <li className="nav-link d-inline-block"><a href="blog.html">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="main-search">
                        <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-text border-0" id="search-addon">
                                <img src={search} alt="Search"/>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="main-actions">
                            <a href="heart.html"><img src={heart} alt="Heart"/></a>
                            <a href="cart.html"><img src={cart} alt="Cart"/></a>
                            <a href="user.html"><img src={user} alt="User"/></a>
                            <a href="bell.html"><img src={bell} alt="Bell"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    );
};


export default Header;