import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderLogo from "../components/img/logo.jpg";
import usflag from "../components/img/us.png";
import chinaflag from "../components/img/china.png";
import indiaflag from "../components/img/india.png";
import axios from "axios";
import SearchComponent from "./search";

function Header() {
  const authorLoginStatus = localStorage.getItem("authorLoginStatus");

  return (
    <>
      {/* <!--==start header section ==--> */}
      <header id="header-container" className="header-container fixed-top">
        <div className="header-container-inner">
          <Link to="/" id="logo">
            <img src={HeaderLogo} alt="MainLogo" />
            {/* <h4>Real World <span>Meda News</span></h4> */}
          </Link>
          <form className="search-component d-none" method="get">
            <div className="toggle-button">
              <Link to="#">
                <i className="fas fa-search" id="search-open-close"></i>
              </Link>
            </div>
            <div className="search-component-field-wrapper">
              {/* <div className="search-component-field-wrapper-inner">
                  <input
                    data-content="header-search"
                    value='{query}'
                    type="text"
                    name="q"
                    placeholder="Search...."
                    autoComplete="off"
                    onChange=''
                  />
                  <button type="submit" className="search-button">
                    <i className="fas fa-search"></i>
                  </button>
                </div> */}
            </div>
          </form>
          {/* <SearchComponent headerProps={headerProps}/> */}
          <div className="site-header-menu">
            <nav className="menu animated" id="menu-show">
              <ul className="main-menu-ul">
                <li id="cat-lnk">
                  <Link className="main-lnk show-hide-init" to="/category">
                    Categories
                    <div className="change-arrow">
                      <i className="fas fa-plus" id="plus-minus"></i>
                    </div>
                  </Link>

                  <div id="cat-nav" className="">
                    <div className="cat-nav-desc">
                      <div className="cat-nav-desc-inner">
                        {/* in category start */}
                        <div className="d-flex justify-content-center">
                          <div className="ms-5">
                            <img src={indiaflag} width="25px" alt=""></img>
                          </div>
                          <ul className="cat-nav-ch">
                            <li className="hovered">
                              <Link
                                to="/business"
                                className="cat-nav-cat show-hide-init"
                              >
                                {" "}
                                Business
                              </Link>
                            </li>
                            <li className="hovered">
                              <Link
                                to="/entertainment"
                                className="cat-nav-cat show-hide-init"
                              >
                                Entertainment
                              </Link>
                            </li>
                          </ul>
                          {/* 2nd line Category */}
                          <ul className="cat-nav-ch">
                            <li>
                              <Link
                                to="/technology"
                                className="cat-nav-cat show-hide-init"
                              >
                                Technology
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/sports"
                                className="cat-nav-cat show-hide-init"
                              >
                                Sports
                              </Link>
                            </li>
                          </ul>
                          {/* 3rd line Category */}
                          <ul className="cat-nav-ch">
                            <li>
                              <Link
                                to="/science"
                                className="cat-nav-cat show-hide-init"
                              >
                                Science
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/health"
                                className="cat-nav-cat show-hide-init"
                              >
                                Health
                              </Link>
                            </li>
                          </ul>
                          {/* 4th line Category */}
                          <ul className="cat-nav-ch">
                            <li className="hovered">
                              <Link
                                to="/general"
                                className="cat-nav-cat show-hide-init"
                              >
                                General
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/category"
                                className="cat-nav-cat show-hide-init"
                              >
                                Tools
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* in category end */}

                      {/* US category Starts here */}
                      <div className="cat-nav-desc-inner">
                        <div className="d-flex justify-content-center">
                          <div className="ms-5">
                            <img src={usflag} width="25px" alt=""></img>
                          </div>
                          <ul className="cat-nav-ch">
                            <li className="hovered">
                              <Link
                                to="/us-business"
                                className="cat-nav-cat show-hide-init"
                              >
                                {" "}
                                Business
                              </Link>
                            </li>
                            <li className="hovered">
                              <Link
                                to="/us-entertainment"
                                className="cat-nav-cat show-hide-init"
                              >
                                Entertainment
                              </Link>
                            </li>
                          </ul>
                          {/* 2nd line Category */}
                          <ul className="cat-nav-ch">
                            <li>
                              <Link
                                to="/us-technology"
                                className="cat-nav-cat show-hide-init"
                              >
                                Technology
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/us-sports"
                                className="cat-nav-cat show-hide-init"
                              >
                                Sports
                              </Link>
                            </li>
                          </ul>
                          {/* 3rd line Category */}
                          <ul className="cat-nav-ch">
                            <li>
                              <Link
                                to="/us-science"
                                className="cat-nav-cat show-hide-init"
                              >
                                Science
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/us-health"
                                className="cat-nav-cat show-hide-init"
                              >
                                Health
                              </Link>
                            </li>
                          </ul>
                          {/* 4th line Category */}
                          <ul className="cat-nav-ch">
                            <li className="hovered">
                              <Link
                                to="/us-general"
                                className="cat-nav-cat show-hide-init"
                              >
                                General
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/us-category"
                                className="cat-nav-cat show-hide-init"
                              >
                                Tools
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* US category Ends here */}

                      {/* China category Starts here */}
                      <div className="cat-nav-desc-inner">
                        <div className="d-flex justify-content-center">
                          <div className="ms-5">
                            <img src={chinaflag} width="25px" alt=""></img>
                          </div>
                          <ul className="cat-nav-ch">
                            {/* in category start */}

                            <li className="hovered">
                              <Link
                                to="/cn-business"
                                className="cat-nav-cat show-hide-init"
                              >
                                Business
                              </Link>
                            </li>
                            <li className="hovered">
                              <Link
                                to="/cn-entertainment"
                                className="cat-nav-cat show-hide-init"
                              >
                                Entertainment
                              </Link>
                            </li>
                          </ul>
                          {/* 2nd line Category */}
                          <ul className="cat-nav-ch">
                            <li>
                              <Link
                                to="/cn-technology"
                                className="cat-nav-cat show-hide-init"
                              >
                                Technology
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/cn-sports"
                                className="cat-nav-cat show-hide-init"
                              >
                                Sports
                              </Link>
                            </li>
                          </ul>
                          {/* 3rd line Category */}
                          <ul className="cat-nav-ch">
                            <li>
                              <Link
                                to="/cn-science"
                                className="cat-nav-cat show-hide-init"
                              >
                                Science
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/cn-health"
                                className="cat-nav-cat show-hide-init"
                              >
                                Health
                              </Link>
                            </li>
                          </ul>
                          {/* 4th line Category */}
                          <ul className="cat-nav-ch">
                            <li className="hovered">
                              <Link
                                to="/cn-general"
                                className="cat-nav-cat show-hide-init"
                              >
                                General
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/cn-category"
                                className="cat-nav-cat show-hide-init"
                              >
                                Tools
                              </Link>
                            </li>
                            {/* in category end */}
                          </ul>
                        </div>
                      </div>
                      {/* China category Ends here */}
                    </div>
                  </div>
                  <div className="anim-ho"></div>
                </li>
                <li>
                  <Link className="main-lnk" to="/about">
                    About
                  </Link>
                  <div className="anim-ho"></div>
                </li>
                <li>
                  <Link className="main-lnk" to="/contact">
                    Contact
                  </Link>
                  <div className="anim-ho"></div>
                </li>
                {!authorLoginStatus && (
                  <li>
                    <Link className="main-lnk color-lnk" to="/login">
                      Login
                    </Link>
                    <div className="anim-ho"></div>
                  </li>
                )}
                {authorLoginStatus && (
                  <li>
                    <Link className="main-lnk color-lnk" to="/logout">
                      Logout
                    </Link>
                    <div className="anim-ho"></div>
                  </li>
                )}
                {/* <li>
                  <Link className="main-lnk color-lnk" to="/login">
                    Login
                  </Link>
                  <div className="anim-ho"></div>
                </li> */}
              </ul>
            </nav>
            <Link alt="Menu" className="site-header-menu-trigger">
              <i className="fas fa-bars" id="menu-open-close"></i>
            </Link>
          </div>
        </div>
      </header>
      {/* <!--==end header section ==--> */}
    </>
  );
}

export default Header;
