import React from "react";
import "./App.css";

import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import BigFeatures from "./Components/BigFeatures";
import BigFeaturesTwo from "./Components/BigFeaturesTwo";
import Parallax from "./Components/Parallax";
import Feedback from "./Components/Feedback";
import Pricing from "./Components/Pricing";
import Wins from "./Components/Wins";
import Contactus from "./Components/Contactus";
import Footer from "./Components/Footer";
function App() {
     return (
          <div className="App">
               {/* <!-- ***** Header Area End ***** --> */}
               <Header />
               {/* <!-- ***** Welcome Area Start ***** --> */}
               <HeroSection />

               {/* <!-- ***** Welcome Area End ***** --> */}

               {/* <!-- ***** Features Small Start ***** --> */}
               <Features />
               {/* <!-- ***** Features Small End ***** --> */}

               {/* <!-- ***** Features Big Item Start ***** --> */}
               <BigFeatures />
               {/* <!-- ***** Features Big Item End ***** --> */}

               {/* <!-- ***** Features Big Item Start ***** --> */}
               <BigFeaturesTwo />
               {/* <!-- ***** Features Big Item End ***** --> */}

               {/* <!-- ***** Home Parallax Start ***** --> */}
               <Parallax />
               {/* <!-- ***** Home Parallax End ***** --> */}

               {/* <!-- ***** Testimonials Start ***** --> */}
               <section className="section" id="testimonials">
                    <div className="container">
                         {/* <!-- ***** Section Title Start ***** --> */}
                         <div className="row">
                              <div className="col-lg-12">
                                   <div className="center-heading">
                                        <h2 className="section-title">
                                             What do they say?
                                        </h2>
                                   </div>
                              </div>
                              <div className="offset-lg-3 col-lg-6">
                                   <div className="center-text">
                                        <p>
                                             Our Clients speaks alot about
                                             us....
                                        </p>
                                   </div>
                              </div>
                         </div>
                         {/* <!-- ***** Section Title End ***** --> */}
                         <Feedback />
                    </div>
               </section>
               {/* <!-- ***** Testimonials End ***** --> */}

               {/* <!-- ***** Pricing Plans Start ***** --> */}
               <Pricing />
               {/* <!-- ***** Pricing Plans End ***** --> */}

               {/* <!-- ***** Counter Parallax Start ***** --> */}
               <Wins />
               {/* <!-- ***** Counter Parallax End ***** --> */}

               {/* <!-- ***** Contact Us Start ***** --> */}
               <Contactus />
               {/* <!-- ***** Contact Us End ***** --> */}

               {/* <!-- ***** Footer Start ***** --> */}
               <Footer />
          </div>
     );
}

export default App;
