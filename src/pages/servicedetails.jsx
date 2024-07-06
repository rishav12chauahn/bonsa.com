import React from 'react'

export default function Servicedetails() {
  return (
    <div className='servicedetails'>
      <style >{`
        .main-nav{
          background:#fff;
        }
      `}</style>
    <div className="inner-banner inner-bg3">
      <div className="container">
        <div className="inner-title text-center">
          <h1>Service Details</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <i className="bx bxs-chevrons-right" />
            </li>
            <li>Service Details</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="service-dtls pt-100 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-dtls-content">
              <div className="service-dtls-img">
                <img
                  src="assets/img/service-icon/service-dtls.jpg"
                  alt="Service Image"
                />
              </div>
              <h2>Social Business Growth &amp; Marketing</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look
              </p>
              <div className="service-dtls-btn">
                <a className="default-btn" href="/contact">Contact Us</a>
              
              </div>
              <div className="pager-area">
                <ul className="pager">
                  <li className="previous">
                    <a href="#">Previous</a>
                  </li>
                  <li className="next">
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="common-catagory">
              <h3>More Services</h3>
              <ul className="catagory">
                <li>
                  <a href="#">
                    SEO Optimization <i className="bx bx-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Content Marketing <i className="bx bx-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Analythical Analysis <i className="bx bx-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    App Development <i className="bx bx-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    Web Development <i className="bx bx-plus" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
