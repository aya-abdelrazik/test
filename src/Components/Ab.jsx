import React from 'react'
import about from '../images/about.jpg'
import icon1 from '../images/icon/icon-1.png';
import icon5 from '../images/icon/icon-5.png';

function Ab() {
    return (
        <div>
            {/* About Start */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 ps-lg-0" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={about} style={{ objectFit: 'cover' }} alt="about" />
                            </div>
                        </div>
                        <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <div className="mb-3" style={{ width: 60, height: 2, background:'#FEA116' }} />
                                <h1 className="display-5 mb-4">About Us</h1>
                                <p className="mb-4 pb-2">Our company is an Egyptian joint stock company, one of the companies
                                    specialized in guarding and securing facilities from within. We are authorized to practice
                                    security and guarding by the Ministry of Interior and all concerned authorities within the
                                    Arab Republic of Egypt.</p>
                                <div className="row g-4 mb-4 pb-3">
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-square bg-white rounded-circle" style={{ width: 64, height: 64 }}>
                                                <img className="img-fluid" src={icon1} alt="Icon" />
                                            </div>
                                            <div className="ms-4">
                                                <h2 className="mb-1" data-toggle="counter-up">1020</h2>
                                                <p style={{color:'#FEA116', fontSize:'13px'}} className="fw-medium mb-0">Happy Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-square bg-white rounded-circle" style={{ width: 64, height: 64 }}>
                                                <img className="img-fluid" src={icon5} alt="Icon" />
                                            </div>
                                            <div className="ms-4">
                                                <h2 className="mb-1" data-toggle="counter-up">1028</h2>
                                                <p style={{color:'#FEA116', fontSize:'13px'}} className="fw-medium mb-0">Projects Done</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href='#!' style={{background:'#FEA116'}} className="btn rounded-pill py-3 px-5 text-white">Explore More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

        </div>
    )
}

export default Ab