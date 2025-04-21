import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">Hi, I'm Stas</h1>
        <h2 className="hero__subtitle">Frontend Developer & UI Enthusiast</h2>
        <p className="hero__desc">
          I build modern, responsive websites with clean and minimal design.
        </p>
        <button className="hero__btn">View Projects</button>
      </div>
    </section>
  );
};

export default Hero;