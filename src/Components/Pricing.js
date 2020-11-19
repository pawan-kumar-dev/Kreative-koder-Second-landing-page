import React from "react";
import Fade from "react-reveal/Fade";
const Pricing = () => {
     return (
          <section className="section colored" id="pricing-plans">
               <div className="container">
                    {/* <!-- ***** Section Title Start ***** --> */}
                    <div className="row">
                         <div className="col-lg-12">
                              <div className="center-heading">
                                   <h2 className="section-title">
                                        Pricing Plans
                                   </h2>
                              </div>
                         </div>
                         <div className="offset-lg-3 col-lg-6">
                              <div className="center-text">
                                   <p>
                                        Affordable prices are available for the
                                        different type of Softwares
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
                                             <h3 className="pricing-title">
                                                  Website
                                             </h3>
                                        </div>
                                        <div className="pricing-body">
                                             <div className="price-wrapper">
                                                  <span className="currency">
                                                       INR
                                                  </span>
                                                  <span className="price">
                                                       9000
                                                  </span>
                                             </div>
                                             <ul className="list">
                                                  <li className="active">
                                                       Website development
                                                  </li>
                                                  <li className="active">
                                                       Responsive design
                                                  </li>
                                                  <li className="active">
                                                       Best User Experience
                                                  </li>
                                                  <li className="active">
                                                       24/7 Support
                                                  </li>
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
                                             <h3 className="pricing-title">
                                                  Android App
                                             </h3>
                                        </div>
                                        <div className="pricing-body">
                                             <div className="price-wrapper">
                                                  <span className="currency">
                                                       INR
                                                  </span>
                                                  <span className="price">
                                                       12000
                                                  </span>
                                             </div>
                                             <ul className="list">
                                                  <li className="active">
                                                       Android App development
                                                  </li>
                                                  <li className="active">
                                                       Interactive design
                                                  </li>
                                                  <li className="active">
                                                       Best User Experience
                                                  </li>
                                                  <li className="active">
                                                       24/7 Support
                                                  </li>
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
                                             <h3 className="pricing-title">
                                                  ISO App
                                             </h3>
                                        </div>
                                        <div className="pricing-body">
                                             <div className="price-wrapper">
                                                  <span className="currency">
                                                       INR
                                                  </span>
                                                  <span className="price">
                                                       15000
                                                  </span>
                                             </div>
                                             <ul className="list">
                                                  <li className="active">
                                                       ISO App development
                                                  </li>
                                                  <li className="active">
                                                       Best Service
                                                  </li>
                                                  <li className="active">
                                                       Best User Experience
                                                  </li>
                                                  <li className="active">
                                                       24/7 Support
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </Fade>
                         {/* <!-- ***** Pricing Item End ***** --> */}
                    </div>
               </div>
          </section>
     );
};

export default Pricing;
