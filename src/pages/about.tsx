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

const Image = styled.img`
  width: 100%;
  margin-bottom: 1vw;
  border-radius: 0.5vw;
  box-shadow: 0 0.15vw 0.7vw #777;
  vertical-align: middle;
`;

const Header = styled.h2`
  margin: 4vw 0 2vw 0;
  font-size: 2.2vw;
`;

const About = () => (
  <History>
    <Article
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

          <Header>Before the COVID-19 Pandemic</Header>
          <Image src={Cover} alt="Before the pandemic" />

          <p>
            Cavite has an approximate population of 3,678,301, It has 43 private
            hospitals , 12 public hospitals. It also has 69 economic zones, 473
            industrial establishments, 230 operating cooperatives. In terms of
            business, Cavite has 12,207 Micro Enterprises, 51 Small Enterprises,
            31 Medium Enterprises, 19 Large Enterprises, 50 Rural Banks, 195
            Commercial Banks, 149 Thrift Banks, it also has 4 Financing
            Companies, 764 Pawnshops, and 5 Non-Stock & Saving & Loan
            Associations.
          </p>

          <Header>During the COVID-19 Pandemic</Header>
          <Image src={During} alt="During the pandemic" />

          <p>
            Due to the effects of COVID-19, the economic sector of Cavite has
            since dwindled due to multiple reasons mostly because of financing
            issues. Although the health sector has also taken toll, the
            authorities managed to handle to problem quite efficiently.
          </p>
        </section>
      }
    />
  </History>
);

export default About;
