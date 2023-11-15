import React from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Contact() {
  return (
    <>
    {/* <Header/> */}
    {/* <!--== start of category banner wrapper ==--> */}
    <section class="contactUs-banner-wrapper section-grap3">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="category-banner-content">
                        <div class="banner-title">
                            <h3>Contact Us</h3>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">ContactUs</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--== end of category banner wrapper ==--> */}

    {/* <!--== start contact us page section ==--> */}
    <section class="contact-wrapper">
        <div class="container">
            <div class="row contact-main-wrap">
                <div class="col-md-5">
                    <div class="address-form">
                        <h3>Office Address</h3>
                        <p>We thank you for your interest in Permanent master batches. Please take a moment to complete the form so that we can contact you with specific information in the quickest possible manner.</p>
                        <ul>
                            <li>
                                <Link to="#"><i class="fas fa-phone-alt"></i>01762395382
                                    </Link>
                            </li>
                            <li>
                                <Link to="#"><i class="fas fa-phone-alt"></i>01762395382
                                    </Link>
                            </li>
                            <li>
                                <Link to="#"><i class="far fa-envelope"></i>info@visionemporium.com
                                    </Link>
                            </li>
                            <li>
                                <Link to="#"><i class="fas fa-map-marked-alt"></i>72 B, Taltola Rd, Dhaka 1219,Bangladesh
                                    </Link>
                            </li>

                        </ul>
                    </div>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116837.82875849403!2d90.32163791543302!3d23.77652722750064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b87cfd27d3ab%3A0xf0bb1f3e2d6a15b1!2sVision%20Emporium!5e0!3m2!1sen!2sbd!4v1581569627080!5m2!1sen!2sbd"
                            width="100%" height="295px" style={{"border": '0'}} title='myFrame' allowfullscreen=""></iframe>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="enquiry-form">
                        <h3>Enquiry Form</h3>
                        <form action="">
                            <div class="form-group name">
                                <label htmlFor="name">Name<span class="required" aria-required="true">*</span></label>
                                <input id="name" type="text" name="name" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group name">
                                <label htmlFor="name">Email<span class="required" aria-required="true">*</span></label>
                                <input id="name" type="text" name="name" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group name">
                                <label htmlFor="name">Phone</label>
                                <input id="name" type="text" name="name" class="form-control" placeholder=""/>
                            </div>
                            <div class="form-group name">
                                <label htmlFor="name">Message<span class="required" aria-required="true">*</span></label>
                                <textarea id="message" name="message" class="form-control" rows="6" placeholder=""></textarea>
                            </div>
                            <div class="contact-btn">
                                <Link to="#" title="Send Message" class="btn btn-default">Send Message</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--== end contact us page section ==--> */}
    </>
  )
}

export default Contact