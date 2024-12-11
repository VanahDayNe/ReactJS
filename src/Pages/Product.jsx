import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Product()
{
    const { cat, id } = useParams();
    const [data, setData] = useState({ product: {}, isLoading: false });

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then(kq => setData({product: kq.data, isLoading: true}))
        .catch(error => console.error(error))
    }, [id])
    
      
    

    if (data.isLoading)
    {
         return (
        <>
            {/* Hero Section Begin */}
            <section className="hero hero-normal">
                <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                        <i className="fa fa-bars" />
                        <span>All departments</span>
                        </div>
                        <ul>
                        <li>
                            <a href="#">Fresh Meat</a>
                        </li>
                        <li>
                            <a href="#">Vegetables</a>
                        </li>
                        <li>
                            <a href="#">Fruit &amp; Nut Gifts</a>
                        </li>
                        <li>
                            <a href="#">Fresh Berries</a>
                        </li>
                        <li>
                            <a href="#">Ocean Foods</a>
                        </li>
                        <li>
                            <a href="#">Butter &amp; Eggs</a>
                        </li>
                        <li>
                            <a href="#">Fastfood</a>
                        </li>
                        <li>
                            <a href="#">Fresh Onion</a>
                        </li>
                        <li>
                            <a href="#">Papayaya &amp; Crisps</a>
                        </li>
                        <li>
                            <a href="#">Oatmeal</a>
                        </li>
                        <li>
                            <a href="#">Fresh Bananas</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                        <form action="#">
                            <div className="hero__search__categories">
                            All Categories
                            <span className="arrow_carrot-down" />
                            </div>
                            <input type="text" placeholder="What do yo u need?" />
                            <button type="submit" className="site-btn">
                            SEARCH
                            </button>
                        </form>
                        </div>
                        <div className="hero__search__phone">
                        <div className="hero__search__phone__icon">
                            <i className="fa fa-phone" />
                        </div>
                        <div className="hero__search__phone__text">
                            <h5>+65 11.188.888</h5>
                            <span>support 24/7 time</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* Hero Section End */}
            {/* Breadcrumb Section Begin */}
            <section
                className="breadcrumb-section set-bg"
                data-setbg="img/breadcrumb.jpg"
            >
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>Vegetable’s Package</h2>
                        <div className="breadcrumb__option">
                        <a href="/">Home</a>
                        <a href="/">Vegetables</a>
                        <span>Vegetable’s Package</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Product Details Section Begin */}
            <section className="product-details spad">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                    <div className="product__details__pic">
                        <div className="product__details__pic__item">
                        <img className="product__details__pic__item--large" src={data.product.images[0]} alt="" />
                        </div>
                       
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                    <div className="product__details__text">
                        <h3>{ data.product.title}</h3>
                        <div className="product__details__rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <span>(18 reviews)</span>
                        </div>
                        <div className="product__details__price">${ data.product.price}</div>
                        <p>
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                        dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Proin eget tortor risus.
                        </p>
                        <div className="product__details__quantity">
                        <div className="quantity">
                            <div className="pro-qty">
                            <input type="text" defaultValue={1} />
                            </div>
                        </div>
                        </div>
                         <div className="">
                            <a  href="#" className="btn btn-success">
                                Thêm vào giỏ hàng <i className="fa fa-shopping-cart" />
                            </a>
                            <a href="#" className="heart-icon">
                                <span className="icon_heart_alt" />
                            </a>
                         </div>
                        <ul>
                        <li>
                            <b>Availability</b> <span>In Stock</span>
                        </li>
                        <li>
                            <b>Shipping</b>{" "}
                            <span>
                            01 day shipping. <samp>Free pickup today</samp>
                            </span>
                        </li>
                        <li>
                            <b>Weight</b> <span>0.5 kg</span>
                        </li>
                        <li>
                            <b>Share on</b>
                            <div className="share">
                            <a href="#">
                                <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fa fa-pinterest" />
                            </a>
                            </div>
                        </li>
                        <li>
                            <b>Chuyên mục</b> {data.product.category}
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-12">
                    <div className="product__details__tab">
                        <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#tabs-1"
                            role="tab"
                            aria-selected="true"
                            >
                            Description
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#tabs-2"
                            role="tab"
                            aria-selected="false"
                            >
                            Information
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#tabs-3"
                            role="tab"
                            aria-selected="false"
                            >
                            Reviews <span>(1)</span>
                            </a>
                        </li>
                        </ul>
                        <div className="tab-content">
                        <div className="tab-pane active" id="tabs-1" role="tabpanel">
                            <div className="product__details__tab__desc">
                            <h6>Products Infomation</h6>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Pellentesque in ipsum id orci porta dapibus. Proin
                                eget tortor risus. Vivamus suscipit tortor eget felis
                                porttitor volutpat. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                eget malesuada. Vivamus suscipit tortor eget felis porttitor
                                volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                                porttitor at sem. Praesent sapien massa, convallis a
                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit
                                amet quam vehicula elementum sed sit amet dui. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia Curae; Donec velit neque, auctor sit amet
                                aliquam vel, ullamcorper sit amet ligula. Proin eget tortor
                                risus.
                            </p>
                            <p>
                                Praesent sapien massa, convallis a pellentesque nec, egestas
                                non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Mauris blandit aliquet elit, eget tincidunt nibh
                                pulvinar a. Cras ultricies ligula sed magna dictum porta.
                                Cras ultricies ligula sed magna dictum porta. Sed porttitor
                                lectus nibh. Mauris blandit aliquet elit, eget tincidunt
                                nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula
                                elementum sed sit amet dui. Sed porttitor lectus nibh.
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Proin eget tortor risus.
                            </p>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-2" role="tabpanel">
                            <div className="product__details__tab__desc">
                            <h6>Products Infomation</h6>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Pellentesque in ipsum id orci porta dapibus. Proin
                                eget tortor risus. Vivamus suscipit tortor eget felis
                                porttitor volutpat. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                eget malesuada. Vivamus suscipit tortor eget felis porttitor
                                volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                                porttitor at sem. Praesent sapien massa, convallis a
                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit
                                amet quam vehicula elementum sed sit amet dui. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia Curae; Donec velit neque, auctor sit amet
                                aliquam vel, ullamcorper sit amet ligula. Proin eget tortor
                                risus.
                            </p>
                            <p>
                                Praesent sapien massa, convallis a pellentesque nec, egestas
                                non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Mauris blandit aliquet elit, eget tincidunt nibh
                                pulvinar a. Cras ultricies ligula sed magna dictum porta.
                                Cras ultricies ligula sed magna dictum porta. Sed porttitor
                                lectus nibh. Mauris blandit aliquet elit, eget tincidunt
                                nibh pulvinar a.
                            </p>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-3" role="tabpanel">
                            <div className="product__details__tab__desc">
                            <h6>Products Infomation</h6>
                            <p>
                                Vestibulum ac diam sit amet quam vehicula elementum sed sit
                                amet dui. Pellentesque in ipsum id orci porta dapibus. Proin
                                eget tortor risus. Vivamus suscipit tortor eget felis
                                porttitor volutpat. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                eget malesuada. Vivamus suscipit tortor eget felis porttitor
                                volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                                porttitor at sem. Praesent sapien massa, convallis a
                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit
                                amet quam vehicula elementum sed sit amet dui. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia Curae; Donec velit neque, auctor sit amet
                                aliquam vel, ullamcorper sit amet ligula. Proin eget tortor
                                risus.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* Product Details Section End */}
            
        </>

    )
    }
   
}
export default Product;