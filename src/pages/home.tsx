import FrontMatter from "../components/FrontMatter";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Home = () => (
  <>
    <FrontMatter
      intro="Contemporary Philippine Arts from the Regions,"
      title="Cavite City in the COVID-19 Pandemic."
    />
    <Button text="See gallery —>" link="/gallery" />
    <Footer />
  </>
);

export default Home;
