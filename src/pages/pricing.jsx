import React from 'react'

export default function Pricing() {
  return (
    <div className='pricing'>
      <style >{`
        .main-nav{
          background:#fff;
        }
      `}</style>

    <div className="inner-banner inner-bg1">
      <div className="container">
        <div className="inner-title text-center">
          <h3>Pricing</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <i className="bx bxs-chevrons-right" />
            </li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="price-area pt-100 pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span>Monthly Packages</span>
          <h2>Buy Our Plans &amp; Packages Monthly</h2>
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="row pt-45">
          <div className="col-lg-4 col-sm-6">
            <div className="single-price">
              <span>Basic Plan</span>
              <div className="single-price-title">
                <h2>
                  <sup>$</sup>30<sub>/month</sub>
                </h2>
              </div>
              <ul>
                <li>Data Analysis</li>
                <li>Website Building</li>
                <li>Web Application</li>
                <li className="color-gray">SEO Optimizing</li>
                <li className="color-gray">Content Marketing</li>
                <li className="color-gray">Social Marketing</li>
              </ul>
              <a href="#" className="get-btn">
                Get Stated
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-price current">
              <span>Standard Plan</span>
              <div className="single-price-title">
                <h2>
                  <sup>$</sup>60<sub>/month</sub>
                </h2>
              </div>
              <ul>
                <li>Data Analysis</li>
                <li>Website Building</li>
                <li>Web Application</li>
                <li>SEO Optimizing</li>
                <li className="color-gray">Content Marketing</li>
                <li className="color-gray">Social Marketing</li>
              </ul>
              <a href="#" className="get-btn">
                Get Stated
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
            <div className="single-price">
              <span>Premium Plan</span>
              <div className="single-price-title">
                <h2>
                  <sup>$</sup>90<sub>/month</sub>
                </h2>
              </div>
              <ul>
                <li>Data Analysis</li>
                <li>Website Building</li>
                <li>Web Application</li>
                <li>SEO Optimizing</li>
                <li>Content Marketing</li>
                <li>Social Marketing</li>
              </ul>
              <a href="#" className="get-btn">
                Get Stated
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="price-yearly-pack pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span>Yearly Packages</span>
          <h2>Buy Our Plans &amp; Packages Yearly</h2>
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="row pt-45">
          <div className="col-lg-4 col-sm-6">
            <div className="single-price">
              <span>Basic Plan</span>
              <div className="single-price-title">
                <h2>
                  <sup>$</sup>70<sub>/Year</sub>
                </h2>
              </div>
              <ul>
                <li>Data Analysis</li>
                <li>Website Building</li>
                <li>Web Application</li>
                <li className="color-gray">SEO Optimizing</li>
                <li className="color-gray">Content Marketing</li>
                <li className="color-gray">Social Marketing</li>
              </ul>
              <a href="#" className="get-btn">
                Get Stated
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="single-price current">
              <span>Standard Plan</span>
              <div className="single-price-title">
                <h2>
                  <sup>$</sup>120<sub>/Year</sub>
                </h2>
              </div>
              <ul>
                <li>Data Analysis</li>
                <li>Website Building</li>
                <li>Web Application</li>
                <li>SEO Optimizing</li>
                <li className="color-gray">Content Marketing</li>
                <li className="color-gray">Social Marketing</li>
              </ul>
              <a href="#" className="get-btn">
                Get Stated
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
            <div className="single-price">
              <span>Premium Plan</span>
              <div className="single-price-title">
                <h2>
                  <sup>$</sup>170<sub>/Year</sub>
                </h2>
              </div>
              <ul>
                <li>Data Analysis</li>
                <li>Website Building</li>
                <li>Web Application</li>
                <li>SEO Optimizing</li>
                <li>Content Marketing</li>
                <li>Social Marketing</li>
              </ul>
              <a href="#" className="get-btn">
                Get Stated
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="submission-area ptb-100">
      <div className="container">
        <div className="submission-title">
          <h2>Know Your Website Ranking</h2>
        </div>
        <form className="submission-form">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  placeholder="Your website"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form-group border-line">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 offset-md-5 offset-lg-0">
              <button type="submit" className="default-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  
  )
}
