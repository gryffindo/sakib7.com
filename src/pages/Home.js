import Header from "../components/header";
import "../styles/main.scss";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Skills from "../components/home/skills";
import Bar from "../components/home/Bar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";
import Clock from "../components/Clock";
import FooterTip from "../components/FooterTip";

const Home = () => {
  return (
    <div className="App">
      <Header />
			<Clock />
      <Hero />
			<ParticleBackground />
      <About />
			<Skills />
			<Bar />
			<FooterTip />
			<Footer />
    </div>
  );
};

export default Home;