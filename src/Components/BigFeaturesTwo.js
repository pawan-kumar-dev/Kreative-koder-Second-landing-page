import React from "react";

const BigFeaturesTwo = () => {
     return (
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
                                        We provide a best software that can help
                                        you to grow, develop and increase your
                                        business strategy.
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
     );
};

export default BigFeaturesTwo;
