import React from 'react'
import icon3 from '../images/icon/icon-3.png';
import icon4 from '../images/icon/icon-4.png';
import icon2 from '../images/icon/icon-2.png';

function Facts() {
    return (
        <div>
            {/* Facts Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item1 h-100 p-4 p-xl-5">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="btn-square rounded-circle" style={{ width: 64, height: 64, background: '#f4f4f4' }}>
                                        <img className="img-fluid" src={icon3} alt="Icon" />
                                    </div>
                                    <h1 className="display-1 mb-0" style={{ color: '#f4f4f4' }}>01</h1>
                                </div>
                                <h5>Home Security</h5>
                                <hr className="w-25" />
                                <span>Protecting families with advanced technology for peace of mind.</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item1 h-100 p-4 p-xl-5">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="btn-square rounded-circle" style={{ width: 64, height: 64, background: '#f4f4f4' }}>
                                        <img className="img-fluid" src={icon4} alt="Icon" />
                                    </div>
                                    <h1 className="display-1 mb-0" style={{ color: '#f4f4f4' }}>02</h1>
                                </div>
                                <h5>Access Control</h5>
                                <hr className="w-25" />
                                <span>Regulating entry for enhanced security and operational efficiency.</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item1 h-100 p-4 p-xl-5">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="btn-square rounded-circle" style={{ width: 64, height: 64, background: '#f4f4f4' }}>
                                        <img className="img-fluid" src={icon2} alt="Icon" />
                                    </div>
                                    <h1 className="display-1 mb-0" style={{ color: '#f4f4f4' }}>03</h1>
                                </div>
                                <h5>24/7 Support</h5>
                                <hr className="w-25" />
                                <span>Dedicated assistance round-the-clock for your peace of mind.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}

        </div>
    )
}

export default Facts