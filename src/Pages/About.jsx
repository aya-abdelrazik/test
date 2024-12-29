import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Facts from '../Components/Facts'
import Ab from '../Components/Ab'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <Navbar/>
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 style={{fontSize:'50px', fontWeight:'900'}} className="text-white mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link className="text-white text-decoration-none" to="/">Home</Link></li>
                            <li className="breadcrumb-item"><a className="text-white text-decoration-none" href="#!">Pages</a></li>
                            <li className="breadcrumb-item text-white" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            <Facts/>
            <Ab/>
            <Footer />
        </div>
    )
}

export default About