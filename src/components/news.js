import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import image1 from '../components/img/blog-img1.jpg'
import image2 from '../components/img/media-img.jpg'
import image3 from '../components/img/media-img.jpg'
import image4 from '../components/img/ads.jpg'
import image5 from '../components/img/product-details.jpg'
import image6 from '../components/img/blog-img8.jpg'
import image7 from '../components/img/blog-img1.jpg'
import image8 from '../components/img/blog-img6.jpg'
import image9 from '../components/img/blog-img3.jpg'
import adsimg2 from '../components/img/ads-img2.jpg'
import axios from 'axios'



function News() {
    const [details, setDetails] = useState('')

    const {id} = useParams()

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/trending-news/'+id+'/')
        .then((response)=>{
            setDetails(response.data)  
        })
    },[])
    console.log(details);
  return (
    <>

    {/* <!--== start of category products wrapper ==--> */}
    <section className="category-products-wrapper section-grap">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="single-products-img">
                        <Link to="#">
                            <img src={details.urlToImage}className="w-100" alt="Category Products"/>
                        </Link>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="category-products-details single-products">
                                <div className="category-product-txt">
                                    <div className="category-useful-links">
                                        <ul>
                                            <li>
                                                <Link to="#">Buying Guides,</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Technolog,</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="category-product-btm-txt">
                                        <h3>{details.title}</h3>
                                        <div className="media">
                                            {/* <img src="/components/img/media-img.jpg" className="mr-3" alt="mediLink"/> */}
                                            <img src={image2} className="mr-2" alt="mediLink"/>
                                            <div className="media-body">
                                                <ul>
                                                    <li className="author"><Link to="#">{details?.author?.name}</Link></li>
                                                    <li className="date"><Link to="#">{details.publishedAt}</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>{details.description}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="product-content-details">
                                            <h3>Lorem ipsum dolor sit amet.</h3>
                                            <div className="single-product-item">
                                                <Link to="#">
                                                    <img src={image3} className="w-100" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="single-product-calculate">
                                                <Link to="#">
                                                    <img src="img/product-details.jpg" className="w-100" alt=""/>
                                                </Link>
                                            </div>
                                            <p className="single-products-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nisi perspiciatis atque necessitatibus laudantium itaque animi, labore culpLink aliquam nostrum. Nulla, dolores. Ullam nisi aliquid eius porro autem
                                                distinctio et quaerat quasi id necessitatibus accusantium, repellendus in nesciunt rerum perspiciatis quo voluptate pariatur doloribus suscipit placeat, maiores rem laborum eum, sequi animi. Optio corporis,
                                                quiLink tenetur voluptatum voluptatibus atque similique nisi! CulpLink aspernatur nisi officiLink asperiores quia, cupiditate mollitiLink dolor odio natus quasi qui impedit adipisci enim ab cum quod saepe, solutLink laboriosam
                                                numquam inventore nostrum itaque magnam. Nisi, illum. Eligendi corporis assumendLink itaque, officiis cupiditate impedit, temporibus nemo totam!</p>
                                            <div className="advertisement-img">
                                                <Link to="#">
                                                    <img src={image4} className="w-100" alt="advertisement"/>
                                                </Link>
                                            </div>
                                            <p className="single-products-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nisi perspiciatis atque necessitatibus laudantium itaque animi, labore culpLink aliquam nostrum. Nulla, dolores. Ullam nisi aliquid eius porro autem
                                                distinctio et quaerat quasi id necessitatibus accusantium, repellendus in nesciunt rerum perspiciatis quo voluptate pariatur doloribus suscipit placeat, maiores rem laborum eum, sequi animi. Optio corporis,
                                                quiLink tenetur voluptatum voluptatibus atque similique nisi! CulpLink aspernatur nisi officiLink asperiores quia, cupiditate mollitiLink dolor odio natus quasi qui impedit adipisci enim ab cum quod saepe, solutLink laboriosam
                                                numquam inventore nostrum itaque magnam. Nisi, illum. Eligendi corporis assumendLink itaque, officiis cupiditate impedit, temporibus nemo totam!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="product-content-details">
                                            <h3>Lorem ipsum dolor sit amet.</h3>
                                            <div className="single-product-item">
                                                <Link to="#">
                                                    <img src={image6} className="w-100" alt=""/>
                                                </Link>
                                            </div>
                                            <div className="single-product-calculate">
                                                <Link to="#">
                                                <img src={image5} className="w-100" alt=""/>
                                                </Link>
                                            </div>
                                            <p className="single-products-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nisi perspiciatis atque necessitatibus laudantium itaque animi, labore culpLink aliquam nostrum. Nulla, dolores. Ullam nisi aliquid eius porro autem
                                                distinctio et quaerat quasi id necessitatibus accusantium, repellendus in nesciunt rerum perspiciatis quo voluptate pariatur doloribus suscipit placeat, maiores rem laborum eum, sequi animi. Optio corporis,
                                                quiLink tenetur voluptatum voluptatibus atque similique nisi! CulpLink aspernatur nisi officiLink asperiores quia, cupiditate mollitiLink dolor odio natus quasi qui impedit adipisci enim ab cum quod saepe, solutLink laboriosam
                                                numquam inventore nostrum itaque magnam. Nisi, illum. Eligendi corporis assumendLink itaque, officiis cupiditate impedit, temporibus nemo totam!</p>
                                            <div className="advertisement-img">
                                                <Link to="#">
                                                    <img src={adsimg2} className="w-100" alt="advertisement"/>
                                                </Link>
                                            </div>
                                            <p className="single-products-para">{details.content}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="single-products-artical pervious-artical">
                                        <button>
                                                Pervious Artical
                                            </button>
                                        <Link to="/category">
                                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, quas.</h3>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-products-artical next-artical">
                                        <button>
                                                Next Artical
                                            </button>
                                        <Link to="/category">
                                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, quas.</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row recommended-products">
                                <div className="col-md-12">
                                    <div className="recommended-products-title">
                                        <h3>Recommended For You</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="recommended-products-content">
                                        <div className="recommended-products-img">
                                            <Link to="/category">
                                                <img src={image7} className="w-100" alt="Recommended"/>
                                            </Link>
                                        </div>
                                        <div className="recommended-products-txt">
                                            <Link to="singlePage.html">
                                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, fugit.</h3>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="recommended-products-content">
                                        <div className="recommended-products-img">
                                            <Link to="/category">
                                                <img src={image8} className="w-100" alt="Recommended"/>
                                            </Link>
                                        </div>
                                        <div className="recommended-products-txt">
                                            <Link to="singlePage.html">
                                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, fugit.</h3>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="recommended-products-content">
                                        <div className="recommended-products-img">
                                            <Link to="/category">
                                                <img src={image9} className="w-100" alt="Recommended"/>
                                            </Link>
                                        </div>
                                        <div className="recommended-products-txt">
                                            <Link to="singlePage.html">
                                                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, fugit.</h3>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3 className="mesg-title">
                                        Leave Link Reply
                                    </h3>
                                    <div className="mesg-wrapper">
                                        <h4>Your email address will not be published. Required fields are marked *</h4>
                                        <form>
                                            <div className="form-group">
                                                <label htmlhtmlFor="cmnt">Comment</label>
                                                <textarea name="text" id="cmnt" className="cmnt form-control" cols="30" rows="10"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label htmlhtmlFor="nm">Name<span>*</span></label>
                                                <input type="text" className="form-control" id="nm"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlhtmlFor="exampleInputEmail1">Email
                                                  <span>*</span>
                                                  </label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                            </div>
                                            <div className="form-group form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label" htmlhtmlFor="exampleCheck1">Sign me up for the newsletter</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="category-sidebar">
                        <div className="category-recent-posts articals">
                            <h3>Recent Articals</h3>
                            <ul>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione asperiores consectetur inventore aliquid. Voluptatum, ad.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione asperiores consectetur inventore aliquid. Voluptatum, ad.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione asperiores consectetur inventore aliquid. Voluptatum, ad.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione asperiores consectetur inventore aliquid. Voluptatum, ad.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione asperiores consectetur inventore aliquid. Voluptatum, ad.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione asperiores consectetur inventore aliquid. Voluptatum, ad.</Link>
                                </li>
                                <li>
                                    <Link to="/category">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, facere.</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--== end of category products wrapper ==--> */}
    </>
  )
}

export default News