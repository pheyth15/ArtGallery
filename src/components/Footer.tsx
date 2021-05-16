import styled from "styled-components";

const FooterLinks = styled.footer`
  display: block;
  font-size: 1.08vw;
  width: max-content;
  height: max-content;
  position: absolute;
  right: 0;
  bottom: 0.25vw;
`;

const ExtLink = styled.a`
  color: ${(props) => props.theme.colors.dark};
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  height: max-content;
  width: min-content;
  margin: 5vw auto 3.5vw auto;
  padding: 0.5vw 0;
  transform: rotate(-91deg);
  transition: all 0.15s;
  text-shadow: 0 0 0.05vw #333;

  &:hover:before {
    left: 0 !important;
    right: 0 !important;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 100%;
    right: 100%;
    bottom: 0;
    background: ${(props) => props.theme.colors.dark};
    height: 0.15vw;
    transition-property: left, right;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
  }

  &:hover {
    transform: rotate(-91deg);
  }
`;

interface ExtLinkProps {
  link: string;
  content: string;
}

const extLinks: ExtLinkProps[] = [
  { link: "https://ncca.gov.ph/", content: "ncca.gov" },
  { link: "https://github.com/jhdcruz/ArtGallery", content: "Repository" },
];

const Footer = () => (
  <FooterLinks>
    {extLinks.map((extLinks: ExtLinkProps) => (
      <ExtLink href={extLinks.link}>{extLinks.content}</ExtLink>
    ))}
  </FooterLinks>
);

export default Footer;
