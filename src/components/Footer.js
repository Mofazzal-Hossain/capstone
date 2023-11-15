import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <section className="footer-section-wrap section-grap">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="footer-site-txt">

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur molestiae odio, nihil recusandae, repellat eos quos eveniet magnam ipsa commodi rem culpa voluptatum laudantium qui alias. Ipsam blanditiis aspernatur deleniti!.........</p>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6">
                    <div className="footer-link-title">
                        <h3>Links</h3>
                    </div>
                    <div className="footer-useful-link">
                        <ul>
                            <li> <Link to="#">
                                    FAQ
                                </Link></li>
                            <li> <Link to="/about">
                                    About
                                </Link></li>
                            <li> <Link to="/contact">
                                    Contact
                                </Link></li>
                            <li> <Link to="#">
                                    Privacy Policy
                                </Link></li>
                            <li> <Link to="#">
                                    Terms and Conditions
                                </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6">
                    <div className="footer-link-title">
                        <h3>Featured</h3>
                    </div>
                    <div className="footer-useful-link">
                        <ul>
                            <li> <Link to="#">
                                    Press
                                </Link></li>
                            <li> <Link to="#">
                                    Partnerships
                                </Link></li>
                            <li> <Link to="#">
                                    Gift Ideas
                                </Link></li>

                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="footer-link-info">
                        <h3>
                            Get exclusive content, advice, and tips from BestReviews delivered to your inbox.
                        </h3>
                        <form action="">
                            <input type="email" placeholder="Email......"/>
                            <button className="info-submit">
                                    Stay Contacted
                                </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="copy-right-txt">
                        <p>
                            ©2021 Vision Emporium All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Footer