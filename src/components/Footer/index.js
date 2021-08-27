import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/contact">How it works</FooterLink>
              <FooterLink to="/contact">Testimonials</FooterLink>
              <FooterLink to="/contact">Careers</FooterLink>
              <FooterLink to="/contact">Investors</FooterLink>
              <FooterLink to="/contact">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/contact">How it works</FooterLink>
              <FooterLink to="/contact">Testimonials</FooterLink>
              <FooterLink to="/contact">Careers</FooterLink>
              <FooterLink to="/contact">Investors</FooterLink>
              <FooterLink to="/contact">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/contact">How it works</FooterLink>
              <FooterLink to="/contact">Testimonials</FooterLink>
              <FooterLink to="/contact">Careers</FooterLink>
              <FooterLink to="/contact">Investors</FooterLink>
              <FooterLink to="/contact">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/contact">How it works</FooterLink>
              <FooterLink to="/contact">Testimonials</FooterLink>
              <FooterLink to="/contact">Careers</FooterLink>
              <FooterLink to="/contact">Investors</FooterLink>
              <FooterLink to="/contact">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
