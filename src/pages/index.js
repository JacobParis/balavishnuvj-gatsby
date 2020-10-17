import React, { useContext } from "react"
import WhiteImage from "../../content/assets/DarkModeImage.jpg"
import DarkImage from "../../content/assets/DarkModeImage.jpg"
import balavishnu from "../../content/assets/balavishnu-new.png"
import styled from "styled-components"
import { ThemeContext } from "styled-components"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

const Container = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  @media (max-width: 699px) {
    flex-direction: column;
  }
`

const ContentWrapper = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`

const LeftSection = styled.section``

const Info = styled.section`
  padding: 0 ${rhythm(1)};
`

const Image = styled.img`
  @media (max-width: 699px) {
    display: none;
  }
  margin: 0 ${rhythm(1)};
  width: ${rhythm(10)};
  min-width: 10px;
  margin-bottom: -1px;
`

const MobileImageWrapper = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
  position: relative;
  &:after {
    width: 100vw;
    height: ${rhythm(4.5)};
    position: absolute;
    background-color: ${props => props.theme.primaryColor};
    content: "";
    bottom: 1px;
    left: 0;
    z-index: -1;
  }
`

const MobileImage = styled.img`
  display: block;
  margin: 0 auto;
  width: ${rhythm(5)};
`

const NameText = styled.h1`
  font-size: 2rem;
  margin: 8px 0;
`

const StripedBackground = styled.div`
  position: relative;
  @media (min-width: 699px) {
    &:after {
      width: 100vw;
      height: 100%;
      position: absolute;
      background-color: ${props => props.theme.primaryColor};
      content: "";
      top: 0;
      z-index: -1;
      @media (min-width: 1200px) {
        margin-left: calc(-1 * (calc((100vw - 1200px)) / 2));
      }
    }
  }
`

const Description = styled.p`
  @media (min-width: 699px) {
    max-width: 400px;
    margin-top: 40px;
    color: ${props => props.theme.ctaText};
  }
  color: ${props => props.theme.textColor};
  padding: ${rhythm(1.5)} ${rhythm(1)};
`

export const H5 = styled.h5`
  color: ${props => props.theme.primaryColor};
`

const HireMeLink = styled(Link)`
  @media (min-width: 700px) {
    display: none;
  }
  padding: 8px 36px;
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};
  margin-left: ${rhythm(1)};
  box-shadow: none;
`

export default function Home({ ...props }) {
  const themeContext = useContext(ThemeContext)
  return (
    <Container>
      <ContentWrapper>
        <LeftSection>
          <Info>
            <p>Hey, I’m</p>
            <NameText>BALAVISHNU V J </NameText>
            <H5>Frontend Developer and a dog lover</H5>
          </Info>
          <MobileImageWrapper>
            <MobileImage src={balavishnu} alt="Balavishnu V J" />
          </MobileImageWrapper>
          <StripedBackground>
            <Description>
              I am a software engineer based in Bengaluru, IN specializing in
              building websites, applications and loves clean, simple and unique
              designs.
            </Description>
          </StripedBackground>
        </LeftSection>
        <Image src={balavishnu} alt="Balavishnu V J" />
      </ContentWrapper>
      <HireMeLink to="hire">Hire Me</HireMeLink>
    </Container>
  )
}
