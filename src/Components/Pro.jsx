import React from 'react'
import portfolio1 from '../images/portfolio-1.jpg'
import portfolio2 from '../images/portfolio-2.jpg'
import portfolio3 from '../images/portfolio-3.jpg'
import portfolio4 from '../images/portfolio-4.jpg'
import portfolio5 from '../images/portfolio-5.jpg'
import portfolio6 from '../images/portfolio-6.jpg'

function Pro() {
    return (
        <div>
            {/* Projects Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="mb-3 mx-auto" style={{ width: 60, height: 2, background: '#FEA116' }} />
                        <h1 className="display-5 mb-5">Our Projects</h1>
                    </div>
                    <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-12 text-center">
                            <ul className="list-inline mb-5" id="portfolio-flters">
                                <li className="mx-2 active" data-filter="*">All</li>
                                <li className="mx-2" data-filter=".first">Complete Projects</li>
                                <li className="mx-2" data-filter=".second">Ongoing Projects</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-4 portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={portfolio1} alt='' />
                                <div className="text-center p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">Business Security</p>
                                    <h5 className="lh-base mb-0">Ensuring protection and peace of mind always.</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">Business Security</p>
                                    <h5 className="lh-base mb-3">Ensuring protection and peace of mind always.</h5>
                                    <div className="d-flex justify-content-center">
                                        <a style={{background:'#FEA116'}} className="btn btn-square rounded-circle mx-1 text-light" href="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                        <a style={{background:'#FEA116'}} className="btn btn-square rounded-circle mx-1 text-light" href><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={portfolio2} alt='' />
                                <div className="text-center p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">Fire Detection</p>
                                    <h5 className="lh-base mb-0">Ensure safety with reliable Fire Detection.</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">Fire Detection</p>
                                    <h5 className="lh-base mb-3">Ensure safety with reliable Fire Detection.</h5>
                                    <div className="d-flex justify-content-center">
                                        <a style={{background:'#FEA116'}} className="text-light btn btn-square rounded-circle mx-1" href="img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                        <a style={{background:'#FEA116'}} className="text-light btn btn-square rounded-circle mx-1" href><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={portfolio3} alt='' />
                                <div className="text-center p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">Access Control</p>
                                    <h5 className="lh-base mb-0">Secure access control with advanced Access.</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">Access Control</p>
                                    <h5 className="lh-base mb-3">Secure access control with advanced Access.</h5>
                                    <div className="d-flex justify-content-center">
                                        <a style={{background:'#FEA116'}} className="text-light btn btn-square rounded-circle mx-1" href="img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                        <a style={{background:'#FEA116'}} className="text-light btn btn-square rounded-circle mx-1" href><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={portfolio4} alt='' />
                                <div className="text-center p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">Alarm Systems</p>
                                    <h5 className="lh-base mb-0">Ensure safety with reliable Alarm Systems.</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">Alarm Systems</p>
                                    <h5 className="lh-base mb-3">Ensure safety with reliable Alarm Systems.</h5>
                                    <div className="d-flex justify-content-center">
                                        <a style={{background:'#FEA116'}} className="text-light btn btn-square rounded-circle mx-1" href="img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                        <a style={{background:'#FEA116'}} className="text-light btn btn-square rounded-circle mx-1" href><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={portfolio5} alt='' />
                                <div className="text-center p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">CCTV &amp; Video</p>
                                    <h5 className="lh-base mb-0">Smart CCTV Security Systems That Fits Your Business</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">CCTV &amp; Video</p>
                                    <h5 className="lh-base mb-3">Smart CCTV Security Systems That Fits Your Business</h5>
                                    <div className="d-flex justify-content-center">
                                        <a style={{background:'#FEA116'}} className="text-light btn btn-square rounded-circle mx-1" href="img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                        <a style={{background:'#FEA116'}} className="text-light btn btn-square rounded-circle mx-1" href><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                            <div className="portfolio-inner">
                                <img className="img-fluid w-100" src={portfolio6} alt='' />
                                <div className="text-center p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">Smart Home</p>
                                    <h5 className="lh-base mb-0">Protecting families with advanced technology.</h5>
                                </div>
                                <div className="portfolio-text text-center bg-white p-4">
                                    <p style={{color:'#FEA116'}} className="mb-2">Smart Home</p>
                                    <h5 className="lh-base mb-3">Protecting families with advanced technology.</h5>
                                    <div className="d-flex justify-content-center">
                                        <a style={{background:'#FEA116'}} className="text-light btn btn-square rounded-circle mx-1" href="img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
                                        <a style={{background:'#FEA116'}} className="text-light btn btn-square rounded-circle mx-1" href><i className="fa fa-link" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Projects End */}

        </div>
    )
}

export default Pro