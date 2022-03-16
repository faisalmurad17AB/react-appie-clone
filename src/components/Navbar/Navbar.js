import React from 'react'
import './nav.css'
import { faBars, faArrowDown, faUser, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Navbar = () => {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="header-nav-box">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                            <div className="logo-box">
                                <a href="index.html">
                                    <img src="assets/images/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                            <div className="header-main-menu" id='main-menu'>
                                <ul>
                                    <li>
                                        <a href="index.html">Home <FontAwesomeIcon icon={faArrowDown} /></a>
                                        <div className="mega-menu-main-wrap pt-10">
                                            <ul className="mega-menu-home">
                                                <li><a href="index.html">
                                                    <img src="./assets/images/pages/index.png" alt="" /> Demo 1 </a>
                                                </li>
                                                <li><a href="index-2.html">
                                                    <img src="./assets/images/pages/index-2.png" alt="" /> Demo 2 </a>
                                                </li>
                                                <li><a href="index-3.html">
                                                    <img src="./assets/images/pages/index-3.png" alt="" /> Demo 3 </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li> <a href="#"> Mega Menu  <FontAwesomeIcon icon={faArrowDown} /> </a>
                                        <div className="pages-mega-menu mega-menu-mainn-wrap pt-50 pb-30">

                                            <ul>
                                                <li> <a className="pages-main-content hot" href="#"> Demo Layouts </a> </li>
                                                <li> <a href="#"> Categories </a> </li>
                                                <li> <a href="#"> Basic </a> </li>
                                                <li> <a href="#"> Parallax </a> </li>

                                            </ul>
                                            <ul>
                                                <li> <a className="pages-main-content" href="#"> Pre-built pages </a> </li>
                                                <li><a href="about-us.html">About Us 1</a></li>
                                                <li><a href="about-us-2.html">About Us 2</a></li>
                                                <li><a href="error.html">Error</a></li>
                                            </ul>
                                            <ul>
                                                <li> <a className="pages-main-content projects" href="#"> Portfolio </a> </li>
                                                <li> <a href="#"> Standard </a> </li>
                                                <li> <a href="#"> Alternative </a> </li>
                                                <li> <a href="#"> Alternative </a> </li>
                                            </ul>
                                            <ul className="recent-post-main-wrap">
                                                <li className="mega-r-post"> Recent Posts </li>
                                                <div className="mega-menu-recent-ports">
                                                    <ul className="mega-menu-ul-block">

                                                        <li className="recent-right-text">
                                                            <div className="mega-recent-post-text">
                                                                <a href="#"><img src="./assets/images/blog/3.jpg" alt="" /></a>
                                                                <div className="mega-recent-right-txt">
                                                                    <a className="mega-recent-ftxt" href="#">
                                                                        <h5> Permalink to A companion for extra sleeping </h5>
                                                                    </a>
                                                                    <ul className="mega-menu-ul-block mega-menu-ul-block-lst">
                                                                        <li> July 23, 2016 </li>
                                                                        <li> <a className="blog-comment" href="#"> 1 Comment </a> </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="recent-right-text ">
                                                            <div className="mega-recent-post-text">
                                                                <a href="#"><img src="./assets/images/blog/2.jpg" alt="" /></a>
                                                                <div className="mega-recent-right-txt">
                                                                    <a href="#">
                                                                        <h5> Permalink to A companion for extra sleeping </h5>
                                                                    </a>
                                                                    <ul className="mega-menu-ul-block mega-menu-ul-block-lst">
                                                                        <li> July 23, 2016 </li>
                                                                        <li> <a className="blog-comment" href="#"> No Comment </a> </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Pages <FontAwesomeIcon icon={faArrowDown} /></a>
                                        <ul className="sub-menu">
                                            <li><a href="about-us.html">About Us 1</a></li>
                                            <li><a href="about-us-2.html">About Us 2</a></li>
                                            <li><a href="error.html">Error</a></li>
                                            <li><a href="service-details.html">Service</a> </li>
                                            <li><a href="service-details.html"> Service Details </a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"> Shop <FontAwesomeIcon icon={faArrowDown} /></a>
                                        <ul className="sub-menu">
                                            <li><a href="shop.html"> Shop  </a></li>
                                            <li><a href="shop-details.html"> Shop Details </a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">News <FontAwesomeIcon icon={faArrowDown} /></a>
                                        <ul className="sub-menu">
                                            <li><a href="news.html">News Page</a></li>
                                            <li><a href="single-news.html">Single News</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                            <div className="btn-box text-right">
                                <a className="login-btn" href="#"><FontAwesomeIcon icon={faUser} /> Login</a>
                                <a className=" animated_btn ml-30" href="#">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Navbar
