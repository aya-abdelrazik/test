// import React from 'react'
import testimonial1 from '../images/testimonial-1.jpg'
import testimonial2 from '../images/testimonial-2.jpg'
import testimonial3 from '../images/testimonial-3.jpg'

// // function Testimonial() {
// //     return (
// //         <div>
// //             {/* Testimonial Start */}
// //             <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
// //                 <div className="container">
// //                     <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
// //                         <div className="bg-primary mb-3 mx-auto" style={{ width: 60, height: 2 }} />
// //                         <h1 className="display-5 mb-5">Testimonial</h1>
// //                     </div>
// //                     <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
// //                         <div className="testimonial-item text-center" data-dot="<img class='img-fluid' src={testimonial1} alt=''>">
// //                             <p className="fs-5">Exceptional service! Their security systems are top-notch, providing peace of mind.
// //                                 Quick response and 24/7 support make them the best choice for safeguarding your property.</p>
// //                             <h4>Ola Bahaa</h4>
// //                             <span className="text-primary">Profession</span>
// //                         </div>
// //                         <div className="testimonial-item text-center" data-dot="<img class='img-fluid' src={testimonial2} alt=''>">
// //                             <p className="fs-5">Outstanding security solutions! Their expertise and round-the-clock support ensure
// //                                 our peace of mind. Trustworthy, efficient, and effective in protecting our business assets.</p>
// //                             <h4>Nour Kareem</h4>
// //                             <span className="text-primary">Profession</span>
// //                         </div>
// //                         <div className="testimonial-item text-center" data-dot="<img class='img-fluid' src={testimonial3} alt=''>">
// //                             <p className="fs-5">Highly recommend their security services! Professional team, cutting-edge
// //                                 technology, and reliable support. Enhanced our safety measures significantly. Top-notch security
// //                                 solutions for any business.</p>
// //                             <h4>Ahmed Sadek</h4>
// //                             <span className="text-primary">Profession</span>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //             {/* Testimonial End */}

// //         </div>
// //     )
// // }


// export default Testimonial


import React from 'react';

function Testimonial() {
    return (
        <div>
            {/* Testimonial Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="mb-3 mx-auto" style={{ width: 60, height: 2, background:'#FEA116'} } />
                        <h1 className="display-5 mb-5">Testimonial</h1>
                    </div>

                    {/* Bootstrap Carousel */}
                    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/* Testimonial 1 */}
                            <div className="carousel-item active">
                                <div className="testimonial-item text-center">
                                    <img style={{width:'100px'}} className='rounded-pill' src={testimonial1} alt="" />
                                    <p className="fs-5 opacity-75">
                                        Exceptional service! Their security systems are top-notch, providing peace of mind. 
                                        Quick response and 24/7 support make them the best choice for safeguarding your property.
                                    </p>
                                    <h4>Ola Bahaa</h4>
                                    <span style={{color:'#FEA116'}}>Profession</span>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="carousel-item">
                                <div className="testimonial-item text-center">
                                <img style={{width:'100px'}} className='rounded-pill' src={testimonial2} alt="" />
                                    <p className="fs-5 opacity-75">
                                        Outstanding security solutions! Their expertise and round-the-clock support ensure
                                        our peace of mind. Trustworthy, efficient, and effective in protecting our business assets.
                                    </p>
                                    <h4>Nour Kareem</h4>
                                    <span style={{color:'#FEA116'}}>Profession</span>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="carousel-item">
                                <div className="testimonial-item text-center">
                                <img style={{width:'100px'}} className='rounded-pill' src={testimonial3} alt="" />
                                    <p className="fs-5 opacity-75">
                                        Highly recommend their security services! Professional team, cutting-edge
                                        technology, and reliable support. Enhanced our safety measures significantly. 
                                        Top-notch security solutions for any business.
                                    </p>
                                    <h4>Ahmed Sadek</h4>
                                    <span style={{color:'#FEA116'}}>Profession</span>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <button className="carousel-control-prev text-secondary" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon text-secondary" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next text-secondary" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon text-secondary" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* End of Carousel */}
                </div>
            </div>
            {/* Testimonial End */}
        </div>
    );
}

export default Testimonial;
