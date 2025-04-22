import './About.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title">About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              I am a passionate Frontend Developer with a keen interest in
              creating beautiful and functional user interfaces. I have a strong
              foundation in HTML, CSS, and JavaScript, and I am always eager to
              learn new technologies and improve my skills.
            </p>
            <p>
              I enjoy working on projects that challenge me and allow me to
              express my creativity. I believe that good design is not just
              about aesthetics, but also about usability and user experience.
              I strive to create websites that are not only visually appealing
              but also easy to navigate and use.
            </p>
            <p>
              In my free time, I love to explore new design trends, read
              articles about web development, and work on personal projects. I
              My main tools include React, TypeScript, Sass, and Git. I also have a good eye for
              design and love working closely with designers or bringing my own ideas to life.
            </p>
          </div>
          <div className="about__image">
            <img src="https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/64d6bd51ab17a00828b644bf_header.webp" alt="Stanislav" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;