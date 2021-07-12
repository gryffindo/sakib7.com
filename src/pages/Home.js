import Header from "../components/header";
import "../styles/main.css";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Skills from "../components/home/skills";
import Bar from "../components/home/Bar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
			<ParticleBackground />
      <About />
			<Skills />
			<Bar />
			<Footer />
    </div>
  );
};

export default Home;