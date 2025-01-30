import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Frame } from '../../components/Frame/Frame';
import { Navbar } from '../../components/Navbar/Navbar';
import './style.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='div-2'>
        <Footer
          className='footer-instance'
          logo='https://c.animaapp.com/rGNOLBUh/img/logo-2.svg'
          socialMediaIcon='https://c.animaapp.com/rGNOLBUh/img/social-media-icon-1@2x.png'
          text='Copyright 2022, Finsweet.com'
        />
        <div className='blog'>
          <div className='text-wrapper-20'>Our blog</div>

          <div className='blog-card'>
            <button className='readmore-button'>
              <div className='text-wrapper-21'>Read More</div>

              <img
                className='arrow'
                alt='Arrow'
                src='https://c.animaapp.com/rGNOLBUh/img/arrow-1-4.svg'
              />
            </button>

            <p className='p'>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>

            <p className='text-wrapper-22'>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </p>

            <div className='text-wrapper-23'>19 Jan 2022</div>

            <img
              className='https-www-pexels-com'
              alt='Https www pexels com'
              src='https://c.animaapp.com/rGNOLBUh/img/https---www-pexels-com-photo-arabic-businessman-standing-on-stre@2x.png'
            />
          </div>

          <div className='blog-card-2'>
            <button className='readmore-button-2'>
              <div className='text-wrapper-24'>Read More</div>

              <img
                className='arrow-2'
                alt='Arrow'
                src='https://c.animaapp.com/rGNOLBUh/img/arrow-1-4.svg'
              />
            </button>

            <p className='text-wrapper-25'>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>

            <p className='text-wrapper-26'>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </p>

            <div className='text-wrapper-27'>19 Jan 2022</div>

            <img
              className='https-www-pexels-com-2'
              alt='Https www pexels com'
              src='https://c.animaapp.com/rGNOLBUh/img/https---www-pexels-com-photo-woman-in-white-sleeveless-shirt-usi@2x.png'
            />
          </div>

          <div className='blog-card-3'>
            <button className='readmore-button'>
              <div className='text-wrapper-21'>Read More</div>

              <img
                className='arrow'
                alt='Arrow'
                src='https://c.animaapp.com/rGNOLBUh/img/arrow-1-4.svg'
              />
            </button>

            <p className='p'>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>

            <p className='text-wrapper-22'>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </p>

            <div className='text-wrapper-23'>19 Jan 2022</div>

            <img
              className='https-www-pexels-com'
              alt='Https www pexels com'
              src='https://c.animaapp.com/rGNOLBUh/img/https---www-pexels-com-photo-apple-monitors-326518-@2x.png'
            />
          </div>
        </div>

        <div className='contact-form'>
          <div className='overlap-2'>
            <div className='start-convert'>
              <div className='overlap-group-3'>
                <img
                  className='https-www-pexels-com-3'
                  alt='Https www pexels com'
                  src='https://c.animaapp.com/rGNOLBUh/img/https---www-pexels-com-photo-woman-writing-on-paper-3228878-.png'
                />

                <div className='background' />

                <div className='heading'>
                  <p className='text-wrapper-28'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim.
                  </p>

                  <p className='text-wrapper-29'>
                    Building stellar websites for early startups
                  </p>
                </div>
              </div>
            </div>

            <div className='form'>
              <div className='overlap-3'>
                <div className='link'>
                  <div className='overlap-group-4'>
                    <p className='text-wrapper-30'>Get in touch with us</p>

                    <img
                      className='arrow-3'
                      alt='Arrow'
                      src='https://c.animaapp.com/rGNOLBUh/img/arrow-1-5.svg'
                    />
                  </div>
                </div>

                <Frame className='frame-3' text='Send an Inquiry' />
                <div className='text-wrapper-31'>Send inquiry</div>

                <p className='text-wrapper-32'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>

                <div className='place-holder'>
                  <div className='overlap-4'>
                    <div className='rectangle' />

                    <div className='rectangle-2' />

                    <div className='rectangle-3' />

                    <div className='group'>
                      <div className='text-wrapper-33'>Your Name</div>

                      <div className='text-wrapper-34'>Email</div>

                      <p className='text-wrapper-35'>
                        Paste your Figma design URL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='FAQ'>
          <div className='question'>
            <div className='qn'>
              <img
                className='img-2'
                alt='Img'
                src='https://c.animaapp.com/rGNOLBUh/img/--3.svg'
              />

              <p className='text-wrapper-36'>
                What is your class naming convention?
              </p>

              <div className='text-wrapper-37'>05</div>
            </div>

            <img
              className='line'
              alt='Line'
              src='https://c.animaapp.com/rGNOLBUh/img/line-3.svg'
            />

            <div className='qn-2'>
              <img
                className='img-2'
                alt='Img'
                src='https://c.animaapp.com/rGNOLBUh/img/--3.svg'
              />

              <p className='text-wrapper-38'>
                I have a bigger project. Can you handle it?
              </p>

              <div className='text-wrapper-37'>04</div>
            </div>

            <img
              className='line-2'
              alt='Line'
              src='https://c.animaapp.com/rGNOLBUh/img/line-3.svg'
            />

            <div className='qn-3'>
              <img
                className='img-3'
                alt='Img'
                src='https://c.animaapp.com/rGNOLBUh/img/--3.svg'
              />

              <div className='text-wrapper-39'>How do you communicate?</div>

              <div className='text-wrapper-37'>03</div>
            </div>

            <img
              className='line-3'
              alt='Line'
              src='https://c.animaapp.com/rGNOLBUh/img/line-3.svg'
            />

            <div className='qn-4'>
              <img
                className='img-3'
                alt='Img'
                src='https://c.animaapp.com/rGNOLBUh/img/--3.svg'
              />

              <p className='text-wrapper-38'>
                What is your class naming convention?
              </p>

              <div className='text-wrapper-37'>02</div>
            </div>

            <img
              className='line-4'
              alt='Line'
              src='https://c.animaapp.com/rGNOLBUh/img/line-3.svg'
            />

            <div className='qn-expand'>
              <p className='text-wrapper-40'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <img
                className='img-4'
                alt='Img'
                src='https://c.animaapp.com/rGNOLBUh/img/--4.svg'
              />

              <p className='text-wrapper-38'>How much time does it take?</p>

              <div className='text-wrapper-37'>01</div>
            </div>
          </div>

          <div className='faq-heading'>
            <div className='text-wrapper-41'>Frequently asked questions</div>

            <p className='text-wrapper-42'>Contact us for more info</p>
          </div>
        </div>

        <div className='overlap-5'>
          <div className='div-3'>
            <img
              className='illustration'
              alt='Illustration'
              src='https://c.animaapp.com/rGNOLBUh/img/illustration.png'
            />

            <div className='hero-text'>
              <div className='text-button'>
                <div className='text-wrapper-43'>View Pricing</div>

                <img
                  className='arrow-4'
                  alt='Arrow'
                  src='https://c.animaapp.com/rGNOLBUh/img/arrow-1-3.svg'
                />
              </div>

              <button className='button-2'>
                <div className='text-wrapper-44'>View our work</div>
              </button>

              <div className='headline-body'>
                <p className='text-wrapper-45'>
                  Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
                  ultricies nec dolor sit amet, scelerisque cursus purus.
                </p>

                <p className='text-wrapper-46'>
                  Building stellar websites for early startups
                </p>
              </div>
            </div>
          </div>

          <div className='div-3'>
            <img
              className='illustration-2'
              alt='Illustration'
              src='https://c.animaapp.com/rGNOLBUh/img/illustration-1.svg'
            />

            <div className='hero-text-2'>
              <div className='text-button-2'>
                <div className='text-wrapper-47'>View Pricing</div>

                <img
                  className='arrow-5'
                  alt='Arrow'
                  src='https://c.animaapp.com/rGNOLBUh/img/arrow-1-5.svg'
                />
              </div>

              <button className='button-3'>
                <div className='text-wrapper-48'>View our work</div>
              </button>

              <div className='headline-body-2'>
                <p className='text-wrapper-49'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>

                <p className='text-wrapper-46'>
                  Building stellar websites for early startups
                </p>
              </div>
            </div>
          </div>

          <Navbar
            className='navbar-instance'
            logo='https://c.animaapp.com/rGNOLBUh/img/logo-3.svg'
          />
        </div>

        <div className='testimonials'>
          <div className='overlap-6'>
            <div className='background-2' />

            <div className='heading-2'>
              <p className='text-wrapper-50'>What our clients say about us</p>

              <p className='text-wrapper-51'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
            </div>

            <div className='content-2'>
              <p className='the-best-agency-we'>
                &#34;The best agency we’ve worked with so far. They understand
                our product and are able to add new features with a great
                focus.&#34;
              </p>

              <div className='profile'>
                <img
                  className='mask-group'
                  alt='Mask group'
                  src='https://c.animaapp.com/rGNOLBUh/img/mask-group@2x.png'
                />

                <div className='overlap-group-5'>
                  <div className='name'>Jenny Wilson</div>

                  <div className='designation'>Vice President</div>
                </div>
              </div>

              <div className='arrows'>
                <div className='img-wrapper'>
                  <img
                    className='img-5'
                    alt='Img'
                    src='https://c.animaapp.com/rGNOLBUh/img/--5.svg'
                  />
                </div>

                <div className='arrow-6'>
                  <img
                    className='img-6'
                    alt='Img'
                    src='https://c.animaapp.com/rGNOLBUh/img/--6.svg'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='features'>
          <div className='card'>
            <div className='overlap-group-6'>
              <div className='text-wrapper-52'>Template Customization</div>

              <p className='text-wrapper-53'>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>

              <img
                className='icon'
                alt='Icon'
                src='https://c.animaapp.com/rGNOLBUh/img/icon.svg'
              />
            </div>
          </div>

          <div className='overlap-wrapper'>
            <div className='overlap-7'>
              <p className='text-wrapper-54'>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>

              <div className='text-wrapper-52'>Uses Client First</div>

              <img
                className='icon-2'
                alt='Icon'
                src='https://c.animaapp.com/rGNOLBUh/img/icon-1@2x.png'
              />
            </div>
          </div>

          <div className='overlap-group-wrapper'>
            <div className='overlap-8'>
              <div className='text-wrapper-52'>Two Free Revision Round</div>

              <p className='text-wrapper-53'>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>

              <img
                className='icon-3'
                alt='Icon'
                src='https://c.animaapp.com/rGNOLBUh/img/icon-2.svg'
              />
            </div>
          </div>

          <div className='card-2'>
            <div className='overlap-8'>
              <div className='text-wrapper-52'>Quick Delivery</div>

              <p className='text-wrapper-53'>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>

              <img
                className='icon'
                alt='Icon'
                src='https://c.animaapp.com/rGNOLBUh/img/icon-3.svg'
              />
            </div>
          </div>

          <div className='card-3'>
            <div className='overlap-group-6'>
              <div className='text-wrapper-52'>Hands-on approach</div>

              <p className='text-wrapper-53'>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>

              <img
                className='icon-4'
                alt='Icon'
                src='https://c.animaapp.com/rGNOLBUh/img/icon-4@2x.png'
              />
            </div>
          </div>

          <div className='card-4'>
            <div className='overlap-7'>
              <div className='text-wrapper-52'>24/7 Support</div>

              <p className='text-wrapper-54'>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
                aliquam sed mi.
              </p>

              <img
                className='icon'
                alt='Icon'
                src='https://c.animaapp.com/rGNOLBUh/img/icon-5.svg'
              />
            </div>
          </div>

          <div className='header'>
            <div className='text-wrapper-55'>Features</div>

            <p className='text-wrapper-56'>
              Design that solves problems, one product at a time
            </p>
          </div>
        </div>

        <div className='our-work'>
          <div className='content-wrapper'>
            <div className='content-3'>
              <div className='overlap-9'>
                <div className='link-2'>
                  <div className='overlap-group-7'>
                    <div className='text-wrapper-57'>Read Case Studies</div>

                    <img
                      className='arrow-7'
                      alt='Arrow'
                      src='https://c.animaapp.com/rGNOLBUh/img/arrow-2-3.svg'
                    />
                  </div>
                </div>

                <div className='rectangle-4' />

                <p className='text-wrapper-58'>
                  Workhub office Webflow Webflow Design
                </p>

                <p className='text-wrapper-59'>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam
                </p>

                <div className='link-3'>
                  <img
                    className='arrow-8'
                    alt='Arrow'
                    src='https://c.animaapp.com/rGNOLBUh/img/arrow-2-3.svg'
                  />

                  <div className='text-wrapper-60'>View project</div>
                </div>
              </div>
            </div>
          </div>

          <img
            className='card-5'
            alt='Card'
            src='https://c.animaapp.com/rGNOLBUh/img/card-1@2x.png'
          />

          <div className='hover-overlay'>
            <div className='overlap-group-8'>
              <div className='rectangle-5' />

              <div className='unisaas-website'>
                Unisaas Website <br />
                Design
              </div>

              <div className='link-4'>
                <div className='text-wrapper-60'>View portfolio</div>

                <img
                  className='arrow-9'
                  alt='Arrow'
                  src='https://c.animaapp.com/rGNOLBUh/img/arrow-2-3.svg'
                />
              </div>
            </div>
          </div>

          <div className='header-2'>
            <div className='text-wrapper-61'>View our projects</div>

            <button className='view-more-button'>
              <div className='text-wrapper-21'>View More</div>

              <img
                className='arrow'
                alt='Arrow'
                src='https://c.animaapp.com/rGNOLBUh/img/arrow-1-4.svg'
              />
            </button>
          </div>
        </div>

        <div className='this-is-how-it-work'>
          <div className='cards'>
            <div className='card-6'>
              <div className='content-4'>
                <p className='text-wrapper-62'>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>

                <div className='text-wrapper-63'>Strategy</div>

                <div className='pointer'>
                  <div className='overlap-group-9'>
                    <div className='text-wrapper-64'>01</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-7'>
              <div className='content-4'>
                <p className='text-wrapper-62'>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>

                <div className='text-wrapper-63'>Design</div>

                <div className='pointer'>
                  <div className='overlap-group-9'>
                    <div className='text-wrapper-64'>03</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-8'>
              <div className='content-4'>
                <p className='text-wrapper-62'>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>

                <div className='text-wrapper-63'>Wireframing</div>

                <div className='pointer'>
                  <div className='overlap-group-9'>
                    <div className='text-wrapper-64'>02</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-9'>
              <div className='content-4'>
                <p className='text-wrapper-62'>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                  aliquam .
                </p>

                <div className='text-wrapper-63'>Development</div>

                <div className='pointer'>
                  <div className='overlap-group-9'>
                    <div className='text-wrapper-64'>04</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='heading-3'>
            <div className='learn-more'>
              <div className='overlap-group-4'>
                <p className='text-wrapper-65'>Get in touch with us</p>

                <img
                  className='arrow-3'
                  alt='Arrow'
                  src='https://c.animaapp.com/rGNOLBUh/img/arrow-2-4.svg'
                />
              </div>
            </div>

            <p className='text-wrapper-66'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <div className='text-wrapper-67'>How we work</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;