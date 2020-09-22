import React from "react";
import "./App.css";
import Fade from "react-reveal/Fade";
function App() {
  return (
    <div className="App">
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start *****  */}
                <a href="/" className="logo">
                  Kreative Koder{" "}
                </a>
                {/* ***** Logo End *****  */}
                {/* <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li>
                    <a href="#welcome" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#features">About</a>
                  </li>
                  <li>
                    <a href="#work-process">Work Process</a>
                  </li>
                  <li>
                    <a href="#testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#pricing-plans">Pricing Tables</a>
                  </li>
                  <li>
                    <a href="#contact-us">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger" href="#menu">
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ***** Header Area End ***** --> */}

      {/* <!-- ***** Welcome Area Start ***** --> */}
      <div className="welcome-area" id="welcome">
        {/* <!-- ***** Header Text Start ***** --> */}
        <div className="header-text">
          <div className="container">
            <div className="row">
              <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                <h1>
                  We provide the best <strong>strategy</strong>
                  <br />
                  to grow up your <strong>business</strong>
                </h1>
                <p>A Team of Kreative Mind to help you grow your Business.</p>
                <a href="#features" className="main-button-slider">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
      </div>
      {/* <!-- ***** Welcome Area End ***** --> */}

      {/* <!-- ***** Features Small Start ***** --> */}
      <section className="section home-feature">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* <!-- ***** Features Small Item Start ***** --> */}
                <Fade bottom>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
                  >
                    <div className="features-small-item">
                      <div className="icon">
                        <i>
                          <img
                            src="assets/images/featured-item-01.png"
                            alt=""
                          />
                        </i>
                      </div>
                      <h5 className="features-title">Modern Strategy</h5>
                      <p>Using best approaches the help you succeed.</p>
                    </div>
                  </div>
                </Fade>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <Fade bottom>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s"
                  >
                    <div className="features-small-item">
                      <div className="icon">
                        <i>
                          <img
                            src="assets/images/featured-item-01.png"
                            alt=""
                          />
                        </i>
                      </div>
                      <h5 className="features-title">Best Relationship</h5>
                      <p>
                        Contact us immediately if you have a question in mind.
                      </p>
                    </div>
                  </div>
                </Fade>
                {/* <!-- ***** Features Small Item End ***** --> */}

                {/* <!-- ***** Features Small Item Start ***** --> */}
                <Fade bottom>
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s"
                  >
                    <div className="features-small-item">
                      <div className="icon">
                        <i>
                          <img
                            src="assets/images/featured-item-01.png"
                            alt=""
                          />
                        </i>
                      </div>
                      <h5 className="features-title">Ultimate Marketing</h5>
                      <p>
                        You just need to tell your friends about our Company.
                      </p>
                    </div>
                  </div>
                </Fade>
                {/* <!-- ***** Features Small Item End ***** --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Small End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section
        className="section padding-top-70 padding-bottom-0"
        id="features"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-12 col-sm-12 align-self-center"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src="assets/images/left-image.png"
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-top-fix">
              <div className="left-heading">
                <h2 className="section-title">
                  Let’s discuss about you project
                </h2>
              </div>
              <div className="left-text">
                <p>
                  We use the best software development strategy by staying
                  connected to you on the regular basis, and help you to deliver
                  a better software.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="hr"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section className="section padding-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
              <div className="left-heading">
                <h2 className="section-title">
                  We can help you to grow your business
                </h2>
              </div>
              <div className="left-text">
                <p>
                  We provide a best software that can help you to grow, develop
                  and increase your business strategy.
                </p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div
              className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                src="assets/images/right-image.png"
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features Big Item End ***** --> */}

      {/* <!-- ***** Home Parallax Start ***** --> */}
      <section className="mini" id="work-process">
        <div className="mini-content">
          <div className="container">
            <div className="row">
              <div className="offset-lg-3 col-lg-6">
                <div className="info">
                  <h1>Work Process</h1>
                  <p>
                    We work by involving you in the regular discussion to
                    deliver you the best software.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- ***** Mini Box Start ***** --> */}
            <div className="row">
              <Fade bottom>
                <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                  <a href="#box" className="mini-box">
                    <i>
                      <img
                        src="assets/images/work-process-item-01.png"
                        alt=""
                      />
                    </i>
                    <strong>Get Ideas</strong>
                    <span>Get ideas from our team.</span>
                  </a>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                  <a href="#box" className="mini-box">
                    <i>
                      <img
                        src="assets/images/work-process-item-01.png"
                        alt=""
                      />
                    </i>
                    <strong>Sketch Up</strong>
                    <span>
                      Imagine your business strategy using our software.
                    </span>
                  </a>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                  <a href="#box" className="mini-box">
                    <i>
                      <img
                        src="assets/images/work-process-item-01.png"
                        alt=""
                      />
                    </i>
                    <strong>Discuss</strong>
                    <span>Keep guiding us to deliver you the best.</span>
                  </a>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                  <a href="#box" className="mini-box">
                    <i>
                      <img
                        src="assets/images/work-process-item-01.png"
                        alt=""
                      />
                    </i>
                    <strong>Revise</strong>
                    <span>Revise the product and provide feedback.</span>
                  </a>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                  <a href="#box" className="mini-box">
                    <i>
                      <img
                        src="assets/images/work-process-item-01.png"
                        alt=""
                      />
                    </i>
                    <strong>Approve</strong>
                    <span>Get satisfied and give your valuable feedback.</span>
                  </a>
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                  <a href="#box" className="mini-box">
                    <i>
                      <img
                        src="assets/images/work-process-item-01.png"
                        alt=""
                      />
                    </i>
                    <strong>Launch</strong>
                    <span>Launch your software to expand your business.</span>
                  </a>
                </div>
              </Fade>
            </div>
            {/* <!-- ***** Mini Box End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Home Parallax End ***** --> */}

      {/* <!-- ***** Testimonials Start ***** --> */}
      <section className="section" id="testimonials">
        <div className="container">
          {/* <!-- ***** Section Title Start ***** --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">What do they say?</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>Our Clients speaks alot about us....</p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Section Title End ***** --> */}

          <div className="row feedback">
            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <Fade left>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-item">
                  <div className="team-content">
                    <i>
                      <img src="assets/images/testimonial-icon.png" alt="" />
                    </i>
                    <p>
                      The software these guys have made helped me and my
                      organization to grow more and also helped me to change my
                      business strategy to increase my sales
                    </p>
                    <div className="team-info">
                      <h3 className="user-name">Rohit Pani</h3>
                      <span>Managing Director</span>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            {/* <!-- ***** Testimonials Item End ***** --> */}

            {/* <!-- ***** Testimonials Item Start ***** --> */}
            <Fade right>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-item">
                  <div className="team-content">
                    <i>
                      <img src="assets/images/testimonial-icon.png" alt="" />
                    </i>
                    <p>
                      Team Kreative Koder helped my classes to grow more and
                      provide more value to my students, Thank you
                      <strong>Kreative Koder</strong>
                    </p>
                    <div className="team-info">
                      <h3 className="user-name">Shyam Gupta</h3>
                      <span>Owner, S.N. Classes</span>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            {/* <!-- ***** Testimonials Item End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Testimonials End ***** --> */}

      {/* <!-- ***** Pricing Plans Start ***** --> */}
      <section className="section colored" id="pricing-plans">
        <div className="container">
          {/* <!-- ***** Section Title Start ***** --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Pricing Plans</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>
                  Affordable prices are available for the different type of
                  Softwares
                </p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Section Title End ***** --> */}

          <div className="row">
            {/* <!-- ***** Pricing Item Start ***** --> */}
            <Fade left>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
              >
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Website</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="price-wrapper">
                      <span className="currency">INR</span>
                      <span className="price">9000</span>
                    </div>
                    <ul className="list">
                      <li className="active">Website development</li>
                      <li className="active">Responsive design</li>
                      <li className="active">Best User Experience</li>
                      <li className="active">24/7 Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
            {/* <!-- ***** Pricing Item End ***** --> */}

            {/* <!-- ***** Pricing Item Start ***** --> */}
            <Fade bottom>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
              >
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3 className="pricing-title">Android App</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="price-wrapper">
                      <span className="currency">INR</span>
                      <span className="price">12000</span>
                    </div>
                    <ul className="list">
                      <li className="active">Android App development</li>
                      <li className="active">Interactive design</li>
                      <li className="active">Best User Experience</li>
                      <li className="active">24/7 Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
            {/* <!-- ***** Pricing Item End ***** --> */}

            {/* <!-- ***** Pricing Item Start ***** --> */}
            <Fade right>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
              >
                <div className="pricing-item">
                  <div className="pricing-header">
                    <h3 className="pricing-title">ISO App</h3>
                  </div>
                  <div className="pricing-body">
                    <div className="price-wrapper">
                      <span className="currency">INR</span>
                      <span className="price">15000</span>
                    </div>
                    <ul className="list">
                      <li className="active">ISO App development</li>
                      <li className="active">Best Service</li>
                      <li className="active">Best User Experience</li>
                      <li className="active">24/7 Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Fade>
            {/* <!-- ***** Pricing Item End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Pricing Plans End ***** --> */}

      {/* <!-- ***** Counter Parallax Start ***** --> */}
      <section className="counter">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item decoration-bottom">
                  <strong>10</strong>
                  <span>Projects</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item decoration-top">
                  <strong>5</strong>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item decoration-bottom">
                  <strong>10</strong>
                  <span>Satisfied Partners</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>8</strong>
                  <span>Team Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Counter Parallax End ***** --> */}

      {/* <!-- ***** Contact Us Start ***** --> */}
      <section className="section colored" id="contact-us">
        <div className="container">
          {/* <!-- ***** Section Title Start ***** --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Talk To Us</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>Help us to know more about business plans</p>
              </div>
            </div>
          </div>
          {/* <!-- ***** Section Title End ***** --> */}

          <div className="row">
            {/* <!-- ***** Contact Text Start ***** --> */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <h5 className="margin-bottom-30">Keep in touch</h5>
              <div className="contact-text">
                <p>A-404 Darshan Apt, Achole Cross Road 401209</p>
              </div>
            </div>
            {/* <!-- ***** Contact Text End ***** --> */}

            {/* <!-- ***** Contact Form Start ***** --> */}
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className="contact-form">
                <form id="contact" action="" method="get">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="main-button"
                        >
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- ***** Contact Form End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Contact Us End ***** --> */}

      {/* <!-- ***** Footer Start ***** --> */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ul className="social">
                <li>
                  <a href="#facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#rss">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
                <li>
                  <a href="#dribble">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright">Copyright &copy; 2020 Kreative Koder</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
