import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  DeveloperDetails,
} from "./FooterElements";
import Collegegiri from "../../images/collegegiri.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <img alt="logo" src={Collegegiri} height="50" width="180" />
            </SocialLogo>
            {/* <DeveloperDetails>
              <SocialIconLink
                href="http://www.linkedin.com/in/adityagusain"
                target="_blank"
                aria-label="developer details"
              >
                <h6>Developed By Aditya Gusain</h6>
              </SocialIconLink>
            </DeveloperDetails> */}
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/ira-pandey-hmr/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/collegegiri/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/briandesignz"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
