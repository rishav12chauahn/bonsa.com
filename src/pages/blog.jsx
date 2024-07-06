import React from 'react'

export default function Blog() {
  return (
    <div className='blog'>
      <style >{`
        .main-nav{
          background:#fff;
        }
      `}</style>
    <div className="inner-banner inner-bg4">
      <div className="container">
        <div className="inner-title text-center">
          <h1>Our Latest Blogs</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <i className="bx bxs-chevrons-right" />
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="blog-area pt-100 pb-70">
      <div className="container">
        <div className="section-title text-center">
          <span>Blogs</span>
          <h2>Our Latest Post</h2>
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="row pt-45">
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/1.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-tag">
                  <a href="#">
                    <span>SEO Optimization</span>
                  </a>
                </div>
                <a href="/blogdetails"><h3>Basic Guidline Layout for SEO Bigenner Level</h3></a>
               
                <a className="read-btn" href="/blogdetails">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/2.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-tag">
                  <a href="#">
                    <span>Marketing</span>
                  </a>
                </div>
                <a href="/blogdetails"><h3>How to Become Most Skilled Person in Social Marketing</h3></a>
             
                <a className="read-btn" href="/blogdetails">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/3.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-tag">
                  <a href="#">
                    <span>Data Research</span>
                  </a>
                </div>
                <a href="/blogdetails"><h3>Basic Guidline Layout for Data Research</h3></a>
              
                <a className="read-btn" href="/blogdetails">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/5.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-tag">
                  <a href="#">
                    <span>Development</span>
                  </a>
                </div>
                <a href="/blogdetails"><h3>Basic Guidline Layout for Web Development</h3></a>
                
                 <a className="read-btn" href="/blogdetails">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/4.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-tag">
                  <a href="#">
                    <span>Data Analysis</span>
                  </a>
                </div>
                <a href="/blogdetails"><h3>How to Become Most Skilled Person in Data Analysis</h3></a>
              
                <a className="read-btn" href="/blogdetails">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <a href="blog-details.html">
                  <img src="assets/img/blog/6.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="blog-content">
                <div className="blog-tag">
                  <a href="#">
                    <span>Development</span>
                  </a>
                </div>
                <a href="/blogdetails"><h3>Basic Guidline Layout for App Development</h3></a>
               
                <a className="read-btn" href="/blogdetails">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="pagination-area">
              <nav aria-label="Page navigation example text-center">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link page-links" href="#">
                      <i className="bx bx-chevrons-left" />
                    </a>
                  </li>
                  <li className="page-item current">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="bx bx-chevrons-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  )
}
