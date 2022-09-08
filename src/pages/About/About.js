import React from 'react'
import {
  AboutWrap,
  AboutInfo,
  AboutContainer,
  AboutTitle,
  AboutImg,
  AboutImgContainer,
  AboutText,
} from './About.elements'

function About() {
  return (
    <AboutWrap>
      <AboutContainer>
        <AboutImgContainer>
          <AboutImg className="img-1" src="./images/portrait.jpeg" alt="portrait" />
        </AboutImgContainer>

        <AboutInfo>
          <AboutTitle>HELLO,</AboutTitle>
          <AboutText style={{ fontWeight: 'bolder' }}>
            I am a front-end developer with an accounting background. In other words,
            I went to accounting school and returned a programmer.
          </AboutText>

          <AboutText>Oops.</AboutText>

          <AboutText>
            From the moment I produced "Hello World" in the console of my first
            website, I knew I was hooked. What started with a simple "Hello World"
            has become a full-fledged passion that only gets more exciting as time
            goes by. My interest is to build responsive websites and web applications
            with HTML, CSS, JavaScript, and React.
          </AboutText>

          <AboutText>
            My accounting background greatly contributes to my practical thinking
            process, and increases my curiosity about how individual parts interact with
            each other behind the scene.
          </AboutText>

          <AboutText>
            I'm also... someone who sees the margin of one page is off by 3px, and
            won’t rest until it’s resolved.
            <span role="img" aria-label="emoji">
              🤓
            </span>
          </AboutText>
        </AboutInfo>
      </AboutContainer>
    </AboutWrap>
  )
}

export default About
