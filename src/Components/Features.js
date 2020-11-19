import React from "react";
import Fade from "react-reveal/Fade";
const Features = () => {
     return (
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
                                                  <h5 className="features-title">
                                                       Modern Strategy
                                                  </h5>
                                                  <p>
                                                       Using best approaches the
                                                       help you succeed.
                                                  </p>
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
                                                  <h5 className="features-title">
                                                       Best Relationship
                                                  </h5>
                                                  <p>
                                                       Contact us immediately if
                                                       you have a question in
                                                       mind.
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
                                                  <h5 className="features-title">
                                                       Ultimate Marketing
                                                  </h5>
                                                  <p>
                                                       You just need to tell
                                                       your friends about our
                                                       Company.
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
     );
};

export default Features;
