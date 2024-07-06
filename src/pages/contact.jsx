import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
      <style >{`
        .main-nav{
          background:#fff;
        }
      `}</style>
    <div className="inner-banner inner-bg6">
      <div className="container">
        <div className="inner-title text-center">
          <h1>Contact Us</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <i className="bx bxs-chevrons-right" />
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="contact-area pt-100 pb-70">
      <div className="container contact-width">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="contact-card">
              <i className="flaticon-call" />
              <ul>
                <li>
                  <a href="tel:+1123456789">+91 6396400221</a>
                </li>
                <li>
                  <a href="tel:+19876543210">+1 9876 543 210</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="contact-card">
              <i className="flaticon-paper-plane" />
              <ul>
                <li>
                  <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#cca5a2aaa38caea3a2bfade2afa3a1">
                    <span
                      className="__cf_email__"
                      data-cfemail="7d14131b123d1f12130e1c531e1210"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#1a727f7676755a787574697b34797577">
                    <span
                      className="__cf_email__"
                      data-cfemail="b9d1dcd5d5d6f9dbd6d7cad897dad6d4"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
            <div className="contact-card">
              <i className="flaticon-pin" />
              <ul>
                <li>
                  Jail Chungi, 95/1 Janakpuri, Kila Rd, Meerut, Uttar Pradesh
                  250001
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="contact-section pb-100">
      <div className="container">
        <div className="section-title text-center">
          <span>Contact Us</span>
          <h2>Drop A Message For Any Query</h2>
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="contact-wrap pt-45">
          <div className="contact-wrap-form">
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required=""
                      data-error="Please enter your name"
                      placeholder="Your Name"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required=""
                      data-error="Please enter your email"
                      placeholder="Your Email"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      required=""
                      data-error="Please enter your number"
                      className="form-control"
                      placeholder="Your Phone"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      id="msg_subject"
                      className="form-control"
                      required=""
                      data-error="Please enter your subject"
                      placeholder="Your Subject"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      cols={30}
                      rows={8}
                      required=""
                      data-error="Write your message"
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 text-center">
                  <button
                    type="submit"
                    className="default-btn page-btn text-center"
                  >
                    Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden" />
                  <div className="clearfix" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div className="map-area">
      <div className="container-fluid p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.2405972871684!2d77.73167817423834!3d28.980240668208346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6ff1c8c3ff51%3A0xe2b8ee8e4532b6bf!2sW2S%20INFOTECH!5e0!3m2!1sen!2sin!4v1709722946564!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
  
  )
}
