import React from 'react'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <style >{`
        .main-nav{
          background:#fff;
        }
      `}</style>
  <div className="inner-banner inner-bg7">
    <div className="container">
      <div className="inner-title text-center">
        <h1>Portfolio</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <i className="bx bxs-chevrons-right" />
          </li>
          <li>Portfolio</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="portfolio-area pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <span>Our Portfolio</span>
        <h2>We Have Done Business with Thousand of Comapnies</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="row pt-45">
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <a href="portfolio.html">
                <img src="assets/img/portfolio/1.jpg" alt="Portfolio Images" />
              </a>
              <div className="portfolio-tag">
                <a href="#">
                  <span>Marketing</span>
                </a>
              </div>
              <div className="portfolio-content">
                <a href="portfolio.html">
                  <h3>Social Marketing</h3>
                </a>
                <i className="bx bxs-chevron-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <a href="portfolio.html">
                <img src="assets/img/portfolio/2.jpg" alt="Portfolio Images" />
              </a>
              <div className="portfolio-tag">
                <a href="#">
                  <span>Research</span>
                </a>
              </div>
              <div className="portfolio-content">
                <a href="portfolio.html">
                  <h3>Data Analysis</h3>
                </a>
                <i className="bx bxs-chevron-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <a href="portfolio.html">
                <img src="assets/img/portfolio/3.jpg" alt="Portfolio Images" />
              </a>
              <div className="portfolio-tag">
                <a href="#">
                  <span>Optimizing</span>
                </a>
              </div>
              <div className="portfolio-content">
                <a href="portfolio.html">
                  <h3>SEO Optimization</h3>
                </a>
                <i className="bx bxs-chevron-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <a href="portfolio.html">
                <img src="assets/img/portfolio/4.jpg" alt="Portfolio Images" />
              </a>
              <div className="portfolio-tag">
                <a href="#">
                  <span>Marketing</span>
                </a>
              </div>
              <div className="portfolio-content">
                <a href="portfolio.html">
                  <h3>Content Marketing</h3>
                </a>
                <i className="bx bxs-chevron-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <a href="portfolio.html">
                <img src="assets/img/portfolio/5.jpg" alt="Portfolio Images" />
              </a>
              <div className="portfolio-tag">
                <a href="#">
                  <span>Development</span>
                </a>
              </div>
              <div className="portfolio-content">
                <a href="portfolio.html">
                  <h3>App Development</h3>
                </a>
                <i className="bx bxs-chevron-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <a href="portfolio.html">
                <img src="assets/img/portfolio/6.jpg" alt="Portfolio Images" />
              </a>
              <div className="portfolio-tag">
                <a href="#">
                  <span>Development</span>
                </a>
              </div>
              <div className="portfolio-content">
                <a href="portfolio.html">
                  <h3>Web Development</h3>
                </a>
                <i className="bx bxs-chevron-right" />
              </div>
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
  </section>
</div>

  )
}
