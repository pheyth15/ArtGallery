import FrontMatter from "../components/FrontMatter";
import Button from "../components/Button";

const Home = () => (
  <>
    <FrontMatter
      intro="Contemporary Philippine Arts from the Regions,"
      title="Cavite in the COVID-19 Pandemic."
    />
    <Button text="See gallery —>" link="/gallery" />
  </>
);

export default Home;
