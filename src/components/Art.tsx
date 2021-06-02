import { PortalWithState } from "react-portal";
import styled from "styled-components";
import { IArt } from "../interfaces";

const Panel = styled.article`
  margin: 9vw 0;
  color: ${(props) => props.theme.colors.dark};
  font-size: 1.5vw;
  height: max-content;
  word-wrap: break-word;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  margin: 0 auto;
  display: block;
  width: 90%;
  height: auto;
  border-radius: 0.5vw;
  cursor: zoom-in;
  box-shadow: 0 0.15vw 0.7vw #777;
`;

const About = styled.div`
  color: ${(props) => props.theme.colors.light};
  text-shadow: 0 0 0.8vw ${(props) => props.theme.colors.dark};
  background-color: rgba(54, 50, 45, 0.8);
  border-top: 0.28vw ridge ${(props) => props.theme.colors.light};
  margin: 0 3.1vw;
  padding: 1.2vw 3vw;
  font-size: 1.25vw;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: default;
  transition: all 0.3s;
  border-bottom-left-radius: 0.5vw;
  border-bottom-right-radius: 0.5vw;
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 1.7vw;
  line-height: 1 !important;
  margin: 1vw 0 0.7vw 0;
  text-transform: uppercase;
`;

const Artist = styled.h6`
  margin: 0;
  font-size: 1.1vw;
  width: max-content;
  font-weight: normal;
`;

const Description = styled.p`
  font-size: 1.17vw;
`;

/* Fullscreen Overlay */
const FullPanel = styled.article`
  margin: 0;
  color: ${(props) => props.theme.colors.dark};
  background-color: rgba(24, 24, 24, 0.8);
  font-size: 1.5vw;
  width: 100%;
  word-wrap: break-word;
  vertical-align: middle;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;
`;

const FullImage = styled.img`
  margin: 0 auto;
  display: block;
  width: auto;
  height: 100vh;
  object-fit: cover;
  cursor: zoom-out;
  z-index: 9;
`;

const Art = ({ img, preview, type, title, artist, desc }: IArt) => (
  <PortalWithState closeOnOutsideClick closeOnEsc>
    {({ openPortal, closePortal, portal }) => (
      <>
        <Panel>
          <Image
            src={preview}
            alt={title}
            draggable="false"
            onClick={openPortal}
          />
          <About>
            <Title>
              {title} {type}
            </Title>
            <Artist>
              by <b>{artist}</b>
            </Artist>
            <Description>{desc}</Description>
          </About>
        </Panel>

        {/* Portal Active */}
        {portal(
          <FullPanel onClick={closePortal}>
            <FullImage
              src={img}
              alt={title}
              draggable="false"
              onClick={openPortal}
            />
          </FullPanel>
        )}
      </>
    )}
  </PortalWithState>
);

export default Art;
