import React, { useState } from "react";
import { Button as LinkButton } from "../Buttonelement";
import Video from "../../videos/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrorForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Cool Pharase!</HeroH1>
        <HeroP>Slide to learn more about company.</HeroP>
        <HeroBtnWrapper>
          <LinkButton
            to="/contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact Me! {hover ? <ArrorForward /> : <ArrowRight />}
          </LinkButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
