import React from 'react'

export default function Blogdetails() {
  return (
    <div className='blogdetails'>
      <style >{`
        .main-nav{
          background:#fff;
        }
      `}</style>
   
    <div className="inner-banner inner-bg5">
      <div className="container">
        <div className="inner-title text-center">
          <h3>Blog Details</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <i className="bx bxs-chevrons-right" />
            </li>
            <li>Blog Details</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="blog-dtls ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-dtls-content">
              <div className="blog-dtls-img">
                <img src="assets/img/blog/blog-dtls.jpg" alt="Blog Images" />
              </div>
              <div className="blog-text">
                <h2>Basic Guidline About Web Development</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of Lorem
                  Ipsum, you need to be sure there isn't anything embarrassing
                  hidden in the middle of text. All the Lorem Ipsum generators on
                  the Internet tend to repeat predefined chunks as necessary,
                  making this the first true generator on the Internet.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look
                </p>
                <blockquote className="boxicon-quote">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus aliquid praesentium eveniet illum asperiores,
                    quidem, ipsum voluptatum numquam ducimus nisi exercitationem
                    dolorum facilis Repellendus aliquid praesentium eveniet illum
                    asperiores.
                  </p>
                </blockquote>
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of Lorem
                  Ipsum.
                </p>
              </div>
              <div className="row bolg-gallery">
                <div className="bolg-gallery-item">
                  <img src="assets/img/blog/5.jpg" alt="Blog Images" />
                </div>
                <div className="bolg-gallery-item">
                  <img src="assets/img/blog/4.jpg" alt="Blog Images" />
                </div>
                <div className="bolg-gallery-item">
                  <img src="assets/img/blog/6.jpg" alt="Blog Images" />
                </div>
              </div>
              <h3>Top 10 Tripes for Social Marketing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vitae commodo justo. In vulputate arcu imperdiet arcu molestie
                ultrices ac nec tortor. Sed euismod placerat justo, eget suscipit
                ex accumsan non. Curabitur id faucibus urna, eu tincidunt diam.
                Nulla malesuada nibh ligula. Cras semper tristique dolor, vitae
                ultricies massa eleifend sit amet. Proin id eros nisi.
              </p>
              <p>
                Fusce tristique leo magna, nec bibendum lacus sollicitudin in.
                Suspendisse augue est, dignissim vel elementum ut, vestibulum eget
                dui. Sed purus odio, congue sed mi non, viverra commodo magna.
                Donec at placerat erat. Maecenas vel odio eget urna viverra
                gravida. Vestibulum risus neque, imperdiet in felis eget, pretium
                vestibulum nisl. Maecenas ultrices, ipsum eleifend pellentesque
                pellentesque, velit massa sodales eros, eu faucibus risus justo
                non est. Aenean non pellentesque ipsum. Mauris varius maximus
                euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="article-footer">
                <div className="article-tags">
                  <span>
                    <i className="bx bx-share-alt" />
                  </span>
                  <a href="#">Share</a>
                </div>
                <div className="article-share">
                  <ul className="social">
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
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="post-navigation">
                <div className="navigation-links">
                  <div className="nav-previous">
                    <a href="#">Prev Post</a>
                  </div>
                  <div className="nav-next">
                    <a href="#">Next Post</a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
