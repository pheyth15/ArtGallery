import styled from "styled-components";
import Article from "../components/Article";
import Cover from "../assets/shared/cover.jpg";
import During from "../assets/shared/during.jpg";

const History = styled.section`
  display: block;
  overflow: auto;
  height: 100vh;
  width: 100%;
  padding-right: 10.5vw;
  margin: 5vw auto;
`;
const ImageConstraint = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 70vh;
  border-radius: 0.5vw;
  box-shadow: 0 0.15vw 0.7vw #777;
`;

const Image = styled.img`
  margin: 0;
  width: 100%;
  vertical-align: middle;
`;

const Header = styled.h2`
  margin: 4vw 0 2vw 0;
  font-size: 2.2vw;
`;

const About = () => (
  <History>
    <Article
      cover={Cover}
      title="Cavite, Philippines"
      content={
        <section>
          <p>
            Cavite, officially the Province of Cavite, is a province in the
            Philippines located in the CALABARZON region in Luzon. Located on
            the southern shores of Manila Bay and southwest of Metro Manila, it
            is one of the most industrialized and fastest-growing provinces in
            the Philippines.
          </p>

          {/* TODO: Photo before pandemic */}
          <Header>Before the COVID-19 Pandemic</Header>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vero
            suscipit autem, obcaecati ut tempore. Voluptate, id enim nam,
            blanditiis natus modi. Nihil sit maiores perspiciatis nulla facilis
            explicabo ab?
          </p>

          <Header>During the COVID-19 Pandemic</Header>

          <ImageConstraint>
            <Image src={During} alt="During the pandemic" />
          </ImageConstraint>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vero
            suscipit autem, obcaecati ut tempore. Voluptate, id enim nam,
            blanditiis natus modi. Nihil sit maiores perspiciatis nulla facilis
            explicabo ab?
          </p>
        </section>
      }
    />
  </History>
);

export default About;
