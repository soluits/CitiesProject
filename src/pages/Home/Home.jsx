import Carousel from "../../components/Carousel/Carousel";
import LayoutMain from "../Layouts/LayoutMain";
import Hero from "../../components/Hero/Hero";
import "./home.css";
const Home = () => {
  return (
    <LayoutMain>
      <main className="d-flex flex-wrap 1vh bg-light">
        <section className="home-hero my2">
          <Hero />
        </section>
        <section className="home-carousel my2">
          <Carousel />
        </section>
      </main>
    </LayoutMain>
  );
};

export default Home;