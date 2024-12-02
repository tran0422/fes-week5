import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
    return (
        <>
            <section id="home" className="landing__df">
                <div className="landing__about">
                    <p className="landing__title">Dog Rescue Org Name Here</p>
                    <p className="landing__description">We are dedicated to rescuing, rehabilitating, and re-homing dogs in need, with a special focus on those from local shelters, dogs surrendered by their owners, and those saved from the streets of Baja California, Mexico. Each dog that comes to us receives a loving, supportive environment where they can heal and thrive. We provide comprehensive medical care, including spaying and neutering, along with any necessary rehabilitation to ensure they are ready for their forever homes. Through compassion, care, and commitment, we give these dogs a second chance at a happy life.</p>

                    <Link to="/Donate" className="landing__link"><span className="landing__donateNow-background">Donate Now</span></Link>
                    <Link to="/AvailableDogs" ><span className="landing__adopt-background"><FontAwesomeIcon icon={faPaw} /> Adopt</span></Link>
                </div>
                <figure className="landing__img-wrapper">
                    <img className="landing__img" src="https://img.freepik.com/free-vector/hand-drawn-dog-outline-illustration_23-2149294774.jpg" alt="" />
                </figure>
            </section>
        </>
    );
}

export default Landing;