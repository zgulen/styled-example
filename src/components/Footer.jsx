import React from "react";

import StyledFooter from "./styles/Footer.styled";
import FooterLogo from "./styles/FooterLogo";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                <FooterLogo src="./images/logo_white.png"></FooterLogo>
                <p>1775 Tysons Blvd. 5th Floor. Tysons, VA 22102</p>
                <p>+1 (571) 360 66 77</p>
                <p>contact@clarusway.com</p>
            </div>
            <ul>
                <li>About Us</li>
                <li>What we Do</li>
                <li>FAQ</li>
            </ul>
            <ul>
                <li>Career</li>
                <li>BLog</li>
                <li>Contact Us</li>
            </ul>
            <article>
                <a href="/">
                    <FaTwitter />
                </a>
                <a href="/">
                    <FaFacebook />
                </a>
                <a href="/">
                    <FaLinkedin />
                </a>
            </article>
        </StyledFooter>
    );
};

export default Footer;
