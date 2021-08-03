import Header from "../components/header";
import Bar from "../components/home/Bar";

const Skills = () => {
  return (
    <>
      <Header />
      <div style={{marginTop: "100px"}} id="skills">
        <h1 className="hello_kitty">Skills</h1>
        <div className="about-me-info">
          <p>
            Mainly I am a web developer. I can develop websites using nodejs,
            html, css etc.I am a React JS developer too. I love solving problems
            with C++.
          </p>
        </div>
      </div>
      <Bar />
    </>
  );
};

export default Skills;
