import React from "react";

const Header = () => {
     return (
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
                                             <a
                                                  href="#welcome"
                                                  className="active"
                                             >
                                                  Home
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#features">About</a>
                                        </li>
                                        <li>
                                             <a href="#work-process">
                                                  Work Process
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#testimonials">
                                                  Testimonials
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#pricing-plans">
                                                  Pricing Tables
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#contact-us">
                                                  Contact Us
                                             </a>
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
     );
};

export default Header;
