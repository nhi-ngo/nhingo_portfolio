import styled from 'styled-components'

export const FooterContainer = styled.div`
  padding-bottom: 1rem;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SocialIconLink = styled.a`
  color: #333;
  font-size: 30px;
  margin: 1rem;

  &:hover {
    color: #8c8c8c;
  }
  /* color: ${(props) =>
    (props.email && '#99a3e8') ||
    (props.github && '#767676') ||
    (props.linkedIn && '#2088AF')};
  } */
`

export const WebsiteRights = styled.small`
  color: #333;
  font-size: 1rem;
  font-weight: 300;
`
