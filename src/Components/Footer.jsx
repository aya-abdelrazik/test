import React from 'react'

function Footer() {
    return (
        <div>
            {/* Footer Start */}
            <div style={{ background: 'var(--dark)' }} className="container-fluid text-secondary footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, Mansoura, Eygypt</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+01012345678</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3" />aya@gmail.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2 text-decoration-none" href="#!"><i className="fab fa-twitter" /></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2 text-decoration-none" href="#!"><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2 text-decoration-none" href="#!"><i className="fab fa-youtube" /></a>
                                <a className="btn btn-square btn-outline-secondary rounded-circle me-2 text-decoration-none" href="#!"><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Services</h5>
                            <a className="btn btn-link text-decoration-none" href="#!">Business Security</a>
                            <a className="btn btn-link text-decoration-none" href="#!">Fire Detection</a>
                            <a className="btn btn-link text-decoration-none" href="#!">Alarm Systems</a>
                            <a className="btn btn-link text-decoration-none" href="#!">CCTV &amp; Video</a>
                            <a className="btn btn-link text-decoration-none" href="#!">Smart Home</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <a className="btn btn-link text-decoration-none" href="#!">About Us</a>
                            <a className="btn btn-link text-decoration-none" href="#!">Contact Us</a>
                            <a className="btn btn-link text-decoration-none" href="#!">Our Services</a>
                            <a className="btn btn-link text-decoration-none" href="#!">Terms &amp; Condition</a>
                            <a className="btn btn-link text-decoration-none" href="#!">Support</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative w-100">
                                <input className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button style={{background:'#FEA116', color:'white'}} type="button" className="btn py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            © <a style={{color:'#FEA116'}} className="border-bottom text-decoration-none" href="#!">Vigilantix
                            </a>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed By <a style={{color:'#FEA116'}} className="border-bottom text-decoration-none" href="#!">Aya Abdelrazik.</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}

        </div>
    )
}

export default Footer