import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import {
  ContactContainer,
  ContactLink,
  FooterContainer,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
} from './Footer.elements'

function Footer() {
  return (
    <FooterContainer>
      <ContactContainer>
        <ContactLink href="mailto:nhingo.y@gmail.com" target="_blank" email>
          Let's connect
        </ContactLink>
      </ContactContainer>

      <SocialIcons>
        <SocialIconLink href="mailto:nhingo.y@gmail.com" target="_blank" email>
          <HiOutlineMail />
        </SocialIconLink>

        <SocialIconLink href="https://github.com/nhi-ngo" target="_blank" github>
          <FaGithub />
        </SocialIconLink>

        <SocialIconLink
          href="https://www.linkedin.com/in/nhiyngo"
          target="_blank"
          linkedIn
        >
          <FaLinkedinIn />
        </SocialIconLink>
      </SocialIcons>

      <WebsiteRights>© 2020 Nhi Ngo</WebsiteRights>
    </FooterContainer>
  )
}

export default Footer
