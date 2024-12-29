import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div>
      <Navbar />
      <div>
        {/* Page Header Start */}
        <div className="container-fluid page-header py-5">
          <div className="container py-5">
            <h1 style={{fontSize:'50px', fontWeight:'900'}} className="display-3 text-white mb-3 animated slideInDown">Contact</h1>
            <nav aria-label="breadcrumb animated slideInDown">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-white text-decoration-none" href="1">Home</a></li>
                <li className="breadcrumb-item"><a className="text-white text-decoration-none" href="#!">Pages</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Page Header End */}

        {/* Contact Start */}
        <div className="container-fluid bg-light overflow-hidden px-lg-0 ">
          <div className="container contact px-lg-0">
            <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4">Contact Us</h1>
                  </div>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="name" placeholder="Your Name" />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="email" placeholder="Your Email" />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="subject" placeholder="Subject" />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 100 }} defaultValue={""} />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button style={{backgroundColor:'#FEA116'}} className="btn w-100 py-3 text-light" type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 pe-lg-0" style={{ minHeight: 400 }}>
                <div className="position-relative h-100">
                  <iframe className="position-absolute w-100 h-100" style={{ objectFit: 'cover' }} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Mansoura&zoom=10&maptype=roadmap" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </div>

      <Footer />
    </div>
  )
}

export default Contact