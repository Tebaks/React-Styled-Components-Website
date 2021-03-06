import React from "react";
import { Button } from "../Buttonelement";
import {
  Column2,
  ImgWrap,
  Column1,
  AboutWrapper,
  AboutContainer,
  AboutRow,
  TopLine,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
} from "./AboutElements";

const AboutSection = ({
  lightText,
  lightBg,
  id,
  imgStart,
  description,
  topLine,
  darkText,
  buttonLabel,
  alt,
  img,
  headline,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
