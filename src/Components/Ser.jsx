import React from 'react'
import icon6 from '../images/icon/icon-6.png'
import icon8 from '../images/icon/icon-8.png'
import icon9 from '../images/icon/icon-9.png'
import icon3 from '../images/icon/icon-3.png'

function Ser() {
  return (
    <div>
        {/* Service Start */}
        <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center">
                        <div className="mb-3 mx-auto" style={{ width: 60, height: 2, background:'#FEA116' }} />
                        <h1 className="display-5 mb-5">Our Services</h1>
                    </div>
                    <div className="row g-0 service-row">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: 64, height: 64 }}>
                                    <img className="img-fluid" src={icon6} alt="Icon" />
                                </div>
                                <h4 className="mb-3">Commercial CCTV System</h4>
                                <p className="mb-4">Upgrade security with Commercial CCTV System for effective surveillance
                                    solutions.</p>
                                <a className="btn" href><i className="fa fa-arrow-right text-white me-3" />Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: 64, height: 64 }}>
                                    <img className="img-fluid" src={icon8} alt="Icon" />
                                </div>
                                <h4 className="mb-3">Finger Print Access</h4>
                                <p className="mb-4">Secure access control with advanced Finger Print Access for businesses.</p>
                                <a className="btn" href><i className="fa fa-arrow-right me-3" />Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: 64, height: 64 }}>
                                    <img className="img-fluid" src={icon9} alt="Icon" />
                                </div>
                                <h4 className="mb-3">Fire Detection And Safety</h4>
                                <p className="mb-4">Ensure safety with reliable Fire Detection And Safety systems.</p>
                                <a className="btn" href><i className="fa fa-arrow-right text-white me-3" />Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: 64, height: 64 }}>
                                    <img className="img-fluid" src={icon3} alt="Icon" />
                                </div>
                                <h4 className="mb-3">Smart Home Security</h4>
                                <p className="mb-4">Elevate home protection with cutting-edge Smart Home Security solutions</p>
                                <a className="btn" href><i className="fa fa-arrow-right text-white me-3" />Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
    </div>
  )
}

export default Ser