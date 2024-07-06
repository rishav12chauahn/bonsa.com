import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq'>
      <style>{`
        .main-nav {
          background: #fff;
        }
      `}</style>

      <div className='inner-banner inner-bg4'>
        <div className='container'>
          <div className='inner-title text-center'>
            <h3>FAQ</h3>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <i className='bx bxs-chevrons-right' />
              </li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='faq-area-bg pt-100 pb-70'>
        <div className='container'>
          <div className='section-title text-center'>
            <span>FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className='row align-items-center pt-45'>
            <div className='col-lg-6'>
              <div className='faq-accordion faq-accordion-width'>
                <ul className='accordion'>
                  <li className='accordion-item'>
                    <a
                      className={`accordion-title ${
                        activeIndex === 0 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => toggleAccordion(0)}
                    >
                      <i className='bx bx-chevron-down' />
                      How Can a Beginner Start SEO?
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 0 ? 'show' : ''
                      }`}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className='accordion-item'>
                    <a
                      className={`accordion-title ${
                        activeIndex === 1 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => toggleAccordion(1)}
                    >
                      <i className='bx bx-chevron-down' />
                      How Can I SEO My Website?
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 1 ? 'show' : ''
                      }`}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className='accordion-item'>
                    <a
                      className={`accordion-title ${
                        activeIndex === 2 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => toggleAccordion(2)}
                    >
                      <i className='bx bx-chevron-down' />
                      Top 10 SEO Ranking Factors?
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 2 ? 'show' : ''
                      }`}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className='accordion-item'>
                    <a
                      className={`accordion-title ${
                        activeIndex === 3 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => toggleAccordion(3)}
                    >
                      <i className='bx bx-chevron-down' />
                      How Can a Beginner Start Marketing?
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 3 ? 'show' : ''
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
            <div className='col-lg-6'>
              <div className='faq-accordion faq-accordion-width'>
                <ul className='accordion'>
                  <li className='accordion-item'>
                    <a
                      className={`accordion-title ${
                        activeIndex === 4 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => toggleAccordion(4)}
                    >
                      <i className='bx bx-chevron-down' />
                      What is Web Development?
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 4 ? 'show' : ''
                      }`}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className='accordion-item'>
                    <a
                      className={`accordion-title ${
                        activeIndex === 5 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => toggleAccordion(5)}
                    >
                      <i className='bx bx-chevron-down' />
                      How Can a Beginner Start Web Development?
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 5 ? 'show' : ''
                      }`}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className='accordion-item'>
                    <a
                      className={`accordion-title ${
                        activeIndex === 6 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => toggleAccordion(6)}
                    >
                      <i className='bx bx-chevron-down' />
                      What is App Development?
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 6 ? 'show' : ''
                      }`}
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                  <li className='accordion-item'>
                    <a
                      className={`accordion-title ${
                        activeIndex === 7 ? 'active' : ''
                      }`}
                      href='javascript:void(0)'
                      onClick={() => toggleAccordion(7)}
                    >
                      <i className='bx bx-chevron-down' />
                      How Can a Beginner Start App Development?
                    </a>
                    <div
                      className={`accordion-content ${
                        activeIndex === 7 ? 'show' : ''
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
      <section className='contact-section ptb-100'>
        <div className='container'>
          <div className='section-title text-center'>
            <span>FAQ</span>
            <h2>Ask Any Questions</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className='contact-wrap pt-45'>
            <div className='contact-wrap-form'>
              <form id='contactForm'>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className='form-control'
                        required=''
                        data-error='Please enter your name'
                        placeholder='Your Name'
                      />
                      <div className='help-block with-errors' />
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='form-control'
                        required=''
                        data-error='Please enter your email'
                        placeholder='Your Email'
                      />
                      <div className='help-block with-errors' />
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='phone_number'
                        id='phone_number'
                        required=''
                        data-error='Please enter your number'
                        className='form-control'
                        placeholder='Your Phone'
                      />
                      <div className='help-block with-errors' />
                    </div>
                  </div>
                  <div className='col-lg-6 col-sm-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='msg_subject'
                        id='msg_subject'
                        className='form-control'
                        required=''
                        data-error='Please enter your subject'
                        placeholder='Your Subject'
                      />
                      <div className='help-block with-errors' />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <textarea
                        name='message'
                        className='form-control'
                        id='message'
                        cols={30}
                        rows={8}
                        required=''
                        data-error='Write your message'
                        placeholder='Your Message'
                        defaultValue={''}
                      />
                      <div className='help-block with-errors' />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12 text-center'>
                    <button
                      type='submit'
                      className='default-btn page-btn text-center'
                    >
                      Send Message
                    </button>
                    <div id='msgSubmit' className='h3 text-center hidden' />
                    <div className='clearfix' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className='submission-area ptb-100'>
        <div className='container'>
          <div className='submission-title'>
            <h2>Know Your Website Ranking</h2>
          </div>
          <form className='submission-form'>
            <div className='row'>
              <div className='col-lg-5 col-md-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='website'
                    placeholder='Your website'
                  />
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='form-group border-line'>
                  <input
                    type='text'
                    className='form-control'
                    id='email'
                    placeholder='Email'
                  />
                </div>
              </div>
              <div className='col-lg-3 col-md-3 offset-md-5 offset-lg-0'>
                <button type='submit' className='default-btn'>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Faq;
