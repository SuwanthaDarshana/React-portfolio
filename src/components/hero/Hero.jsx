import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="textContainer">
        <h2>Suwantha Darshana</h2>
        <h1>Web developer</h1>
        <div className="buttons">
          <button>See the Latest Works</button>
          <button>Contact Me</button>
        </div>
        <img src="/scroll.png" alt="scroll-button" />
      </div>
      <div className="imageContainer">
        <img className="me" src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
