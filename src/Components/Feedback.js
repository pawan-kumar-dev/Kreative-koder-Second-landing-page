import React from "react";
import Fade from "react-reveal/Fade";
const Feedback = () => {
     return (
          <div className="row feedback">
               {/* <!-- ***** Testimonials Item Start ***** --> */}
               <Fade left>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                         <div className="team-item">
                              <div className="team-content">
                                   <i>
                                        <img
                                             src="assets/images/testimonial-icon.png"
                                             alt=""
                                        />
                                   </i>
                                   <p>
                                        The software these guys have made helped
                                        me and my organization to grow more and
                                        also helped me to change my business
                                        strategy to increase my sales
                                   </p>
                                   <div className="team-info">
                                        <h3 className="user-name">
                                             Rohit Pani
                                        </h3>
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
                                        <img
                                             src="assets/images/testimonial-icon.png"
                                             alt=""
                                        />
                                   </i>
                                   <p>
                                        Team Kreative Koder helped my classes to
                                        grow more and provide more value to my
                                        students, Thank you
                                        <strong>Kreative Koder</strong>
                                   </p>
                                   <div className="team-info">
                                        <h3 className="user-name">
                                             Shyam Gupta
                                        </h3>
                                        <span>Owner, S.N. Classes</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </Fade>
               {/* <!-- ***** Testimonials Item End ***** --> */}
          </div>
     );
};

export default Feedback;
