import "../../styles/awards.scss";

const Info = () => {
  return (
    <>
      <h1 className="heading">Honors and Awards</h1>
      <div id="note">
        <p>
          Since, I am a programmer and math lover. I have Some achievements. I
          got a Certificate from Programming Hero for{" "}
          <span className="highlight">Python</span>.
        </p>
        <p>Then I got a certificate on HTML5, CSS3 and Bootstrap 4.</p>
        <p>
          {" "}
          This year (2021) I did participate in Bangladesh{" "}
          <span className="highlight">Mathematical Olympiad</span>
          and I was selected for Regional (Dhaka) Mathematical olympiad in
          secondary category. They gave me certificate.
        </p>
        <p>
          Also, this year I did participate in Bangladesh{" "}
          <span className="highlight">Physics Olympiad-2021</span>. I was a
          Regional winner in Dhaka. I stood{" "}
          <span className="highlight">6th</span> in Dhaka Region. I attended the
          National Physics Olympiad.
        </p>
      </div>
    </>
  );
};

export default Info;
