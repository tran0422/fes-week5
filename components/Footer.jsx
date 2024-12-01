import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    
}

const Footer = () => {
    return (
        <>
            <footer className="footer__df">
                <div className="footer__Instagram">
                    <FontAwesomeIcon icon={faInstagram} className="instagram__img" />
                    <span className="instagram__handle">
                        @dogrescuegram
                    </span>
                </div>
                <div className="footer__top">
                    <Link to="/" onClick={scrollToTop}>
                        <figure className="footer__logo__corp"><img className="footer__logo" src="https://img.freepik.com/premium-vector/dog-cat-paw-print-heart-icon-paw-print-animal-paw-vector-illustration_654297-128.jpg" alt="" /></figure>
                    </Link>
                    <ul className="footer__list">
                        <li className="footer__link"><Link to="/Donate" onClick={scrollToTop}>Donate</Link></li>
                        <li className="footer__link"><Link to="/AvailableDogs" onClick={scrollToTop}>Adopt</Link></li>
                        <li className="footer__link"><Link to="/Volunteers" onClick={scrollToTop}>Volunteer</Link></li>
                        <li className="footer__link"><Link to="/">Contact Us</Link></li>
                    </ul>

                </div>
                <div className="footer__bottom">
                    <p>2024. All Rights Reserved.</p>
                    <Link to="/"> Privacy Policy</Link>
                    <Link to="/"> Term of Service</Link>
                </div>
            </footer>
        </>
    );
}

export default Footer;