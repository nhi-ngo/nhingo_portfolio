import React from 'react'
import {
  AboutWrap,
  AboutInfo,
  AboutContainer,
  AboutTitle,
  AboutText,
  Skills,
  SkillTitle,
  SkillTags,
  Tag,
} from './About.elements'

function About() {
  return (
    <AboutWrap>
      <AboutContainer>
        <AboutTitle>Hello! I'm Nhi Ngo.</AboutTitle>
        <AboutInfo>
          <AboutText>
            I started my career as an accountant before venturing into the dynamic
            world of web development. From the moment I produced "Hello World" in the
            console of my first website, I knew I was hooked. What started with a
            simple "Hello World" has become a full-fledged passion that only gets
            more exciting as time goes by.
          </AboutText>
          <AboutText>
            I am highly adaptable and driven by learning. If there is a problem, I
            seek ways to fix it. Whether it takes reading a book or learning a new
            framework, I’ve grown to embrace the challenges that development can
            bring.
          </AboutText>
          <AboutText>
            When I'm not coding, you'll find me either running, hiking, or playing
            tennis.
          </AboutText>
        </AboutInfo>

        <Skills>
          <SkillTitle>
            Skills & Tools
            <span style={{ color: '#7282eb' }}>_</span>
          </SkillTitle>
          <SkillTags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>Javascript</Tag>
            <Tag>React</Tag>
            <Tag>Git</Tag>
            <Tag>Command Line</Tag>
          </SkillTags>
        </Skills>
      </AboutContainer>
    </AboutWrap>
  )
}

export default About
