import React from "react";

const HeroSection = () => {
     return (
          <div className="welcome-area" id="welcome">
               {/* <!-- ***** Header Text Start ***** --> */}
               <div className="header-text">
                    <div className="container">
                         <div className="row">
                              <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
                                   <h1>
                                        We provide the best{" "}
                                        <strong>strategy</strong>
                                        <br />
                                        to grow up your{" "}
                                        <strong>business</strong>
                                   </h1>
                                   <p>
                                        A Team of Kreative Mind to help you grow
                                        your Business.
                                   </p>
                                   <a
                                        href="#features"
                                        className="main-button-slider"
                                   >
                                        Discover More
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
               {/* <!-- ***** Header Text End ***** --> */}
          </div>
     );
};

export default HeroSection;
