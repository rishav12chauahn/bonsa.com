import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Header() {
const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <div className="header">
      <div className="main-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text">
                <span>Search Engine Optimization</span>
                <h1>We Highlight Your Business to the World Market</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsu msuspendisse ultrices gravida.
                </p>
                <div className="banner-btn">
                  <a className="default-btn" href="/contact">
                    Contact Us
                  </a>

                  <a className="default-btn active" href="/about">
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img">
                <img src="assets/img/home1.png" alt="Banner Images" />
              </div>
            </div>
            <div className="banner-shape-1">
              <img src="assets/img/shape/home1.png" alt="Banner Shape" />
            </div>
          </div>
        </div>
        <div className="home-shape">
          <div className="shape1">
            <img src="assets/img/shape/1.png" alt="shape" />
          </div>
          <div className="shape2">
            <img src="assets/img/shape/2.png" alt="shape" />
          </div>
          <div className="shape3">
            <img src="assets/img/shape/3.png" alt="shape" />
          </div>
          <div className="shape4">
            <img src="assets/img/shape/4.png" alt="shape" />
          </div>
          <div className="shape5">
            <img src="assets/img/shape/5.png" alt="shape" />
          </div>
          <div className="shape6">
            <img src="assets/img/shape/6.png" alt="shape" />
          </div>
          <div className="shape7">
            <img src="assets/img/shape/3.png" alt="shape" />
          </div>
        </div>
      </div>
      <div className="about-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xxl-6 ps-0">
              <div className="about-img">
                <img src="assets/img/about/1.png" alt="About Images" />
              </div>
            </div>
            <div className="col-lg-7 col-xxl-6">
              <div className="about-content about-width">
                <span>About Us</span>
                <h2>
                  We Are Helping People to Reach Their Customer Since 2005
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <p>
                  As opposed to using 'Content here, content here', making it
                  look like readable English. Many desktop publishing packages
                  and web page editors now use Lorem Ipsum as their default
                  model text, and a search for 'lorem ipsum' will uncover many
                  web sites still in their infancy. Various versions have
                  evolved over the years.
                </p>
                <div className="about-btn">
                  <a className="default-btn" href="/about">
                    {" "}
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape">
          <img src="assets/img/shape/right-side.png" alt="Shape Images" />
        </div>
      </div>
      <section className="service-area pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span>Our Service</span>
            <h2>We Provide Fastest &amp; Unique Business Growing Service</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <a href="/servicedetails">
                  <img src="assets/img/service-icon/1.png" alt="Images" />
                </a>

                <a href="/servicedetails">
                  <h3>SEO Optimization</h3>
                </a>
                <p>
                  It is a long established fact that area der will be distracted
                  by the reada ble content of a page when looking.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <a href="/servicedetails">
                  <img src="assets/img/service-icon/2.png" alt="Images" />
                </a>

                <a href="/servicedetails">
                  <h3>Social Marketing</h3>
                </a>

                <p>
                  It is a long established fact that area der will be distracted
                  by the reada ble content of a page when looking.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <a href="/servicedetails">
                  <img src="assets/img/service-icon/3.png" alt="Images" />
                </a>

                <a href="/servicedetails">
                  <h3>Content Marketing</h3>
                </a>

                <p>
                  It is a long established fact that area der will be distracted
                  by the reada ble content of a page when looking.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <a href="/servicedetails">
                  <img src="assets/img/service-icon/4.png" alt="Images" />
                </a>

                <a href="/servicedetails">
                  <h3>Analytical Analysis</h3>
                </a>
                <p>
                  It is a long established fact that area der will be distracted
                  by the reada ble content of a page when looking.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <a href="/servicedetails">
                  {" "}
                  <img src="assets/img/service-icon/5.png" alt="Images" />
                </a>

                <a href="/servicedetails">
                  <h3>App Development</h3>
                </a>
                <p>
                  It is a long established fact that area der will be distracted
                  by the reada ble content of a page when looking.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <a href="/servicedetails">
                  {" "}
                  <img src="assets/img/service-icon/6.png" alt="Images" />
                </a>

                <a href="/servicedetails">
                  {" "}
                  <h3>Web Development</h3>
                </a>
                <p>
                  It is a long established fact that area der will be distracted
                  by the reada ble content of a page when looking.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <a href="/servicedetails">
                  <img src="assets/img/service-icon/6.png" alt="Images" />
                </a>

                <a href="/servicedetails">
                  <h3>Web Development</h3>
                </a>
                <p>
                  It is a long established fact that area der will be distracted
                  by the reada ble content of a page when looking.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <a href="/servicedetails">
                  <img src="assets/img/service-icon/6.png" alt="Images" />
                </a>

                <a href="/servicedetails">
                  {" "}
                  <h3>Web Development</h3>
                </a>
                <p>
                  It is a long established fact that area der will be distracted
                  by the reada ble content of a page when looking.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <a href="/servicedetails">
                  {" "}
                  <img src="assets/img/service-icon/6.png" alt="Images" />
                </a>

                <a href="/servicedetails">
                  <h3>Web Development</h3>
                </a>
                <p>
                  It is a long established fact that area der will be distracted
                  by the reada ble content of a page when looking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="faq-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xxl-7">
              <div className="faq-img">
                <img src="assets/img/faq/1.png" alt="fAQ Images" />
              </div>
            </div>
            <div className="col-lg-6 col-xxl-5">
              <div className="faq-content">
                <span>Why Choose Us</span>
                <h2>We Are Top Ranked &amp; Dedicated SEO Company</h2>
                <p>
                  As opposed to using Content here, content here, making it look
                  like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model
                  text.
                </p>
              </div>
              <div className="faq-accordion">
                <ul className="accordion">
                  <li className="accordion-item">
                    <a
                      className={`accordion-title ${
                        activeIndex === 0 ? "active" : ""
                      }`}
                      href="javascript:void(0)"
                      onClick={() => toggleAccordion(0)}
                    >
                      <i className="bx bx-chevron-down" />
                      Great Research Experts
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 0 ? "show" : ""
                      }`}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className="accordion-item">
                    <a
                      className={`accordion-title ${
                        activeIndex === 1 ? "active" : ""
                      }`}
                      href="javascript:void(0)"
                      onClick={() => toggleAccordion(1)}
                    >
                      <i className="bx bx-chevron-down " />
                      Great Understanding
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 1 ? "show" : ""
                      }`}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className="accordion-item">
                    <a
                      className={`accordion-title ${
                        activeIndex === 2 ? "active" : ""
                      }`}
                      href="javascript:void(0)"
                      onClick={() => toggleAccordion(2)}
                    >
                      <i className="bx bx-chevron-down" />
                      Top Ranking
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 2 ? "show" : ""
                      }`}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className="accordion-item">
                    <a
                      className={`accordion-title ${
                        activeIndex === 3 ? "active" : ""
                      }`}
                      href="javascript:void(0)"
                      onClick={() => toggleAccordion(3)}
                    >
                      <i className="bx bx-chevron-down" />
                      100% Trusted
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 3 ? "show" : ""
                      }`}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="member-area pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span>Our Expert Members</span>
            <h2>Behind the Great Success of Bonsa They Playing Role</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="row pt-45">
            <div className="col-lg-3 col-sm-6">
              <div className="member-card">
                <div className="member-img">
                  <a href="/team">
                    <img src="assets/img/member/1.jpg" alt="Member Images" />
                  </a>

                  <div className="member-content">
                    <a href="/team">
                      <h3>John Doe</h3>
                    </a>
                    <span>Head of Bonsa</span>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="member-card">
                <div className="member-img">
                  <a href="/team">
                    <img src="assets/img/member/2.jpg" alt="Member Images" />
                  </a>

                  <div className="member-content">
                    <a href="/team">
                      <h3>John Smith</h3>
                    </a>
                    <span>SEO Expert</span>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="member-card">
                <div className="member-img">
                  <a href="/team">
                    <img src="assets/img/member/3.jpg" alt="Member Images" />
                  </a>

                  <div className="member-content">
                    <a href="/team">
                      <h3>Evanaa</h3>
                    </a>

                    <span>Content Writer</span>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="member-card">
                <div className="member-img">
                  <a href="/team">
                    {" "}
                    <img src="assets/img/member/4.jpg" alt="Member Images" />
                  </a>

                  <div className="member-content">
                    <a href="/team">
                      <h3>Knot Doe</h3>
                    </a>
                    <span>Marketing Expert</span>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="member-shape">
          <img src="assets/img/shape/member-shape-1.png" alt="Shape" />
        </div>
      </div>
      <div className="counter-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="single-counter">
                <i className="flaticon-success" />
                <h3>
                  <span className="counter">15</span>
                </h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="single-counter">
                <i className="flaticon-launch" />
                <h3>
                  <span className="counter">900</span>+
                </h3>
                <p>Projects Done</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="single-counter">
                <i className="flaticon-customer" />
                <h3>
                  <span className="counter">800</span>+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <div className="single-counter">
                <i className="flaticon-team-building" />
                <h3>
                  <span className="counter">25</span>+
                </h3>
                <p>Expert Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-area pt-100 pb-70">
        <div className="container-fluid">
          <div className="section-title text-center">
            <span>Testimonial</span>
            <h2>Our Clients Feedback</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7 col-xxl-6">
              <div className="testimonial-slider">
                <div className="testimonial-icon">
                  <i className="bx bxs-quote-alt-right" />
                </div>
                <Slider {...settings}>
                  <div className="testimonial-item">
                    <div className="testimonial-item-img">
                      <img
                        src="assets/img/testimonial/t1.png"
                        alt="Testimonial Images"
                      />
                    </div>
                    <h3>John Doe</h3>
                    <p>
                      Restaurants range from inexpensive and informal lunching
                      or dining places catering to people working nearby, with
                      modest food served in simple settings at low prices.
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-item-img">
                      <img
                        src="assets/img/testimonial/t2.png"
                        alt="Testimonial Images"
                      />
                    </div>
                    <h3>Knot Doe</h3>
                    <p>
                      Restaurants range from inexpensive and informal lunching
                      or dining places catering to people working nearby, with
                      modest food served in simple settings at low prices.
                    </p>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-item-img">
                      <img
                        src="assets/img/testimonial/t3.png"
                        alt="Testimonial Images"
                      />
                    </div>
                    <h3>Evanaa</h3>
                    <p>
                      Restaurants range from inexpensive and informal lunching
                      or dining places catering to people working nearby, with
                      modest food served in simple settings at low prices.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-5 col-xxl-6">
              <div className="testimonial-img">
                <img
                  src="assets/img/testimonial/1.png"
                  alt="Testimonial Images"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-left">
          <img src="assets/img/testimonial/shape-left.png" alt="Images" />
        </div>
        <div className="shape-right">
          <img src="assets/img/testimonial/shape-right.png" alt="Images" />
        </div>
      </div>
      <div className="blog-area pb-70">
        <div className="container">
          <div className="section-title text-center">
            <span>Blogs</span>
            <h2>Our Latest Post</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="row pt-45">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="/blogdetails">
                    {" "}
                    <img src="assets/img/blog/1.jpg" alt="Blog Images" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-tag">
                    <a href="#">
                      <span>SEO Optimization</span>
                    </a>
                  </div>
                  <a href="/blogdetails">
                    <h3>Basic Guidline Layout for SEO Bigenner Level</h3>
                  </a>

                  <a href="/blogdetails">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="/blogdetails">
                    {" "}
                    <img src="assets/img/blog/2.jpg" alt="Blog Images" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-tag">
                    <a href="#">
                      <span>Marketing</span>
                    </a>
                  </div>
                  <a href="/blogdetails">
                    <h3>
                      How to Become Most Skilled Person in Social Marketing
                    </h3>
                  </a>

                  <a href="/blogdetails">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="/blogdetails">
                    {" "}
                    <img src="assets/img/blog/3.jpg" alt="Blog Images" />
                  </a>
                </div>
                <div className="blog-content">
                  <div className="blog-tag">
                    <a href="#">
                      <span>Data Research</span>
                    </a>
                  </div>
                  <a href="/blogdetails">
                    <h3>Basic Guidline Layout for SEO Bigenner Level</h3>
                  </a>

                  <a href="/blogdetails">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
