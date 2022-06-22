import React from "react";
import FetchAPI from "./FetchAPI";
import SwiperSlider from "./Swiper-Slider";


class Body extends React.Component{
    render(){
        return(
            <><section className="banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5"></div>
                        <div className="col-md-7">
                            <div className="hero-img-content">
                                <h4>Your Premium <br /> Sound, Unplugged!</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="banner.html">Find out More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="premium-products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="products-wrapper">
                                <div className="products-heading">
                                    <h4>Our Premium Collection</h4>
                                </div>
                                <div className="products-sorting">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-allproducts-tab" data-bs-toggle="tab" data-bs-target="#nav-allproducts" type="button" role="tab" aria-controls="nav-allproducts" aria-selected="true">All Products</button>
                                            <button className="nav-link" id="nav-coatsjacket-tab" data-bs-toggle="tab" data-bs-target="#nav-coatsjacket" type="button" role="tab" aria-controls="nav-coatsjacket" aria-selected="false">CoatsJacket</button>
                                            <button className="nav-link" id="nav-dressed-tab" data-bs-toggle="tab" data-bs-target="#nav-dressed" type="button" role="tab" aria-controls="nav-dressed" aria-selected="false">Dressed</button>
                                            <button className="nav-link" id="nav-playsuit-tab" data-bs-toggle="tab" data-bs-target="#nav-playsuit" type="button" role="tab" aria-controls="nav-playsuit" aria-selected="false">playsuit</button>
                                            <button className="nav-link" id="nav-short-tab" data-bs-toggle="tab" data-bs-target="#nav-short" type="button" role="tab" aria-controls="nav-short" aria-selected="false">Short</button>
                                            <button className="nav-link" id="nav-skirt-tab" data-bs-toggle="tab" data-bs-target="#nav-skirt" type="button" role="tab" aria-controls="nav-skirt" aria-selected="false">Skirt</button>
                                            <button className="nav-link" id="nav-t-shirt-tab" data-bs-toggle="tab" data-bs-target="#nav-t-shirt" type="button" role="tab" aria-controls="nav-t-shirt" aria-selected="false">T-Shirt</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-allproducts" role="tabpanel" aria-labelledby="nav-allproducts-tab">
                                            <FetchAPI/>
                                        </div>
                                        <div className="tab-pane fade" id="nav-coatsjacket" role="tabpanel" aria-labelledby="nav-coatsjacket-tab">
                                        <FetchAPI/>
                                        </div>
                                        <div className="tab-pane fade" id="nav-dressed" role="tabpanel" aria-labelledby="nav-dressed-tab">
                                        <FetchAPI/>
                                        </div>
                                        <div className="tab-pane fade" id="nav-playsuit" role="tabpanel" aria-labelledby="nav-playsuit-tab">
                                        <FetchAPI/>
                                        </div>
                                        <div className="tab-pane fade" id="nav-short" role="tabpanel" aria-labelledby="nav-short-tab">
                                        <FetchAPI/>
                                        </div>
                                        <div className="tab-pane fade" id="nav-skirt" role="tabpanel" aria-labelledby="nav-skirt-tab">
                                        <FetchAPI/>
                                        </div>
                                        <div className="tab-pane fade" id="nav-t-shirt" role="tabpanel" aria-labelledby="nav-t-shirt-tab">
                                        <FetchAPI/>
                                        </div>
                                    </div>
                                    <div className="view-more">
                                        <a href="view-more.html">Find out More</a>
                                    </div>
                                </div>
                            </div>
                            <SwiperSlider/>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}


export default Body;