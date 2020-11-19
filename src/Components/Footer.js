import React from "react";

const Footer = () => {
     return (
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
                              <p className="copyright">
                                   Copyright &copy; 2020 Kreative Koder
                              </p>
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
