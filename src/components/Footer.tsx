import styled from "styled-components";
import { ExtLinkObject } from "../interfaces";

const FooterLinks = styled.footer`
  display: block;
  font-size: 1.05vw;
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
  width: max-content;
  margin: 5.5vw auto 4vw auto;
  padding: 0.5vw 0;
  transform: rotate(-91deg);
  transition: all 0.3s;

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
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }

  &:hover {
    transform: rotate(-91deg);
  }
`;

const extLinks: ExtLinkObject[] = [
  { link: "https://ncca.gov.ph/", content: "ncca.gov" },
  {
    link: "https://github.com/jhdcruz/ArtGallery/commits/main",
    content: "Revisions",
  },
  { link: "https://github.com/jhdcruz/ArtGallery", content: "Repository" },
];

const Footer = () => (
  <FooterLinks>
    {extLinks.map((extLink: ExtLinkObject) => (
      <ExtLink href={extLink.link} target="__blank">
        {extLink.content}
      </ExtLink>
    ))}
  </FooterLinks>
);

export default Footer;
