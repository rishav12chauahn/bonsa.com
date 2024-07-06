
import React from "react";


export default function Footer() {
  return (
    <div className="footer">
      <footer id="footer" className="footer-area bg-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-single">
                  <div className="footer-single-content">
                    <a href="index-2.html">
                      <img src="assets/img/footer-logo.png" alt="Logo" />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum efficitur convallis arcu, id dapibus nulla
                      tincidunt.
                    </p>
                  </div>
                  <div className="newsletter-area">
                    <form
                      className="newsletter-form"
                      data-toggle="validator"
                      method="POST"
                    >
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="EMAIL"
                        required=""
                        autoComplete="off"
                      />
                      <button className="subscribe-btn" type="submit">
                        Subscribe
                      </button>
                      <div id="validator-newsletter" className="form-result" />
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-list ml-50">
                  <h3>Information</h3>
                  <ul>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="/about">About Us</a>
                      {/* <a href="services.html">SEO Optimization</a> */}
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="/termscondition">Terms-Condition</a>
                      {/* <a href="services.html">Social Marketing</a> */}
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="/privacypolicy">Privacy-Policy</a>
                      {/* <a href="services.html">Busines Growing</a> */}
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="/faq">Faq</a>
                      {/* <a href="services.html"> Data Analysis</a> */}
                    </li>
                   
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-list">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="/services">Services</a>
                      
                    
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="/blog">Blog</a>
                      {/* <a href="about.html">About Us</a> */}
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="/contact">Contact</a>
                      {/* <a href="testimonial.html">Testimonial</a> */}
                    </li>
                    
                   
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-list ml-20">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="tel:+9163962 00421">63962 00421</a>
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="tel:+19876543210">+1 9876 543 210</a>
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#7b12151d143b191415081a55181416">
                        <span
                          className="__cf_email__"
                          data-cfemail="e38a8d858ca3818c8d9082cd808c8e"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#2e464b4242416e4c41405d4f004d4143">
                        <span
                          className="__cf_email__"
                          data-cfemail="84ece1e8e8ebc4e6ebeaf7e5aae7ebe9"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="bx bxs-chevron-right" />
                      Jail Chungi, 95/1 Janakpuri, Kila Rd, Meerut, Uttar
                      Pradesh 250001
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="bottom-text text-center">
                  <p>
                    Copyright @ W2s Infotech. All Rights Reserved by
                    <a href="https://www.w2sinfotech.com/" target="_blank">
                      W2s Infotech
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
     
    </div>
  );
}
