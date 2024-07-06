import React from 'react'

export default function About() {
  return (
    
    <div className='about' >
      <style >{`
        .main-nav{
          background:#fff;
        }
      `}</style>
    
  <div className="inner-banner inner-bg1">
    <div className="container">
      <div className="inner-title text-center">
        <h1>About Us</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <i className="bx bxs-chevrons-right" />
          </li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="about-area about-max pt-100 pb-70">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-lg-5 col-xxl-6">
          <div className="about-img about-ml">
            <img src="assets/img/about/3.jpg" alt="About Images" />
          </div>
        </div>
        <div className="col-lg-7 col-xxl-6">
          <div className="about-content about-width">
            <span>About Us</span>
            <h2>We Are Helping People to Reach Their Customer Since 2005</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <p>
              As opposed to using 'Content here, content here', making it look
              like readable English. Many desktop publishing packages and web
              page editors now use Lorem Ipsum as their default model text, and
              a search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years.
            </p>
            <div className="about-btn">
              <a href="#" className="default-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>

  )
}

