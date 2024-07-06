import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    
    <div className='home'>
      
       <div className="navbar-area">
    <div className="mobile-nav">
      <a href="/" className="logo">
        <img src="assets/img/logo.png" className="logo-one" alt="Logo" />
        <img src="assets/img/sticky-logo.png" className="logo-two" alt="Logo" />
      </a>
    </div>
    <div className="main-nav">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="/">
            <img src="assets/img/logo.png" alt="Logo" />
          </a>
          <a className="navbar-brand-sticky" href="/">
            <img src="assets/img/sticky-logo.png" alt="Logo" />
          </a>
          <div
            className="collapse navbar-collapse mean-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                
                <a href="javascript:(void);" className="nav-link">
                  About Us
                  <i className="bx bxs-chevron-right" />
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">Company</Link>
                    {/* <a className="nav-link"  href='/about' >Company</a> */}
                   
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/team"> Our Team</Link>
                    {/* <a className="nav-link" href='/team'> Our Team</a> */}
                  
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Services
                  <i className="bx bxs-chevron-right" />
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a href="javascript:(void);" className="nav-link">
                      Frontend
                      <i className="bx bxs-chevron-right" />
                    </a>
                    <ul className="dropdown-menu dropright">
                      <li className="nav-item">
                        <Link className="nav-link" to="/servicedetails"> Sub Category 1</Link> 
                       
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/servicedetails">Sub Category 2</Link>
                        {/* <a href="#" className="nav-link">
                          Sub Category 2
                        </a> */}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:(void);" className="nav-link">
                      Development
                      <i className="bx bxs-chevron-right" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                      <Link className="nav-link" to="/servicedetails">Sub Category 1</Link>
                       
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/servicedetails">Sub Category 2</Link>
                       
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:(void);" className="nav-link">
                      Digital Marketing
                      <i className="bx bxs-chevron-right" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                      <Link className="nav-link" to="/servicedetails">Sub Category 1</Link>
                        
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/servicedetails">Sub Category 2</Link>
                      
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:(void);" className="nav-link">
                      Other Services
                      <i className="bx bxs-chevron-right" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                      <Link className="nav-link" to="/servicedetails">Sub Category 1</Link>
                       
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/servicedetails">Sub Category 2</Link>
                       
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link" to="/blog">Blog</Link>
               
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/portfolio"> Portfolio</Link>
               
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
               
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
  
    </div>
  )
}
