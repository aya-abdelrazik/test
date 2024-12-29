import React from 'react' 
import '../style.css'
import { Link } from 'react-router-dom'



function Navbar() {
    return (
        <>
            {/* Navbar Start */}

            <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-0 px-4 px-lg-5">
                <a href="index.html" className="navbar-brand d-flex align-items-center">
                    <h2 style={{color:'#FEA116'}} className="m-0">Vigilantix</h2>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-4 py-lg-0">
                        <Link to='/' className="nav-item nav-link">Home</Link>
                        <Link to='/About' className="nav-item nav-link">About</Link>
                        <Link to='/Service' className="nav-item nav-link">Service</Link>
                        <Link to='/Project' className="nav-item nav-link">Project</Link>
                        <Link to='/Contact' className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </>


    )
}

export default Navbar