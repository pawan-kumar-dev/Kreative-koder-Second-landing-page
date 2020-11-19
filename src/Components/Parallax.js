import React from "react";
import Fade from "react-reveal/Fade";
const Parallax = () => {
     return (
          <section className="mini" id="work-process">
               <div className="mini-content">
                    <div className="container">
                         <div className="row">
                              <div className="offset-lg-3 col-lg-6">
                                   <div className="info">
                                        <h1>Work Process</h1>
                                        <p>
                                             We work by involving you in the
                                             regular discussion to deliver you
                                             the best software.
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
                                             <span>
                                                  Get ideas from our team.
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
                                             <strong>Sketch Up</strong>
                                             <span>
                                                  Imagine your business strategy
                                                  using our software.
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
                                             <span>
                                                  Keep guiding us to deliver you
                                                  the best.
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
                                             <strong>Revise</strong>
                                             <span>
                                                  Revise the product and provide
                                                  feedback.
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
                                             <strong>Approve</strong>
                                             <span>
                                                  Get satisfied and give your
                                                  valuable feedback.
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
                                             <strong>Launch</strong>
                                             <span>
                                                  Launch your software to expand
                                                  your business.
                                             </span>
                                        </a>
                                   </div>
                              </Fade>
                         </div>
                         {/* <!-- ***** Mini Box End ***** --> */}
                    </div>
               </div>
          </section>
     );
};

export default Parallax;
