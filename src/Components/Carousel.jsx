import React from 'react'
import carousel2 from '../images/carousel-2.jpg'
import { Link } from 'react-router-dom'

function Carousel() {
    return (
        <div>
            {/* Carousel Start */}
            <div className="container-fluid p-0 pb-5">
                <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src={carousel2} alt='' />
                        <div className="carousel-inner">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-8 text-center">
                                        <h1 style={{fontSize:'50px', fontWeight:'700'}} className="text-white animated slideInDown mb-4">Smart Security Solution For
                                            All Business</h1>
                                        <p className="fs-5 text-white mb-4 pb-2">offers tailored, cutting-edge protection for
                                            enterprises, ensuring safety and peace of mind in today's dynamic business
                                            landscape.</p>
                                        <Link style={{background:'#FEA116'}} href='#!' className="btn rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft text-white">Read
                                            More</Link>
                                        <Link href='#!' className="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">Free
                                            Quote</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}

        </div>
    )
}



export default Carousel