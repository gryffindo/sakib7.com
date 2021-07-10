import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="about-me-info">
        <p>
          Mainly I am a web developer. I can develop websites using nodejs,
          html, css etc. I am a React JS developer too. Even this application was also developed with ReactJS. I love solving problems with C++. 
        </p>
				<Link className="readMore" to='/skills'>Read More</Link>
      </div>
    </div>
  );
};

export default Skills;
