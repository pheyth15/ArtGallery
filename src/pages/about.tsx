import styled from "styled-components";
import Article from "../components/Article";
import Cover from "../assets/img/cover.jpg";

const History = styled.div`
  margin: 0 auto;
  height: 100vh;
  overflow: auto;
`;

const About = () => (
  <History>
    <Article
      cover={Cover}
      title="Cavite, Philippines"
      content={
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vero
            suscipit autem, obcaecati ut tempore. Voluptate, id enim nam,
            blanditiis natus modi. Nihil sit maiores perspiciatis nulla facilis
            explicabo ab?
          </p>

          {/* TODO: Photo before pandemic */}
          <h2>Before the COVID-19 Pandemic</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, vero
            suscipit autem, obcaecati ut tempore. Voluptate, id enim nam,
            blanditiis natus modi. Nihil sit maiores perspiciatis nulla facilis
            explicabo ab?
          </p>

          {/* TODO: Photo during pandemic */}
          <h2>During the COVID-19 Pandemic</h2>

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
