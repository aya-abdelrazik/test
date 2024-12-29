import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Ser from '../Components/Ser'

function Service() {
    return (
        <div>
            <Navbar />
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 style={{fontSize:'50px', fontWeight:'900'}} className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className="text-white text-decoration-none" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white text-decoration-none" href="#!">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            <Ser/>
            <Footer />
        </div>
    )
}

export default Service