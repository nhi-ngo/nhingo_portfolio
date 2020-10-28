import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #1e1e20;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContactContainer = styled.div`
  background-image: linear-gradient(-120deg, #7282eb, #74aee3);
  width: 100vw;
  padding: 7rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`

export const ContactLink = styled.a`
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  font-size: 6rem;
  white-space: nowrap;
  transition: color 150ms ease-out;

  &:hover {
    background: -webkit-linear-gradient(45deg, #7282eb 0%, #7282eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadein 0.8s;
  }

  @media screen and (max-width: 768px) {
    font-size: 4.5vh;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 30px;
  margin: 1rem;

  &:hover {
    animation: fadein 0.8s;
    color: ${(props) =>
      (props.email && '#99a3e8') ||
      (props.github && '#767676') ||
      (props.linkedIn && '#2088AF')};
  }
`

export const WebsiteRights = styled.small`
  color: #a3afbf;
  font-size: 1rem;
  font-weight: 300;
`
