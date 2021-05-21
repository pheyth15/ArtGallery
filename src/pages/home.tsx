import Hero from "../components/Hero";
import Button from "../components/Button";

const Home = () => (
  <>
    <Hero
      intro="Contemporary Philippine Arts from the Regions,"
      title="Cavite in the COVID-19 Pandemic."
    />
    <Button text="See gallery —>" link="/gallery" />
  </>
);

export default Home;
