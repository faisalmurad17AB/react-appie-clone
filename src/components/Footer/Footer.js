import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="footer-about-widget">
                        <div className="logo">
                            <a href="#"><img src="assets/images/logo.png" alt="" /></a>
                        </div>
                        <p>Appie WordPress is theme is the last theme you will ever have.</p>
                        <a href="#">Read More <i className="fal fa-arrow-right"></i></a>
                        {/* <div className="social mt-30">
                            <ul>
                                <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <div className="footer-navigation">
                        <h4 className="title">Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-navigation">
                        <h4 className="title">Support</h4>
                        <ul>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Faqs</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-widget-info">
                        <h4 className="title">Get In Touch</h4>
                        <ul>
                            <li><a href="#"><i className="fal fa-envelope"></i> abc@gmail.com</a></li>
                            <li><a href="#"><i className="fal fa-phone"></i> +92 302 1234567</a></li>
                            <li><a href="#"><i className="fal fa-map-marker-alt"></i> Islamabad</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
