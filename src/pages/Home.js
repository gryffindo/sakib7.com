import Header from "../components/header";
import "../styles/main.css";
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Skills from "../components/home/skills";
import Bar from "../components/home/Bar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
			<Skills />
			<Bar />
			<Footer />
    </div>
  );
};

export default Home;