import Header from "../components/header";
import Clock from '../components/Clock'

const AbMe = () => {
  return (
    <>
      <Header />
			<Clock />
      <div className="section">
        <h1 style={{marginTop: "100px"}} class="hello_kitty">About</h1>
        <div class="about-me-info">
          <h2>بسم الله</h2>
          <p>
            I am a 9th standard student and web application developer. There's
            nothing lot to say about myself . I am a science enthusiast. I am a
            problem lover, I love problems to solve and to love again.
          </p>
          <p>
            I have extreme fascination in computer programming, mathematics and
            physics equally.
          </p>
        </div>
      </div>
    </>
  );
};

export default AbMe;