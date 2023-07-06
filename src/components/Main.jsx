import React, { useEffect } from "react";
import Contact from "./Contact";
import OurService from "./OurService";
export default function Main() {
  let photos = [
    {
      type: "university",
      img: "./image/photos/image1.webp",
      name: "Application for university",
    },
    {
      type: "university",
      img: "./image/photos/image2.webp",
      name: "Pick up from Airport",
    },
    {
      type: "university",
      img: "./image/photos/image3.webp",
      name: "Book accomodation to live",
    },
    {
      type: "university",
      img: "./image/photos/image4.webp",
      name: "Pick up from Airport",
    },
  ];

  function press() {
    window.location.reload();
  }
  useEffect(() => {
    // function press() {
    // window.location.reload();
    // }
  }, []);

  return (
    <div>
      {/* <!-- =====================================
    	==== Start Header --> */}

      <header
        className="header valign bg-img"
        data-scroll-index="0"
        data-overlay-dark="7"
        data-background="./image/bg_main.webp"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="text-center caption mt-30">
            <h4>Unlock You</h4>
            <h1>Future with Consulting</h1>
            <div className="row">
              <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
                <p>
                  Discover the best study options with Study Bridge's expert
                  consulting. Achieve your academic goals today.
                </p>
              </div>
            </div>
            <a href="#0" className="butn butn-light mt-30">
              <span>Get Started</span>
            </a>
            {/* <div classNameName="btn btn-primary" onClick={press}>
              Salom
            </div> */}
          </div>
        </div>
      </header>

      {/* <!-- End Header ====
    	======================================= --> */}

      {/* <!-- =====================================
        ==== Start Hero --> */}

      <section className="hero" data-scroll-index="1">
        <div className="section-padding pos-re">
          <div className="container">
            <div className="row">
              <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 text-center mb-80">
                <h4 className="extra-title">
                  About <span>Us</span>
                </h4>
                <p>
                  Study Bridge is a study consulting firm based in Riga. We
                  provide comprehensive services to students seeking higher
                  education opportunities.
                </p>
              </div>

              <div className="feat-item mb-md50 col-lg-4">
                <div className="text-center">
                  <span className="icon icon-basic-anchor"></span>
                  <h5>Academic Program Evaluation</h5>
                  {/* <h6>Modern & Clean Design</h6> */}
                  <p>
                    Get an unbiased assessment of your courses and strengthen
                    your program's quality
                  </p>
                </div>
              </div>

              <div className="feat-item active mb-md50 col-lg-4">
                <div className="text-center">
                  <span className="icon icon-basic-pencil-ruler"></span>
                  <h5>Study Abroad Planning</h5>
                  {/* <h6>Web & Mobile Development</h6> */}
                  <p>
                    Navigate visa procedures and plan your study abroad
                    experience with ease and confidence.
                  </p>
                </div>
              </div>

              <div className="feat-item col-lg-4">
                <div className="text-center">
                  <span className="icon icon-basic-cards-diamonds"></span>
                  <h5>Career Counseling</h5>
                  {/* <h6>Logo & Motion Design</h6> */}
                  <p>
                    Discover your strengths and interests, and receive guidance
                    on career paths that align with your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="curve curve-gray-b curve-bottom"></div>
        </div>

        <div className="tabs-section section-padding bg-gray">
          <div className="container">
            <div className="row">
              <ul
                className="col-md-12 nav nav-pills tabs"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item one active">
                  <a
                    className="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#tab1"
                    role="tab"
                    aria-controls="tab1"
                    aria-selected="true"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item two">
                  <a
                    className="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#tab2"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                  >
                    Our Mission
                  </a>
                </li>
                <li className="nav-item three">
                  <a
                    className="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#tab3"
                    role="tab"
                    aria-controls="tab3"
                    aria-selected="false"
                  >
                    Why Us?
                  </a>
                </li>
              </ul>

              <div className="tab-content col-lg-12" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="tab1"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="left col-lg-6">
                      <div className="about box-white">
                        <h5 className="title">About Us</h5>
                        {/* <h6 className="sub-title">We dd Are A Creative Agency</h6> */}
                        <p>
                          Our consulting abroad included additional services
                          such as accommodation assistance, airport pick-up,
                          arranging language courses, and ongoing support during
                          the student's stay abroad.
                        </p>

                        {/* <!-- Skills --> */}

                        <div className="skills mt-40">
                          <div className="skill-item mb-30">
                            <h6>Educational Planning and Guidance</h6>
                            <div className="skill-progress">
                              <div className="progres" data-value="90%"></div>
                            </div>
                          </div>
                          <div className="skill-item mb-30">
                            <h6>Visa and Immigration Assistance</h6>
                            <div className="skill-progress">
                              <div className="progres" data-value="95%"></div>
                            </div>
                          </div>
                          <div className="skill-item">
                            <h6>Cultural and Transition Support:</h6>
                            <div className="skill-progress">
                              <div className="progres" data-value="100%"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 image">
                      <div className="img">
                        <img src="img/2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab2"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="left col-lg-6">
                      <div className="mission box-white">
                        <h5 className="title">Our Mission</h5>
                        <h6 className="sub-title">
                          To empower students and help them achieve their
                          academic goals with confidence.
                        </h6>
                        <p className="mb-10 d-none">
                          <b>We’re full service which means</b> we’ve got you
                          covered on design and content right through to
                          digital. You’ll form a lasting relationship with us,{" "}
                          <b>collaboration is central to</b> everything we do.{" "}
                          <b>We’ll push you out of</b> your comfort zone from
                          time, but this is where you’ll shine. Bottom line is
                          we want you to succeed at Faculty.
                        </p>
                        <p>
                          Our mission is to inspire and empower students to
                          reach their full potential through personalized study
                          consulting. We strive to equip students with the
                          necessary skills, strategies, and resources to excel
                          academically, develop a love for learning, and become
                          lifelong learners. By fostering a supportive and
                          nurturing environment, we aim to instill confidence,
                          resilience, and a growth mindset in every student we
                          serve. Our commitment is to facilitate academic
                          success while nurturing their intellectual curiosity,
                          critical thinking abilities, and personal development.
                          We are dedicated to empowering students with the tools
                          they need to thrive academically, unlocking their
                          potential to create a brighter future.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 image">
                      <div className="img">
                        <img src="img/3.jpg" alt="" />
                        <a className="vid" href="https://vimeo.com/127203262">
                          <span className="vid-butn">
                            <i className="fas fa-play-circle"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab3"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div className="row">
                    <div className="left col-lg-6">
                      <div className="why-us box-white">
                        <h5 className="title">Why Choose Us?</h5>
                        <h6 className="sub-title">We help very closely</h6>
                        <p>
                          We help you choosing the right destination,
                          universities or colleges, and academic programs that
                          align with the student's interests, goals, and budget.
                          Also it included additional services such as
                          accommodation assistance, airport pick-up, arranging
                          language courses, and ongoing support during the
                          student's stay abroad.
                        </p>
                        <ul className="feat mt-30 row">
                          <li className="col-sm-4">
                            <span className="icon icon-basic-display"></span>
                            <h6>Perfect Planning</h6>
                          </li>
                          <li className="col-sm-4">
                            <span className="icon icon-basic-picture-multiple"></span>
                            <h6>Airport and Transport</h6>
                          </li>
                          <li className="col-sm-4">
                            <span className="icon icon-basic-headset"></span>
                            <h6>Friendly Support</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 image">
                      <div className="img owl-carousel owl-theme carousel-single">
                        <img src="./image/pick-up.webp" alt="" />
                        <img src="img/5.jpg" alt="" />
                        <img src="./image/image2.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Hero ====
        ======================================= --> */}

      {/* <!-- =====================================
        ==== Start Process --> */}

      <div
        className="process section-padding bg-img bg-fixed pos-re text-center"
        data-overlay-dark="7"
        data-background="img/bg6.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                <span>STUDENT'S </span> PATH
              </h4>
              <p>
                We provide practical assistance in this process, from choosing a
                university to obtaining a visa in Europe
              </p>
            </div>
            <div className="full-width clearfix"></div>

            <div className="col-lg-3 col-md-6">
              <div className="item first mb-md50">
                <img src="img/arrow.png" className="tobotm" alt="" />
                <span className="icon icon-basic-lightbulb"></span>
                <div className="cont">
                  <h3>01</h3>
                  <h6>SELECTION OF A SUITABLE UNIVERSITY</h6>
                  <p>
                    To learn more about your needs—who you want to study for and
                    when you want to enroll—we get in touch with you by phone or
                    telegram.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item odd mb-md50">
                <img src="img/arrow.png" alt="" />
                <span className="icon icon-basic-book-pencil"></span>
                <div className="cont">
                  <h3>02</h3>
                  <h6>EXAMINATIONS</h6>
                  <p>
                    If there are entrance exams in the programme you have
                    chosen, you will be assigned a date for those exams. We will
                    prepare you for this day.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item mb-sm50">
                <img src="img/arrow.png" className="tobotm" alt="" />
                <span className="icon icon-basic-pencil-ruler"></span>
                <div className="cont">
                  <h3>03</h3>
                  <h6>CONCLUSION OF THE CONTRACT</h6>
                  <p>
                    You will receive a contract from the university, which you
                    will sign and pay the tuition fee. We will help you process
                    all the documents.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="item odd">
                <span className="icon icon-basic-server-upload"></span>
                <div className="cont">
                  <h3>04</h3>
                  <h6>VISA AND ARRIVAL IN THE COUNTRY</h6>
                  <p>
                    You purchase a ticket, obtain a visa, and move to Europe. We
                    meet you at the airport and help you while you adapt into a
                    new location. Then we'll help to get Shengen visa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="curve curve-gray-t curve-top"></div>
        <div className="curve curve-bottom"></div>
      </div>

      {/* <!-- End Process ====
        ======================================= --> */}

      {/* <!-- =====================================
        ==== Start Works --> */}

      <section className="works section-padding" data-scroll-index="2">
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                <span></span> Our service
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            {/* <!-- filter links --> */}
            <div className="filtering text-center mb-30 col-sm-12">
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".brand">Brand</span>
                <span data-filter=".web">Design</span>
                <span data-filter=".graphic">Graphic</span>
              </div>
            </div>

            <div className="clearfix"></div>

            {/* <!-- gallery --> */}
            <div className="gallery full-width">
              {/* <!-- gallery item --> */}
              {photos.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6 items graphic">
                  <div className="item-img">
                    <img src={item.img} alt="image" />
                    <div className="item-img-overlay">
                      <div className="overlay-info full-width">
                        {/* <p>Logo | Branding</p> */}
                        <h6>{item.name}</h6>
                        <a href={item.img} className="popimg">
                          <span className="icon">
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items web">
                <div className="item-img">
                  <img src="img/portfolio/2.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a href="img/portfolio/2.jpg" className="popimg">
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items brand">
                <div className="item-img">
                  <img src="img/portfolio/3.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a href="img/portfolio/3.jpg" className="popimg">
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items graphic">
                <div className="item-img">
                  <img src="img/portfolio/4.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a href="img/portfolio/4.jpg" className="popimg">
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items web">
                <div className="item-img">
                  <img src="img/portfolio/5.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a href="img/portfolio/5.jpg" className="popimg">
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items brand">
                <div className="item-img">
                  <img src="img/portfolio/6.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a href="img/portfolio/6.jpg" className="popimg">
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items brand">
                <div className="item-img">
                  <img src="img/portfolio/7.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a href="img/portfolio/7.jpg" className="popimg">
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- gallery item --> */}
              <div className="col-lg-3 col-md-6 items graphic">
                <div className="item-img">
                  <img src="img/portfolio/8.jpg" alt="image" />
                  <div className="item-img-overlay">
                    <div className="overlay-info full-width">
                      <p>Logo | Branding</p>
                      <h6>Creative Web Design</h6>
                      <a href="img/portfolio/8.jpg" className="popimg">
                        <span className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Works ====
        ======================================= --> */}

      {/* <!-- =====================================
        ==== Start Why-us --> */}

      <div className="why-us section-padding bg-gray pos-re">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img mb-md50">
                <img src="img/1.jpg" alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content pt-10">
                <div className="item mb-40">
                  <span className="icon icon-basic-display"></span>
                  <div className="cont">
                    <h5>Fully Responsive</h5>
                    <p>
                      Nulla metus ullamcorper vel tincidunt sed euismod nibh
                      Quisque volutpat velit className aptent taciti sociosqu.
                    </p>
                  </div>
                </div>
                <div className="item mb-40">
                  <span className="icon icon-basic-bolt"></span>
                  <div className="cont">
                    <h5>Clean & Modern Design</h5>
                    <p>
                      Nulla metus ullamcorper vel tincidunt sed euismod nibh
                      Quisque volutpat velit className aptent taciti sociosqu.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <span className="icon icon-basic-headset"></span>
                  <div className="cont">
                    <h5>Friendly Support</h5>
                    <p>
                      Students and clients may have questions, concerns, or need
                      guidance, and friendly support ensures that they receive
                      prompt and personalized assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="curve curve-top"></div>
        <div className="curve curve-bottom"></div>
      </div>

      {/* <!-- End Why-us ====
        ======================================= --> */}

      {/* <!-- =====================================
        ==== Start Teams --> */}

      <section className="team section-padding d-none" data-scroll-index="3">
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                <span>Talent</span> Team
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>

            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="team-img">
                  <img src="img/team/1.jpg" alt="" />
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h6>Alex Smith</h6>
                  <span>Project Manager</span>
                </div>
              </div>

              <div className="item">
                <div className="team-img">
                  <img src="img/team/2.jpg" alt="" />
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h6>Alex Smith</h6>
                  <span>Project Manager</span>
                </div>
              </div>

              <div className="item">
                <div className="team-img">
                  <img src="img/team/3.jpg" alt="" />
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h6>Alex Smith</h6>
                  <span>Project Manager</span>
                </div>
              </div>

              <div className="item">
                <div className="team-img">
                  <img src="img/team/4.jpg" alt="" />
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h6>Alex Smith</h6>
                  <span>Project Manager</span>
                </div>
              </div>

              <div className="item">
                <div className="team-img">
                  <img src="img/team/3.jpg" alt="" />
                  <div className="social">
                    <a href="#0" className="icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0" className="icon">
                      <i className="fab fa-behance"></i>
                    </a>
                  </div>
                </div>
                <div className="info">
                  <h6>Alex Smith</h6>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Teams ====
        ======================================= --> */}

      {/* <!-- =====================================
        ==== Start Testimonials --> */}

      <section
        className="testimonials section-padding bg-img bg-fixed pos-re"
        data-overlay-dark="7"
        data-background="./image/bg4.webp"
      >
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                What's <span>Clients</span> Says?
              </h4>
              <p>
                The study consulting services provided by Study Bridge were
                exceptional! The team guided you through every step of the
                process, from interview preparation to visa support. Their
                personalized approach and expert knowledge made you feel
                confident and well-prepared.
              </p>
            </div>

            <div className="owl-carousel owl-theme text-center col-lg-10 offset-lg-1">
              <div className="item-box">
                <span className="quote">
                  <img src="img/quot.png" alt="" />
                </span>
                <p>
                  From the very beginning, your team displayed a high level of
                  professionalism. The consultants were knowledgeable,
                  approachable, and guided me through the entire process with
                  expertise.
                </p>
                <div className="info">
                  <div className="author-img">
                    <img src="img/clients/1.jpg" alt="" />
                  </div>
                  <div className="cont">
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <span className="quote">
                  <img src="img/quot.png" alt="" />
                </span>
                <p>
                  I greatly appreciated the wide range of services you offered.
                  Your team assisted me not only with interview preparation and
                  examination guidance but also with important aspects like
                  accommodation arrangements, visa support, and even airport
                  pick-up.
                </p>
                <div className="info">
                  <div className="author-img">
                    <img src="img/clients/2.jpg" alt="" />
                  </div>
                  <div className="cont">
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <span className="quote">
                  <img src="img/quot.png" alt="" />
                </span>
                <p>
                  What impressed me the most was the personalized approach your
                  consultants took in understanding my unique needs and goals.
                </p>
                <div className="info">
                  <div className="author-img">
                    <img src="img/clients/3.jpg" alt="" />
                  </div>
                  <div className="cont">
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <span className="quote">
                  <img src="img/quot.png" alt="" />
                </span>
                <p>
                  I am extremely satisfied with the study consulting services I
                  received from your company. The professionalism, comprehensive
                  support, personalized approach, timely assistance, expert
                  knowledge, and successful outcome all exceeded my
                  expectations.
                </p>
                <div className="info">
                  <div className="author-img">
                    <img src="img/clients/4.jpg" alt="" />
                  </div>
                  <div className="cont">
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <span className="quote">
                  <img src="img/quot.png" alt="" />
                </span>
                <p>
                  Throughout the process, your team was highly responsive and
                  efficient. Whether it was addressing my concerns via email or
                  scheduling consultations, I never had to wait long for a
                  response.
                </p>
                <div className="info">
                  <div className="author-img">
                    <img src="img/clients/4.jpg" alt="" />
                  </div>
                  <div className="cont">
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <span className="quote">
                  <img src="img/quot.png" alt="" />
                </span>
                <p>
                  Thanks to your support and guidance, I successfully navigated
                  the study abroad process and secured my desired opportunity. I
                  believe that your assistance played a significant role in my
                  success,
                </p>
                <div className="info">
                  <div className="author-img">
                    <img src="img/clients/4.jpg" alt="" />
                  </div>
                  <div className="cont">
                    <h6>Alex Smith</h6>
                    <span>Envato Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="curve curve-top"></div>
      </section>

      {/* <!-- End Testimonials ====
        ======================================= --> */}

      {/* <!-- =====================================
        ==== Start Price --> */}

      <section
        className="price section-padding bg-gray pos-re"
        data-scroll-index="4"
      >
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                Pricing <span>Table</span>
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>

            <div className="pricing-tables text-center full-width">
              <div className="row">
                <div className="col-lg-3 ">
                  <div className="item mb-md50">
                    <div className="type">
                      <h4>Free</h4>
                    </div>

                    <div className="value">
                      <h3>
                        <span>$</span>00
                      </h3>
                      <span className="per">/ Month</span>
                    </div>

                    <div className="features">
                      <ul>
                        <li>10 GB Disk Space</li>
                        <li>15 Domain Names</li>
                        <li>4 Email Address</li>
                        <li>Enhanced Security</li>
                        <li>Unlimited Support</li>
                      </ul>
                    </div>

                    <div className="order">
                      <a href="#0" className="butn butn-bg">
                        <span>Purchase Now</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="item mb-md50">
                    <div className="type">
                      <h4>Basic</h4>
                    </div>

                    <div className="value">
                      <h3>
                        <span>$</span>10
                      </h3>
                      <span className="per">/ Month</span>
                    </div>

                    <div className="features">
                      <ul>
                        <li>10 GB Disk Space</li>
                        <li>15 Domain Names</li>
                        <li>4 Email Address</li>
                        <li>Enhanced Security</li>
                        <li>Unlimited Support</li>
                      </ul>
                    </div>

                    <div className="order">
                      <a href="#0" className="butn butn-bg">
                        <span>Purchase Now</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="item active mb-md50">
                    <div className="type">
                      <h4>Standard</h4>
                    </div>

                    <div className="value">
                      <h3>
                        <span>$</span>30
                      </h3>
                      <span className="per">/ Month</span>
                    </div>

                    <div className="features">
                      <ul>
                        <li>100 GB Disk Space</li>
                        <li>30 Domain Names</li>
                        <li>5 Email Address</li>
                        <li>Enhanced Security</li>
                        <li>Unlimited Support</li>
                      </ul>
                    </div>

                    <div className="order">
                      <a href="#0" className="butn butn-light">
                        <span>Purchase Now</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="item">
                    <div className="type">
                      <h4>Premium</h4>
                    </div>

                    <div className="value">
                      <h3>
                        <span>$</span>80
                      </h3>
                      <span className="per">/ Month</span>
                    </div>

                    <div className="features">
                      <ul>
                        <li>500 GB Disk Space</li>
                        <li>100 Domain Names</li>
                        <li>10 Email Address</li>
                        <li>Enhanced Security</li>
                        <li>Unlimited Support</li>
                      </ul>
                    </div>

                    <div className="order">
                      <a href="#0" className="butn butn-bg">
                        <span>Purchase Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="curve curve-bottom"></div>
      </section>

      {/* <!-- End Price ====
        ======================================= --> */}

      {/* <!-- =====================================
        ==== Start Blog --> */}

      <section className="blog section-padding d-none" data-scroll-index="5">
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                <span>Latest</span> News
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="item mb-md50">
                <div className="post-img">
                  <div className="img">
                    <img src="img/blog/1.jpg" alt="" />
                  </div>
                </div>
                <div className="cont">
                  <div className="info">
                    <a href="#0">By : Admin</a>
                    <a href="#0">06 Aug 2017</a>
                    <a href="#0" className="tag">
                      WordPress
                    </a>
                  </div>
                  <h6>
                    <a href="#0">48 Best WordPress Themes</a>
                  </h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the dummy text ever
                  </p>
                  <a href="#0" className="more">
                    Read More <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item mb-md50">
                <div className="post-img">
                  <div className="img">
                    <img src="img/blog/2.jpg" alt="" />
                  </div>
                </div>
                <div className="cont">
                  <div className="info">
                    <a href="#0">By : Admin</a>
                    <a href="#0">06 Aug 2017</a>
                    <a href="#0" className="tag">
                      WordPress
                    </a>
                  </div>
                  <h6>
                    <a href="#0">48 Best WordPress Themes</a>
                  </h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the dummy text ever
                  </p>
                  <a href="#0" className="more">
                    Read More <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item">
                <div className="post-img">
                  <div className="img">
                    <img src="img/blog/3.jpg" alt="" />
                  </div>
                </div>
                <div className="cont">
                  <div className="info">
                    <a href="#0">By : Admin</a>
                    <a href="#0">06 Aug 2017</a>
                    <a href="#0" className="tag">
                      WordPress
                    </a>
                  </div>
                  <h6>
                    <a href="#0">48 Best WordPress Themes</a>
                  </h6>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the dummy text ever
                  </p>
                  <a href="#0" className="more">
                    Read More <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Blog ====
        ======================================= --> */}

      {/* <!-- =====================================
        ==== Start Call-Action --> */}

      <section
        className="call-action section-padding bg-img bg-fixed"
        data-overlay-dark="5"
        data-background="./image/want_bg.webp"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Want to study with us?</h2>
                <h5>Tell us about your education aim</h5>
                <a href="#0" className="butn butn-bg">
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Call-Action ====
        ======================================= --> */}

      {/* <!-- =====================================
        ==== Start Contact --> */}
      <iframe
        width="100%"
        height="470"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=684&amp;height=470&amp;hl=en&amp;q=%20Riga+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>

      <section className="contact section-padding" data-scroll-index="6">
        <div className="container">
          <div className="row">
            <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
              <h4>
                Get <span>In</span> Touch
              </h4>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="contact-info mb-md50">
                <h5>Contact Us :</h5>
                <p>
                  If you have any questions, leave them here and we will contact
                  with you soon.
                </p>
                <div className="item">
                  <span className="icon icon-basic-tablet"></span>
                  <div className="cont">
                    <h6>Phone : </h6>
                    <p>
                      <a href="tel:+37125774796" className="nav-link">
                        +371 257 74796
                      </a>{" "}
                      <br />
                      <a href="tel:+37127904543" className="nav-link">
                        +371 279 045 43
                      </a>
                    </p>
                  </div>
                </div>
                <div className="item">
                  <span className="icon icon-basic-mail-open-text"></span>
                  <div className="cont">
                    <h6>Email : </h6>
                    <p>Coco_support@website.com</p>
                  </div>
                </div>
                <div className="item">
                  <span className="icon icon-basic-geolocalize-05"></span>
                  <div className="cont">
                    <h6>Address : </h6>
                    <p>Dzirciema iela 74, Kurzemes rajons, Rīga, LV-1055</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Contact ====
        ======================================= --> */}
    </div>
  );
}
